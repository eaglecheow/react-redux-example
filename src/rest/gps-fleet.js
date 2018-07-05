const BASE_ADDRESS = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = () => {
    return fetch(BASE_ADDRESS);
}