import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TEST = true // выставить false, подключает генерилку и вывод в консоль, потом можно будет удалить вместе со строками где используется

const testPhotos = function () { // генерилка фоток ВНИМАНИЕ!!!! с сервера ожидаю данные с такими же названиями полей
    const src = `https://unsplash.it/${Math.floor(Math.random() * 1000) + 200}/${Math.floor(Math.random() * 1000) + 200}?image=${Math.floor(Math.random() * 100) + 1}`
    return {
        title: `Photo${Math.floor(Math.random() * 100) + 1}`,
        normalSrc: src,
        minSrc: src,
        date: Date.now() - Math.floor(Math.random() * 100000000000)
    }
}

axios.defaults.baseURL = 'http://httpbin.org/' // заменить на домен или неизменяймую часть апи, для относительного адреса просто удалить

const API = { // здесь вместо get вписать часть адреса соответствующее запросу
    getPhotos: 'get', // получение фоток, как парамет передаю number - индекс страницы, при первой загрузке 0, ожидаю response.data.photos
    deletePhoto: 'get' // удаление фотки, параметр name - имя фотки, ожидаю response.data.success
}

const store = new Vuex.Store({
    state: {
      photos: [],
      currentPage: 1
    },
    actions: {
        addPhotos({commit, lastNumber = 0}) {
            return new Promise((resolve, reject) => {
                axios.get(API.getPhotos, {params: {number: lastNumber}}).then((response) => {
                    if (TEST) console.log(response)
                    let photos = [];
                    if (TEST) for (let i = 0; i < 14; i++) photos.push(testPhotos())
                    else photos = response.data.photos
                    commit('setPhotos', photos)
                    resolve()
                }).catch(() => reject())
            })
        },
        deletePhoto( {commit, state} ) {
            axios.get(API.deletePhoto, {params: {name: state.photos[state.currentPage-1].title}}).then((response) => {
                if (TEST) console.log(response)
                if(TEST || response.data.success) commit('deletePhoto')
            }).catch((error) => console.warn(error))
        }
    },
    mutations: {
        setPhotos(state, photos) {
            state.photos = state.photos.concat(photos)
        },
        deletePhoto(state) {
            state.photos.splice(state.currentPage - 1, 1)
        },
        setCurrentPage(state, page) {
            state.currentPage = page
        },
    },
    getters: {
        getPhotos(state) {
            return state.photos
        },
        getCurrentPage(state) {
            return state.currentPage
        }
    },
})

export default store
