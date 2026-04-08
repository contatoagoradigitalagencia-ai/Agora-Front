import { useState } from "react";

/**
 * @author VAMPETA
 * @brief ADICIONA UM CAMPO DE DIGITACAO DE PROMPT
 * @param {Object} setFields FUNCAO QUE MODIFICA fields
*/
function addField(setFields) {
	setFields((prev) => ([...prev, ""]));
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ATUALIZA O CAMPO CADA VEZ QUE UMA NOVA LETRA E INSERIDA
 * @param {Object} setFields FUNCAO QUE MODIFICA fields
 * @param {Object} value NOVO VALOR DO CAMPO
 * @param {Object} index INDEX DO COMPONENTE NO ARRAY DE COMPONENTES
*/
function updateField(setFields, value, index) {
	setFields((prev) => (prev.map((item, i) => ((i === index) ? value : item))));
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE APAGA UM CAMPO DE DIGITACAO DE PROMPT
 * @param {Object} setFields FUNCAO QUE MODIFICA fields
 * @param {Object} index INDEX DO COMPONENTE NO ARRAY DE COMPONENTES
*/
function removeField(setFields, index) {
	setFields((prev) => (prev.filter((_, i) => (i !== index))));
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ENVIA O NOVO PROMPT PARA O BACK END
 * @param {Object} fields ARRAI COM OS CONTEUDOS DOS CAMPOS DE PROMPTS
*/
function handleSave(fields, socket) {
	const prompt = buildPrompt(fields.filter((f) => (f.trim() !== "")));

	socket.emit("bot:update_prompt", { prompt: prompt }, (res) => {
		if (res !== 204) return ;
	});
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE TRANFORMA O PROMPT DE UMA UNICA STRING EM UM ARRAY DE INSTRUCOES
 * @param {String} promptString STRING CONTENDO O PROMPT COM CARACTERES ESPECIAIS COMO \n E -
*/
function parsePrompt(promptString) {
	return (promptString.split("\n").map((item) => (item.replace(/^- /, "").trim())).filter((item) => (item !== "")));
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE TRANFORMA O ARRAY DE STRINGS EM UMA UNICA STRING COM O PROMPT
 * @param {Array<String>} fields ARRAY DE STRINGS COM INSTRUCOES
*/
function buildPrompt(fields) {
	return (fields.filter((f) => (f.trim() !== "")).map((f) => (`- ${f}`)).join("\n"));
}

/**
 * @author VAMPETA
 * @brief COMPONENTE DE CONFIGURACAO DE PROMPT
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {Object} bot INFORMACOES DO BOT
*/
export default function Prompt({ socket, bot }) {
	const [fields, setFields] = useState(parsePrompt(bot.prompt || ""));

	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col gap-4">
			<div>
				<h2 className="text-lg font-semibold">Prompt de IA</h2>
				<p className="text-sm text-zinc-400">Adicione instruções curtas para o comportamento da IA.</p>
			</div>
			<div className="flex flex-col gap-2">
				{fields.map((field, index) => (
					<div key={index} className="flex gap-2">
						<input className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-2 outline-none focus:border-orange-500" type="text" value={field} onChange={(e) => updateField(setFields, e.target.value, index)} placeholder="Ex: Seja educado" />
						<button className="px-2 text-red-400 hover:text-red-300 cursor-pointer" onClick={() => removeField(setFields, index)}>
							<i className="bi bi-trash text-xl" />
						</button>
					</div>
				))}
			</div>
			<div className="flex justify-between">
				<button className="text-sm text-orange-500 hover:underline cursor-pointer" onClick={() => addField(setFields)}>
					+ Adicionar instrução
				</button>
				<button className="px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-400 transition cursor-pointer" onClick={() => handleSave(fields, socket)}>
					Salvar
				</button>
			</div>
		</div>
	);
}