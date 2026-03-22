/**
 * @author VAMPETA
 * @brief HEADER DA ROTA /dashboard
 * @param {Object} setOpen CONTROLA SE O Sidebar ESTA ABERTO OU FECHADO
*/
export default function Header({ setOpen }) {
	return (
		<header className="flex justify-between items-center px-4 md:px-6 py-4 border-b border-zinc-800">
			<button className="md:hidden" onClick={() => setOpen(true)}>
				<i className="bi bi-list text-3xl" />
			</button>
			<h1 className="text-lg md:text-xl font-semibold">Dashboard</h1>
			<div className="flex items-center gap-2 md:gap-4">
				{/* <span className="text-xs md:text-sm text-zinc-400">API:</span> */}
				<span className="text-green-500 text-sm font-medium">● Online</span>
			</div>
		</header>
	);
}