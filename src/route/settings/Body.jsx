import { memo, useState, useEffect } from "react";

/**
 * @author VAMPETA
 * @brief PAGINA DE CONFIGURACOES
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
*/
const Body = memo(function Body({ socket }) {
	const [spreadsheets, setSpreadsheets] = useState(null);

useEffect(() => {
	socket.emit("settings:spreadsheets:get_spreadsheets", {}, (res) => {
		setSpreadsheets(res);
	});
}, []);

	return (
		<div className="p-6 flex flex-col gap-6 max-w-4xl overflow-y-auto animate-toastIn">
			<h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Planilhas</h2>

			<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col gap-4">
				{spreadsheets?.map((spreadsheet) => (<p>{spreadsheet}</p>))}
			</div>

		</div>
	);
});

export default Body;