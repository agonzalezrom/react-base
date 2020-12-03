export const ValidateEmail = (email) => {
    const regEx = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
    return regEx.test(email);
}