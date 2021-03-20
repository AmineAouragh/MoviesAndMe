const API_TOKEN = "6aae1749619e6e143c19d55af2b79f06"

export function getFilmsFromApiWithSearchedText(text) {

   const url = "https://api.themoviedb.org/3/search/movie?api_key="
              +API_TOKEN+ "&language=en&query=" +text

   return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}

// Get the Poster URL of films from TMDB API with name as the movie title

export function getImageFromApi(name) {
  // w300 means an image with a width of 300
  return 'https://image.tmdb.org/t/p/w300' + name
}
