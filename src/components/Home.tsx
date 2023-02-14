import coffee from '../../public/coffee.gif'
import coding from '../../public/code.gif'
import ball from '../../public/ball.gif'
import guitar from '../../public/guitar.gif'
const Home = () => {
return(
    <section className="border-2 w-10/12 my-4 rounded-lg mx-auto bg-gray-700 flex flex-col items-center justify-start gap-8 flex-wrap py-4">
        <div className="mx-auto">
            <h2 className="text-center text-3xl text-white font-bold">About Me</h2>
            <p className='text-white text-lg mt-4 mx-8 text-center'>I'm a Frontend Developer based in Colombia, I like building User Interfaces using JavaScript with React Ecosystem.</p>
            <p className='text-white text-lg mt-4 mx-8 text-center'>Here you will find some of my personal projects and blogs I've posted about Frontend Development.</p>
        </div>
        <div className="w-1/2">
            <h2 className="text-center text-3xl text-white font-bold">My Stack</h2>
        </div>
        <div className='text-4xl grid grid-cols-4 gap-8'>
        <i className="devicon-html5-plain colored"></i>    
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-tailwindcss-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-typescript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-graphql-plain colored"></i>
        <i className="devicon-git-plain colored"></i>
        </div>
        <div className="mt-4 w-1/2 mx-auto flex flex-col gap-8">
            <h2 className="text-center text-3xl text-white font-bold">My Interests</h2>
            <div className='grid grid-rows-2 grid-cols-2 place-items-center gap-2 w-1/2 mx-auto'>
            <img src={coding} alt="Coding" className='w-12' />
            <img src={ball} alt="Coding" className='w-12'/>
            <img src={guitar} alt="Coding" className='w-12'/>
            <img src={coffee} alt="Coding" className='w-12'/>
            </div>
        </div>
    </section>
)
}
export {Home};