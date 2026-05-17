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
			<div className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-5">
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


		</div>
	);
}