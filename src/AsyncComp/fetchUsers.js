export const fetchUsers = (url) => {
    if (typeof url !== 'string') return false

    return fetch(url)
        .then(response => response.json())
        .then(json => json)
        .catch(e => e)
}