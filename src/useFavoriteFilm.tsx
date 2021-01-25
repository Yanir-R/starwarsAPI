import React from 'react';

export const useFavoriteFilm = (key: string): [boolean, () => void] => {
    const localStorageKey = `favoriteFilm_${key}`
    const [data, setData] = React.useState(!!localStorage.getItem(localStorageKey))
    const toggle = () => {
        if (data) {
            localStorage.removeItem(localStorageKey)
        } else {
            localStorage.setItem(localStorageKey, 'favorite')
        }
        setData(!data);
    }
    return [data, toggle]
}