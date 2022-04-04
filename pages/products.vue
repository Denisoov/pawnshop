<template>
  <div data-app>
    <v-dialog
      v-model="dialog"
      max-width="480px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="dialog-button"
        >
          Добавить
        </v-btn>
      </template>
      <ProductLoadForm />
    </v-dialog>
    <table-orders :products="products" />
  </div>
</template>

<script>
import TableOrders from "@/components/TableOrders.vue"

export default {
  data:()=>({
    dialog: false,
  }),
  components: {
    TableOrders,
  },
  async asyncData({ store }){
    try {
      const products = await store.dispatch("order/getProductList")
      return { products: products }
    } catch (error) {
      
    }
  }
}
</script>

<style>
  .dialog-button{
    margin-bottom: 15px;
  }
</style>
