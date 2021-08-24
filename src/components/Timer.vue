<template>
    <q-item v-show="showStart">
      <q-btn  class="glossy" color="teal" label="Старт" 
        @click="start_timer" progress="true"
      />
    </q-item>

    <q-item v-if="startTimer" class="afterStart">
      
      <q-item id="startTime" 
        class="flex inline shadow-box flex-center glossy q-pt-md q-mb-lg"
        :class="`shadow-10`" 
        style="">Время начала:<br> <b>{{formattedStartTimer}}</b>
      </q-item>

      <q-item v-if="endTimer" 
        class="flex inline shadow-box glossy flex-center q-pt-md q-mb-lg"
        :class="`shadow-10`" 
        style="padding-top:7px;border-radius:4px;background-color:#19d26c;color:white">
          С момента начала прошло:<br><b> {{minutesCount()}}</b>
      </q-item>
      

      <q-item  class="q-mb-lg">
        <q-spinner-clock id="spinner"
          v-show="showSpinner" 
          class="q-ma-none q-pl-none" 
          color="green" size="5.5em"/>
      </q-item>
      
      <q-item >
        <q-btn id="endButton" class="glossy" 
          v-show="showEnd"
          rounded color="deep-orange" label="Завершить" 
          @click="stopTimer" />
      </q-item>    
    </q-item>
  
</template>

<script>
import { date } from 'quasar'
import { useQuasar } from 'quasar'

const unit='seconds';

export default {
  setup () {
      const $q = useQuasar()
      return {
              onFin () {
                $q.notify({
                  color: 'green-5',
                  textColor: 'white',
                  icon: 'cloud_done',
                  message: 'Завершено'
                })
              }
            }
  },
  data:()=>({
      startTimer:null,
      formattedStartTimer:null,
      endTimer:null,
      formattedEndTimer:null,
      difference:null,
      progress:false,
      showStart:true,
      showSpinner:true,
      showEnd:true,
      
  }), 
  computed:{
    today(){
      let timeStamp = Date.now()
      return toDay=date.formatDate(timeStamp, 'hh:mm:ss')
    },
  },
  methods:{
      start_timer(){
        this.showStart=false
        this.startTimer=new Date()
        this.formattedStartTimer=date.formatDate(this.startTimer,'HH:mm:ss')
      },
      stopTimer(){
        this.showStart=false
        this.showSpinner=false
        this.showEnd=false
        this.endTimer=new Date()
        this.difference=date.getDateDiff(this.endTimer,this.startTimer,unit)
        this.onFin()
      }, 
      minutesCount(){
        let timestamp = this.difference;
        let hh = Math.floor(timestamp / 60 / 60)
        let mm = Math.floor(timestamp / 60) - (hh * 60)
        let ss = timestamp % 60
        return ( [hh.toString().padStart(2, '0'),
                mm.toString().padStart(2, '0'),
                ss.toString().padStart(2, '0')
              ].join(':'))
      }
  },
}
</script>

<style scoped>
  #spinner,#endButton,#startTime{
    display: block;
    margin-left: auto;
    margin-right: auto;
    position:inherit;
  }
  .afterStart{
    display: table-column;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  #startTime{
    border-radius:4px;
    background-color:teal;
    color:white;
    text-align:center;
    padding-top:14px
  }
  #endButton{
    text-align:center;
    padding-top:7px
  }
</style>