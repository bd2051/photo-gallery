import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TEST = true

const testPhotos = function () {return {
    title: `Photo${Math.floor(Math.random() * 100) + 1}`,
    src: `https://unsplash.it/${Math.floor(Math.random() * 1000) + 200}/${Math.floor(Math.random() * 1000) + 200}?image=${Math.floor(Math.random() * 100) + 1}`
}}

axios.defaults.baseURL = 'http://httpbin.org/'

const API = {
    getPhotos: 'get'
}

const store = new Vuex.Store({
    state: {
      photos: []
    },
    actions: {
        addPhotos({commit, lastNumber = 0}) {
            return new Promise((resolve) => {
                axios.get(API.getPhotos, {params: {number: lastNumber}}).then((response) => {
                    console.log(response)
                    let photos = [];
                    if (TEST) for (let i = 0; i < 50; i++) photos.push(testPhotos())
                    else photos = response.data.photos
                    commit('setPhotos', photos)
                    resolve()
                })
            })
        }
    },
    mutations: {
        setPhotos(state, photos) {
            state.photos = state.photos.concat(photos)
        }
    },
    getters: {
        getPhotos(state) {
            return state.photos
        }
    },
})

export default store
