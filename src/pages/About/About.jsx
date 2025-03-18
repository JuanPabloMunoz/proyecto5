import { Header } from "../../components/Header/Header"
import Banner from "../../components/Imagenes/banner.jpg"
import './About.css'


export const About = ()=>{
    return(
        <>
          <Header 
            title='Sobre Nosotros...' 
            subtitle='Soluciones Informaticas, nos adaptamos a vuestras necesidades.'/>

             <div className="banner-about">
                    <img src={Banner} alt="about"/>
             </div>
        </>
    )
}