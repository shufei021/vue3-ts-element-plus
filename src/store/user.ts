import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      name: 'hhh',
      age: 18
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
    updateAge(age: number) {
      this.age = age
    }
  }
})
