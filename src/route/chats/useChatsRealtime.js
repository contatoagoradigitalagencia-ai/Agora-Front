import { useEffect } from "react";

/**
 * @author VAMPETA
 * @brief HOOK QUE ADICIONA OS EVENTOS ON DE WEBSOCKET
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {Object} setChats FUNCAO QUE CONTROLA A VARIAVEL "chats"
 */
export function useChatsRealTime(socket, setChats) {
	useEffect(() => {
						// AKI EU CONFIGURO OS EVENTOS ON DO WEBSOCKET
	}, [socket]);
}