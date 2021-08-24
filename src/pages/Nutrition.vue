<template>
    
      <!--<q-item id="info" 
        class=" q-ml-auto q-mr-auto q-mt-md"
        style="">
            <p><b>Подсчет времени</b> </p>
      </q-item>-->
      <div class=" q-ml-auto q-mr-auto q-mt-md">
         <q-item class="flex flex-center q-mb-lg q-mt-lg">
          <Timer/>
        </q-item>
      </div>
    
</template>

<script>
import Timer from 'components/Timer.vue';


export default {
  name:'nutrition',
 
  data(){
    return {
      
    }
  },
  components:{
    Timer
  },
  methods: {
    
  },
}
</script>
<style scoped>
    #info{
        max-width: 120pt;
        height:25pt;
        border-radius:4px;
        background-color:#19d26c;
        color:white;
        text-align: center;
        padding-top: 8pt;
        padding-bottom: 4pt;
    }
    .submit{
        margin-left:auto;
        margin-right: auto;
    }
</style>
