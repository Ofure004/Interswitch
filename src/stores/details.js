import { defineStore } from 'pinia'

export const useDetailsStore = defineStore({
  id: 'details',
  state: () => ({
    email : '',
    fname: '',
    lname: '',
    pNumber: '',
    bName: '',
    dropdown: '',
    createpassword : '',
    confirmpassword: '',
  })
})