import { useState } from 'react'
import {Navbar} from './Navbar'
import logo from '../assets/logo.png'
import burgerMenu from '../assets/menu-burger.svg'
const Header = () => {
    const [menu, setMenu] = useState(false);
    return(
        <header className={`w-full flex items-center justify-between border-2 border-gray-200  rounded-lg bg-gray-700 flex-col md:flex-row`}>            
                <div className={`flex justify-between w-full ${menu && "md:w-1/2"}`}>
                    <img src={logo} alt="" className='mix-blend-multiply border-none w-42 h-14 ml-4 rounded-xl' />
                    <button onClick={()=>{setMenu(prevState=> !prevState)}} className="md:hidden"><img className='text-xs w-24 mr-4 h-10' src={burgerMenu}/></button>
                </div>
                <Navbar menu={menu}/>
        </header>
    )
}
export {Header}