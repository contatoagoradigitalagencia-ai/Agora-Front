import { useState } from "react";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE SELECIONA O ARQUIVO A SER ENVIADO
 * @param {Object} e INFORMACOES SOBRE O INPUT
 * @param {Function} setFile FUNCAO QUE SALVA O ARQUIVO EM file
 * @param {Function} onChange FUNCAO DE MUDANCA DO INPUT
 */
function handleSelect(e, setFile, onChange) {
	const selected = e.target.files[0];
	if (!selected) return ;
	setFile(selected);
	onChange && onChange(selected);
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE REMOVE O ARQUIVO QUE JA FOI SELECIONADO
 * @param {Function} setFile FUNCAO QUE SALVA O ARQUIVO EM file
 * @param {Function} onChange FUNCAO DE MUDANCA DO INPUT
 */
function handleRemove(setFile, onChange) {
	setFile(null);
	onChange && onChange(null);
}

/**
 * @author VAMPETA
 * @brief COMPONENTE DE UPLOAD DE ARQUIVO COM REMOCAO
 * @param {Function} onChange RETORNA O ARQUIVO SELECIONADO
 * @param {string} accept TIPOS ACEITOS
 */
export default function FileUpload({ onChange, accept }) {
	const [file, setFile] = useState(null);

	return (
		<div className="flex flex-col gap-2">
			<label className={`flex items-center justify-center gap-2 cursor-pointer border rounded p-2 text-sm transition ${(file) ? "bg-orange-500/10 border-orange-500 text-orange-400 hover:bg-orange-500/20" : "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"}`}>
				<i className={`bi ${(file) ? "bi-check-circle" : "bi-image"} text-lg`} />
				<span className="truncate">{file ? "Arquivo selecionada" : "Selecionar arquivo"}</span>
				<input className="hidden" type="file" accept={accept} onChange={(e) => handleSelect(e, setFile, onChange)} />
			</label>
			{file && (
				<button className="bg-orange-500 text-black w-full rounded p-2 text-sm hover:opacity-90 transition cursor-pointer" onClick={() => handleRemove(setFile, onChange)}>
					Remover arquivo
				</button>
			)}
		</div>
	);
}