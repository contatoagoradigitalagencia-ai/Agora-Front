import { useState, useEffect } from "react";

/**
 * @author VAMPETA
 * @brief HOOK CRIADO PARA CARREGAR AS MENSAGENS PREDEFINIDAS
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} type TIPO DAS MENSAGENS A SEREM BUSCADAS
*/
export function useQuickMessages(socket, type) {
	const [messages, setMessages] = useState(null);

	useEffect(() => {
		// socket.emit("chat:quick_messages", {  }, (res) => {
		// 	setMessages(res);
		// });
		// socket.emit("quick-messages:get_quick_messages", { type: "location" }, (res) => {
		// socket.emit("quick-messages:get_quick_messages", {  }, (res) => {
		socket.emit("quick-messages:get_quick_messages", { type: type }, (res) => {		// SUBSTITUINDO chat:quick_messages
			setMessages(res.map((item) => (item.message)));
		});
	}, [socket, type]);
	return ({ messages, setMessages });
}