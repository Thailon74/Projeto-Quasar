<template>
    <q-page padding style="min-height: 896px; margin-top: 220px">
      <img
        style="weight: 10px; width: 200px; margin-left: 120px"
        src="~assets/images/vacinado.png"
        alt=""
      />
      <font-awesome-icon icon="fa-solid fa-temperature-sun" />
      <p class="text-body1 text-center">
        Obrigado pelo seu registro <strong>{{ $route.query.email }}</strong
        >!
      </p>
      <div>
        <p class="text-body1 text-center">
          Confirme o registro no seu e-mail e prossiga por lá! Seja bem-vindo(a)!
        </p>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "PageEmailConfirmation",
  });
  </script>
  