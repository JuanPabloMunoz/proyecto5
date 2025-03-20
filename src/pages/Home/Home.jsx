import { ErrorBoundary } from "react-error-boundary"
import { Header } from "../../components/Header/Header"
import portada from "../../components/Imagenes/portada.jpg"
import './Home.css'
import { ErrorFallback } from "../../components/Error/ErrorFallBack"

export const Home = ()=>{
  return(
    <>
      <ErrorBoundary FallingComponent = {ErrorFallback}>
        <Header 
          color='info' 
          title='Star Wars Movies'
          subtitle='"Que la fuerza te acompañe..."'/>

          <div className="banner-home">
          <img src={portada} alt="Portada"/>
         </div>
      </ErrorBoundary>
   </>
      
  )
 
}

