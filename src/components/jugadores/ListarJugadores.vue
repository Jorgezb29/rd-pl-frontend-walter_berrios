<template>
  <div>

    <h1>Lista de Jugadores</h1>

    <p v-if="jugadores.length === 0">Cargando registros...</p>

    <table border="1" v-else>

      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>País</th>
          <th>Edad</th>
          <th>Último equipo inglés</th>
          <th>Posición</th>
          <th>¿Retirado?</th>
          <th>¿FA Cup?</th>
          <th>Peso (kg)</th>
          <th>Altura (cm)</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>

        <tr
          v-for="jugador in jugadores"
          :key="jugador._id"
        >

          <td>{{ jugador._id }}</td>
          <td>{{ jugador.name }}</td>
          <td>{{ jugador.country }}</td>
          <td>{{ jugador.age }}</td>
          <td>{{ jugador.lastEnglishTeam }}</td>
          <td>{{ jugador.position }}</td>
          <td>{{ jugador.isRetired ? "Sí" : "No" }}</td>
          <td>{{ jugador.isFACupWinner ? "Sí" : "No" }}</td>
          <td>{{ jugador.weightInKilos }}</td>
          <td>{{ jugador.heightInCentimeters }}</td>

          <td>

            <RouterLink
              class="btn-editar"
              :to="`/jugador/update/${jugador._id?.toString() ?? jugador._id}`"
            >
              Editar
            </RouterLink>

            |

            <button
              class="btn-eliminar"
              @click="eliminarJugador(jugador)"
            >
              Eliminar
            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import apiClient from "../../common/api";

const jugadores = ref([]);

const obtenerJugadores = () => {

  apiClient
    .get("/players")

    .then((response) => {

      jugadores.value = response.data;

    })

    .catch((error) => {

      console.log(error);

    });

};

const eliminarJugador = (id) => {

  const confirmar = confirm("¿Desea eliminar el jugador?");

  if (!confirmar) return;

  apiClient
    .delete(`/player/${id}/delete`)

    .then((response) => {

      if (response.status === 200) {

        alert("Jugador eliminado correctamente");

        obtenerJugadores();

      }

    })

    .catch((error) => {

      console.log(error);

    });

};

onMounted(() => {

  obtenerJugadores();

});
</script>