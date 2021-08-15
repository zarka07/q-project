<template>
  <q-page class="flex flex-center">
    <div class="">
      <div class="q-col-gutter-md row items-start">
          <router-link v-for="button in buttons"
            tag="q-img"
            :key="button.url"
            :to="button.url"
          >
            <q-img class="q-ml-none" v-bind:src="button.img" style="height:96px,width:96px;
    "/>
            <div class="button_caption">{{button.title}}</div>
            
          </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
        
export default defineComponent({
  name: 'PageIndex',
  data:()=>({buttons:[
    {title:'Кормление',url:'pages/nutrition',img:'pacifier.png'},
    {title:'Сон',url:'/sleeping',img:'sleeping.png'},
    {title:'Купание',url:'/bath',img:'bath.png'},
    {title:'Сцеживание',url:'/milk',img:'milk.png'},
    {title:'Настройки',url:'/settings',img:'settings.png'}
  ]
  }),
})

</script>
<style scoped>
a{
  margin-right: 20px;
  width: 100px;
  height: 90px;
  text-decoration:none;
}
.button_caption{
  text-align: center;
}
</style>
