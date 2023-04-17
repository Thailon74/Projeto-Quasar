<template>
  <q-page class="page">
    <p>teste</p>

    <q-btn no-caps id="btn-cont">Continuar</q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DEPENDENTE',
  data() {
      return {}
  }
})
</script>

<style>

.page{
    background-color: #D9DADB;
}
 .page #btn-cont{
    background-color: #909090;
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 15%;
    font-size: 200%;
    color: white;

 }

</style>