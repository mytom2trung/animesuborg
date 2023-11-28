import { Skeleton } from "@mui/material"
import React from "react"

function FilmSkeleton() {
	return [...Array(24).keys()].map((i) => (
		<div className="mx-[4px] mb-[12px] relative float-left group" key={i}>
			<Skeleton className="pb-[156%] mb-0 w-full relative overflow-hidden rounded-[4px] duration-500 ease-in-out scale-100 bg-gray-700" />
			<div className="h-[60px] w-full mt-[4px]">
				<Skeleton className="text-xs leading-none p-0 m-0 duration-500 ease-in-out scale-100 bg-gray-700" />
			</div>
		</div>
	))
}

export default FilmSkeleton
