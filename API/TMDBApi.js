const API_TOKEN = "6aae1749619e6e143c19d55af2b79f06"

export function getFilmsFromApiWithSearchedText(text) {

   const url = "https://api.themoviedb.org/3/search/movie?api_key="
              +API_TOKEN+ "&language=en&query=" +text

   return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}
