<template>
  <q-form>
    <q-page class="page" :style="{ backgroundColor: bgColor }">
      <div>
        <div @click="changeColorGirl">
          <q-avatar square size="50px" class="menina">
            <img src="~assets/images/menina.png">
          </q-avatar>
        </div>
        <div>
          <q-avatar size="150px" class="bebe">
            <img src="~assets/images/bebe.png" style="width: 90%; height: 90%;">
          </q-avatar>
        </div>
        <div @click="changeColorBoy">
          <q-avatar square size="50px" class="garoto">
            <img src="~assets/images/garoto.png">
          </q-avatar>
        </div>
      </div>
      <div>
        <q-input rounded outlined label="Nome" class="input-nome" v-model="nome" :rules="[val => !!val || 'Este campo é obrigatório']"/>
        <q-input rounded outlined label="Data de Nascimento" class="input-data" v-model="dataNasciment" :rules="[val => !!val || 'Este campo é obrigatório']"/>
        <q-btn no-caps type="submit" id="btn-cont">Continuar</q-btn>
      </div>
    </q-page>
  </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DEPENDENTE',
  data() {
      return {
        nome: '',
        dataNasciment: '',
        bgColor: '#D9DADB'
      }
  },
  methods: {
    changeColorBoy(){
      this.bgColor= '#B7D7F8'
    },
    changeColorGirl(){
      this.bgColor= '#FFCEFE'
    },
    submit(){
      
    }
  }
})
</script>

<style scoped>

.page #btn-cont{
  background-color: #777777;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 15%;
  margin-left: 0%;
  font-size: 250%;
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
