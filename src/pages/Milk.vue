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

        <q-form class="q-mt-lg" @submit="onSubmit">
            <q-input class="q-ml-auto q-mr-auto "
                v-model.number="model"
                type="number"
                filled
                style="max-width: 300px;"
                hint="Введите количество сцеженного молока в мл"
                :rules="[
                    val => !!val || '* Поле обязательно для заполнения',
                    val => val > 0 || '* Введите положительное число',
                    val => val < 200 || '* Максимально возможное количество - 200мл',
                    ]"
                lazy-rules
                />
                
            <div class="flex flex-cente q-mt-md">
                <q-btn type="submit" 
                    class="q-ml-auto q-mr-auto"
                    style="width:100pt;"
                    label="Подтвердить"
                    color="teal" />
            </div>
        </q-form>
      </div>
</template>
<script>
    import Timer from 'components/Timer.vue'
    import { useQuasar } from 'quasar'
    import { ref } from 'vue'
    export default {
        name:'milk',
        components:{
            Timer
        },
        data(){
            return {
                
            }
        },
        setup () {
            const $q = useQuasar()
            const model = ref(null)
            return {
                model,
                onSubmit () {
                    if (model < 1) {
                        $q.notify({
                            color: 'red-5',
                            textColor: 'white',
                            icon: 'warning',
                            message: 'Введите количество сцеженного молока'
                        })
                    }
                    else {
                        $q.notify({
                            color: 'green-4',
                            textColor: 'white',
                            icon: 'cloud_done',
                            message: 'Запись успешно сохранена'
                        })
                    }
                },
            }
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