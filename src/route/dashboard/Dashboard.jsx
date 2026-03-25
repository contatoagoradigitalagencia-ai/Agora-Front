import { useState } from "react";
import { Link } from "react-router-dom";

import { useSocket } from "../../socket/useSocket.js";
import { useGetDashboard } from "./useGetDashboard.js";

import SideBar from "../../utils/components/Sidebar.jsx";
import Load from "../../screens/Load.jsx";
import Error from "../../screens/Error.jsx";
import Header from "./Header.jsx";

/**
 * @author VAMPETA
 * @brief CARDS DO DASHBOARD
*/
function Cards({ socket }) {
	const { info, loading } = useGetDashboard(socket);
	const messagesReceived = Object.values(info?.received || {}).reduce((acc, v) => acc + (v || 0), 0);
	const messagesSent = Object.values(info?.sent || {}).reduce((acc, v) => acc + (v || 0), 0);

	return (
		<div className="p-4 md:p-6 flex flex-col gap-6 overflow-y-auto animate-toastIn">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
					{!loading && (
						<div>
							<p className="text-xs md:text-sm text-zinc-400">Mensagens recebidas hoje</p>
							<h2 className="text-xl md:text-2xl font-bold mt-2">{messagesReceived}</h2>
						</div>
					)}
				</div>
				<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
					{!loading && (
						<div>
							<p className="text-xs md:text-sm text-zinc-400">Mensagens enviadas hoje</p>
							<h2 className="text-xl md:text-2xl font-bold mt-2">{messagesSent}</h2>
						</div>
					)}
				</div>
				<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
					{!loading && (
						<div>
							<p className="text-xs md:text-sm text-zinc-400">Novos contatos hoje</p>
							<h2 className="text-xl md:text-2xl font-bold mt-2">{info.newContacts}</h2>
						</div>
					)}
				</div>
			</div>
			<div className="bg-zinc-900 p-5 md:p-6 rounded-xl border border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h2 className="text-base md:text-lg font-semibold mb-1">Ir para conversas</h2>
					<p className="text-zinc-400 text-xs md:text-sm">Visualize e responda mensagens em tempo real.</p>
				</div>
				<Link className="w-full md:w-auto text-center px-6 py-2 bg-orange-500 text-black rounded-lg font-medium hover:bg-orange-400 transition" to="/chat">
					Abrir
				</Link>
			</div>
			<div>
				<div className="flex items-center gap-3 mb-4">
					<h2 className="text-sm md:text-base font-semibold text-zinc-200 whitespace-nowrap">Mensagens recebidas hoje</h2>
					<div className="flex-1 h-px bg-zinc-800" />
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Texto</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.text || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Figurinha</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.sticker || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Áudio</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.audio || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Imagem</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.image || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Vídeo</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.video || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Localização</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.location || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Contato</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.contacts || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Documento</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.received?.document || 0}</h2>
							</div>
						)}
					</div>
				</div>
			</div>
			<div>
				<div className="flex items-center gap-3 mb-4">
					<h2 className="text-sm md:text-base font-semibold text-zinc-200 whitespace-nowrap">Mensagens enviadas hoje</h2>
					<div className="flex-1 h-px bg-zinc-800" />
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Texto</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.text || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Figurinha</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.sticker || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Áudio</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.audio || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Imagem</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.image || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Vídeo</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.video || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Localização</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.location || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Contato</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.contacts || 0}</h2>
							</div>
						)}
					</div>
					<div className={`bg-zinc-900 p-5 rounded-xl border border-zinc-800 min-h-[100px] flex items-center ${(loading) ? "animate-pulse" : ""}`}>
						{!loading && (
							<div>
								<p className="text-xs md:text-sm text-zinc-400">Documento</p>
								<h2 className="text-xl md:text-2xl font-bold mt-2">{info.sent?.document || 0}</h2>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

/**
 * @author VAMPETA
 * @brief PAGINA DE DASHBOARD (PAGINA PRINCIPAL DO CLIENTE)
*/
export default function Dashboard() {
	const [open, setOpen] = useState(false);
	const { socket, connected, error } = useSocket();

	if (!socket) return (<Load />);
	return (
		<div className="flex h-dvh bg-black text-white">
			<SideBar open={open} setOpen={setOpen} />
			<main className="flex-1 flex flex-col">
				<Header setOpen={setOpen} />
				{!connected && !error && <Load />}
				{connected && <Cards socket={socket} />}
				{error && <Error />}
			</main>
		</div>
	);
}