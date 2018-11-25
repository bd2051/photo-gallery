import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TEST = true

const testPhotos = function () {
    const src = `https://unsplash.it/${Math.floor(Math.random() * 1000) + 200}/${Math.floor(Math.random() * 1000) + 200}?image=${Math.floor(Math.random() * 100) + 1}`
    return {
        title: `Photo${Math.floor(Math.random() * 100) + 1}`,
        normalSrc: src,
        minSrc: src,
        date: Date.now() - Math.floor(Math.random() * 100000000000)
    }
}

axios.defaults.baseURL = 'http://httpbin.org/'

const API = {
    getPhotos: 'get'
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
                    let photos = [];
                    if (TEST) for (let i = 0; i < 50; i++) photos.push(testPhotos())
                    else photos = response.data.photos
                    commit('setPhotos', photos)
                    resolve()
                }).catch(() => reject())
            })
        }
    },
    mutations: {
        setPhotos(state, photos) {
            state.photos = state.photos.concat(photos)
        },
        setCurrentPage(state, page) {
            state.currentPage = page
        }
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
