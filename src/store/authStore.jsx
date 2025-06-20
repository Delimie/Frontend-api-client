import { create } from "zustand"

//create Store
const authStore = () =>({
  token:null,
  user:[],
})

//2. UserStore
const useAuthStore = create(authStore)

export default useAuthStore