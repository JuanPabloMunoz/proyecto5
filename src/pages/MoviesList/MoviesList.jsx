import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { getAllMovies } from "../../Hooks/fetchMovies";
import { Suspense, useEffect, useState } from "react";
import './MoviesList.css';




export const MoviesList =()=>{

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const getMovies = async ()=>{
      try{
        const edges = await getAllMovies();
        const moviesData = edges.map((edge)=>{
          const entity = edge.node.entity;
          return{
            title: entity.titleText.text,
            imageUrl: entity.primaryImage?.url,
            year: entity.releaseDate?.year,
            imbdLink: `https://www.imdb.com/title/${entity.id}`,
            
          };
        });
        setMovies(moviesData);
        setLoading(false);
      }catch(error){
        console.error('Error, no encontramos la pelicula:', error);
      }
    };
    
    getMovies();
  },[])
  


           
    return(
        <>
        <Header 
         title='Listado de Peliculas' 
         subtitle='Juntos gobernaremos la galaxia...'/>

           
           <div className="moviesListContainer">
            {loading && <h1>Cargando...</h1>}
           {movies.map((movie,index) =>(
            <Card 
            key={index} 
            title={movie.title}
            imageUrl={movie.imageUrl}
            year={movie.year}
            imbdLink={movie.imbdLink}
            
            />
            
           ))}
           </div>



        </>

    );
};