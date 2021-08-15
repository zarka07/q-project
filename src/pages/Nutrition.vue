<template>
    <q-page class="flex flex-center">
      <div class=" q-ml-auto q-mr-auto">
        <q-item class="flex flex-center ">
          <p>{{pagename}} - подсчет времени</p>
        </q-item>

         <q-item class="flex flex-center ">
          <Timer/>
        </q-item>
      </div>
      
    </q-page>
</template>

<script>
import Timer from 'components/Timer.vue'

export default {
  name:'nutrition',
  data(){
    return {
      pagename: 'Кормление'
    }
    
  },
  components:{
    Timer
  }
}
</script>

