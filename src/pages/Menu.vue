<template>
  <q-form>
    <q-page class="page" :style="{ backgroundColor: bgColor2 }">
        <div class="superior">
          <div>
            <q-avatar square size="50px" class="configuracao" @click="trocarDepend">
              <img src="~assets/images/configuracao.png">
            </q-avatar>
          </div>
          
          <q-avatar size="150px" class="bebe">
            <img src="~assets/images/bebe.png" style="width: 90%; height: 90%;">
          </q-avatar>
          <label> {{dependente.nome}}</label>
          
          <div>
            <q-avatar square size="50px" class="calendario">
              <img src="~assets/images/calendario.png">
            </q-avatar>
          </div>
        </div>
        <div class="inferior" :style="{ backgroundColor: bgColor }">
          <div class="registradas">
            <label>Registradas</label>
          </div>
          <div v-for="(vacina, key) in dependente.vacinas" :key="key">
            <div v-if="isDataMenor(vacina.data)" class="vacinas">
              <q-btn-group rounded style="background-color: #777777; width: 80%;">
                <q-avatar square size="50px">
                  <img src="~assets/images/seringa.png" style="width: 80%; height: 80%; margin-left: 9px;">
                </q-avatar>
                <q-btn unelevated rounded style="background-color: bgColor; width: 100%; color: white;">{{ vacina.nome }} - {{ vacina.data }}</q-btn>
              </q-btn-group>
            </div>
          </div>
          <div class="registradas">
            <label>Vacinas Futuras</label>
          </div>
          <div v-for="(vacina, key) in dependente.vacinas" :key="key">
            <div  v-if="isDataMaior(vacina.data)" class="vacinas">
              <q-btn-group rounded style="background-color: #777777; width: 80%;">
                <q-avatar square size="50px">
                  <img src="~assets/images/seringa.png" style="width: 80%; height: 80%; margin-left: 9px;">
                </q-avatar>
                <q-btn unelevated rounded style="background-color: bgColor; width: 100%; color: white;">{{ vacina.nome }} - {{ vacina.data }}</q-btn>
              </q-btn-group>
            </div>
          </div>
          
          <div class="addVacin">
            <q-btn round style="background-color: #777777;" text-color="white" @click="novoRegistro(dependente.id)">+</q-btn>
          </div>
        </div>
      </q-page>
  </q-form>
</template>

<script>
import { date } from 'quasar'
import { defineComponent } from 'vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default defineComponent({
  name: 'MENU',
  data() {
      return {
        bgColor: '#777777',
        bgColor2: '#777777',
        dependente: {},
        registros: [],
      }
  }, 
  computed: {
      ...mapGetters('tasks', ['getTask']),
      ...mapGetters('tasks', ['tasks']),
  },
  methods: {
    trocarDepend(){ 
      this.$router.push('/config')
    },
    isDataMaior(data) {
      const dataAtual = new Date();
      const dataComparacao = new Date(data);

      return dataComparacao > dataAtual;
    },
    isDataMenor(data) {
      const dataAtual = new Date();
      const dataComparacao = new Date(data);

      return dataComparacao < dataAtual;
    },
    novoRegistro(id){
      this.$router.push('/vacinas/' +id)
    },

  },
  mounted() {
    this.dependente = {...this.getTask(this.$route.params.id)}

    if(this.dependente.sexo == "Masculino"){
      this.bgColor= '#B7D7F8'
    }else{
      this.bgColor= '#FFCEFE'
    }
  }
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
}

.vacinas{
  margin-top: 5%;
  text-align: center;
}

.addVacin{
  position: absolute;
  margin-left: 85%;
  margin-top: 10%;
}
</style>
