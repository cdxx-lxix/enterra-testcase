import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('casino', () => {
  const balance = ref(0)
  // const doRefreshBalance = computed(() => count.value * 2)
  const token = ref("")
  const refreshToken = ref("")

  // const doRefreshToken = computed(() => )

  return { balance, token, refreshToken }
})
