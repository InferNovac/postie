export const fetchData = (toResolve, callback) =>
    toResolve
        .then((data) => callback(data))
        .catch((error) => console.error(error));
