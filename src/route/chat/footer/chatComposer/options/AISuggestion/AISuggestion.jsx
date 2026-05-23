import { useState, useRef } from "react";

/**
 * @author VAMPETA
 * @brief MODAL DE SUGESTAO IA
*/
export default function AISuggestion() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [think, setThink] = useState(false);
	const textareaRef = useRef(null);

	/**
	 * @author VAMPETA
	 * @brief CONTROLA ALTURA DO TEXTAREA
	*/
	function handleChange(value) {
		setInput(value);

		textareaRef.current.style.height = "auto";
		textareaRef.current.style.height =
			textareaRef.current.scrollHeight + "px";
	}

	/**
	 * @author VAMPETA
	 * @brief SIMULA RESPOSTA IA
	*/
	function handleGenerate() {
		if (!input.trim()) return;

		setThink(true);
		setOutput("");

		setTimeout(() => {
			setThink(false);

			setOutput(
				"Olá! Obrigado pelo contato. Vamos verificar sua solicitação e retornaremos o mais breve possível."
			);
		}, 1500);
	}

	return (
		<div className="flex flex-col gap-4 h-full p-4">

			{/* HEADER */}
			<div className="flex items-center gap-3">
				<i className="bi bi-stars text-2xl text-orange-500" />

				<div className="flex flex-col">
					<h2 className="text-lg font-semibold text-white">
						Sugestão IA
					</h2>

					<p className="text-sm text-zinc-400">
						Gere respostas rápidas para o atendimento.
					</p>
				</div>
			</div>

			{/* RESULTADO */}
			<div
				className={`
					flex flex-col flex-1 min-h-[35vh]
					bg-zinc-800
					border border-zinc-700
					rounded-lg
					p-4
					text-sm text-zinc-300
					whitespace-pre-wrap
					${think ? "animate-pulse" : ""}
				`}
			>
				{output || (
					<div className="flex flex-col justify-center items-center h-full gap-3 text-zinc-500">

						{think
							? <p>Pensando...</p>
							: <p>A resposta aparecerá aqui...</p>
						}

						<i className="bi bi-stars text-4xl" />
					</div>
				)}
			</div>

			{/* INPUT */}
			<textarea
				ref={textareaRef}
				value={input}
				placeholder="Digite o contexto da resposta..."
				onChange={(e) => handleChange(e.target.value)}
				className="
					bg-zinc-800
					border border-zinc-700
					rounded-lg
					p-3
					text-sm
					text-white
					min-h-[18vh]
					outline-none
					resize-none
					overflow-hidden
					focus:border-orange-500
				"
			/>

			{/* BUTTON */}
			<button
				onClick={handleGenerate}
				className="
					bg-orange-500
					text-black
					rounded-lg
					p-3
					text-sm
					font-medium
					w-full
					hover:bg-orange-400
					transition
					cursor-pointer
				"
			>
				Gerar resposta
			</button>
		</div>
	);
}