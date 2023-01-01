<template>
  <main>
    <!-- header -->
    <header>
      <img src="./assets/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- Add task form -->
    <div class="add-new-form">
      <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Task</button>
      <button @click="filter = 'favs'">Fav Task</button>
    </nav>
    <!-- loading -->
    <div class="loading" v-if="loading">Tasks loading ...</div>
    <!-- Task list -->
    <div class="tasks-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} taks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <!-- fav list -->
    <div class="tasks-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs task left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <button @click="taskStore.$reset" class="reset">Reset</button>
  </main>
</template>

<script>
import { ref } from '@vue/reactivity';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from "./store/TaskStore";
import { storeToRefs } from 'pinia';
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();
    const { favCount, totalCount, tasks, loading, favs } = storeToRefs(taskStore);
    taskStore.getTasks();
    const filter = ref('all')
    return { taskStore, filter, favCount, totalCount, tasks, loading, favs };
  },
};
</script>
