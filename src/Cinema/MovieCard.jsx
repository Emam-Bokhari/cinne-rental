import { Fragment, useState } from "react"
import starIcon from "./../assets/star.svg"
import tagIcon from "./../assets/tag.svg"
import { getImageUrl } from "./../utils/cine-utility"
import Rating from "./Rating"
import MovieDetailsModal from "./MovieDetailsModal"

const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false)

    // movieDetails Modal open
    function handleMovieDetailsModal() {
        setShowModal(true)
    }

    // movieDetails Modal close
    function handleModalClose(){
        setShowModal(false)
    }

    return (
        <Fragment>
            {showModal && <MovieDetailsModal movie={movie} onModalClose={handleModalClose} />}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a onClick={handleMovieDetailsModal} href="#">
                    <img className="w-full object-cover" src={getImageUrl(`${movie.cover}`)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.description}</p>
                        <div className="flex items-center space-x-1 mb-5">

                            {/* rating */}
                            <Rating rating={movie.rating} />

                        </div>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#">
                            <img src={tagIcon} alt="" />
                            <span>${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </a>
            </figure>
        </Fragment>
    )
}
export default MovieCard