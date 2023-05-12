<template>
  <q-form>
    <q-page class="page" :style="{ backgroundColor: bgColor }">
      <div>
        <div>
          <q-avatar size="150px" class="bebe">
            <img src="~assets/images/bebe.png" style="width: 90%; height: 90%;">
          </q-avatar>
        </div>  
      </div>
  </q-page>
</q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MENU',
  data() {
      return {
      
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

.bebe{
  position: absolute;
  border: 1px solid black;
  margin-top: 10%;
  margin-left: 30%;
}

</style>
