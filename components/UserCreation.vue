<template>
    <div class="user-registration">
        <h1>Регистрация работника</h1>
        <v-text-field
            label="Логин"
            v-model="user.username"
        ></v-text-field>
        <v-text-field
            label="Пароль"
            v-model="user.password"
        ></v-text-field>
        <v-btn @click="createUser(user)" class="register-button">Добавить</v-btn>
    </div>
</template>

<script>
export default {
    data:()=>({
        user:{
            username: null,
            password: null
        }
    }),
    methods:{
        async createUser(user){
            await this.$store.dispatch('admin/userCreate', user)
        }
    }
}
</script>

<style>
    .user-registration{
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        width: 400px;
    }
    .register-button{
        width: 200px;
    }
</style>