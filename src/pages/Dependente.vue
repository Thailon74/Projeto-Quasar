<template>
  <q-page class="page">
    <div>
      <q-avatar square size="50px" class="menina">
        <img src="~assets/images/menina.png">
      </q-avatar>
      <q-avatar size="150px" class="bebe">
        <img src="~assets/images/bebe.png" style="width: 90%; height: 90%;">
      </q-avatar>
      <q-avatar square size="50px" class="garoto">
        <img src="~assets/images/garoto.png">
      </q-avatar>
    </div>
    <div>
      <q-input rounded outlined label="Nome" class="input-nome" v-model="nome"/>
      <q-input rounded outlined label="Data de Nascimento" class="input-data" v-model="dataNasciment"/>
      <q-btn no-caps id="btn-cont">Continuar</q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DEPENDENTE',
  data() {
      return {
        nome: '',
        dataNasciment: '',
      }
  }
})
</script>

<style scoped> 

.page{
  background-color: #D9DADB;
}
.page #btn-cont{
  background-color: #909090;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 15%;
  margin-left: 0%;
  font-size: 200%;
  color: white;
  font-family: 'bree-serif', sans-serif;
}

.input-data{
  position: absolute;
  width: 75%;
  bottom: 48%;
  margin-left: 10%;
}

.input-nome{
  position: absolute;
  width: 75%;
  bottom: 58%;
  margin-left: 10%;
}

.bebe{
  position: absolute;
  border: 1px solid black;
  margin-top: 10%;
  margin-left: 30%;
}
.garoto{
  position: absolute;
  margin-top: 22%;
  margin-left: 75%;
}
.menina{
  position: absolute;
  margin-top: 22%;
  margin-left: 11%;
}

</style>