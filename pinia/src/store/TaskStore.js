import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: 'Buy Milk', isFav: false},
            {id: 2, title: 'Buy Vegetables', isFav: true}
        ],
        name: 'Yashi'
    }),
    getters: {
        favs(){
            return this.tasks.filter(t => t.isFav)
        },
        favCount(){
            return this.tasks.reduce((p, c)=>{
                return c.isFav ? p+1 : p
            }, 0)
        },
        totalCount: (state)=>{
            return state.tasks.length
        }
    },
    actions: {
        addTask(task){
            return this.tasks.push(task);
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(item=>item.id !== id);
        },
        toggleFav(id){
            const task = this.tasks.find(itm=>itm.id === id);
            task.isFav = !task.isFav
        }

    }
})