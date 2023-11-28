import React from "react"
import { useState } from "react"
import ChapterListENG from "../ChapterListENG"

function ChapterHolderENG({ mangaLanguageOption, info, provider, mangaID }) {
	const [languageManga, setLanguageManga] = useState(mangaLanguageOption[0])
	return (
		<>
			{mangaLanguageOption.length > 0 && (
				<div className="flex max-lg:flex-col justify-between lg:[&>*]:mx-[20px] my-2">
					<div className="w-full flex flex-col justify-center items-center">
						<label htmlFor="provider">LANGUAGE OPTION:</label>
						<select
							className="provider flex font-semibold uppercase rounded group bg-[#222] text-white p-[4px] cursor-pointer outline-none border-none"
							onChange={(e) => {
								localStorage.setItem(
									"unime-manga-language-option",
									e.target.value
								)
								setLanguageManga(e.target.value)
							}}
							defaultValue={mangaLanguageOption[0]}
						>
							{mangaLanguageOption.map((language) => (
								<option
									value={language}
									key={language}
									className="uppercase text-white bg-[#222] font-semibold"
								>
									{language}
								</option>
							))}
						</select>
					</div>
				</div>
			)}
			{info.chapters.length ? (
				<ul className="overflow-y-scroll h-[500px] mx-4">
					{
						<ChapterListENG
							chapters={info.chapters}
							languageManga={languageManga}
							provider={provider}
							mangaID={mangaID}
						/>
					}
				</ul>
			) : (
				<ul>
					<p className="italic text-slate-300 text-center text-md font-thin">
						This provider currently has no chapters, maybe you can try to switch
						to another provider.
					</p>
				</ul>
			)}
		</>
	)
}

export default ChapterHolderENG
