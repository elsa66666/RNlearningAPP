export default {
    /**
     * 校验手机号码
     * @param {Number} phone
     */
    validatePhone(phone) {
        const reg = /^1[3|4|5|7|8][0-9]\\d{4,8}$/;
        return reg.test(phone)
    }
}