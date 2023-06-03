export const getErrorMessage = (field) => {
    switch (field) {
        case "number":
            return "Invalid number";
        case "expiry":
            return "Invalid expiration date";
        case "cvc":
            return "Invalid CVC";
        case "name":
            return "Invalid name";
        default:
            return "";
    }
}