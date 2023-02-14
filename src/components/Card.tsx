type props = {
    url: string
}
const Card = (props : props) => {
    return(
      
        <div style={{ backgroundImage: `url(${props.url})`
          }} className={`"w-4/6 md:w-5/6 h-96 flex flex-col items-center justify-between rounded-xl group bg-blend-lighten bg-[length:100%_auto] bg-no-repeat hover:bg-gray-500 transition-colors`}>
            <h2 className="mt-4 font-bold text-xl text-start self-start ml-4 group-hover:text-white">E-commerce: Tailwind & React</h2>
            <div className="mb-4 text-white flex justify-evenly w-full ">
            <a href="https://github.com" target="_blank" className="z-50 blur-none cursor-pointer hidden text-3xl group-hover:inline"><i className='fi fi-brands-github' ></i></a>
            <a href="https://github.com" target="_blank" className="cursor-pointer hidden text-3xl group-hover:inline"><i className='fi fi-rr-window-alt'></i></a>
            </div>
        </div>

    )
}
export {Card};