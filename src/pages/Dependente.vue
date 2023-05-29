<template>
  <q-form @submit="onSubmit">
    <q-page class="page" :style="{ backgroundColor: bgColor }">
      <div>
        <div class="menina">
          <q-btn no-caps round class="btnSexo" @click="changeColorGirl">
            <img src="~assets/images/menina.png" style="width: 90%; height: 90%;">
          </q-btn>
        </div>
        <div>
          <q-avatar size="150px" class="bebe">
            <img src="~assets/images/bebe.png" style="width: 90%; height: 90%;">
          </q-avatar>
        </div>
        <div class="garoto">
          <q-btn no-caps round class="btnSexo" @click="changeColorBoy">
            <img src="~assets/images/garoto.png" style="width: 90%; height: 90%;">
          </q-btn>
        </div>
      </div>
      <div>
        <q-input rounded outlined label="Nome" class="input-nome" v-model="task.nome" :rules="[val => !!val || 'Este campo é obrigatório']"/>
        <q-input rounded outlined mask="##/##/####" label="Data de Nascimento" class="input-data" v-model="task.dataNascimento" :rules="[val => !!val || 'Este campo é obrigatório']"/>
        <q-btn no-caps type="submit" id="btn-cont" @click="showNotif">Continuar</q-btn>
      </div>
    </q-page>
  </q-form>
  <input type="hidden" v-model="task.sexo">
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'DEPENDENTE',

  setup(){
    const $q = useQuasar()

    return{
      showNotif(){
        $q.notify({
          message: 'Dependente adicionado',
          icon: 'announcement',
          color: 'positive'
        })
      }
    }
  },
  data() {
    return {
      task:{
        nome: '',
        dataNascimento: '',
        sexo:''
      },
      bgColor: '#D9DADB'
    }
  },
  computed: {
    ...mapGetters('tasks', ['getTask']),
  },
  methods: {
    ...mapActions('tasks', ['addTask', 'updateTask']),
    changeColorBoy(){
      this.bgColor= '#B7D7F8'
      this.task.sexo='Masculino'
    },
    changeColorGirl(){
      this.bgColor= '#FFCEFE'
      this.task.sexo='Ferminino'
    },
    onSubmit(){
      this.addTask(this.task)
      this.$emit('close')
      this.$router.push('/config')
    }
  },
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

.btnSexo{
  width: 50%;
  height: 50%;
  box-shadow: none !important;
}


</style>
