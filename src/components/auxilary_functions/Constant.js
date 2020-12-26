import { passwordHash } from "./Hash";

export const fetchData = (toResolve, callback) =>
    toResolve
        .then((data) => callback(data))
        .catch((error) => console.error(error));

export const handleChange = (event, callback) => callback(event.target.value);

export const collect = (elements) => {
    const user = {};
    for (const element of elements) {
        const { name, value } = element;
        if (value.length > 0) {
            user[name] = value;
        }
    }
    return { ...user };
};

export const hashAndPack = (user) => {
    const [hash, salt] = passwordHash(user.password);
    return {
        ...user,
        salt: salt,
        password: hash,
    };
};
