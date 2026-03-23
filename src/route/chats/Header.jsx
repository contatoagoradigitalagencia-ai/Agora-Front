/**
 * @author VAMPETA
 * @brief HEADER DA PAGINA DE CONVERSAS
*/
export default function Header({ setOpen }) {
	return (
		<header className="flex justify-between items-center px-4 md:px-6 py-4 border-b border-zinc-800">
			<button className="md:hidden" onClick={() => setOpen(true)}>
				<i className="bi bi-list text-3xl" />
			</button>
			<h1 className="text-lg md:text-xl font-semibold">Conversas</h1>
			<span className="text-green-500 text-sm font-medium">● Online</span>
		</header>
	);
}