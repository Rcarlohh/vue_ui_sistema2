<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle tittle-app" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-bag-check logo-color"></i>
            Proveedores
        </a>
        <ul class="dropdown-menu">
            <router-link to="/form-registrar-proveedores" class="navl-link tittle-app">Registrar</router-link>
            <li><a class="dropdown-item" href="#">Manager</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Clientes</a></li>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'ProveedorCatalogoComponent'
};
</script>

<style></style>