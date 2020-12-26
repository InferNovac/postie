import { passwordHash } from "./Hash";

export const handleChange = (event, callback) => callback(event.target.value);

export const fetchData = (toResolve, callback) =>
    toResolve
        .then((data) => callback(data))
        .catch((error) => console.error(error));

export const collect = (elements) => {
    const pack = {};
    for (const element of elements) {
        const { name, value } = element;
        if (name.length > 0 && value.length > 0) {
            pack[name] = value;
        }
    }
    return { ...pack };
};

export const hashAndPack = (user) => {
    const [hash, salt] = passwordHash(user.password);
    return {
        ...user,
        salt: salt,
        password: hash,
    };
};
