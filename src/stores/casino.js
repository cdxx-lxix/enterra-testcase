import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCasinoStore = defineStore('casino', () => {
  const balance = ref(0)
  // const doRefreshBalance = computed(() => count.value * 2)
  const token = ref('')
  const refreshToken = ref('')

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
      // TODO: YOU STOPPED HERE
      console.log('New Token:', token.value);
      console.log('New Refresh Token:', refreshToken.value);
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  }

  const isLogged = ref(false)
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
      console.log('Token:', token.value);
      console.log('Refresh Token:', refreshToken.value);
      isLogged.value = true
    } catch (error) {
      console.error('Fetch Error:', error)
    }
  }

  return { balance, token, refreshToken, isLogged, loginUser, doRefreshToken }
})
