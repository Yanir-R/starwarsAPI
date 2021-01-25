import { FILMS_URL } from "./constants";

 export const api = {
     films: () => {
         return fetch(FILMS_URL).then(res => res.json())
     },
     film: (filmId: string ) => () => {
        return fetch(`${FILMS_URL}/${filmId}`).then(res => res.json())
    }
} 

