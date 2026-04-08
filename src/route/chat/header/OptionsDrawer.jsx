import { useParams, Link } from "react-router-dom";

import { useGetContact } from "./useGetContact.js";

import InfoContact from "./InfoContact.jsx";
import Comment from "./Comment.jsx";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM OPCOES
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {Boolean} selected INFORMA SE O DRAWER ESTA ABERTO OU FECHADO
 * @param {Objetc} onClose FUNCAO DE FECHAMENTO DO DROWER
 */
export default function OptionsDrawer({ socket, selected, onClose }) {
	const { phone } = useParams();
	const { contact, setContact, loading } = useGetContact(socket, phone);

	if (!selected) return (null);
	return (
		<div className="flex fixed text-white inset-0 z-50">
			<div className="absolute inset-0 bg-black/60" onClick={onClose} />
			<div className="ml-auto w-full md:w-[400px] h-full bg-zinc-900 border-l border-zinc-800 p-6 z-1 animate-slideInRight">
				<button className="mb-4 cursor-pointer" onClick={onClose}>
					<i className="bi bi-x text-2xl" />
				</button>
				<div className="flex flex-col gap-6">
					<InfoContact socket={socket} contact={contact} setContact={setContact} loading={loading} />
					<Comment socket={socket} contact={contact} setContact={setContact} loading={loading} />
					{/* <Link className="flex items-center gap-1 px-4 py-2 rounded-lg bg-orange-500 text-black hover:text-white hover:bg-zinc-800" to="" onClick={onClose}>
						<span>Mostrar contato</span>
					</Link>
					<Link className="flex items-center gap-1 px-4 py-2 rounded-lg bg-orange-500 text-black hover:text-white hover:bg-zinc-800" to="" onClick={onClose}>
						<span>Bloquear</span>
					</Link> */}
				</div>
			</div>
		</div>
	);
}