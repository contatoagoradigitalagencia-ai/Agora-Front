import { memo } from "react";

/**
 * @author VAMPETA
 * @brief PAGINA DE CONFIGURACOES
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
*/
const Body = memo(function Body({ socket }) {
	return (
		<div className="p-6 flex flex-col gap-6 max-w-4xl overflow-y-auto animate-toastIn">

		</div>
	);
});

export default Body;