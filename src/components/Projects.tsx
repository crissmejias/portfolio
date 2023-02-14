import { Card } from "./Card";
import portfolio from '../assets/image.png'
const Projects = () => {
    return(
        <div className="w-10/12 md:w-1/2 h-98 md:h-5/6 mx-auto flex flex-col justify-start gap-2 my-4 rounded-lg dark:bg-gray-700 bg-[#EAEDFB] shadow-lg shadow-[#695858]  border-black border-[1px] ">
        <div className="mt-8">
            <p className="text-center text-4xl font-bold dark:text-[#fff]">Projects</p>
        </div>
        <div className="items-center flex flex-wrap justify-evenly rounded-lg gap-8 mx-8 md:grid md:grid-cols-2 md:place-items-center py-4">
            <Card url={portfolio}/>
            <Card url={portfolio}/>
            
        </div>
        </div>
    )
}
export {Projects};