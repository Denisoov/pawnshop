<template>
  <div class="dialog">
      <div class="dialog-header">
          <span class="enter-text">Вход</span>
      </div>
      <hr>
      <div class="dialog-container">
          <v-text-field
            label="Логин"
          >
          </v-text-field>
          <v-text-field
            label="Пароль"
          >
          </v-text-field>
          <v-btn block>
              Вход
          </v-btn>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .dialog{
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: white;
        width: 400px;
        height: 300px;
        box-shadow: 0px 6px 37px rgba(0, 0, 0, 0.1);
    }
    .dialog-header{
        padding: 10px 15px;
    }
    .enter-text{
        font-size: 20px;
    }
    .dialog-container{
        padding: 5px 20px 15px 20px;
    }
    .v-input{
        width: 400px !important;
    }
</style>