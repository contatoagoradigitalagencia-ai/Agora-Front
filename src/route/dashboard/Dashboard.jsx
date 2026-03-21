import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../utils/functions/logout.js";

/**
 * @author VAMPETA
 * @brief PAGINA PRINCIPAL DO CLIENTE
*/
export default function Dashboard() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center h-dvh bg-black text-white">
			<Link className="mt-8 px-6 py-2 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-400 transition" to="/chat">Conversas</Link>
			<button className="mt-8 px-6 py-2 bg-orange-500 text-black font-medium rounded-lg cursor-pointer hover:bg-orange-400 transition" onClick={() => logout(navigate)}>Logout</button>
		</div>
	);
}