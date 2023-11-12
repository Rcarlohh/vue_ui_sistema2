<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-color" style="background-color:rgb(16, 16, 171) !important;" >
        <div class="container-fluid">
        <a class="navbar-brand title app title-nav" href="#">
            <i class="bi bi-cart4 logo-color" id="logo-compras"></i>
             CHARSTORE S.A</a>
             <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active title-app title-nav" aria-current="page" href="#">
                            <i class="fas fa-home"></i>
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/form" class="nav-link title-app title-nav">
                            <i class="fas fa-pen-square"></i>
                            Captura de datos
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/form-articulos" class="nav-link title-app title-nav">
                            <i class="fas fa-weight-hanging"></i>
                            Articulos
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle title-nav" href="#" role="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user-alt"></i>
                            Proveedores
                        </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/manager-proveedores" class="nav-link">
                                Administración</router-link>
                            </li>
                        <li><a class="dropdown-item" href="#">Agregar</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Más</a></li>
                    </ul>
                    </li>
                    
                </ul>
                <form class="d-flex" role="search">
                    <input 
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"/>
                    <button class="btn btn-outline-success title-nav" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    
</template>

<script>
import ProveedorCatalogoComponent from '../Navegacion/catalogos/ProveedorCatalogoComponent.vue'

export default {
    components: { ProveedorCatalogoComponent },
    name: "NavComponent",
};
</script>

<style scoped>
.nav-color {
    background-color: #840032 !important;
    color: white !important;
}

.title-nav {
    color: white !important;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
}
</style>