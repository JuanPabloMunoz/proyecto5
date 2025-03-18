//const URL_BASE="https://digi-api.com/api/v1";

/**
 * Petición Get a la API de digimons para obtener todos los digimons.
 * @returns {Promise<Array>}- Retorna un objeto con la informacion de los digimons en content, y la propiedad de paginación en pageable.
 */
const URL_BASE = 'https://imdb8.p.rapidapi.com/v2/search?searchTerm=star%20wars&type=move%7Cseries&first=20&country=US&language=en-US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f70447f694msh2a468be5e40a3c5p1e38a6jsn8b6854f78864',
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};
export const getAllMovies = async()=>{
    try{
        //const response=await fetch(`${URL_BASE}/digimon`);
        const response=await fetch(URL_BASE, options);//nueva linea de codigo
        if(!response.ok) throw new Error('Error al solicitar las peliculas');

          //const data= await response.json();
          const result= await response.json();//nueba linea de codigo
          //return data;
          return result.data.mainSearch.edges;//nueva linea de codigo
       }catch (error){
         throw new Error(error);
    }
} 

