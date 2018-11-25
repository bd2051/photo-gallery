<template>
    <v-card>
        <v-card-title
                class="headline grey lighten-2"
                primary-title
        >
            Удаление
        </v-card-title>
        <v-card-text>
            Хотите удалить текущий файл?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="success"
                    flat
                    @click="onClickOK"
            >
                Ок
            </v-btn>
            <v-btn
                    color="error"
                    flat
                    @click="() => $emit('deleteDialog')"
            >
                Отмена
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "DeletePhotoModal",
    computed: {
    },
    methods: {
        ...mapActions(['deletePhoto']),
        onClickOK () {
            this.deletePhoto()
            this.$emit('deleteDialog')
        }
    }
}
</script>

<style scoped>

</style>
