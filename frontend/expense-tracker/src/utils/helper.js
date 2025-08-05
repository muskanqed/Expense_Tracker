export const validateEmail = (email) => {
    // This can be done using zod has well
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email);
}