export default {
    changeCity (state, city) {
        state.city = city
        // 此方法中的state为state方法中定义的所有数据
        try {
            localStorage.city = city
        } catch (e) {}
    }
}
