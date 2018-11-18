<template>
    <v-container v-bind="{ ['grid-list-xs']: true }" fluid>
        <v-layout row wrap align-content-start ref="layout">
            <v-flex :style="mediaStyle"
                    :grow="false"
                    v-for="(photo, index) in photos"
                    :key="index"

            >
                <v-card
                        ref="element"
                >
                    <v-img
                            :src="photo.src"
                            :height="MIN_PHOTO_WIDTH"
                    >
                        <v-container
                                fill-height
                                fluid
                                pa-2
                        >
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text" v-text="photo.title"></span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <!--<v-card-actions>-->
                        <!--<v-spacer></v-spacer>-->
                        <!--<v-btn icon>-->
                            <!--<v-icon>favorite</v-icon>-->
                        <!--</v-btn>-->
                        <!--<v-btn icon>-->
                            <!--<v-icon>bookmark</v-icon>-->
                        <!--</v-btn>-->
                        <!--<v-btn icon>-->
                            <!--<v-icon>share</v-icon>-->
                        <!--</v-btn>-->
                    <!--</v-card-actions>-->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        MIN_PHOTO_WIDTH: 250,
        FLEX_K: 12,
        mediaStyle: '',
        width: {
            width: 0
        },
        // `https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`
        photos: [
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', },
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', }
        ]
    }),
    created () {
        const vm = this
        let mql = {}
        for (let i = this.MIN_PHOTO_WIDTH; i < 4000; i+= this.MIN_PHOTO_WIDTH) {
            mql[i] = window.matchMedia(`(min-width: ${i}px)`);
            mql[i].onchange = function () {
                let elementWidth;
                if ( window.matchMedia(`(min-width: ${i}px)`).matches) elementWidth = 100 / (i / vm.MIN_PHOTO_WIDTH)
                else elementWidth = 100 / ((i - vm.MIN_PHOTO_WIDTH) / vm.MIN_PHOTO_WIDTH)
                vm.mediaStyle = `width: ${elementWidth}%`
            }
        }
        vm.mediaStyle = `width: ${(100 / (document.body.clientWidth / this.MIN_PHOTO_WIDTH))}%`
    },
    computed: {
    },
    watch: {
    }
  }
</script>

<style scoped>
</style>
