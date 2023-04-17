<template>
  <q-page class="login-page">
    <div class="login-form">
      <q-input v-model="username" label="CPF" />
      <br>
      <q-input v-model="password" label="Senha" type="password" />
      <q-btn label="Entrar" class="q-mt-md" id="btn-login" @click="login" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      //autenticacao
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  width: 400px;
  padding: 30px;
  background-color: #fff;
}

#btn-login{
  background-color: white;
}

</style>
