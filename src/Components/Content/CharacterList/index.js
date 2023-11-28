import { COLORLIST } from "../../../constants"
import Image from "../Image"

function CharacterList({ characters }) {
	return (
		<>
			<h4 className="font-black pt-4">CHARACTERS</h4>
			<div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36 w-full py-4 max-lg:overflow-x-scroll max-lg:flex max-lg:flex-row [&>div]:max-lg:shrink-0 [&>div]:max-lg:flex">
				{characters.map((character, i) => (
					<div className="h-28" key={character.id}>
						<div className="flex bg-[#0D0D0D] h-full w-full">
							<Image
								className="h-full aspect-[2/3] duration-500 ease-in-out"
								src={character.image || ""}
								alt={character.name.full}
								loading="lazy"
							/>
							<div className="mx-2 flex flex-col">
								<p
									className="text-lg font-bold break-all"
									style={{ color: COLORLIST[i] }}
								>
									{character.name.full}
								</p>
								<p
									className="font-semibold mt-2 text-sm"
									style={{ color: "rgb(188 188 188 / 70%)" }}
								>
									{character.role}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default CharacterList
