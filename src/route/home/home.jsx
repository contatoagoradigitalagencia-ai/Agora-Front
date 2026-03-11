import { Link } from "react-router-dom";
import Cookies from "js-cookie";

/**
 * @author VAMPETA
 * @brief PAGINA HOME
*/
export default function Home() {
	const phone = Cookies.get("phone");
	const idPhone = Cookies.get("idPhone");
	const token = Cookies.get("token");

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
			Home
			{(phone && idPhone && token) ? (
				<Link className="mt-8 px-6 py-2 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-400 transition" to={`/chat`}>Conversas</Link>
			) : (
				<Link className="mt-8 px-6 py-2 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-400 transition" to="/login">Login</Link>
			)}
		</div>
	);
}