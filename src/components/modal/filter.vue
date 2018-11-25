<template>
    <v-card>
        <v-card-title
                class="headline grey lighten-2"
                primary-title
        >
            Фильтр
        </v-card-title>

        <v-card-text>
            Здесь будут поля фильтра
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="success"
                    flat
                    @click="onClick"
            >
                Ок
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'FilterModal',
    props: ['filterDialog'],
    methods: {
        onClick () {
            this.$emit('filterDialog')
        }
    }
}
</script>

<style scoped>

</style>
