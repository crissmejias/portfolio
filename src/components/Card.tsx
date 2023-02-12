const Card = () => {
    return(
        <div className="w-4/6 h-96  flex flex-col items-center justify-between bg-[#fff] rounded-xl group  hover:bg-gray-500 transition-colors">
            <h2 className="mt-4 font-bold text-xl text-start self-start ml-4 group-hover:text-white ">E-commerce: Tailwind & React</h2>
            <div className="mb-4 text-white flex justify-evenly w-full ">
            <a href="https://github.com" target="_blank" className="cursor-pointer"><i className='fi fi-brands-github' ></i></a>
            <a href="https://github.com" target="_blank" className="cursor-pointer"><i className='fi fi-rr-window-alt'></i></a>
            </div>
        </div>

    )
}
export {Card};