import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const uid = ref('')
  const username = ref('')


  // AUXILIAR FUNCTION TO SHOW THE STATE OF THE USER

  const showUser = () =>{
    console.log({
      uid: uid.value,
      username: username.value
    })
  }

  const getDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return day + '/' + month + '/' + year
  }


  return { uid, username, getDate, showUser }
})
