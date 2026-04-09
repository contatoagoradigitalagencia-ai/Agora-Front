import { memo } from "react";

import { useGetInfoBot } from "./useGetInfoBot.js";

import Error from "../../screens/Error.jsx";
import Load from "../../screens/Load.jsx";
import StatusBot from "./StatusBot.jsx";
import Prompt from "./Prompt.jsx";
import PromptSuggestion from "./PromptSuggestion.jsx";

/**
 * @author VAMPETA
 * @brief PAGINA DE CONFIGURACOES DO BOT
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
*/
const Body = memo(function Body({ socket }) {
	const { bot, setBot, loading, error } = useGetInfoBot(socket);

	if (error) return (<Error />);
	if (loading) return (<Load />);
	return (
		<div className="flex flex-col gap-6 p-4 md:p-6 overflow-y-auto animate-toastIn">
			<StatusBot socket={socket} bot={bot} setBot={setBot} />
			<Prompt socket={socket} bot={bot} />

			<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col gap-3">
				<h2 className="text-lg font-semibold">Como usar</h2>

				<ul className="text-sm text-zinc-400 flex flex-col gap-2 list-disc pl-5">
					<li>Ative o bot para permitir respostas automáticas.</li>
					<li>Configure o prompt para definir o comportamento da IA.</li>
					<li>Utilize planilhas com preços para melhorar a precisão.</li>
					<li>A IA responderá automaticamente mensagens no WhatsApp.</li>
				</ul>
			</div>

			<PromptSuggestion socket={socket} />
		</div>
	);
});

export default Body;