<template>
  <nav>
    <RouterLink to="/jugador/add">
      Agregar Jugador
    </RouterLink>

    |

    <RouterLink to="/jugador/list">
      Listar Jugadores
    </RouterLink>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>