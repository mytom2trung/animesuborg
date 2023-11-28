import { COLLECTIONS, COLLECTION_COLOR } from "../../../constants"
import { Link } from "react-router-dom"
import "./animecollectioncard.css"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"

// import required modules
import { Grid } from "swiper"

function AnimeCollectionCard(props) {
	const { collections } = props
	return (
		<>
			<div className="w-full h-[340px]">
				<Swiper
					slidesPerView="auto"
					grid={{
						rows: 2,
					}}
					spaceBetween={10}
					modules={[Grid]}
					className="collectionSwiper h-100 px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36"
				>
					{collections.map((collection, i) => (
						<SwiperSlide
							className="collection-card mx-[20px] my-[10px] w-[260px] max-md:w-[220px] h-[140px] bg-[#222] rounded"
							key={collection.slug}
						>
							<Link
								to={`/collection/${collection.slug}`}
								className="flex justify-center items-center h-100 w-full hover:opacity-40 duration-200 ease-in-out rounded p-[4px]"
								style={{
									background: `${COLLECTION_COLOR[i]}`,
								}}
								aria-label={collection.alt}
							>
								<div className="collection-card__title m-[4px]">
									<h4 className="text-[#191919] whitespace-pre-wrap font-bold uppercase">
										{collection.alt}
									</h4>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

export default AnimeCollectionCard
