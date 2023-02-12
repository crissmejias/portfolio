import { Link } from "react-router-dom"
type props = {
    menu: boolean
}
const Navbar = (props: props) => {
    return(
        <ul className={`${props.menu ? "hidden": "flex" } transition-all md:mr-10 md:flex flex-col md:flex-row`}>
            <Link to='/' className='link'>Home</Link>
            <Link to='/projects' className='link'>Projects</Link>
            <Link to='/contact' className='link'>Contact</Link>
        </ul>
    )
}
export {Navbar}