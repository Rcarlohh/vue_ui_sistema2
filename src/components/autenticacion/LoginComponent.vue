<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <v-card
                    elevation="4"
                    width="500"
                    class="mx-auto justify-md-center float-right"

                >
                    <v-toolbar dark class="nav-color">
                        <v-toolbar-title class="title-nav-bar-text">
                            <i class="fas fa-user-lock"></i> &nbsp;
                            !Bienvenido!</v-toolbar-title>
                    </v-toolbar>
                    <form @submit.prevent="handleForm">
                    <v-card-text>
                        <v-text-field
                        label="Nombre de Usuario"
                        outlined
                        v-model="usuario.usuarioName"
                        color="indigo"
                        clearable
                        dense
                        class="pa-1"
                        ></v-text-field>
                        <div class="text--primary">
                            <v-text-field
                            label="Password"
                            v-model="usuario.password"
                            outlined
                            color="indigo"
                            clearable
                            dense
                            class="pa-1"
                            type="password"
                            ></v-text-field>
                        </div>
                    </v-card-text>
                        <v-card-actions>
                            <v-btn outlined class="ma-1 pa-4 ml-auto" color="indigo" @click="validateUser">
                             <i class="fas fa-sign-in-alt"></i>&nbsp; Login
                            </v-btn>
                        </v-card-actions>
                    </form>
            </v-card>
                
            </div>
        </div>
    </div>
</template>

<style>
.nav-color{
    background: color #070707 !important;
}

.title-nav{
    color: white !important;
    font-family: "Roboto", "sant-serif";
    font-weight: 400;
}

.title-nav-bar-text{
    font-family: "Roboto", sans-serif;
    font-weight: 300;
}
</style>

<script>


export default {
    name: "LoginComponent",
    data(){
        return {
            
            usuario:{
                userName:"",
                password:"",
            }
        };
    },
    methods: {
        validateUser(){
            console.log(this.usuario.userName + ":" + this.usuario.password);
        },
    },
};
    
</script>
