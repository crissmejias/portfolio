import profile from '../assets/profile.jpg'
const Sidebar = () => {
    return(
        <div className=" w-11/12 md:w-11/12 mt-4 mx-auto bg-gray-700 rounded-lg border-2 border-gray-200 opacity-[35]">
            <div className="rounded-[92%] mt-12 w-[200px] border-none h-[200px] mx-auto bg-gray-900 opacity-45"> <img className='w-full h-full mix-blend-color-lighten rounded-full object-contain' src={profile} alt="" /></div>
            <div className=" my-2 flex  flex-col items-baseline gap-2">
                <p className="text-[#fff] font-bold text-xl text-center mx-auto">Cristhian Mejias Serrano</p>
                <p className="text-[#fff] font-bold text-md text-center mx-auto">Frontend Web Developer</p>
                <a href="https:/github.com/crissmejias" className='text-[#fff]  text-center inline-block m-auto' target="_blank"><i className='fi fi-brands-github' ></i> crissmejias</a>
                <a href="https:/twitter.com/crissmejias"className='text-[#fff]  text-center inline-block m-auto' target="_blank"><i className='fi fi-brands-twitter'></i> @crissmejias</a>
                <a href="https://linkedin.com/in/criss-mejias" className='text-[#fff]  text-center inline-block m-auto' target="_blank"><i className='fi fi-brands-linkedin'></i> in/criss-mejias</a>
            </div>
        </div>
    )
}
export {Sidebar};