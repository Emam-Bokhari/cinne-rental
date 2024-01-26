import { Fragment, useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import MovieList from "./Cinema/MovieList"
import Footer from "./Footer"
import { MovieContext, ThemeContext } from "./context"


const App = () => {
    const [cartData, setCartData] = useState([])
    const [darkMode, setDarkMode] = useState(true)

    return (
        <Fragment>

            <ThemeContext.Provider value={{ darkMode, setDarkMode }} >

                <MovieContext.Provider value={{ cartData, setCartData }}>

                    <div className={`${darkMode ? "dark" : ""}`} >

                        <Navbar />

                        <main>

                            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">

                                <Sidebar />

                                <MovieList />

                            </div>

                        </main>

                        <Footer />

                    </div>

                </MovieContext.Provider>

            </ThemeContext.Provider>


        </Fragment>
    )
}
export default App