<template>
  <q-form>
    <q-page class="login-page">
      <div class="row" style="height: 100%;">
        <div class="col col-5" style="margin-top: 30%; margin-left: 30%;">
          <q-avatar square size="150px">
            <img src="~assets/images/vacinado.png">
          </q-avatar>
        </div>
      </div>
      <div class="login-form">
        <q-input v-model="username" label="CPF" />
        <br>
        <q-input v-model="password" label="Senha" type="password" />
        <br>
        <q-btn rounded label="Login" id="btn-login" @click="login" style="width: 100%; background-color: white;"/>
        <br>
        <br>
        <label style="margin-left: 40%; font-size: medium;">Registre-se</label>
      </div>
    </q-page>
  </q-form>
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
  background-color: #D9DADB;
}

.login-form{
  padding: 5%;
  margin-top: 25%;
}

</style>
