import { useState, useEffect } from "react";
import toast from "react-hot-toast";

/**
 * @author VAMPETA
 * @brief HOOK QUE CONTROLA O LOAD DO DASHBOARD
 * @param {Object} socket SOCKET DE CONEXAO COM O BACK END
 * @param {String} date DATA DE CONSULTA DE METRICAS
 */
export function useGetDashboard(socket, date) {
	const [info, setInfo] = useState({ received: {}, sent: {}, newContacts: 0 });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!socket) return ;
		setLoading(true);
		socket.emit("dashboard:info", { date: date }, (res) => {
			if (!res || res.code !== 200 || res.error) return (toast.error("Error ao carregar informações"));
// res.hourly = {
// 	"1": 100,
// 	"10": 20,
// 	"11": 40,
// 	"12": 50,
// 	"13": 150,
// 	"17": 50
// }
			setInfo(res);
			setLoading(false);
		});
	}, [socket, date]);
	return ({ info, loading });
}