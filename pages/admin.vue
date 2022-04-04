<template>
  <div>
    <UsersTable :users="users" />
    <UserCreation />
  </div>
</template>

<script>
import UsersTable from "@/components/UsersTable"
import UserCreation from "@/components/UserCreation"

export default {
  components:{
    UsersTable,
    UserCreation
  },
  async asyncData({ store }){
    try {
      const users = await store.dispatch("admin/allUsersGetter")
      return { users: users }
    } catch (error) {
      
    }
  }
}
</script>
