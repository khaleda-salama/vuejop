
<script setup>
import { ref, onMounted } from 'vue';

const name = ref('Khaled Salama');
    const status = ref('pending');
    const tasks = ref([
      'Task 1',
      'Task 2',
      'Task 3',
    ]);
    const newTask = ref('');

    const addTask = () => {
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      } 
    };

    const deleteTask = (task) => {
        tasks.value = tasks.value.filter(t => t !== task); 
    };

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'offline';
      } else {
        status.value = 'active';
      }
    };


onMounted(async () => {
   try {

     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
     const data = await response.json();
      tasks.value = data.map((task) => task.title);

   } catch (error) {
      console.error('Error fetching data:', error);
    }
   
});
</script>


<template>
  <h1>{{ name }}</h1>  
  <p v-if="status === 'active'">User is online</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is offline</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task:</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask"/>
    <button type="submit">Add</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      <span>
        {{ task }}  
      </span>
      <button @click="deleteTask(task)">X</button>
    </li>
  </ul>


  <button @click="toggleStatus">Change Status</button>
</template>



