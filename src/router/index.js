import { createRouter, createWebHistory } from "vue-router";

import ListarJugadores from "../components/jugadores/ListarJugadores.vue";

const routes = [
  {
    path: "/jugador/list",
    component: ListarJugadores
  },
  {
    path: "/jugador/add",
    component: () =>
      import("../components/jugadores/AgregarJugador.vue")
  },
  {
    path: "/jugador/update/:id",
    component: () =>
      import("../components/jugadores/ActualizarJugador.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;