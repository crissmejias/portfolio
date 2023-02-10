import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
const App = ()  => {
return(
    <>
    <Header/>
        <Routes>
        <Route path="/"/>
        <Route path="/projects"/>
        <Route path="/contact"/>
        </Routes>
    </>
)
}
export {App};