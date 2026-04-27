import { memo, useMemo } from "react";
import toast from "react-hot-toast";

import { formattedText } from "../../../../../utils/components/formattedString.jsx";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ENVIA A MENSAGEM PRONTA DO TIPO IMAGE PARA O SERVIDOR
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} phone NUMERO DO CLIENTE QUE ESTA CONVERSANDO COM O BOT
 * @param {String} message MENSAGEM A SER ENVIADA
*/
export function sendReadyImage(socket, phone, message) {
	if (!message || !message.image) return ;
	socket.emit("chat:send_message", { phone: phone, message: message }, (res) => {
		if (res !== 204 && res.error) return (toast.error("Mesagem Rápida não enviada"));
	});
}

/**
 * @author VAMPETA
 * @brief RENDERIZA MENSAGEM DE TEXTO
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
export const Image = memo(function Image({ message }) {
	const caption = useMemo(() => formattedText(message.image.caption), [message.image.caption]);

	return (
		<div className="flex flex-col gap-2">
			{(message) ? (
				<img className="w-full h-auto rounded" src={message.image.link} loading="lazy" alt="Imagem da mensagem" />
			) : (
				<div className="flex flex-col items-center p-20 bg-gray-300 rounded">
					<i className="bi bi-image text-4xl" />
					<p>Imagem não disponível</p>
				</div>
			)}
			{caption && <p>{caption}</p>}
		</div>
	);
});