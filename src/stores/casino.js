import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCasinoStore = defineStore('casino', () => {
  const balance = ref(0)
  // const doRefreshBalance = computed(() => count.value * 2)
  const token = ref('')
  const refreshToken = ref('')

  // Run this function every 800 seconds cuz' every 900 seconds the token expires
  const doRefreshToken = async () => {
    let data = {
      clientId: 'default',
      refreshToken: refreshToken.value
    }
    try {
      const response = await fetch(
        'https://poker.evenbetpoker.com/api/web/auth/token?clientId=default',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      token.value = responseData.token;
      refreshToken.value = responseData['refresh-token'];
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  }

  const isAuthenticated = ref(false)
  const loginUser = async (login, password) => {
    let data = {
      clientId: 'default',
      login: login,
      password: password
    }
    try {
      const response = await fetch(
        'https://poker.evenbetpoker.com/api/web/v2/login?clientId=default',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const responseData = await response.json()
      const attributes = responseData.data[0].attributes
      token.value = attributes.token
      refreshToken.value = attributes['refresh-token']
      isAuthenticated.value = true
      setInterval(() => {
        doRefreshToken()
      },  800 *  1000); // Updates token every 800 seconds (~13 min)
    } catch (error) {
      console.error('Fetch Error:', error)
    }
  }

  return { balance, token, refreshToken, isAuthenticated, loginUser, doRefreshToken }
})
