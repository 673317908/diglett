export function validate_mobile(value) {
    let regMobile = /^((\(\d{2,3}\))|(\d{3}\-))?1(3|5|8|9)\d{9}$/;
    return regMobile.test(value);
}