<template>
  <div>
    <table-orders :products="products" />
  </div>
</template>

<script>
import TableOrders from "@/components/TableOrders.vue"

export default {
  components: {
    TableOrders
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
