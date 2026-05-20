import { useState } from "react";
import { useParams } from "react-router-dom";

import { useQuickMessages } from "./useQuickMessages.js";

import Text from "./Text.jsx";
import Audio from "./Audio.jsx";
import Image from "./Image.jsx";
import Video from "./Video.jsx";
import Location from "./Locatioin.jsx";
import Document from "./Document.jsx";

import { sendReadyMessage } from "./sendReadyMessage.js";

/**
 * @author VAMPETA
 * @brief BOTAO DE OPCAO
 * @param {String} icon ICONE A SER USADO
 * @param {String} label DESCRICAO DO BOTAO
 * @param {Function} onClick FUNCAO A SER EXECUTADA
*/
function Option({ icon, label, onClick }) {
	return (
		<button className="flex flex-col items-center gap-2 cursor-pointer" onClick={onClick}>
			<div className="h-20 w-20 bg-zinc-900 rounded-xl flex items-center justify-center hover:bg-zinc-700">
				<i className={`bi ${icon} text-xl text-orange-500`} />
			</div>
			<span className="text-white text-sm">{label}</span>
		</button>
	);
}

/**
 * @author VAMPETA
 * @brief IDENTIFICA O TIPO CERTO DA MENSAGEM
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
function Message({ message }) {
	switch (message.type) {
		case "text":
			return (<Text message={message} />);
		case "audio":
			return (<Audio message={message} />);
		case "image":
			return (<Image message={message} />);
		case "video":
			return (<Video message={message} />);
		case "location":
			return (<Location message={message} />);
		case "document":
			return (<Document message={message} />);
		default:
			return (<p className="text-red-900"><i>Mensagem do tipo <b>{message.type}</b> não suportada</i></p>);
	}
}

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL POR EXIBIR O MENU DE OPCOES
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
// */
export default function Options({ socket }) {
	const { phone } = useParams();
	const [type, setType] = useState(null);
	const { messages } = useQuickMessages(socket, type);

	return (
		<div className="relative h-full">
			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 p-6 h-full place-content-center">
				<Option icon="bi-chat-left-text" label="Texto" onClick={() => setType("text")} />
				<Option icon="bi-mic" label="Áudio" onClick={() => setType("audio")} />
				<Option icon="bi-image" label="Imagem" onClick={() => setType("image")} />
				<Option icon="bi-film" label="Vídeo" onClick={() => setType("video")} />
				<Option icon="bi-geo-alt" label="Localização" onClick={() => setType("location")} />
				<Option icon="bi-file-earmark-text" label="Documento" onClick={() => setType("document")} />
			</div>
			{type && (
				<div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
					<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setType(null)} />
					<div className="flex flex-col relative w-[90%] h-[90%] max-w-2xl bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden animate-toastIn">
						<button className="absolute top-4 right-4 text-white hover:text-orange-500 cursor-pointer" onClick={() => setType(null)}>
							<i className="bi bi-x-lg text-3xl" />
						</button>
						<div className="flex-1 overflow-y-auto p-4">
							{messages === null && (
								<div className="flex items-center justify-center h-full">
									<div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
								</div>
							)}
							{Array.isArray(messages) && (
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{messages.map((message, i) => (
										<div className="bg-gray-400 hover:bg-gray-600 p-3 rounded cursor-pointer transition break-words" key={i} onClick={() => { sendReadyMessage(socket, phone, message), setType(null) }}>
											<Message message={message} />
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}