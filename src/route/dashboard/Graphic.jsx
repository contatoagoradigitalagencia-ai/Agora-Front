// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// /**
//  * @author VAMPETA
//  * @brief GRAFICO QUE EXIBE INFORMACOES DE ATIVIDADES DE ENVIO E RECEBIMENTO DE MENSAGENS
//  * @param {Boolean} loading INFORMA O ESTADO DE LOAD
//  * @param {Object} info INFORMACOES DA METRICA
//  */
// export default function Graphic({ loading, info }) {
// 	const data = Object.entries(info?.hourly || {}).map(([hour, value]) => ({ hour: `${hour}h`, messages: value }));
// 	const peak = data.reduce((max, item) => ((item.messages > max.messages) ? item : max), { messages: 0 });

// 	return (
// 		<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6">
// 			<div className="flex items-center gap-3 mb-5">
// 				<h2 className="text-sm md:text-base font-semibold text-zinc-200 whitespace-nowrap">Atividade por horário</h2>
// 				<div className="flex-1 h-px bg-zinc-800" />
// 			</div>
// 			{
// 				(loading) ? (
// 					<div className="h-52 animate-pulse bg-zinc-800 rounded-lg" />
// 				) : (
// 					<>
// 						<div className="h-52">
// 							<ResponsiveContainer width="100%" height="100%">
// 								<BarChart data={data}>
// 									<XAxis dataKey="hour" stroke="#71717a" fontSize={12} />
// 									<YAxis stroke="#71717a" fontSize={12} />
// 									<Tooltip contentStyle={{ background: "#18181b", border: "1px solid #27272a", borderRadius: "8px" }} labelStyle={{ color: "#e4e4e7" }} />
// 									<Bar dataKey="messages" fill="#f97316" radius={[6, 6, 0, 0]} />
// 								</BarChart>
// 							</ResponsiveContainer>
// 						</div>
// 						<div className="mt-4 text-xs text-zinc-400">
// 							Pico de atividade:<span className="text-orange-500 font-medium ml-1">{peak.hour} ({peak.messages} mensagens)</span>
// 						</div>
// 					</>
// 				)
// 			}
// 		</div>
// 	);
// }



import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

/**
 * @author VAMPETA
 * @brief GRAFICO QUE EXIBE INFORMACOES DE ATIVIDADES DE ENVIO E RECEBIMENTO DE MENSAGENS
 * @param {Boolean} loading INFORMA O ESTADO DE LOAD
 * @param {Object} info INFORMACOES DA METRICA
 */
export default function Graphic({ loading, info }) {
	const data = Object.entries(info?.hourly || {}).map(([hour, value]) => ({ hour: `${hour}h`, messages: value }));
	const total = data.reduce((acc, item) => (acc + item.messages), 0);
	const peak = data.reduce((max, item) => ((item.messages > max.messages) ? item : max), { hour: "--", messages: 0 });
	const average = (data.length) ? Math.round(total / data.length) : 0;

	if (loading) return (<div className="min-h-[350px] bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse" />);
	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6">
			<div className="flex items-center gap-3 mb-5">
				<h2 className="text-sm md:text-base font-semibold text-zinc-200">Atividade hoje</h2>
				<div className="flex-1 h-px bg-zinc-800" />
			</div>
			<div className="flex items-end justify-between mb-2">
				<div>
					<p className=" text-xs text-zinc-400">Total de mensagens</p>
					<h3 className="text-3xl font-bold text-zinc-100">{total}</h3>
				</div>
				<i className="bi bi-graph-up text-3xl text-orange-500" />
			</div>
			<div className="h-48">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={data}>
						<XAxis dataKey="hour" stroke="#71717a" fontSize={12} />
						<YAxis stroke="#71717a" fontSize={12} width={25} />
						<Tooltip contentStyle={{ background: "#18181b", border: "1px solid #27272a", borderRadius: "10px" }} />
						<Area type="monotone" dataKey="messages" stroke="#f97316" fill="#f97316" fillOpacity={0.2} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div className="grid grid-cols-2 gap-3 mt-4">
				<div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
					<p className="text-xs text-zinc-400">Pico</p>
					<p className="text-sm text-orange-500 font-medium">{peak.hour}</p>
				</div>
				<div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
					<p className="text-xs text-zinc-400">Média/h</p>
					<p className="text-sm text-orange-500 font-medium">{average}</p>
				</div>
			</div>
		</div>
	);
}