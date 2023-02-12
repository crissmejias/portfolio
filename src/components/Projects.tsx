import { Card } from "./Card";
const Projects = () => {
    return(
        <div className="w-11/12 border-2 mx-auto flex flex-col justify-start gap-12 mt-4 rounded-lg bg-gray-700">
        <div className="mt-10">
            <p className="text-center text-4xl font-bold text-[#fff]">Projects</p>
        </div>
        <div className="w-full items-center flex flex-wrap justify-evenly rounded-lg  gap-6 mx-auto lg:grid lg:grid-cols-2 lg:place-items-center py-8">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
    )
}
export {Projects};