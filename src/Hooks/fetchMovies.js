const URL_BASE='https://imdb8.p.rapidapi.com/v2/search?searchTerm=star%20wars&type=move%7Cseries&first=20&country=US&language=en-US'

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f70447f694msh2a468be5e40a3c5p1e38a6jsn8b6854f78864',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};

//Petición Get a la API Star Wars, para obtener peliculas.
export const getAllMovies = async()=>{
    try{
        //const response=await fetch(`${URL_BASE}/options`);
        const response=await fetch(URL_BASE, options);//nueva linea de codigo
        if(!response.ok) throw new Error('Error al solicitar las peliculas');

         
          const result= await response.json();//nueba linea de codigo
         
          return result.data.mainSearch.edges;//nueva linea de codigo
       }catch (error){
         throw new Error(error);
    }
} 

