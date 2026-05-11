// import Text from "../Text.jsx";
// import Image from "../context/Image.jsx";
// import Video from "../context/Video.jsx";
// import Document from "../context/Document.jsx";

/**
 * @author VAMPETA
 * @brief RENDERIZA MENSAGEM DE INTERACTIVE DO TIPO BUTTON
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
export default function Button({ message }) {
	return (
		<div>
			{message.data.interactive.body.text}
			<div className="flex gap-2 text-white">
				{message.data.interactive.action.buttons.map((button) => (
					<button className="flex-1 bg-orange-500 rounded hover:bg-orange-400 transition cursor-not-allowed">{button.reply.title}</button>
				))}
			</div>
		</div>
	);
}