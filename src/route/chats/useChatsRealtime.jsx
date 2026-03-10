import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

/**
 * @author VAMPETA
 * @brief 
 * @param {Object} data 
 */
function textChat(data) {
	switch (data.type) {
		case "text":
			return (data.text.body);
		case "image":
			return ("Imagem");
		case "video":
			return ("Vídeo");
		case "location":
			return ((data.location.name) ? data.location.name : "Localização");
		case "contacts":
			return (data.contacts[0].name.formatted_name);
		default:
			return (null);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O CONTEUDO DA LISTA DE CHATS ATUALIZANDO A ORDEM E EXIBINDO AS NOVAS MENSAGENS
 * @param {Object} setChats FUNCAO QUE CONTROLA A VARIAVEL "chats"
 * @param {Object} navigate FUNCAO DE CONTROLE DE ROTA
 */
function handleNewMessage(setChats, navigate) {
	return (newMessage) => {
		setChats((prev) => {
			const index = prev.findIndex((chat) => (chat.phone === newMessage.phone));
			if (index === -1) return (prev);
			const chat = prev[index];
			const newChats = [...prev];
			newChats.splice(index, 1);
			newChats.unshift({
				...chat,
				lastMessage: {
					...chat.lastMessage,
					humanViewed: false,
					type: newMessage.type,
					text: textChat(newMessage.data),
					timestamp: newMessage.timestamp
				}
			});
			return (newChats);
		});
		toast.custom(
			(t) => (
				<div className={`flex flex-col w-[80vw] px-4 py-3 rounded text-white bg-orange-500 cursor-pointer ${t.visible ? "animate-toastIn" : "animate-toastOut"}`} to={`/chat/${newMessage.phone}`} onClick={() => { toast.dismiss(t.id), navigate(`/chat/${newMessage.phone}`) }}>
					<span>{newMessage.phone.replace(/^55(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")}</span>
					<span>{textChat(newMessage.data)}</span>
				</div>
			),
			{
				duration: 5000,
				id: newMessage.phone
			}
		);
	};
}

/**
 * @author VAMPETA
 * @brief HOOK QUE ADICIONA OS EVENTOS ON DE WEBSOCKET
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {Object} setChats FUNCAO QUE CONTROLA A VARIAVEL "chats"
 */
export function useChatsRealTime(socket, setChats) {
	const navigate = useNavigate();

	useEffect(() => {
		const onNewMessage = handleNewMessage(setChats, navigate);
		socket.on("chat:new_message", onNewMessage);
		return (() => {
			socket.off("chat:new_message", onNewMessage);
		})
	}, [socket, setChats, navigate]);
}