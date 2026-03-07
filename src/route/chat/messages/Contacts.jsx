import { memo } from "react";

/**
 * @author VAMPETA
 * @brief RENDERIZA OS NUMEROS DE TELEFONES
 * @param {Array<Object>} phones NUMEROS DE TELEFONES A SEREM RENDERIZADOS
*/
function Phones(phones) {
	if (!phones) return (<></>);
	return (
		<div className="my-4">
			Telefones:
			{phones.map((phone, i) => (
				<a className="flex items-center gap-2 text-sm text-blue-400 hover:underline" key={i} href={`tel:${phone.phone}`}>
					<i className="bi bi-telephone" />
					{phone.phone}
				</a>
			))}
		</div>
	);
}

/**
 * @author VAMPETA
 * @brief RENDERIZA OS EMAILS
 * @param {Array<Object>} emails EMAILS A SEREM RENDERIZADOS
*/
function Emails(emails) {
	if (!emails) return (<></>);
	return (
		<div className="my-4">
			E-mails:
			{emails.map((email, i) => (
				<a className="flex items-center gap-2 text-sm text-blue-400 hover:underline" key={i} href={`mailto:${email.email}`}>
					<i className="bi bi-envelope" />
					{email.email}
				</a>
			))}
		</div>
	);
}

/**
 * @author VAMPETA
 * @brief RENDERIZA MENSAGEM DE CONTATO
 * @param {Object} message MENSAGEM A SER RENDERIZADA
*/
const Contacts = memo(function Contacts({ message }) {
	return (
		<div className="p-4 rounded bg-gray-500 text-white">
			<div className="flex items-center gap-3 mb-3">
				<div className="flex items-center justify-center w-full p-2 rounded bg-black/30">
					<i className="bi bi-person text-2xl" />
					<p className="font-semibold truncate">{message.data.contacts[0].name.formatted_name}</p>
				</div>
			</div>
			{Phones(message.data.contacts[0].phones)}
			{Emails(message.data.contacts[0].emails)}
		</div>
	);
});

export default Contacts;