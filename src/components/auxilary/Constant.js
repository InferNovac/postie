import { passwordHash } from "./Hash";

const Notification = ({ info }) => (
    <ul>
        {info.map((line, index) => (
            <li key={index}>{line}</li>
        ))}
    </ul>
);

export const nameRegex = /^[a-zA-Z]+$/;
export const userNameRegex = /^[a-zA-Z]{6,}$/;
//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const IsValid = ({ check, incorrect, correct }) =>
    check ? <Notification info={correct} /> : <Notification info={incorrect} />;

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
