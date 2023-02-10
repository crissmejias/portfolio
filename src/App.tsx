import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
const App = ()  => {
return(
    <>
    <Header/>
    <div className="w-full h-screen grid grid-rows-[1fr_1fr] md:grid-cols-[450px_1fr] md:grid-rows-1 bg-gray-900">
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects"/>
        <Route path="/contact"/>
        </Routes>
    </div>
    </>
)
}
export {App};