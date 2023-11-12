<template>
  <v-app>
    <nav-component />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavComponent from './components/Navegacion/NavComponent.vue'
export default {
  components: { NavComponent },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
