<template>
    <q-form
        @submit.prevent="handleRegister"
    >
      <q-page class="login-page">
        <div class="row" style="height: 100%;">
          <div class="col col-5" style="margin-top: 30%; margin-left: 30%;">
            <q-avatar square size="150px">
              <img src="~assets/images/vacinado.png">
            </q-avatar>
          </div>
        </div>
        <div class="login-form">
          <q-input v-model="form.email" label="E-mail" />
          <br>
          <q-input v-model="form.password" label="Senha" type="password" />
          <br>
          <q-btn class="btn" rounded label="Voltar" to="/"/>
          <br>
          <br>
          <q-btn class="btn" rounded label="Registrar" id="btn-login" type="submit"/>
        </div>
      </q-page>
    </q-form>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import useAuthUser from "src/composables/UseAuthUser";
  import { useRouter } from "vue-router";
  import { useQuasar } from 'quasar';
  
  export default defineComponent({
    name: "PageRegister",
  
    setup() {
      const $q = useQuasar();

      const router = useRouter();
      const { register } = useAuthUser();
      const form = ref({
        name: "",
        email: "",
        password: "",
      });
  
      const handleRegister = async () => {
        try {
          await register(form.value);
          router.push({
            name: "email-confirmation",
            query: { email: form.value.email },
          });
        } catch (error) {
            $q.notify({
                message: error.message,
                icon: 'announcement',
                color: 'red'
            })
        }
      };
  
      return {
        form,
        handleRegister,
      };
    },
  });
  </script>
  
  <style scoped>
  .login-page {
    background-color: #D9DADB;
  }
  
  .login-form{
    padding: 5%;
    margin-top: 25%;
  }
  
  .btn {
    width: 100%;
    background-color: white;
  }
  
  .btn:hover {
    background-color: grey;
  }
  
  </style>
  