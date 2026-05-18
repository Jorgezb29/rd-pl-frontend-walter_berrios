<template>
  <div>

    <h1>Actualizar Jugador</h1>

    <form @submit.prevent="actualizarJugador">

      <div>
        <label>ID: {{ jugador._id }}</label>
      </div>

      <div>
        <label>Nombre</label>
        <input v-model="jugador.name" placeholder="Nombre" />
      </div>

      <div>
        <label>País</label>
        <input v-model="jugador.country" placeholder="País" />
      </div>

      <div>
        <label>Edad</label>
        <input v-model="jugador.age" type="number" placeholder="Edad" />
      </div>

      <div>
        <label>Último equipo inglés</label>
        <input v-model="jugador.lastEnglishTeam" placeholder="Último equipo inglés" />
      </div>

      <div>
        <label>Posición</label>
        <input v-model="jugador.position" placeholder="Posición" />
      </div>

      <div>
        <label>¿Está retirado?</label>
        <input v-model="jugador.isRetired" type="checkbox" />
      </div>

      <div>
        <label>¿Ganador de FA Cup?</label>
        <input v-model="jugador.isFACupWinner" type="checkbox" />
      </div>

      <div>
        <label>Peso (kg)</label>
        <input v-model="jugador.weightInKilos" type="number" placeholder="Peso en kilos" />
      </div>

      <div>
        <label>Altura (cm)</label>
        <input v-model="jugador.heightInCentimeters" type="number" placeholder="Altura en centímetros" />
      </div>

      <button type="submit">Actualizar</button>

    </form>

  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import apiClient from "../../common/api";
import { jugadorSchema } from "./jugadorSchema";

const route = useRoute();
const router = useRouter();

const jugador = reactive({ ...jugadorSchema });

const obtenerJugador = () => {

  apiClient
    .get(`/player/${route.params.id}/get`)

    .then((response) => {

      Object.assign(jugador, response.data);

    })

    .catch((error) => {

      console.log(error);

    });

};

const actualizarJugador = () => {

  apiClient
    .put(`/player/${route.params.id}/update`, jugador)

    .then((response) => {

      if (response.status === 200) {

        router.push("/jugador/list");

      }

    })

    .catch((error) => {

      console.log(error);

    });

};

onMounted(() => {

  obtenerJugador();

});
</script>
