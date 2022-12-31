<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="addTask" placeholder="I need to do ..." />
        <button>Add</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useTaskStore } from './../store/TaskStore';
    export default {
        setup() {
            const taskStore = useTaskStore();
            const addTask = ref('');

            const handleSubmit = () => {
                if(addTask.value.length > 0){
                    taskStore.addTask({
                        title: addTask.value,
                        isFav: false,
                        id: Math.floor(Math.random()*10000)
                    })
                }
                addTask.value = ''
            }

            return {handleSubmit, addTask}
        }
    }
</script>