import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { request } from '../utils'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment(amount) {
    count.value += amount
  }

  function decrement(amount) {
    count.value -= amount
  }

  async function submit() {
    const options = {
      count: count.value
    }

    const result = await request('apiSetCount', options)
    console.log(result)
  }

  return { count, doubleCount, increment, decrement, submit }
})
