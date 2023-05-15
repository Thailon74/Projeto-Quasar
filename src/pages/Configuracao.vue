<template>
  <q-form>
    <q-page class="page" :style="{ backgroundColor: bgColor }">
      <q-toolbar style="border-bottom: 1px black solid ;">
        <q-btn flat dense color="white" icon="arrow_back"/>
      </q-toolbar>
      <div class="dependentes">
        <q-btn no-caps rounded style="width: 75%; height: 60px; background-color: #B7D7F8;">
          <q-btn-item style="margin-left: -80%; position: absolute">
            <q-icon style="width: 50px;">
              <q-img src="~/assets/images/bebe.png" style="width: 50px; height: 50px;"/>
            </q-icon>
          </q-btn-item>
          <span style="font-size: 20px; color: black; position: fixed;">Nome</span>
          <q-btn-item style="margin-left: 70%; position: absolute;">
            <q-icon style="width: 50px;">
              <q-img src="~/assets/images/garoto.png" style="width: 50px; height: 50px;"/>
            </q-icon>
          </q-btn-item>
        </q-btn>
      </div>
      <div class="addDepend">
        <q-btn no-caps rounded style="width: 75%; height: 60px; background-color: #D9DADB;">
          <q-btn-item>
            <q-icon style="width: 50px;">
              <span style="font-size: 50px; color: #777777;">+</span>
            </q-icon>
          </q-btn-item>
          <span>Adicionar Dependente</span>
        </q-btn>
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

span{
  font-family: 'bree-serif', sans-serif;
  font-size: 20px;
}

.dependentes{
  width: 100%;
  margin-left: 10%;
  margin-top: 15%;
}

.addDepend{
  width: 100%;
  margin-left: 10%;
  margin-top: 10%;
}
</style>
