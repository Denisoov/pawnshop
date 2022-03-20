<template>
    <div class="login">
        <Auth></Auth>
    </div>
</template>

<script>
import Auth from "../components/Auth"

export default {
    components:{
        Auth
    }
}
</script>

<style lang="scss">
    .login{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: darkslateblue;
    }
</style>