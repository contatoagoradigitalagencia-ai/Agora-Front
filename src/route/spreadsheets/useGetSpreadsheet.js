import { useState, useEffect } from "react";

/**
 * @author VAMPETA
 * @brief HOOK QUE BUSCA INFORMACOES DE CONFIGURACOES DA PLANILHA
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
*/
export function useGetSpreadsheet(socket) {
	const [infoSpreadsheets, setInfoSpreadsheets] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		socket.emit("spreadsheets:get_spreadsheets", {}, (res) => {
			if (!res || res.error) return (setError(true));
			setInfoSpreadsheets(res);
			setLoading(false);
		});
	}, [socket]);
	return ({ infoSpreadsheets, setInfoSpreadsheets, loading, error });
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ATUALIZA QUAIS PLANILHAS ESTAO SENDO USADAS
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {Object} infoSpreadsheets VARIAVEL QUE CONTEM AS PLANILHAS DISPONIVEIS E QUAIS ESTAO EM USO
 * @param {Object} setInfoSpreadsheets FUNCAO DE CONTROLE DA VARIAVEL spreadsheets
 * @param {Number} index POSICAO DO COMPONENTE QUE SERA ATUALIZADO
*/
export function selectSpreadsheet(socket, infoSpreadsheets, setInfoSpreadsheets, index) {
	const spreadsheet = infoSpreadsheets.pages[index];

	socket.emit("spreadsheets:update_used_spreadsheets", { [!spreadsheet.active ? "add" : "remove"]: spreadsheet.page }, (res) => {
		if (!res || (!res.add && !res.remove) || res.error) return ;
		setInfoSpreadsheets((prev) => {
			return ({
				...prev,
				pages: prev.pages.map((item, i) => ((i === index) ? { ...item, active: !spreadsheet.active } : item))
			});
		});
	});
}