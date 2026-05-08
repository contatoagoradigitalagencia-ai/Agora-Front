import { Link } from "react-router-dom";

import { useLoadMessagesWaiting } from "./useLoadMessagesWaiting.js";

import Load from "../../screens/Load.jsx";
import Error from "../../screens/Error.jsx";

/**
 * @author VAMPETA
 * @brief PAGINA DE MENSAGENS RAPIDAS
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
*/
export default function Body({ socket }) {
	const { chats, error } = useLoadMessagesWaiting(socket);

	if (error) return (<Error />);
	if (chats === null) return (<Load />);
	if (chats.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center flex-1 overflow-y-auto">
				<i className="bi bi-chat-right-text text-white text-5xl" />
				<p className="text-white">Sem espera por atendimento humano</p>
			</div>
		);
	}
	return (
		<div className="flex-1 overflow-y-auto px-1 animate-toastIn">
			{chats.map((chat) => (
				<Link className="flex justify-center w-full h-20 my-3 px-6 bg-zinc-900 rounded border border-zinc-800 text-white flex flex-col hover:bg-orange-600 transition" key={chat.phone} to={`/chat/${chat.phone}`}>
					<p>{chat.phone.replace(/^55(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")}</p>
				</Link>
			))}
		</div>
	);
}