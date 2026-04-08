import { useState } from "react";

export default function PromptSuggestion() {
	const [messages, setMessages] = useState([
		{ type: "bot", text: "Quer ajuda para melhorar seu prompt?" }
	]);

	const [input, setInput] = useState("");

	function sendMessage() {
		if (!input.trim()) return;

		setMessages(prev => [
			...prev,
			{ type: "user", text: input },
			{ type: "bot", text: "Sugestão: tente ser mais específico nas instruções." }
		]);

		setInput("");
	}

	function quickAdd(text) {
		setMessages(prev => [
			...prev,
			{ type: "user", text },
			{ type: "bot", text: `Boa! Você pode adicionar: "${text}" no seu prompt.` }
		]);
	}

	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col gap-4">
			<h2 className="text-lg font-semibold">Sugestões de Prompt</h2>

			{/* Chat */}
			<div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
				{messages.map((msg, i) => (
					<div
						key={i}
						className={`text-sm p-2 rounded-lg max-w-[80%] ${msg.type === "bot"
								? "bg-zinc-800 text-zinc-300"
								: "bg-orange-500 text-black self-end"
							}`}
					>
						{msg.text}
					</div>
				))}
			</div>

			{/* Sugestões rápidas */}
			<div className="flex flex-wrap gap-2">
				<button onClick={() => quickAdd("Seja mais persuasivo")} className="px-2 py-1 bg-zinc-800 rounded hover:bg-zinc-700 text-xs">
					+ Vendas
				</button>
				<button onClick={() => quickAdd("Responda de forma clara")} className="px-2 py-1 bg-zinc-800 rounded hover:bg-zinc-700 text-xs">
					+ Clareza
				</button>
				<button onClick={() => quickAdd("Seja mais educado")} className="px-2 py-1 bg-zinc-800 rounded hover:bg-zinc-700 text-xs">
					+ Educação
				</button>
			</div>

			{/* Input */}
			<div className="flex gap-2">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg p-2 text-sm outline-none"
					placeholder="Peça uma sugestão..."
				/>
				<button
					onClick={sendMessage}
					className="px-3 bg-orange-500 text-black rounded-lg"
				>
					➤
				</button>
			</div>
		</div>
	);
}