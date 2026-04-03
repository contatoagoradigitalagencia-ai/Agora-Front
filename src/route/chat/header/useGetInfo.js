import { useState, useEffect } from "react";

export function useGetInfo(socket, phone) {
	const [info, setInfo] = useState(null);

	useEffect(() => {
		socket.emit("chat:get_info", { phone: phone }, (res) => {
			setInfo(res);
		});
	}, []);
	return ({ info, setInfo });
}