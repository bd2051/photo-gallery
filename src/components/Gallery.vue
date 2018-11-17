<template>
    <v-container v-bind="{ ['grid-list-xs']: true }" fluid>
        <v-layout row wrap ref="layout">
            <v-flex
                    v-for="(photo, index) in photos"
                    v-bind="{ [`xs${computedFlex}`]: true }"
                    :key="index"
            >
                <v-card ref="element">
                    <v-img
                            :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
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
        console.log(this.$refs)
    },
    computed: {
        computedFlex() {
            return Math.floor(this.FLEX_K / (screen.width / this.MIN_PHOTO_WIDTH))
        }
    },
    watch: {
    }
  }
</script>

<style>

</style>
