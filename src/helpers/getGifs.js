// Crearse una función flecha
 export const getGifs = async( category ) =>{
    // Petición http para traer las imágenes de la categoria:
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=vE79LTjNJcX78kw4xWLvxkoqAiL9swPt`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    
}