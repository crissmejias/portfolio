import reactLogo from '../assets/react.svg'
const Home = () => {
return(
    <section className="border-2 w-11/12 mt-4 rounded-lg mx-auto bg-gray-700 flex flex-col items-center justify-start gap-8 flex-wrap py-4">
        <div className="mt-4">
            <h2 className="text-center text-3xl text-white font-bold">About Me</h2>
            <p className='text-white text-lg mt-4 mx-8 text-center'>I'm a Frontend Developer based in Colombia, I like building User Interfaces using JavaScript with React Ecosystem.</p>
            <p className='text-white text-lg mt-4 mx-8 text-center'>Here you will find some of my personal projects and blogs I've posted about Frontend Development.</p>
        </div>
        <div className="mt-4 w-1/2">
            <h2 className="text-center text-3xl text-white font-bold">My Stack</h2>
        </div>
        <div className='text-4xl flex gap-4 flex-wrap'>
        <i className="devicon-html5-plain colored"></i>    
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-tailwindcss-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-typescript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-git-plain colored"></i>
        </div>
    </section>
)
}
export {Home};