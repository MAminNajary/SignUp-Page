export const Validation = (data) => {

    const errors = {};

    if(!data.name.trim()) {
        errors.name = "Name required"
    } else {
        delete errors.name
    }

    if(!data.email) {
        errors.email = "email required"
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = "invalid data"
    } else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = "password required"
    } else if(data.password.length < 6) {
        errors.password = "password 6 or more letter"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = "confirmPassword required"
    } else if(data.confirmPassword !== data.password) {
        errors.confirmPassword = "do not match"
    } else {
        delete errors.confirmPassword
    }

    if(!data.isAccepted) {
        errors.isAccepted = "please accept"
    } else {
        delete errors.isAccepted
    }
    return errors;
};