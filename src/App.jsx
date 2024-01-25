import { Fragment, useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import MovieList from "./Cinema/MovieList"
import Footer from "./Footer"
import { MovieContext } from "./context"


const App = () => {
    const [cartData, setCartData] = useState([])
    return (
        <Fragment>

            <MovieContext.Provider value={{ cartData, setCartData }}>

                <Navbar />

                <main>

                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">

                        <Sidebar />

                        <MovieList />

                    </div>

                </main>

                <Footer />

            </MovieContext.Provider>


        </Fragment>
    )
}
export default App