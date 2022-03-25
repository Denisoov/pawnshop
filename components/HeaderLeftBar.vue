<template>
    <aside class="sidebar">
        <div class="sidebar-head">
            <div class="sidebar-head--container">
                <span class="sidebar-head__title">
                    {{ userName }}
                </span>
                <IconExit class="sidebar-head__icon-exit" />
            </div>
            <hr>
        </div>
        <div class="links">
            <nuxt-link 
                class="links__link" 
                to="/"
            >
            Общее
            </nuxt-link>
            <nuxt-link 
                class="links__link" 
                to="/statistics"
            >
            Статистика
            </nuxt-link>
            <nuxt-link 
                class="links__link" 
                to="/products"
            >
            Продукты
            </nuxt-link>
            <nuxt-link 
                class="links__link" 
                to="/admin"
            >Админ панель
            </nuxt-link>
        </div>
    </aside>
</template>

<script>

import IconExit from '@/components/icons/IconExit'

export default {
    components: {
        IconExit
    },
    computed: {
        userName() {
            return this.$store.getters['user/userName']
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
        width: 256px;
        height: 100%;
        background-color: $color-dark;
        padding: 6px 14px;
        color: #fff;
        box-shadow: -7px 3px 8px 8px rgb(17 16 29 / 75%);

    }
    .sidebar-head {
        margin: 20px 0;
        
        &--container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        &__title {
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size: 18px;
        }

        &__icon-exit {
            cursor: pointer;
        }
    }
    .links {
        display: flex;
        flex-direction: column;

        &__link {
            width: 100%;
            height: 50px;
            margin-top: 8px;
            padding-left: 8px;
            color: #fff;
            line-height: 50px;
            text-decoration: none;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-weight: 500;
            font-size: 17px;
            font-style: normal;
            border-radius: 8px;

            &:hover {
                transition: all 0.18s ease-in-out;
                background: #1d1b31;
            }
        }
        .nuxt-link-exact-active {
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            background: white;
            color: $color-dark;
        }

    }
</style>