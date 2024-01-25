import { Fragment } from "react"
import starIcon from "../assets/star.svg"

const Rating = ({ rating }) => {
    const stars = Array(rating).fill(starIcon)
    // console.log(stars)
    return (
        <Fragment>
            {stars.map((star,index) => (
                <img key={index} src={star} height="14" width="14" alt="star" />
            ))}
        </Fragment>
    )
}
export default Rating