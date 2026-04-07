import { memo } from "react";

import { useGetInfoBot } from "./useGetInfoBot.js";

import Error from "../../screens/Error.jsx";
import Load from "../../screens/Load.jsx";
import StatusBot from "./StatusBot.jsx";

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

	{/* STATUS DO BOT */}
	<StatusBot socket={socket} bot={bot} setBot={setBot} />


	{/* CONFIGURAÇÃO DE PROMPT */}
	<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col gap-4">
		<div>
			<h2 className="text-lg font-semibold">Prompt da IA</h2>
			<p className="text-sm text-zinc-400">
				Defina como a IA deve se comportar ao responder mensagens.
			</p>
		</div>

		<textarea
			className="w-full h-40 bg-zinc-800 border border-zinc-700 rounded-lg p-3 resize-none outline-none focus:border-orange-500"
			placeholder="Ex: Responda de forma educada, objetiva e focada em vendas..."
		/>

		<div className="flex justify-end">
			<button className="px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-400 transition">
				Salvar
			</button>
		</div>
	</div>


	{/* INSTRUÇÕES */}
	<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col gap-3">
		<h2 className="text-lg font-semibold">Como usar</h2>

		<ul className="text-sm text-zinc-400 flex flex-col gap-2 list-disc pl-5">
			<li>Ative o bot para permitir respostas automáticas.</li>
			<li>Configure o prompt para definir o comportamento da IA.</li>
			<li>Utilize planilhas com preços para melhorar a precisão.</li>
			<li>A IA responderá automaticamente mensagens no WhatsApp.</li>
		</ul>
	</div>

</div>
	);
});

export default Body;