<template>
    <aside class="sidebar">
        <div class="sidebar-head">
            <div class="sidebar-head__title">Иван П.</div>
            <hr>
        </div>
        <div class="links">
            <nuxt-link class="links__link" to="/">Отчеты</nuxt-link>
            <nuxt-link class="links__link" to="/hello">Отчеты</nuxt-link>
            <nuxt-link class="links__link" to="/hello2">Отчеты</nuxt-link>
            <nuxt-link class="links__link" to="/hello1">Отчеты</nuxt-link>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    .sidebar {
        width: 256px;
        height: 100%;
        background-color: $color-dark;
        padding: 6px 14px;
        color: #fff;
    }
    .sidebar-head {
        margin: 20px 0;

        &__title {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 18px;
            margin-bottom: 8px;
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
            font-size: 18px;
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