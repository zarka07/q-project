<template>
  <div class="q-pa-md q-ml-auto q-mr-auto" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Имя *"
        hint="Имя ребенка"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Пожалуйста, введите имя']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Возраст *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Пожалуйста, введите возраст',
          val => val > 0 && val < 100 || 'Пожалуйста, введите реальный возраст'
        ]"
      />

      <q-input
        filled
        type="number"
        v-model="weight"
        label="Вес при рождении (г) *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Пожалуйста, введите вес в граммах',
          val => val > 0 && val < 6000 || 'Пожалуйста, введите реальный вес'
        ]"
      />
      <div class="q-pt-null q-mt-null" style="color:#19d26c;font-size:1.8em">
        Дата рождения:
      </div>
      <q-date v-model="model" 
          mask="YYYY-MM-DD HH:mm" 
          color="primary" 
          navigation-min-year-month="2020/07"
          
          />
      <div class="q-pt-null q-mt-null" style="color:#19d26c;font-size:1.8em">
        Время рождения:
      </div>
      <q-time v-model="model"
          mask="YYYY-MM-DD HH:mm" 
          color="primary" 
          format24h/>

      <!--<q-date
        v-model="birthdate"
        title:="name"
        subtitle="Дата рождения"
        today-btn
      />
      <q-input
        filled
        type="number"
        v-model="birthdate"
        label="Дата рождения *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Пожалуйста, дату рождения',
          val => val > 0 && val < 5 || 'Пожалуйста, введите реальную дату'
        ]"
      />-->

      <q-toggle v-model="accept" label="Я согласен с условиями использования приложения" />

      <div>
        <q-btn label="Подтвердить" type="submit" color="primary"/>
        <q-btn label="Сброс" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>
<script>
    import { useQuasar } from 'quasar'
    import { ref } from 'vue'
    
    export default {
    name: 'login',
        setup () {
            const $q = useQuasar()
            const name = ref(null)
            const age = ref(null)
            const weight = ref(null)
            //const model = ref(null)
            const accept = ref(false)
            return {
                name,
                age,
                weight,
                model: ref('2019-02-22 21:02'),
                accept,
                onSubmit () {
                    if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'Вы должны принять правила использования приложения'
                    })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Вы успешно добавили информацию'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        weight.value = null
        accept.value = false
        birthdate = false
      }
    }
  }
    }
</script>
