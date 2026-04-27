import { useState } from "react";
import { useParams } from "react-router-dom";

import { useQuickMessages } from "./useQuickMessages.js";

import { Text, sendReadyText } from "./Text.jsx";
import { Location, sendReadyLocation } from "./Locatioin.jsx";
import { Image, sendReadyImage } from "./Image.jsx";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE IDENTIFICA O TIPO DA MENSAGEM
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} phone NUMERO DO CLIENTE QUE ESTA CONVERSANDO COM O BOT
 * @param {String} message MENSAGEM A SER ENVIADA
*/
function sendReadyMessage(socket, phone, message) {
	switch (message.type) {
		case "text":
			sendReadyText(socket, phone, message);
			break;
		case "image":
			sendReadyImage(socket, phone, message);
			break;
		case "location":
			sendReadyLocation(socket, phone, message);
			break;
	}
}

/**
 * @author VAMPETA
 * @brief IDENTIFICA O TIPO CERTO DA MENSAGEM
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
function Message({ message }) {
	switch (message.type) {
		case "text":
			return <Text message={message} />;
		case "image":
			return <Image message={message} />;
		case "location":
			return <Location message={message} />;
		default:
			return (<p className="text-red-900"><i>Mensagem do tipo <b>{message.type}</b> não suportada</i></p>);
	}
}

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL POR EXIBIR O MENU DE OPCOES
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
*/
export default function Options({ socket }) {
	const { phone } = useParams();
	const [type, setType] = useState("text");
	const { messages } = useQuickMessages(socket, type);
	const types = [
		{ label: "Texto", value: "text" },
		{ label: "Imagem", value: "image" },
		{ label: "Localização", value: "location" }
	];

	// if (messages === null) return (
	// 	<div className="flex items-center justify-center h-[100%]">
	// 		<div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
	// 	</div>
	// );
	// if (Array.isArray(messages) && messages.length === 0) return (
	// 	<div className="flex flex-col items-center justify-center h-[100%]">
	// 		<i className="bi bi-chat-right-text text-white text-5xl" />
	// 		<p className="text-white">Nenhuma mensagem</p>
	// 	</div>
	// );
	// return (
	// 	<>
	// 		{messages.map((message, i) => (
	// 			<div className="flex justify-center my-3 cursor-pointer" key={i} onClick={() => sendReadyMessage(socket, phone, message)}>
	// 				<div className="inline-block bg-gray-400 px-3 py-2 rounded min-w-[60%] max-w-[80%] break-words whitespace-pre-wrap">
	// 					<Message message={message} />
	// 				</div>
	// 			</div>
	// 		))}
	// 	</>
	// );
	return (												// AINDA NAO SEI SE VOU CONTINUAR COM ESSA IDEIA
		<div className="flex flex-col h-full">
			<div className="flex gap-2 p-2 border-b border-zinc-700">
				{types.map((t) => (
					<button className={`flex-1 p-2 text-sm rounded cursor-pointer transition ${(type === t.value) ? "bg-orange-500 text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"}`} key={t.value} onClick={() => setType(t.value)}>
						{t.label}
					</button>
				))}
			</div>
			<div className="flex-1 overflow-y-auto">
				{messages === null && (
					<div className="flex items-center justify-center h-full">
						<div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
					</div>
				)}
				{Array.isArray(messages) && messages.length === 0 && (
					<div className="flex flex-col items-center justify-center h-full">
						<i className="bi bi-chat-right-text text-white text-5xl" />
						<p className="text-white">Nenhuma mensagem</p>
					</div>
				)}
				{Array.isArray(messages) && messages.map((message, i) => (
					<div className="flex justify-center my-3 cursor-pointer" key={i} onClick={() => sendReadyMessage(socket, phone, message)}>
						<div className="inline-block bg-gray-400 px-3 py-2 rounded min-w-[60%] max-w-[80%] break-words whitespace-pre-wrap">
							<Message message={message} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}