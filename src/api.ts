import { FILMS_URL } from "./constants";

export const api = {
    films: () => {
        return fetch(FILMS_URL).then((res) => res.json());
    },
    film: (filmId: string) => async () => {
        const filmDTO = await fetch(`${FILMS_URL}/${filmId}`).then((res) =>
            res.json()
        );
        filmDTO.data = {
            planets: await api.resources(filmDTO.planets),
            vehicles: await api.resources(filmDTO.vehicles),
            starships: await api.resources(filmDTO.starships),
        };
        return filmDTO;
    },
    resources: (resources: string[]) => {
        return Promise.all(
            resources.map((resource) => fetch(resource).then((res) => res.json()))
        );
    },
};