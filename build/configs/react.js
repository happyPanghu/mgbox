const extend = require("extend");
const BaseFun = require("./base");
module.exports = extend({}, BaseFun(__dirname, {
    devServer: {
        port: 3003
    },
    dll: {
        assets: {
            //css: [`styles/elementUI.css`]
        },
        entry: {
            "vendor": ["babel-polyfill", "url-polyfill", "whatwg-fetch"],
            "vue": [ "vue/dist/vue.esm.js"],
            "vueRouter": [ "vue-router"],
            "vuex": [ "vuex"],
            //"elementUI": ["element-ui","element-ui/lib/theme-chalk/index.css"],
        }
    }
}));