<template>
    
      <q-item id="info" 
        class=" q-ml-auto q-mr-auto q-mt-md"
        style="">
          
            <p><b>{{pagename}}</b> подсчет времени</p>
            
    </q-item>
    <div class=" q-ml-auto q-mr-auto q-mt-md">
         <q-item class="flex flex-center q-mb-lg q-mt-lg">
          <Timer/>
        </q-item>
    </div>
    
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
  },
  /*created: function() {
    axios.get('/assets/products.json').then(response => {
      this.products = response.data.products;
      
    });
  }*/
}
</script>
<style scoped>
    #info{
        max-width: 120pt;
        height:50pt;
        border-radius:4px;
        background-color:#19d26c;
        color:white;
        text-align: center;
        padding-top: 5pt;
        padding-bottom: 5pt;
    }
    .submit{
        margin-left:auto;
        margin-right: auto;
    }
</style>
