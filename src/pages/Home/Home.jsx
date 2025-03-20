import { Header } from "../../components/Header/Header"
import portada from "../../components/Imagenes/portada.jpg"
import './Home.css'


export const Home = ()=>{
  return(
    <>
      
        <Header 
          color='info' 
          title='Star Wars Movies'
          subtitle='"Que la fuerza te acompañe..."'/>

          <div className="banner-home">
          <img src={portada} alt="Portada"/>
         </div>
      
   </>
      
  )
 
}

