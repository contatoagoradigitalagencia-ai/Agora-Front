import { memo } from "react";

import axios from "axios";

import { useGetFileInfo } from "./useGetFileInfo.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL POR RENDERIZAR O ICONE CORRETO
 * @param {String} type TIPO DO ARQUIVO
*/
function IconFile({ type }) {
	switch (type) {
		case "Imagem":
			return (<i className="bi bi-file-earmark-image text-white text-4xl" />);
		case "Áudio":
			return (<i className="bi bi-file-earmark-music text-white text-4xl" />);
		case "Vídeo":
			return (<i className="bi bi-file-earmark-play text-white text-4xl" />);
		case "pdf":
			return (<i className="bi bi-file-earmark-pdf text-white text-4xl" />);
		case "zip":
			return (<i className="bi bi-file-earmark-zip text-white text-4xl" />);
		default:
			return (<i className="bi bi-file-earmark-text text-white text-4xl" />);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR FAZER O DOWNLOAD DO ARQUIVO E SALVAR
 * @param {String} url LINK DE DOWNLOAD
 * @param {String} filename NOME DO ARQUIVO
*/
async function download(url, filename) {
	try {
		const res = await axios({
			url: url,
			method: "GET",
			responseType: "blob",
			onDownloadProgress: (progressEvent) => {
				if (progressEvent.total) {
					const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					console.log(`Download: ${percent}%`);
				}
			}
		});
		const blobUrl = window.URL.createObjectURL(res.data);
		const link = document.createElement("a");

		link.href = blobUrl;
		link.download = filename || "arquivo";
		document.body.appendChild(link);
		link.click();
		link.remove();
		window.URL.revokeObjectURL(blobUrl);
	} catch (error) {
		console.error("Erro ao baixar arquivo:", error);
		alert("Erro ao baixar arquivo");
	}
}

/**
 * @author VAMPETA
 * @brief MENSAGENS DE DOCUMENTO DO CHAT
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
const Document = memo(function Document({ message }) {
	const src = (message.direction === "outbound") ? message.data.document.link : message.data.document.url;
	const { info } = useGetFileInfo(src);

	return (
		<div className="flex items-center justify-between gap-3 bg-orange-500 rounded px-4 py-5 w-[70vw]">
			<div className="flex gap-3 min-w-0">
				<IconFile type={info.type} />
				<div className=" flex flex-col min-w-0 text-white">
					<p className="truncate">{message.data.document.filename}</p>
					<p className="text-xs opacity-80 whitespace-nowrap shrink-0">{(info.size) ? `${info.size} - ${info.type}` : "Carregando tamanho..."}</p>
				</div>
			</div>
			<div className="flex gap-3 text-orange-500">
				<a className="flex items-center justify-center w-12 h-10 bg-white cursor-pointer rounded" href={src} target="_blank" rel="noopener noreferrer">
					Abrir
				</a>
				<button className="w-12 h-10 bg-white cursor-pointer rounded" onClick={() => download(src, message.data.document.filename)}>
					<i className="bi bi-download text-xl" />
				</button>
			</div>
		</div>
	);
});

export default Document;