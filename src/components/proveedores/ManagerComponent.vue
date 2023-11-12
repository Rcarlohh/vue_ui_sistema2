<template>
    <div class="container">
        <div class="col-xs12 col-sm-12 col-md-12 col-lg-12">
            <v-btn outlined color="indigo" class="pa-1 ml-auto ma-1 d-flex align-end flex-column" @click="navigateRegister">
                <v-icon dark>
                    mdi-plus
                </v-icon>
                Agregar Nuevo
            </v-btn>
            <v-card class="mx-auto
            max-width=100%" elevation="6">
                <v-card-text>
                    <div class="letter text-h4">Administracion de Proveedores</div>
                    <p class="letter">Filtro de Busqueda</p>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ManegerComponent',
    methods: {
        navigateRegister() {
            this.$router.push("/register-proveedores")
        }
    },
}
</script>

<style>
.letter {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
}
</style>