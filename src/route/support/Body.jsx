import Contact from "./Contact.jsx";
import FAQ from "./FAQ.jsx";

/**
 * @author VAMPETA
 * @brief BODY DA ROTA /support
*/
export default function Body({ socket }) {
	return (
		<div className="flex flex-col gap-6 p-4 md:p-6 overflow-y-auto animate-toastIn">

			{/* HERO */}
			<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
						<i className="bi bi-headset text-2xl text-orange-500" />
					</div>
					<div>
						<h1 className="text-2xl font-bold">Central de Suporte</h1>
						<p className="text-sm text-zinc-400">Encontre respostas rápidas, documentação e canais de atendimento.</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
						<p className="text-zinc-400 text-sm">Tempo médio de resposta</p>
						<h2 className="text-2xl font-bold text-orange-500 mt-2">~5 min</h2>
					</div>
					<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
						<p className="text-zinc-400 text-sm">Atendimento</p>
						<h2 className="text-2xl font-bold text-orange-500 mt-2">24/7</h2>
					</div>
					<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
						<p className="text-zinc-400 text-sm">Status do sistema</p>
						<div className="flex items-center gap-2 mt-3">
							<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
							<span className="font-medium text-green-400">Operacional</span>
						</div>
					</div>
				</div>
			</div>

			{/* CONTATO */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Contact />
				<FAQ />
			</div>

			{/* DOCUMENTAÇÃO */}
			<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col gap-4">
				<div>
					<h2 className="text-lg font-semibold">Documentação e Guias</h2>
					<p className="text-sm text-zinc-400">Acesse tutoriais e conteúdos para aprender a utilizar a plataforma.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<button className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-orange-500 transition text-start cursor-pointer">
						<div className="flex items-center gap-2 mb-3">
							<i className="bi bi-book text-orange-500 text-xl" />
							<h3 className="font-medium">Primeiros passos</h3>
						</div>
						<p className="text-sm text-zinc-400">Aprenda a configurar sua conta rapidamente.</p>
					</button>
					<button className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-orange-500 transition text-start cursor-pointer">
						<div className="flex items-center gap-2 mb-3">
							<i className="bi bi-robot text-orange-500 text-xl" />
							<h3 className="font-medium">Configuração do Bot</h3>
						</div>
						<p className="text-sm text-zinc-400">Personalize o comportamento da IA.</p>
					</button>
					<button className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-orange-500 transition text-start cursor-pointer">
						<div className="flex items-center gap-2 mb-3">
							<i className="bi bi-bar-chart text-orange-500 text-xl" />
							<h3 className="font-medium">Métricas e Dashboard</h3>
						</div>
						<p className="text-sm text-zinc-400">Entenda os dados e estatísticas da plataforma.</p>
					</button>
					<button className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-orange-500 transition text-start cursor-pointer">
						<div className="flex items-center gap-2 mb-3">
							<i className="bi bi-shield-lock text-orange-500 text-xl" />
							<h3 className="font-medium">Segurança</h3>
						</div>
						<p className="text-sm text-zinc-400">Veja boas práticas de segurança e privacidade.</p>
					</button>
				</div>
			</div>

			{/* FEEDBACK */}
			<div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl p-6 text-black flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h2 className="text-xl font-bold">Precisa de ajuda personalizada?</h2>
					<p className="text-sm opacity-80">Nossa equipe está pronta para ajudar você.</p>
				</div>
				<button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-zinc-900 transition cursor-pointer">Entrar em contato</button>
			</div>




<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
	<div className="flex items-center justify-between">
		<div>
			<h2 className="text-lg font-semibold">Status dos serviços</h2>
			<p className="text-sm text-zinc-400">
				Verifique o funcionamento da plataforma em tempo real.
			</p>
		</div>

		<div className="flex items-center gap-2 text-green-400">
			<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
			<span>Sistema operacional</span>
		</div>
	</div>

	<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
		<div className="bg-zinc-800 rounded-lg p-4">
			<p className="text-zinc-400 text-sm">API WhatsApp</p>
			<h3 className="font-bold text-green-400 mt-2">Online</h3>
		</div>

		<div className="bg-zinc-800 rounded-lg p-4">
			<p className="text-zinc-400 text-sm">Inteligência Artificial</p>
			<h3 className="font-bold text-green-400 mt-2">Online</h3>
		</div>

		<div className="bg-zinc-800 rounded-lg p-4">
			<p className="text-zinc-400 text-sm">WebSocket</p>
			<h3 className="font-bold text-green-400 mt-2">Conectado</h3>
		</div>
	</div>
</div>



<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
	<h2 className="text-lg font-semibold mb-1">Últimas atualizações</h2>

	<p className="text-sm text-zinc-400 mb-5">
		Novidades e melhorias recentes da plataforma.
	</p>

	<div className="flex flex-col gap-4">

		<div className="border-l-2 border-orange-500 pl-4">
			<p className="text-sm text-zinc-500">Hoje</p>
			<h3 className="font-medium">Melhoria na velocidade do chat</h3>
			<p className="text-sm text-zinc-400">
				O sistema agora responde mensagens em tempo real com menor latência.
			</p>
		</div>

		<div className="border-l-2 border-zinc-700 pl-4">
			<p className="text-sm text-zinc-500">Ontem</p>
			<h3 className="font-medium">Novo sistema de redirecionamento</h3>
			<p className="text-sm text-zinc-400">
				Adicionado suporte para múltiplos atendentes humanos.
			</p>
		</div>

	</div>
</div>



<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

	<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-start hover:border-orange-500 transition">
		<div className="flex items-center gap-3 mb-4">
			<i className="bi bi-play-circle text-2xl text-orange-500" />
			<h2 className="font-semibold">
				Conectar WhatsApp
			</h2>
		</div>

		<p className="text-sm text-zinc-400">
			Aprenda como conectar seu número utilizando QR Code.
		</p>
	</button>

	<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-start hover:border-orange-500 transition">
		<div className="flex items-center gap-3 mb-4">
			<i className="bi bi-play-circle text-2xl text-orange-500" />
			<h2 className="font-semibold">
				Configurar IA
			</h2>
		</div>

		<p className="text-sm text-zinc-400">
			Veja como personalizar o comportamento do bot.
		</p>
	</button>

</div>



<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
	<h2 className="text-lg font-semibold mb-4">
		Atividades recentes
	</h2>

	<div className="flex flex-col gap-3">

		<div className="flex items-center justify-between bg-zinc-800 rounded-lg p-3">
			<div className="flex items-center gap-3">
				<i className="bi bi-person-check text-orange-500" />
				<p className="text-sm">
					Novo login realizado
				</p>
			</div>

			<span className="text-xs text-zinc-500">
				2 min atrás
			</span>
		</div>

	</div>
</div>



<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

	<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-orange-500 transition">
		<i className="bi bi-whatsapp text-3xl text-orange-500" />
		<p className="mt-3 text-sm">Abrir conversas</p>
	</button>

	<button className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-orange-500 transition">
		<i className="bi bi-robot text-3xl text-orange-500" />
		<p className="mt-3 text-sm">Configurar IA</p>
	</button>

</div>



<div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center">
	<i className="bi bi-image text-4xl text-orange-500" />
	<p className="mt-3 text-sm text-zinc-400">
		Envie imagens do problema
	</p>
</div>



<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">

	<div className="flex items-center gap-3 mb-4">
		<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
			<i className="bi bi-tools text-orange-500 text-lg" />
		</div>

		<div>
			<h2 className="font-semibold">
				Suporte técnico
			</h2>

			<p className="text-sm text-zinc-400">
				Resolva problemas relacionados à plataforma.
			</p>
		</div>
	</div>

	<button className="px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-400 transition">
		Abrir suporte
	</button>

</div>



<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">

	<h2 className="text-lg font-semibold mb-4">
		Problemas comuns
	</h2>

	<div className="flex flex-col gap-2">

		<button className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800 transition">
			<div className="flex items-center gap-3">
				<i className="bi bi-whatsapp text-orange-500" />
				<span>WhatsApp desconectado</span>
			</div>

			<i className="bi bi-chevron-right text-zinc-500" />
		</button>

		<button className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800 transition">
			<div className="flex items-center gap-3">
				<i className="bi bi-robot text-orange-500" />
				<span>IA não responde</span>
			</div>

			<i className="bi bi-chevron-right text-zinc-500" />
		</button>

	</div>

</div>
		</div>
	);
}