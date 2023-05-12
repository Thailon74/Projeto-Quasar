<template>
  <q-form>
    <q-page class="page" :style="{ backgroundColor: bgColor }">
      <div class="superior">
        <div>
          <q-avatar square size="50px" class="configuracao">
            <img src="~assets/images/configuracao.png">
          </q-avatar>
        </div>

        <q-avatar size="150px" class="bebe">
          <img src="~assets/images/bebe.png" style="width: 90%; height: 90%;">
        </q-avatar>
        <label>Nome</label>

        <div>
          <q-avatar square size="50px" class="calendario">
            <img src="~assets/images/calendario.png">
          </q-avatar>
        </div>
      </div>
      <div class="inferior">
        <div class="registradas">
          <label>Registradas</label>
          <q-btn-group rounded style="background-color: #777777; width: 80%;">
            <q-avatar square size="50px">
              <img src="~assets/images/seringa.png" style="width: 80%; height: 80%; margin-left: 9px;">
            </q-avatar>
            <q-btn unelevated rounded style="background-color: bgColor; width: 100%; color: white;" label="Data - Nome vacina" />
          </q-btn-group>
        </div>
        <div class="futuras">
          <label>Vacinas Futuras</label>
          <q-btn-group rounded style="background-color: #777777; width: 80%;">
            <q-avatar square size="50px">
              <img src="~assets/images/seringa.png" style="width: 80%; height: 80%; margin-left: 9px;">
            </q-avatar>
            <q-btn unelevated rounded style="background-color: bgColor; width: 100%; color: white;" label="Data - Nome vacina" />
          </q-btn-group>
        </div>
        <div class="addVacin">
          <q-btn round style="background-color: #777777;" text-color="white">+</q-btn>
        </div>
      </div>
    </q-page>
  </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MENU',
  data() {
      return {
        bgColor: '#777777'
      }
  },

})
</script>

<style scoped>

label{
  font-family: 'bree-serif', sans-serif;
  font-size: 20px;
}

.bebe{
  position: absolute;
  border: 1px solid black;
  margin-top: 10%;
  margin-left: 30%;
}
.configuracao{
  position: absolute;
  margin-top: 22%;
  margin-left: 75%;
}
.calendario{
  position: absolute;
  margin-top: 22%;
  margin-left: 11%;
}
.inferior{
  background-color: #B7D7F8;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 35%;
}

.superior label{
  position: absolute;
  margin-top: 48%;
  margin-left: 42%;
}

.registradas{
  margin-top: 20%;
  text-align: center;
  margin-bottom: 10%;
}

.futuras{
  text-align: center;
}

.addVacin{
  position: absolute;
  margin-left: 85%;
  margin-top: 55%;
}
</style>
