<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title >
          <a href="/" clickable v-ripple target="_self" 
          style="color:white;text-decoration:none;">Мамин помощник</a>
        </q-toolbar-title>
        <div >
          
        </div>
        
        <div id="date">{{today}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="leftDrawerTitle"
          target="_self"
        >
          Навигация
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          exact
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Кормление',
    link: '#/nutrition',
  },
  {
    title: 'Сон',
    link: '#/sleeping'
  },
  {
    title: 'Купание',
    link: '#/bath'
  },
  {
    title: 'Сцеживание',
    link: '#/milk'
  },/*
  {
    title: 'Питание мамы',
    link: ''
  },
  {
    title: 'Зарядка для мамы',
    link: ''
  },
  {
    title: 'Заметки',
    link: ''
  },*/
  {
    title: 'Настройки',
    link: '#/settings'
  }
];
import {date} from 'quasar'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  
  components: {
    EssentialLink
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed:{
    today(){
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'Do MMMM')
    },
    /*timeNow(){
          let timeStamp = Date.now()
          return setInterval(function(){
            date.formatDate(timeStamp, 'ss')
          },1000)
        },-----not work*/
    
  },

})

</script>

<style scoped>
  .leftDrawerTitle{
    color:#19d26c
  }
  

</style>