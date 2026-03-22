import { useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "../../utils/components/Sidebar.jsx";
import Header from "./Header.jsx";

/**
 * @author VAMPETA
 * @brief HEADER DA ROTA /dashboard
*/
export default function Dashboard() {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex h-dvh bg-black text-white">

			<SideBar open={open} setOpen={setOpen} />

			{/* MAIN */}
			<main className="flex-1 flex flex-col">
				<Header setOpen={setOpen} />

				{/* CONTENT */}
				<div className="p-4 md:p-6 flex flex-col gap-6 animate-toastIn">

					{/* CARDS */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						<div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
							<p className="text-xs md:text-sm text-zinc-400">Mensagens hoje</p>
							<h2 className="text-xl md:text-2xl font-bold mt-2">128</h2>
						</div>

						<div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
							<p className="text-xs md:text-sm text-zinc-400">Conversas ativas</p>
							<h2 className="text-xl md:text-2xl font-bold mt-2">32</h2>
						</div>

						<div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
							<p className="text-xs md:text-sm text-zinc-400">Não lidas</p>
							<h2 className="text-xl md:text-2xl font-bold mt-2 text-orange-500">5</h2>
						</div>
					</div>

					{/* AÇÃO */}
					<div className="bg-zinc-900 p-5 md:p-6 rounded-xl border border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<div>
							<h2 className="text-base md:text-lg font-semibold mb-1">Ir para conversas</h2>
							<p className="text-zinc-400 text-xs md:text-sm">Visualize e responda mensagens em tempo real.</p>
						</div>
						<Link className="w-full md:w-auto text-center px-6 py-2 bg-orange-500 text-black rounded-lg font-medium hover:bg-orange-400 transition" to="/chat">
							Abrir
						</Link>
					</div>

				</div>
			</main>
		</div>
	);
}