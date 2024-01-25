import { Fragment, useContext, useState } from "react"
import logo from "./assets/logo.svg"
import ringIcon from "./assets/ring.svg"
import sunIcon from "./assets/icons/sun.svg"
import cartIcon from "./assets/shopping-cart.svg"
import CartDetails from "./Cinema/CartDetails"
import { MovieContext } from "./context"

const Navbar = () => {
	const [showCart, setShowCart] = useState(false)
	const { cartData } = useContext(MovieContext)

	function handleShowCart() {
		setShowCart(true)
	}

	// console.log(cartData)

	





	return (
		<Fragment>
			{showCart && <CartDetails  onClose={() => setShowCart(false)} />}
			<header>
				<nav className="container flex items-center justify-between space-x-10 py-6">
					<a href="index.html">
						<img src={logo} width="139" height="26" alt="" />
					</a>

					<ul className="flex items-center space-x-5">
						<li>

							<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
								<img src={ringIcon} width="24" height="24" alt="" />
							</a>
						</li>
						<li>
							<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
								<img src={sunIcon} width="24" height="24" alt="" />
							</a>
						</li>
						<li>
							<a
								onClick={handleShowCart}
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
								<img src={cartIcon} width="24" height="24" alt="" />
								{cartData.length > 0 && <span className="rounded-full absolute top-[-12px] left-[22px] bg-[#12CF6F] text-white text-center w-[22px] h-[22px] " >{cartData.length}</span>}
							</a>

						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	)
}
export default Navbar