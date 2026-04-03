import { useParams, Link } from "react-router-dom";

import { useGetInfo } from "./useGetInfo.js";
import { useEditComment, handleSave } from "./useEditComment.js";

import { formatDate } from "../../../utils/functions/formatDate.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM OPCOES
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {Boolean} selected INFORMA SE O DRAWER ESTA ABERTO OU FECHADO
 * @param {Objetc} onClose FUNCAO DE FECHAMENTO DO DROWER
 */
export default function OptionsDrawer({ socket, selected, onClose }) {
	const { phone } = useParams();
	const { info, setInfo } = useGetInfo(socket, phone);
	const { editing, setEditing, comment, setComment } = useEditComment();

	if (!selected) return (null);
	if (!info) return (null);
	return (
		<div className="flex fixed text-white inset-0 z-50">
			<div className="absolute inset-0 bg-black/60" onClick={onClose} />
			<div className="ml-auto w-full md:w-[400px] h-full bg-zinc-900 border-l border-zinc-800 p-6 z-1 animate-slideInRight">
				<button className="mb-4 cursor-pointer" onClick={onClose}>
					<i className="bi bi-x text-2xl" />
				</button>
				<div className="flex flex-col gap-6">
<div>
	<h2 className="text-xl font-semibold">{info.name || "Sem nome"}</h2>
	<p className="text-sm text-zinc-400">{info.phone.replace(/^55(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')}</p>
</div>
<div className="bg-zinc-800 p-4 rounded-lg">
	<p className="text-xs text-zinc-500">Última mensagem</p>
	<p className="text- mt-3">{formatDate(info.lastMessage)}</p>
</div>
<div className="bg-zinc-800 p-4 rounded-lg flex flex-col gap-3">
	<div className="flex justify-between items-center">
		<p className="text-xs text-zinc-500">Comentário</p>
		{!editing && (
			<button className="text-xs text-orange-500 hover:underline cursor-pointer" onClick={() => setEditing(true)}>
				Editar
			</button>
		)}
	</div>
	{editing ? (
		<>
			<textarea className="w-full p-2 text-sm bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-orange-500 resize-none" value={comment} onChange={(e) => setComment(e.target.value)} rows={4} />
			<div className="flex gap-2">
				<button className="flex-1 bg-orange-500 text-black py-1.5 rounded-lg hover:bg-orange-400 transition" onClick={() => handleSave(socket, phone, comment, setEditing)}>
					Salvar
				</button>
				<button className="flex-1 bg-zinc-700 py-1.5 rounded-lg hover:bg-zinc-600 transition"
					onClick={() => {
						setComment(info.comment || "");
						setEditing(false);
					}}
				>
					Cancelar
				</button>
			</div>
		</>
	) : (
		<p className="text-sm text-zinc-300 whitespace-pre-wrap">{info.comment || "Sem comentário"}</p>
	)}
</div>
					<Link className="flex items-center gap-1 px-4 py-2 rounded-lg bg-orange-500 text-black hover:text-white hover:bg-zinc-800" to="" onClick={close}>
						<span>Mostrar contato</span>
					</Link>
					<Link className="flex items-center gap-1 px-4 py-2 rounded-lg bg-orange-500 text-black hover:text-white hover:bg-zinc-800" to="" onClick={close}>
						<span>Bloquear</span>
					</Link>
				</div>
			</div>
		</div>
	);
}