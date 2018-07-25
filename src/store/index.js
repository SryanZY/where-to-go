import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions: {
        changeCity (ctx, city) {
            ctx.commit('changeCity', city)
            // ctx是一个上下文对象
        }
    },
    mutations,
    getters: {
        doubleCity (state) {
            return state.city + '' + state.city
        }
    }
})
