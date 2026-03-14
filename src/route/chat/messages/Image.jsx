import { memo } from "react";

/**
 * @author VAMPETA
 * @brief PERCORRE O TEXTO BRUTO PARA INTERPRETAR MARCACAO DE TEXTO COMO NEGRITO E ITALICO
 * @param {String} text TEXTO A SER ANALIZADO
 * @return {Array<String>} RETORNA UM ARRAY PRONTO PARA SER RENDERIZADO
*/
function formattedText(text) {
	const patterns = [
		{ regex: /`([^`]+)`/g, type: "code" },
		{ regex: /\*([^*]+)\*/g, type: "bold" },
		{ regex: /_([^_]+)_/g, type: "italic" },
		{ regex: /~([^~]+)~/g, type: "strike" }
	];
	let parts = [text];

	patterns.forEach(({ regex, type }) => {
		const newParts = [];
		parts.forEach((part, index) => {
			if (typeof part !== "string") {
				newParts.push(part);
				return;
			}
			regex.lastIndex = 0;
			let lastIndex = 0;
			let match;
			while ((match = regex.exec(part)) !== null) {
				if (match.index > lastIndex) newParts.push(part.slice(lastIndex, match.index));
				const content = match[1];
				let node;
				switch (type) {
					case "code":
						node = (<code key={`${type}-${index}-${match.index}`} className="bg-gray-300 px-1 rounded font-mono text-sm">{content}</code>);
						break;
					case "bold":
						node = (<strong key={`${type}-${index}-${match.index}`}>{content}</strong>);
						break;
					case "italic":
						node = (<em key={`${type}-${index}-${match.index}`}>{content}</em>);
						break;
					case "strike":
						node = (<del key={`${type}-${index}-${match.index}`}>{content}</del>);
						break;
					default:
						node = content;
				}
				newParts.push(node);
				lastIndex = match.index + match[0].length;
			}
			if (lastIndex < part.length) newParts.push(part.slice(lastIndex));
		});
		parts = newParts;
	});
	return (parts);
}

/**
 * @author VAMPETA
 * @brief MENSAGENS DE IMAGEM DO CHAT
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
const Image = memo(function Image({ message }) {
	return (
		<div>
			{/* <img className="w-full h-auto rounded" src="https://videos.cults3d.com/exx8QiaBk2sGOI8m1L2CQUCnOKI=/516x516/filters:no_upscale():still()/https://fbi.cults3d.com/uploaders/45198527/illustration-file/1584c4b3-5beb-4598-a566-4d6e09bcf90f/62a09a0d6bf4375bfd3a30635d252f1c.gif" alt="" /> */}
			{/* <img className="w-full h-auto rounded" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d9/Pudgeloree.jpg" alt="" /> */}
			{/* <img className="w-full h-auto rounded" src="https://wallpapers.com/images/thumbnail/android-dota-2-background-1080-x-1920-o5581h2mowi9e68j.webp" alt="" /> */}

			<div className="flex flex-col items-center p-20 bg-gray-300 rounded">
				<i className="bi bi-wrench text-4xl" />
				<p>Em produção</p>
			</div>

			<p>{formattedText(message.data.image.caption)}</p>
		</div>
	);
});

export default Image;