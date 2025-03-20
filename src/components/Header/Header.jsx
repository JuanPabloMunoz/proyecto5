import './Header.css'


export const Header = ({ title, subtitle })=>{
  return(
    <>
      <header>
        <div className="titulo"><h1>{title}</h1></div>
        <div className="subtitle"><p>{subtitle}</p>
        </div>
      </header>
    </>
  )
}