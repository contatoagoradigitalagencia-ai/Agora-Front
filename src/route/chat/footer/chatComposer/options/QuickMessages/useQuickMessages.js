import { useState, useEffect } from "react";
import toast from "react-hot-toast";

/**
 * @author VAMPETA
 * @brief HOOK CRIADO PARA CARREGAR AS MENSAGENS PREDEFINIDAS
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} type TIPO DAS MENSAGENS A SEREM BUSCADAS
*/
export function useQuickMessages(socket, type) {
	const [messages, setMessages] = useState(null);

	useEffect(() => {
		if (!type) return ;
		if (messages?.type !== type) setMessages(null);
		socket.emit("quick-messages:get_quick_messages", { type: type }, (res) => {
			if (!res || res.code !== 200 || res.error) return (toast.error("Erro ao obter mensagens rápidas!"));
			setMessages(res.messages.map((item) => (item.message)));
		});
	}, [socket, type]);
	return ({ messages, setMessages });
}