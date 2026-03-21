import { useNavigate } from "react-router-dom";

import { useFullscreen } from "../../utils/hooks/useFullscreen.js";

import { logout } from "../../utils/functions/logout.js";

/**
 * @author VAMPETA
 * @brief HEADER DA PAGINA DE CONVERSAS
*/
export default function Header() {
	const { isFullscreen, toggleFullscreen } = useFullscreen();
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-between p-4 text-orange-500">
			<i className={`bi ${(isFullscreen) ? "bi-fullscreen-exit" : "bi-arrows-fullscreen"} text-2xl cursor-pointer`} onClick={toggleFullscreen} />
			<div className="text-2xl">Agora Digital</div>
			<i className="bi bi-box-arrow-right text-4xl cursor-pointer" onClick={() => logout(navigate)} />
		</div>
	);
}