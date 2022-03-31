<template>
  <v-data-table
    :headers="headers"
    :items="users"
  >
  </v-data-table>
</template>

<script>
export default {
    data:()=>({
        headers: [
          { text: 'Логин', value: 'username' },
          { text: 'Пароль', value: 'password'},
          { text: 'Роль', value: 'role'},
        ],
    }),
    props:{
        users: Array
    }
}
</script>

<style>

</style>