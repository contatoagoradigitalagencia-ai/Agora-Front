import { useState } from "react";

import { useSocket } from "../../socket/useSocket.js";

import SideBar from "../../utils/components/Sidebar.jsx";
import Load from "../../screens/Load.jsx";
import Error from "../../screens/Error.jsx";
// import Header from "./Header.jsx";


export default function Contacts() {
	const [open, setOpen] = useState(false);
	const { socket, connected, error } = useSocket();

	if (!socket) return (<Load />);
	return (
		<div className="flex h-dvh bg-black text-white">
			<SideBar open={open} setOpen={setOpen} />
			<main className="flex-1 flex flex-col">
				{/* <Header setOpen={setOpen} /> */}
				{!connected && !error && <Load />}
				<>Página de contatos</>
				{error && <Error />}
			</main>
		</div>
	);
}