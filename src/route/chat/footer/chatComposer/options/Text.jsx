import { memo, useMemo } from "react";

import toast from "react-hot-toast";

import { formattedText } from "../../../../../utils/components/formattedString.jsx";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ENVIA A MENSAGEM PRONTA DO TIPO TEXT PARA O SERVIDOR
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} phone NUMERO DO CLIENTE QUE ESTA CONVERSANDO COM O BOT
 * @param {String} message MENSAGEM A SER ENVIADA
*/
export function sendReadyText(socket, phone, message) {
	if (!message || !message.text) return (toast.error("Mesagem Rápida não enviada"));
	socket.emit("chat:send_message", { phone: phone, message: message }, (res) => {
		if (res !== 204 && res.error) return (toast.error("Mesagem Rápida não enviada"));
	});
}

/**
 * @author VAMPETA
 * @brief RENDERIZA MENSAGEM DE TEXTO
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
export const Text = memo(function Text({ message }) {
	const text = useMemo(() => formattedText(message.text.body), [message.text.body]);

	return (
		<p>{text}</p>
	);
});