<template>
  <q-form>
    <q-page class="page" :style="{ backgroundColor: bgColor }">
      <q-toolbar style="border-bottom: 1px black solid ;">
        <q-btn flat dense color="white" icon="arrow_back" @click="retorna"/>
      </q-toolbar>
      <div>
        <q-input rounded outlined label="Nome da vacina" class="input-nome" v-model="vacinaF.nome" :rules="[val => !!val || 'Este campo é obrigatório']"/>
        <q-input rounded outlined mask="##/##/####" label="Data da aplicação" class="input-data" v-model="vacinaF.data" :rules="[val => !!val || 'Este campo é obrigatório']"/>
        <q-btn no-caps id="btn-cont"  @click="adicionarVacina" >Continuar</q-btn>
      </div>
      </q-page>
    </q-form>
  </template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default defineComponent({
  name: 'MENU',
  setup() {
    const $q = useQuasar()
  },
  data() {
      return {
        bgColor: '#777777',
        task:{
          nome:'',
          dataNascimento:'',
          sexo:'',
          vacinas: [
            { nome: '', data: '' }
          ]
        },
        vacinaF:{
          nome:'', 
          data:''
        }

      }
  },
  computed: {
    ...mapGetters('tasks', ['getTask']),
    ...mapGetters('tasks', ['tasks']),
  },
  
  mounted() {
    this.task = {...this.getTask(this.$route.params.id)}
    if(this.task.sexo == "Masculino"){
      this.bgColor= '#B7D7F8'
    }else{
      this.bgColor= '#FFCEFE'
    }
  },
  methods:{
    ...mapActions('tasks', ['updateTaskVacina']),
    adicionarVacina(){
     let payload = {
          id: this.task.id,
          updates: this.vacinaF
        }
        this.updateTaskVacina(payload)
        this.$emit('close')
        this.$router.push('/menu/'+ this.task.id)
    },
    retorna(){
      this.$router.push('/menu/' + this.task.id)
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
</style>
