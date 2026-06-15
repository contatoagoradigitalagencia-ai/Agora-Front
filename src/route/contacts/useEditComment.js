import { useState, useEffect } from "react";
import toast from "react-hot-toast";

/**
 * @author VAMPETA
 * @brief HOOK QUE CONTROLA O COMENTARIO DO CONTATO
 * @param {Objetc} contact INFORMACOES DO CONTATO
 */
export function useEditComment(contact) {
	const [editing, setEditing] = useState(false);
	const [comment, setComment] = useState("");

	useEffect(() => {
		setComment(contact.comment || "");
		setEditing(false);
	}, [contact]);
	return ({ editing, setEditing, comment, setComment });
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE SALVA O COMENTARIO NO BACK END
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} phone NUMERO DO CONTATO
 * @param {String} comment COMENTARIO QUE SERA SALVO
 * @param {Object} setEditing FUNCAO DE CONTROLE DA VARIAVEL editing
 * @param {Object} setContact FUNCAO DE CONTROLE DA VARIAVEL contact
 */
export function handleSave(socket, phone, comment, setEditing, setContact) {
	socket.emit("contacts:save_comment", { phone: phone, comment: comment }, (res) => {
		if (!res || res.code !== 204 || res.error) return (toast.error("Erro ao salvar comentário!"));
		setContact((prev) => ({ ...prev, comment: comment }));
		setEditing(false);
		toast.success("Comentário salvo!");
	});
}