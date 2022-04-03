<template>
    <div class="stat-card">
        <div class="round-diagram">
            <span class="round-diagram__text">228 руб.</span>
        </div>
        <span class="stat-card__text">Всего средств потрачено</span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .stat-card{
        width: 350px;
        height: 300px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 30px -20px rgb(149 157 189);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .round-diagram{
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 6px solid lightgreen;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
    }
    .round-diagram__text{
        font-size: 22px;
    }
</style>