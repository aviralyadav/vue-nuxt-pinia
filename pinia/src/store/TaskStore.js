import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: 'Buy Milk', isFav: false},
            {id: 2, title: 'Buy Vegetables', isFav: true}
        ],
        name: 'Yashi'
    })
})