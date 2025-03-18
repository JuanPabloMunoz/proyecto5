import Error from "../../components/Imagenes/error.png"
import "./NotFound.css"


export const NotFound = ()=>{
    return(
        <>
          
             <div className="banner-error">
                    <img src={Error} alt="error"/>
             </div>
        </>
    )
}