import { getErrorMessage } from "./error"

const cardNumberRegex = /^[0-9]{16}$/
const expiryDateRegex = /^(0[1-9]|1[0-2])(2[3-8])$/
const cvcRegex = /^[0-9]{3}$/
const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/
const letterInput = /^[A-Za-z\s]$/
const numberInput = /^[0-9]$/

export const isFieldValid = (field, value) => {
    const lastInsertedCharacter = value.charAt(value.length - 1);
    if (field === "number" || field === "expiry" || field === "cvc") {
        return numberInput.test(lastInsertedCharacter);
    }
    return letterInput.test(lastInsertedCharacter)
}

export const isFormValid = (data) => {
    if (!isCardNumberValid(data.number)) {
        return getErrorMessage("number")
    }
    if (!isExpiryDateValid(data.expiry)) {
        return getErrorMessage("expiry")
    }
    if (!isCvcValid(data.cvc)) {
        return getErrorMessage("cvc")
    }
    return !isNameValid(data.name) ? getErrorMessage("name") : "";
}

export const areAllFieldsPopulated = (data) => {
    const { number, expiry, cvc, name } = data;
    return !!number && !!expiry && !!cvc && !!name;
}

const isCardNumberValid = (cardNumber) => {
    return cardNumberRegex.test(cardNumber);
}

const isExpiryDateValid = (expiryDate) => {
    console.log(expiryDate);
    return expiryDateRegex.test(expiryDate);
}

const isCvcValid = (cvc) => {
    return cvcRegex.test(cvc);
}

const isNameValid = (name) => {
    return nameRegex.test(name);
}