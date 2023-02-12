import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
const App = ()  => {
return(
    <>
    <Header/>
    <div className="w-full flex flex-col md:grid  md:grid-cols-[450px_auto] md:grid-rows-1 bg-gray-900">
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact"/>
        </Routes>
    </div>
    </>
)
}
export {App};