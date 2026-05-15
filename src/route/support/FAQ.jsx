/**
 * @author VAMPETA
 * @brief CARD DE PERGUNTAS E RESPOSTAS PRONTAS
*/
export default function FAQ() {
	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col gap-4">
			<div>
				<h2 className="text-lg font-semibold">Perguntas frequentes</h2>
				<p className="text-sm text-zinc-400">As dúvidas mais comuns dos usuários.</p>
			</div>
			<div className="flex flex-col gap-3">
				<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
					<div className="flex items-center gap-2 mb-2">
						<i className="bi bi-question-circle text-orange-500" />
						<h3 className="font-medium">Como conectar meu WhatsApp?</h3>
					</div>
					<p className="text-sm text-zinc-400">Acesse a página de configurações e escaneie o QR Code utilizando o WhatsApp do seu dispositivo.</p>
				</div>
				<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
					<div className="flex items-center gap-2 mb-2">
						<i className="bi bi-question-circle text-orange-500" />
						<h3 className="font-medium">Como ativar o atendimento humano?</h3>
					</div>
					<p className="text-sm text-zinc-400">Entre na aba Bot e configure os números responsáveis pelo redirecionamento.</p>
				</div>
				<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
					<div className="flex items-center gap-2 mb-2">
						<i className="bi bi-question-circle text-orange-500" />
						<h3 className="font-medium">Posso usar IA personalizada?</h3>
					</div>
					<p className="text-sm text-zinc-400">Sim. Você pode configurar instruções personalizadas na seção "Prompt de IA".</p>
				</div>
			</div>
		</div>
	);
}