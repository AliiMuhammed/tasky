
export const validateLogin = ({ email, password }) => {
    const errors = {};

    // Email validation
    if (!email.trim()) {
        errors.email = "Email is required.";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
        errors.email = "Invalid email address.";
    }

    // Password validation
    if (!password) {
        errors.password = "Password is required.";
    }

    return errors;
};
