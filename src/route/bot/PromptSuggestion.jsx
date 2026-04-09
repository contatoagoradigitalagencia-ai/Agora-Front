import { useState } from "react";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ENVIA O ATUAL PROMPT PARA O BACK END FORMULAR SUGESTOES DE MELHORIA COM IA
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} prompt PROMPT ATUAL DO BOT QUE ALIMENTA A IA EM CADA RESPOSTA DE WHATSAPP
 * @param {String} input PROMPT EXPLICATIVO QUE SERA ENVIADO PARA A IA
 * @param {Object} setOutput FUNCAO QUE VAI SALVAR NA VARIAVEL QUE EXIBE A RESPOSTA DO BACK END
*/
function handleImprove(socket, prompt, input, setOutput) {
	if (!input.trim()) return ;
	setOutput(`Melhoria sugerida:\n\n${input} com instruções mais claras, contexto e objetivo definido.`);

	socket.emit("bot:prompt_suggestion", {}, (res) => {
		console.log(res)
	});
}

/**
 * @author VAMPETA
 * @brief COMPONENTE DE MELHORIA DE PROMPT COM IA
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
*/
export default function PromptSuggestion({ socket }) {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex flex-col gap-3 h-[320px]">
			{/* OUTPUT */}
			<div className="bg-zinc-800 border border-zinc-700 rounded p-2 text-sm text-zinc-300 h-[120px] overflow-y-auto whitespace-pre-wrap">
				{output || "A sugestão aparecerá aqui..."}
			</div>

			{/* INPUT */}
			<textarea className="bg-zinc-800 border border-zinc-700 rounded p-2 text-sm outline-none h-[100px] resize-none" value={input} placeholder="Digite seu prompt..." onChange={(e) => setInput(e.target.value)} />

			{/* BOTÃO */}
			<button className="bg-orange-500 text-black rounded p-2 text-sm w-full cursor-pointer" onClick={() => handleImprove(socket, null, input, setOutput)}>
				Melhorar prompt
			</button>
		</div>
	);
}