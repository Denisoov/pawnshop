<template>
    <div class="page">
        <auth />
    </div>
</template>

<script>
import Auth from '@/components/Auth'

export default {
    components:{
        Auth
    }
}
</script>

<style lang="scss">
    .page{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: $background-theme;
    }
</style>