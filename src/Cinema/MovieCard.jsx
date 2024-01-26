import { Fragment, useContext, useState } from "react"
import starIcon from "./../assets/star.svg"
import tagIcon from "./../assets/tag.svg"
import { getImageUrl } from "./../utils/cine-utility"
import Rating from "./Rating"
import MovieDetailsModal from "./MovieDetailsModal"
import { MovieContext } from "../context"

const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const { state, dispatch } = useContext(MovieContext)

    function handleAddToCart(event, movie) {
        event.stopPropagation()
        // console.log(movie)

        const found = state.cartData.find((item) => {
            return item.id === movie.id;
        });

        if (!found) {
            dispatch({
                type:"Add_To_Cart",
                payload:{
                    ...movie 
                }
            })
            // setCartData([
            //     ...cartData,
            //     movie
            // ])
        } else {
            alert(`This ${movie.title} is already added!`)
        }


    }


    // movieDetails Modal close
    function handleModalClose() {
        setSelectedMovie(null)
        setShowModal(false)
    }

    // movieDetails Modal open
    function handleMovieSelection(movie) {
        setSelectedMovie(movie)
        setShowModal(true)
    }

    return (
        <Fragment>
            {showModal && <MovieDetailsModal movie={selectedMovie} onModalClose={handleModalClose} onCartAdd={handleAddToCart} />}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a onClick={() => handleMovieSelection(movie)} href="#">
                    <img className="w-full object-cover" src={getImageUrl(`${movie.cover}`)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.description}</p>
                        <div className="flex items-center space-x-1 mb-5">

                            {/* rating */}
                            <Rating rating={movie.rating} />

                        </div>
                        <a
                            onClick={(event) => handleAddToCart(event, movie)}
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
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