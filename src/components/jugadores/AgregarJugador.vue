<template>
  <div>
    <h1>Agregar Jugador</h1>

    <form @submit.prevent="guardarJugador">
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
        <input
          v-model="jugador.lastEnglishTeam"
          placeholder="Último equipo inglés"
        />
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
        <input
          v-model="jugador.weightInKilos"
          type="number"
          placeholder="Peso en kilos"
        />
      </div>

      <div>
        <label>Altura (cm)</label>
        <input
          v-model="jugador.heightInCentimeters"
          type="number"
          placeholder="Altura en centímetros"
        />
      </div>

      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import apiClient from "../../common/api";
import { jugadorSchema } from "./jugadorSchema";

const router = useRouter();

const jugador = reactive({ ...jugadorSchema });

const guardarJugador = () => {
  apiClient
    .post("/player", jugador)

    .then((response) => {
      if (response.status === 201) {
        alert("Jugador agregado correctamente");

        jugador.value = { ...jugadorSchema };

        router.push("/jugador/list");
      }
    })

    .catch((error) => {
      console.log(error);
    });
};
</script>
