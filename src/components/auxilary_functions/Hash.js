import bcrypt from "bcryptjs";

export const passwordHash = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return [hash, salt];
};

export const passwordVerify = (password, salt) =>
    bcrypt.hashSync(password, salt);
