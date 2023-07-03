<template>
  <q-form
    @submit.prevent="handleLogin"
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
        <q-btn class="btn" rounded label="Login" id="btn-login" type="submit"/>
        <br>
        <br>
        <q-btn
              class="btn"
              label="Registre-se"
              rounded
              to="/register"
          />
      </div>
    </q-page>
  </q-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import userAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageLogin",

  setup() {
    const router = useRouter();

    const { login } = userAuthUser();

    const form = ref({
      email: "",
      password: "",
    });

    const handleLogin = async () => {
      try {
        await login(form.value);
        router.push('/menu/1');
      } catch (error) {
        alert(error);
      }
    };
    return {
      form,
      handleLogin,
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
