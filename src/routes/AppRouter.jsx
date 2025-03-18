import { Route, Routes } from "react-router-dom"
import BasicExample from "../components/NavBar/Menu"
import { Home } from "../pages/Home/Home"
import { About} from "../pages/About/About";
import { MoviesList } from "../pages/MoviesList/MoviesList";
import { NotFound } from "../pages/NotFound/NotFound";
import { lazy, Suspense } from "react";



export const AppRouter =()=>{
    return(
        <>
        <BasicExample />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/peliculas' element={<MoviesList />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        
        </>
    )
}