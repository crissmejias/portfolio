import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Blog } from "./components/Blog";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Download } from "./components/Download";
const App = ()  => {
return(
    <>
    <Header/>
    <div className="flex flex-col md:flex-row bg-[#C06868] dark:bg-gray-900 pb-12 transition-colors">
        <div className="w-11/12 md:w-1/3 mx-auto flex flex-col gap-4">
        <Sidebar/>
        <Download />
        </div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/blog" element={<Blog/>}/>
        </Routes>
    </div>
    </>
)
}
export {App};