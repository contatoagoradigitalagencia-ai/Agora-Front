/**
 * @author VAMPETA
 * @brief CARD DE CONTATOS DO SUPORTE
*/
export default function Contact() {
	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col gap-4">
			<div>
				<h2 className="text-lg font-semibold">Canais de atendimento</h2>
				<p className="text-sm text-zinc-400">Escolha a melhor forma para entrar em contato com nossa equipe.</p>
			</div>
			<div className="flex flex-col gap-3">
				<button className="flex items-center justify-between bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-orange-500 transition cursor-pointer">
					<div className="flex items-center gap-3">
						<i className="bi bi-whatsapp text-2xl text-green-500" />
						<div className="text-start">
							<p className="font-medium">WhatsApp</p>
							<p className="text-xs text-zinc-400">Fale diretamente com nossa equipe</p>
						</div>
					</div>
					<i className="bi bi-arrow-right text-zinc-400" />
				</button>
				<button className="flex items-center justify-between bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-orange-500 transition cursor-pointer">
					<div className="flex items-center gap-3">
						<i className="bi bi-envelope text-2xl text-orange-500" />
						<div className="text-start">
							<p className="font-medium">E-mail</p>
							<p className="text-xs text-zinc-400">Receba suporte detalhado por email</p>
						</div>
					</div>
					<i className="bi bi-arrow-right text-zinc-400" />
				</button>
				<button className="flex items-center justify-between bg-zinc-800 border border-zinc-700 rounded-lg p-4 hover:border-orange-500 transition cursor-pointer">
					<div className="flex items-center gap-3">
						<i className="bi bi-discord text-2xl text-indigo-400" />
						<div className="text-start">
							<p className="font-medium">Comunidade</p>
							<p className="text-xs text-zinc-400">Troque experiências com outros usuários</p>
						</div>
					</div>
					<i className="bi bi-arrow-right text-zinc-400" />
				</button>
			</div>
		</div>
	);
}