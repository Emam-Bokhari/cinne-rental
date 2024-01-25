import { Fragment } from "react"
import trendingIcon from "./assets/icons/trending.svg"
import newReleaseIcon from "./assets/icons/newRelease.svg"
import comingSoonIcon from "./assets/icons/commingSoon.svg"
import favouriteIcon from "./assets/icons/favourite.svg"
import watchLaterIcon from "./assets/icons/watchLater.svg"

const Sidebar = () => {
    return (
        <Fragment>
            <aside>
                <ul className="space-y-2">
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                            <img src={trendingIcon} width="24" height="24" alt="" />
                            <span>Trending</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={newReleaseIcon} width="24" height="24" alt="" />
                            <span>New Releases</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={comingSoonIcon} width="24" height="24" alt="" />
                            <span>Coming Soon</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={favouriteIcon} width="24" height="24" alt="" />
                            <span>Favourites</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={watchLaterIcon} width="24" height="24" alt="" />
                            <span>Watch Later</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </Fragment>
    )
}
export default Sidebar