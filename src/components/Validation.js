export const Validation = (data) => {

    const errors = {};

    if(!data.name.trim()) {
        errors.name = "نام کاربری را وارد کنید"
    } else {
        delete errors.name
    }

    if(!data.email) {
        errors.email = "ایمیل را وارد کنید"
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = "فرمت ایمیل صحیح نیست"
    } else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = "رمزعبور را وارد کنید"
    } else if(data.password.length < 6) {
        errors.password = "رمزعبور باید بیش از 6 کارکتر باشد"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = "تکرار رمزعبور را وارد کنید"
    } else if(data.confirmPassword !== data.password) {
        errors.confirmPassword = "تکرار رمزعبور با رمز عبور یکسان نیست"
    } else {
        delete errors.confirmPassword
    }

    if(!data.isAccepted) {
        errors.isAccepted = ""
    } else {
        delete errors.isAccepted
    }
    return errors;
};