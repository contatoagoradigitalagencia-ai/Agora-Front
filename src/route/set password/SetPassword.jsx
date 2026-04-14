import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import toast from "react-hot-toast";

import server from "../../server.js";

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR LOGAR
 * @param {String} phone LOGIN DO USUARIO
 * @param {String} password SENHA DO USUARIO
 * @param {Object} setError FUNCAO DE CONTROLE DE ESTADO DE ERRO
 * @param {Object} navigate FUNCAO DE CONTROLE DE ROTA
 * @param {Object} socket CONEXAO COM O SOCKET
*/
async function login(phone, password, setError, navigate, socket) {
	try {
		if (phone.length !== 13 || !password) return ;
		const res = await axios({
			method: "POST",
			url: `${server}/login`,
			data: {
				phone: phone,
				password: password
			}
		});

		if (res.status !== 200) return ;
		const { idPhone, token } = res.data;
		if (!idPhone || !token) return ;
		Cookies.set("phone", phone, { expires: 7, path: "/", sameSite: "Strict" });
		Cookies.set("idPhone", idPhone, { expires: 7, path: "/", sameSite: "Strict" });
		Cookies.set("token", token, { expires: 7, path: "/", sameSite: "Strict" });
		navigate(`/dashboard`);
	} catch (error) {
		setError("Usuário ou senha incorretos");
	}
}

async function set(password, setError, navigate) {
	try {
		if (password.length < 5) return (setError("A nova senha deve ser maior que 5 dígitos"));
		const res = await axios({
			method: "POST",
			url: `${server}/new-password`,
			data: {
				phone: phone,
				password: password
			}
		});

		if (res.status !== 204) return (toast.error("Ouve algum erro"));
        (toast.success("Senha definida com sucesso"));
		navigate(`/login`);
	} catch (error) {
		setError("Usuário ou senha incorretos");
	}
}

/**
 * @author VAMPETA
 * @brief PAGINA DE DEFINICAO DE SENHA
*/
export default function SetPassword() {
	const [newPassword, setNewPassword] = useState("");
	const [confirmationPassword, setConfirmationPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (!error) return ;
		const timer = setTimeout(() => setError(""), 3000);
		return (() => clearTimeout(timer));
	}, [error]);
	return (
		<div className="flex items-center justify-center h-dvh bg-black text-white px-4">
			<div className="w-full max-w-sm bg-zinc-900 p-6 rounded-2xl shadow-lg">
				<h1 className="text-2xl text-center mb-6">Definir senha</h1>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col">
						<label className="mb-1 text-sm text-zinc-400">Nova Senha</label>
						<input className="px-4 py-2 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="••••••••" />
					</div>
					<div className="flex flex-col">
						<label className="mb-1 text-sm text-zinc-400">Confirmação de senha</label>
						<input className="px-4 py-2 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500" type="password" value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} placeholder="••••••••" />
					</div>
					{error && <p className="text-center text-red-500 transition-opacity duration-300">{error}</p>}
					<button className={`mt-4 py-2 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-400 transition ${(!newPassword || newPassword !== confirmationPassword) ? "cursor-not-allowed": "cursor-pointer"}`} onClick={() => set(newPassword, setError, navigate)} disabled={!newPassword || newPassword !== confirmationPassword}>Entrar</button>
				</div>
			</div>
		</div>
	);
}