import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

import { Pagination, Autoplay, Lazy } from "swiper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { toSlug } from "../../../Utilities/toSlug"

function TopAiringENGComp({ topAiring }) {
	return (
		<Swiper
			pagination={{
				clickable: true,
			}}
			modules={[Pagination, Autoplay, Lazy]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			centeredSlides={true}
			spaceBetween={10}
			loop={true}
			className="top-airing-swiper h-[500px] w-full px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36"
			slidesPerView={1}
			preloadImages={false}
			lazy={true}
		>
			{topAiring.map((item, i) => (
				<SwiperSlide key={i}>
					<div
						style={{ backgroundImage: `url(${item.cover})` }}
						className={`bg-cover bg-center h-full w-full bg-no-repeat rounded overflow-hidden`}
						loading="lazy"
					>
						<div className="banner__overlay h-full w-full flex items-center">
							<div className="w-3/5 max-lg:w-full ml-[40px] max-sm:mx-0 max-sm:px-[30px] flex flex-col justify-center h-100">
								<Link
									to={`/eng/info/${item.id}`}
									className="hover:opacity-80 duration-200 ease-in-out"
									style={{
										color: item?.color || "#fffc",
										textShadow: `3px 3px 3px rgba(0,0,0,0.7)`,
									}}
									aria-label={item.id}
								>
									<h2
										className="airing-info-main-title line-clamp-3 uppercase font-bold text-3xl max-lg:text-base"
										title={
											item.title.english ||
											item.title.romaji ||
											item.title.native ||
											item.title.userPreferred
										}
									>
										{item.title.english ||
											item.title.romaji ||
											item.title.native ||
											item.title.userPreferred}
									</h2>
								</Link>
								<div className="flex flex-wrap my-[20px] max-lg:my-[4px] items-center">
									{item.genres.map((genre, key) => (
										<React.Fragment key={genre}>
											<Link
												to={`/eng/anime/${toSlug(genre)}`}
												className="hover:opacity-80 duration-200 ease-in-out genre inline p-[4px] m-[4px] first:ml-0 max-lg:text-xs font-medium text-[#fffc] max-md:bg-black/70 max-md:rounded"
												style={{
													textShadow:
														"black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px, black 0px 0px 1px",
												}}
												aria-label={toSlug(genre)}
											>
												{genre}
											</Link>
											{item.genres.length > 1 &&
											key < item.genres.length - 1 ? (
												<span
													className={`mx-[2px] w-1.5 h-1.5 rounded-full inline-block mt-[4px] max-md:hidden`}
													style={{ backgroundColor: item?.color || "#fffc" }}
												></span>
											) : (
												""
											)}
										</React.Fragment>
									))}
								</div>
								<div
									className="airing-info-description line-clamp-5 font-semibold text-base max-lg:text-xs text-slate-300"
									style={{
										textShadow:
											"0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
									}}
									dangerouslySetInnerHTML={{
										__html: item.description?.replace(/<[br]+>/g, ""),
									}}
								></div>
								<div className="airing-info-status text-gray-50 mt-[20px] max-lg:text-xs max-lg:mt-[10px]">
									STATUS:
									<span className="rounded p-[4px] mt-[4px] border-[1px] mx-2">
										{item.status}
									</span>
								</div>
								<div className="text-white airing-button hidden max-lg:inline-block mt-[20px]">
									<Link
										className="p-[6px] bg-orange-600 rounded hover:opacity-80 duration-200 hover:bg-neutral-800 ease-linear cursor-pointer"
										to={`/eng/info/${item.id}`}
										aria-label={item.id}
									>
										PLAY NOW
									</Link>
								</div>
							</div>
							<div className="overlay__trigger max-lg:hidden w-2/5 h-fit flex justify-center items-center">
								<Link to={`/eng/info/${item.id}`} aria-label={item.id}>
									<FontAwesomeIcon
										icon={faPlayCircle}
										className="w-16 h-16 rounded-full border-neutral-100 border-2 p-[1%] hover:border-transparent duration-200 ease-linear hover:text-orange-800 cursor-pointer"
									/>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default TopAiringENGComp
