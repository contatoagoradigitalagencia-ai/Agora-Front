import { useState } from "react";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE SELECIONA O ARQUIVO A SEER ENVIADO
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
 * @param {Object} e INFORMACOES SOBRE O INPUT
 * @param {Function} setFile FUNCAO QUE SALVA O ARQUIVO EM file
 * @param {Function} onChange FUNCAO DE MUDANCA DO INPUT
 */
function handleRemove(setFile, onChange) {
	setFile(null);
	onChange && onChange(null);
}

/**
 * @author VAMPETA
 * @brief COMPONENTE DE UPLOAD DE IMAGEM COM REMOCAO
 * @param {Function} onChange RETORNA O ARQUIVO SELECIONADO
 * @param {string} accept TIPOS ACEITOS
 */
export default function FileUpload({ onChange, accept }) {
	const [file, setFile] = useState(null);

	return (
		<div className="flex flex-col gap-2">

			{/* BOTAO */}
			<label className="flex items-center justify-center gap-2 cursor-pointer text-white bg-zinc-800 border border-zinc-700 rounded p-2 text-sm hover:bg-zinc-700 transition">
				<i className="bi bi-image text-lg" />
				Selecionar imagem
				<input type="file" accept={accept} className="hidden" onChange={(e) => handleSelect(e, setFile, onChange)} />
			</label>

			{/* ARQUIVO SELECIONADO */}
			{file && (
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded px-3 py-2">
						<i className="bi bi-file-earmark-image text-zinc-400" />
						<span className="text-xs text-zinc-300 truncate flex-1">{file.name}</span>
						<button className="text-zinc-500 hover:text-red-500 transition" onClick={() => handleRemove(setFile, onChange)}>
							<i className="bi bi-x-lg text-xs" />
						</button>
					</div>
				</div>
			)}

		</div>
	);
}