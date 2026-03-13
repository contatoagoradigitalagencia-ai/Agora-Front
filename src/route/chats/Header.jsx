import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { useFullscreen } from "./useFullscreen";

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