import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'
import VuexPersistence from 'vuex-persist'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// vue可持久化
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

// logger config
const vueLoggerConfig = {
    collapsed: false, // 自动展开记录的 mutation
    logger: console, // 自定义 console 实现，默认为 `console`
}

export default new Vuex.Store({
    modules: {
        test
    },
    strict: debug,
    plugins: debug ? [createLogger(vueLoggerConfig), vuexLocal.plugin] : [vuexLocal.plugin]
})