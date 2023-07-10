<template>
  <q-form>
    <q-page class="page" :style="{ backgroundColor: bgColor }">
      <q-toolbar style="border-bottom: 1px black solid ;">
        <q-btn flat dense color="white" icon="arrow_back" @click="retorna"/>
      </q-toolbar>

      <div v-for="(task, key) in tasks" :key="key" class="dependentes">
        <q-btn no-caps rounded class="btnDependente" :style="corSexo(task.sexo)" @click="OpenDepen(task.id)">
          <q-btn-item style="margin-left: -80%; position: absolute">
            <q-icon style="width: 50px;">
              <q-img src="~/assets/images/bebe.png" style="width: 50px; height: 50px;"/>
            </q-icon>
          </q-btn-item>
          <span style="font-size: 20px; color: black; position: absolute;">{{task.nome}}</span>
          <q-btn-item style="margin-left: 70%; position: absolute;">
            <q-icon style="width: 50px;">
              <q-img v-if="task.sexo == 'Masculino'" src="~/assets/images/garoto.png"  style="width: 50px; height: 50px;"/>
              <q-img v-else src="~/assets/images/menina.png"  style="width: 50px; height: 50px;"/>
            </q-icon>
          </q-btn-item>
        </q-btn>
      </div>

      <div class="addDepend">
        <q-btn no-caps rounded style="width: 75%; height: 60px; background-color: #D9DADB;" @click="confirmar">
          <q-btn-item>
            <q-icon style="width: 50px;">
              <span style="font-family: Arial, Helvetica, sans-serif; font-size: 50px; color: #777777;">+</span>
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
import { useQuasar } from 'quasar'
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
  name: 'MENU',
  setup() {
    const $q = useQuasar()
  },
  data() {
      return {
        bgColor: '#777777',
        bgColorM: '#B7D7F8',
        bgColorF: '#FFCEFE'
      }
  },
  computed: {
    ...mapGetters('tasks', ['tasks']),
  },
  methods:{
    ...mapActions('tasks', ['updateTask', 'deleteTask']),

    corSexo(sexo){
      var teste;
      sexo == "Masculino" ? teste= this.bgColorM : teste=this.bgColorF
      return "background-color: " + teste;
    },
    confirmar(){
      this.$router.push('/dependente')
    },
    OpenDepen(id){
      this.$router.push('/menu/' + id)
    },
    retorna(){
      this.$router.push('/login')
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

.btnDependente {
  width: 75%;
  height: 60px;
}
</style>
