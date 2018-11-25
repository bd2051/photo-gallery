<template>
    <v-card>
        <v-card-title
                class="headline grey lighten-2"
                primary-title
        >
            Редактировать
        </v-card-title>
        <v-card-text>
            Здесь будут поля для редактирования
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="success"
                    flat
                    @click="() => $emit('editerDialog')"
            >
                Ок
            </v-btn>
            <v-btn
                    color="error"
                    flat
                    @click="() => $emit('editerDialog')"
            >
                Отмена
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "EditerModal"
}
</script>

<style scoped>

</style>
