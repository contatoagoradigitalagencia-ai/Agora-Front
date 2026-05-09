import { Link } from "react-router-dom";

import InfoContact from "./InfoContact.jsx";
import LastMessage from "./LastMessage.jsx";
import Comment from "./Comment.jsx";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM DETALHES DO CONTATO
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {Objetc} contact INFORMACOES DO CONTATO
 * @param {Object} setContact FUNCAO DE CONTROLE DA VARIAVEL contact
 * @param {Objetc} onClose FUNCAO DE FECHAMENTO DO DROWER
 */
export default function ContactDrawer({ socket, contact, setContact, onClose }) {
	if (!contact) return (null);
	return (
		<div className="flex fixed inset-0 z-50">
			<div className="absolute inset-0 bg-black/60" onClick={onClose} />
			<div className="ml-auto w-full md:w-[400px] h-full bg-zinc-900 border-l border-zinc-800 p-6 z-1 animate-slideInRight">
				<button className="mb-4 cursor-pointer" onClick={onClose}>
					<i className="bi bi-x text-4xl" />
				</button>
				<div className="flex flex-col gap-6">
					<InfoContact socket={socket} contact={contact} setContact={setContact} />
					<LastMessage contact={contact} />
					<Comment socket={socket} contact={contact} setContact={setContact} />
					<Link className="text-center bg-orange-500 text-black py-2 rounded-lg hover:bg-orange-400" to={`/chat/${contact.phone}`}>Abrir conversa</Link>
				</div>
			</div>
		</div>
	);
}