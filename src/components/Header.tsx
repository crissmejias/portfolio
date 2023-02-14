import { useState } from 'react'
import {Navbar} from './Navbar'
import logo from '../assets/logo.png'
import burgerMenu from '../assets/menu-burger.svg'
const Header = () => {
    const enableDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        }
    const [menu, setMenu] = useState(false);
    return(
        <header className={`w-full flex items-center justify-between   dark:border-gray-200 bg-[#EAEDFB] border-black border-[1px] m-[0.5px] dark:bg-gray-700 flex-col md:flex-row`}>            
                <div className={`flex justify-between w-full ${menu && "md:w-1/2"}`}>
                <img src={logo} alt="" className='mix-blend-darken dark:mix-blend-multiply border-none w-42 h-14 ml-4 rounded-xl' />
                <label className="relative inline-flex items-center cursor-pointer mx-auto md:mx-4">
                <input type="checkbox" value="" className="sr-only peer"  onClick={enableDarkMode}/>
                <div className="w-12 h-6 bg-[#5F6EE1]  peer-focus:outline-none rounded-full peer dark:peer-checked:bg-gray-200 peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
            </label>
                    <button onClick={()=>{setMenu(prevState=> !prevState)}} className="md:hidden"><img className='text-xs w-24 mr-4 h-10' src={burgerMenu}/></button>
                </div>
                <Navbar menu={menu}/>
        </header>
    )
}
export {Header}