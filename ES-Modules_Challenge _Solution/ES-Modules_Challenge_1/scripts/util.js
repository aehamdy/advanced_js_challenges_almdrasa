const validateDay = (day) => {
    if (day && day > 0 && day <= 31) {
        return true;
    }
}

const validateMonth = (month) => {
    if (month && month > 0 && month <= 12) {
        return true;
    }
}

const validateYear = (year) => {
    const currentYear = new Date().getFullYear();
    if (year && year > 0 && year <= currentYear) {
        return true;
    }
}



export {validateDay, validateMonth, validateYear};