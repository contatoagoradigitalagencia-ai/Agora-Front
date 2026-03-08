import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

/**
 * @author VAMPETA
 * @brief PAGINA DE CONVERSAS
 * @param navigate FUNCAO DE NAVEGACAO DE ROTA
*/
function logout(navigate) {
	Cookies.remove("phone", { path: "/" });
	Cookies.remove("idPhone", { path: "/" });
	Cookies.remove("token", { path: "/" });
	navigate("/login");
}

/**
 * @author VAMPETA
 * @brief FUNCAO DE CONTROLE DO BOTAO DE FULLSCREEN
 * @param setScreen FUNCAO QUE CONTROLA A VARAIVEL DE ESTADO DO FULLSCREEN
*/
function fullscreen(setScreen) {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
		setScreen(true);
	} else {
		document.exitFullscreen();
		setScreen(false);
	}
}

/**
 * @author VAMPETA
 * @brief HEADER DA PAGINA DE CONVERSAS
*/
export default function Header() {
	const [screen, setScreen] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-between p-4 text-orange-500">
			<i className={`bi ${(screen) ? "bi-fullscreen-exit" : "bi-arrows-fullscreen"} text-2xl cursor-pointer`} onClick={() => fullscreen(setScreen)} />
			<div className="text-2xl">Agora Digital</div>
			<i className="bi bi-box-arrow-right text-4xl cursor-pointer" onClick={() => logout(navigate)} />
		</div>
	);
}