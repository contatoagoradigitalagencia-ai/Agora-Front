// import { useNavigate } from "react-router-dom";

// import { useFullscreen } from "../../utils/hooks/useFullscreen.js";

// import { logout } from "../../utils/functions/logout.js";

/**
 * @author VAMPETA
 * @brief HEADER DA PAGINA DE CONVERSAS
*/
export default function Header({ setOpen }) {
	// const { isFullscreen, toggleFullscreen } = useFullscreen();
	// const navigate = useNavigate();

	// return (
	// 	<div className="flex items-center p-4 text-orange-500 border-b border-zinc-800">
	// 		{/* <i className={`bi ${(isFullscreen) ? "bi-fullscreen-exit" : "bi-arrows-fullscreen"} text-2xl cursor-pointer`} onClick={toggleFullscreen} /> */}
	// 		<button className="md:hidden" onClick={() => setOpen(true)}>
	// 			<i className="bi bi-list text-3xl" />
	// 		</button>
	// 		<i className="bi bi-arrow-left text-4xl cursor-pointer" onClick={() => navigate("/dashboard")} />
	// 		<h1 className="flex flex-1 justify-center text-2xl">Agora Digital</h1>
	// 		{/* <i className="bi bi-box-arrow-right text-4xl cursor-pointer" onClick={() => logout(navigate)} /> */}
	// 	</div>
	// );
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