import { memo } from "react";
import toast from "react-hot-toast";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ENVIA A MENSAGEM PRONTA DO TIPO LOCATION PARA O SERVIDOR
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} phone NUMERO DO CLIENTE QUE ESTA CONVERSANDO COM O BOT
 * @param {Object} message MENSAGEM A SER ENVIADA
*/
export function sendReadyLocation(socket, phone, message) {
	if (!message || !message?.location?.latitude || !message?.location?.longitude) return ;
	socket.emit("chat:send_message", { phone: phone, message: message }, (res) => {
		if (res !== 204 && res.error) return (toast.error("Mesagem Rápida não enviada"));
	});
}

/**
 * @author VAMPETA
 * @brief RENDERIZA MENSAGEM DE LOCALIZACAO
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
export const Location = memo(function Location({ message }) {
	return (
		<>
			<div className="flex items-center justify-center py-4 rounded bg-gray-500">
				<i className="bi bi-geo-alt-fill text-red-500 text-6xl" />
			</div>
			<p>{message.location.name}</p>
			<p className="text-sm">{message.location.address}</p>
		</>
	);
});