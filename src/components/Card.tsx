type props = {
    url: string
}
const Card = (props : props) => {
    return(
      
        <div style={{ backgroundImage: `url(${props.url})`
          }} className={`"w-full min-h-[400px] flex flex-col aspect-[4/5] items-center justify-between flex-wrap p-4 rounded-xl dark:bg-inherit bg-transparent blur-[0.5px] hover:shadow-lg hover:shadow-[#695858] border-black border-[1px]  group bg-blend-darken bg-center bg-[length:100%_auto] bg-no-repeat dark:hover:bg-gray-500 transition-colors`}>
            <h2 className="mt-4 font-bold text-xl text-start self-start ml-4 dark:group-hover:text-white group-hover:blur-[0.5px] transition-none">E-commerce: Tailwind & React</h2>
            <div className="mb-4 dark:text-white flex justify-evenly w-full ">
            <a href="https://github.com" target="_blank" className="z-50 blur-none cursor-pointer hidden text-3xl group-hover:inline"><i className='fi fi-brands-github' ></i></a>
            <a href="https://github.com" target="_blank" className="cursor-pointer hidden text-3xl group-hover:inline"><i className='fi fi-rr-window-alt group-hover:shadow-inner'></i></a>
            </div>
        </div>

    )
}
export {Card};