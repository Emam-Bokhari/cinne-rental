import { Fragment } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import MovieList from "./Cinema/MovieList"
import Footer from "./Footer"

const App = () => {
    return (
        <Fragment>

            <Navbar />

            <main>

                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">

                    <Sidebar />

                    <MovieList />

                </div>

            </main>

            <Footer />

        </Fragment>
    )
}
export default App