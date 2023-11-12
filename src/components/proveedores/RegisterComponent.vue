<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <v-card class="mx-auto">
                    <v-card-text>
                        <div>Datos Generales</div>
                        <p class="text-h4 text--primary">
                            Nuevo Proveedor
                        </p>
                        <v-divider>adjective</v-divider>
                        <div class="text--primary">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <ValidationProvider name="rfc" rules="required|max:13|min:12" v-slot="{errors}">
                                            <v-text-field
                                                label="RFC"
                                                outlined color="#f4a261"
                                                clearable dense
                                                :error-messages="errors"
                                                v-model="proveedor.rfc"
                                                @change="checkFields"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <ValidationProvider name="rsc" rules="required" v-slot="{errors }">
                                            <v-text-field
                                                label="Razón Social"
                                                outlined color="#f4a261"
                                                clearable dense
                                                :error-messages="errors"
                                                v-model="proveedor.RSC"
                                                @change="checkFields"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <ValidationProvider name="contacto" rules="required" v-slot="{errors}">
                                            <v-text-field
                                                label="Contacto"
                                                outlined dense
                                                :error-messages="errors" 
                                                clearable
                                                color="#f4a261"
                                                v-model="proveedor.Contacto"
                                                @change="checkFields"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                        <ValidationProvider name="Status" rules="required" v-slot="{errors}">
                                            <v-select
                                                
                                                :items="items"
                                                outlined
                                                :error-messages="errors"
                                                label="Status"
                                                placeholder="Status"
                                                item-text="nombre"
                                                item-value="id"
                                                required
                                                dense
                                                v-model="statusSelect"
                                                @change="checkFields"
                                            ></v-select>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 com-sm-12 col-md-4 col-lg-4">
                                        <ValidationProvider name="Tel_Principal" rules="required|max:10|min:10|" v-slot="{errors}">
                                            <v-text-field
                                                label="Tel.Principal"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                color="#f4a261"
                                                v-model="proveedor.telefonoPrincipal"
                                                @change="checkFields"
                                            ></v-text-field>
                                        </ValidationProvider>    
                                    </div>
                                    <div class="col-xs-12 com-sm-12 col-md-4 col-lg-4">
                                        <ValidationProvider name="Tel_Movil" rules="required|max:10|min:10|" v-slot="{errors}">
                                            <v-text-field
                                                label="Tel.Movil"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                color="#f4a261"
                                                v-model="proveedor.telefonoMovil"
                                                @change="checkFields"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 com-sm-12 col-md-4 col-lg-4">
                                        <ValidationProvider name="email" rules="required" v-slot="{errors}">
                                            <v-text-field
                                                label="Email"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                v-model="proveedor.email"
                                                @change="checkFields"
                                                color="#f4a261"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                </div>
                           <template>
                                <v-subheader>Direccion</v-subheader>
                            </template>
                            <template>
                                <div class="row">
                                    <div class="col-xs-12 com-sm-12 col-md-4 col-lg-4">
                                        <ValidationProvider name="cp" rules="required|numbersOnly" v-slot="{errors}">
                                            <v-text-field
                                                label="Código Postal"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                v-model="proveedor.CP"
                                                @change="checkFields"
                                                color="#f4a261"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 com-sm-12 col-md-4 col-lg-4">
                                        <ValidationProvider name="numInt" rules="required" v-slot="{errors}">
                                            <v-text-field
                                                label="Número Interior"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                color="#f4a261"
                                                @change="checkFields"
                                                v-model="proveedor.numInt"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 com-sm-12 col-md-4 col-lg-4">
                                        <ValidationProvider name-="numExt" rules="required" v-slot="{errors}">
                                            <v-text-field
                                                label="Número Exterior"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                color="#f4a261"
                                                v-model="proveedor.numExt"
                                                @change="checkFields"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <ValidationProvider name="calle" rules="required" v-slot="{errors}">
                                            <v-text-field
                                                label="Calle"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                color="#f4a261"
                                                @change="checkFields"
                                                v-model="proveedor.Calle"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <ValidationProvider name="colonia" rules="required" v-slot="{errors}">
                                            <v-text-field
                                                label="Colonia"
                                                outlined dense
                                                clearable
                                                :error-messages="errors"
                                                color="#f4a261"
                                                @change="checkFields"
                                                v-model="proveedor.Colonia"
                                            ></v-text-field>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                        <v-select
                                            :items="estados"
                                            outlined
                                            label="Entidad"
                                            dense
                                            placeholder="Estado"
                                            item-text="nombre_estado"
                                            item-value="id"
                                            v-model="entidadSelect"
                                            @change="checkFields"
                                        ></v-select>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                                        <v-select
                                            :municipio="municipios"
                                            outlined
                                            label="Municipio"
                                            dense
                                            item-text="nombre_municipio"
                                            item-value="id"
                                            v-model="municipioSelect"
                                            @change="checkFields"
                                        ></v-select>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="#2A9D8F" @click="saveProveedor" @click.prevent >
                            Guardar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <v-card class="mx-auto">
                    <v-card-text>
                        <div>Detalle del Proveedor</div>
                        <v-divider></v-divider>

                        <v-avatar class="justify-sm-center float-right" color="#D62728" size="60">
                            <span class="white--text text-h5"> {{ avatar_name }}</span>
                        </v-avatar>

                        <p class="flex-wrap-reverse"> Datos Capturados</p>
                        <div class="text--primary">

                            <v-list-item>
                                <v-list-item-title>RFC: <strong> {{ rfc }} </strong></v-list-item-title>
                            </v-list-item>

                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-chip class="ma-2" color="#2A9D8F" outlined>
                            <v-icon left> mdi-wrench </v-icon>
                            Update Settings
                        </v-chip>
                        <v-btn text color="#2A9D8F"> Learn More </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import { required, max, min } from 'vee-validate/dist/rules';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { regex } from "vee-validate/dist/rules";


extend('required', {
    ...required,
    message: 'Este campo es obligatorio',
});
extend('max', {
    ...max,
    message: 'Este campo no debe tener más de {length} caracteres',
});
extend('min', {
    ...min,
    message: 'Este campo debe tener al menos {length} caracteres',
});
extend("numbersOnly", {
  ...regex,
  message: "Este campo solo permite números",
  validate: (value) => {
    return /^[0-9]*$/.test(value);
  },
});

export default {

    name: "RegisterComponent",
    
    components: {
        ValidationObserver,
      ValidationProvider,
    },
    
    data() {
        return {
            datos: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            items: [],
            estados: [],
            municipios: [],
            statusSelect:null,
            entidadSelect: null ,
            municipioSelect: null,
            avatar_name: '',
            contacto: "",
            proveedor: {
                rfc: "",
                RSC: "",
                Contacto: "",
                telefonoPrincipal: "",
                telefonoMovil: "",
                email: "",
                CP: "",
                numInt: "",
                numExt: "",
                Calle: "",
                Colonia: "",
            },
            isDisabled: true,
            status: [],
        }
    },

    created(){

        fetch('https://localhost:44356/api/documentos/status').then(function (response){
            if(response.ok){
                return response.json();
            }
        }).then((response) => {
            const resultado = [];
            for(const item in response.data){
                console.log(response.data[item].nombre);
                resultado.push({id: response.data[item].id, nombre:response.data[item].nombre});
            }
            this.items = response.data.map(item => ({ id: item.id, nombre: item.nombre}));
        }).catch((error) => {
            alert(error);
            console.log(error);
            this.error = "No se pudo procesar la solicitud http correspondiente intente nuevamente";
        });

        fetch('https://localhost:44356/api/documentos/estados').then(function (response){
            if(response.ok){
                return response.json();
            }
        }).then((response) => {
            const resul = [];
            for(const estado in response.data){
                console.log(response.data[estado].nombre_estado);
                resul.push({id: response.data[estado].id, nombre_estado:response.data[estado].nombre_estado});
            }
            this.estados = response.data.map(estado => ({ id: estado.id, nombre_estado: estado.nombre_estado}));
        }).catch((error) => {
            alert(error);
            console.log(error);
            this.error = "No se pudo procesar la solicitud http correspondiente intente nuevamente";
        });

            fetch('https://localhost:44356/api/documentos/municipios').then(function (response){
                if(response.ok){
                    return response.json();
                }
            }).then((response) => {
                const result = [];
                for(const municipio in response.data){
                    console.log(response.data[municipio].nombre_municipio);
                    result.push({id: response.data[municipio].id, nombre_municipio:response.data[municipio].nombre_municipio});
                }
                this.municipios = response.data.map(municipio => ({ id: municipio.id, nombre_municipio: municipio.nombre_municipio}));
            }).catch((error) => {
                alert(error);
                console.log(error);
                this.error = "No se pudo procesar la solicitud http correspondiente intente nuevamente";
            });

    }, 

    methods: {
      checkFields() {
                if (!this.rfc || !this.RSC || !this.Contacto || !this.statusSelect || 
                    !this.telefonoPrincipal || !this.telefonoMovil || !this.email || !this.CP ||
                    !this.numInt || !this.numExt || !this.Calle || !this.Colonia || !this.entidadSelect || !this.municipioSelect) {
                    this.isDisabled = true; 
                } else {
                    this.isDisabled = false;
            }
        },
        saveProveedor(){
            fetch('https://localhost:44356/api/documentos/proveedor/registro', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({

                    rfc:this.proveedor.rfc,
                    rsc:this.proveedor.RSC,
                    contacto:this.proveedor.Contacto,
                    telefono_principal:this.proveedor.telefonoPrincipal,
                    telefono_movil:this.proveedor.telefonoMovil,
                    email:this.proveedor.email,
                    cp: this.proveedor.CP,
                    num_Int:this.proveedor.numInt,
                    num_Ext:this.proveedor.numExt,
                    calle:this.proveedor.Calle,
                    colonia:this.proveedor.Colonia,
                    estado:this.entidadSelect,
                }) ,
            });
        }
    },

    watch: {
        rfc(avatar) {
            if (avatar.length >= 2) {
                this.avatar_name = avatar.substring(0, 2).toUpperCase();
            } else {
                this.avatar_name = '';
            }
        },
    }
}
</script>

<style></style>