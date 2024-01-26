import { Fragment, useState, useReducer } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import MovieList from "./Cinema/MovieList"
import Footer from "./Footer"
import { MovieContext, ThemeContext } from "./context"
import { cartReducer, initialState } from "./reducers/cartReducer"


const App = () => {
    const [darkMode, setDarkMode] = useState(true)
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <Fragment>

            <ThemeContext.Provider value={{ darkMode, setDarkMode }} >

                <MovieContext.Provider value={{ state, dispatch }}>

                    <div className={`h-full w-full ${darkMode ? "dark" : ""}`} >

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