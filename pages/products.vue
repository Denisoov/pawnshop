<template>
  <div>
    <table-orders />
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
      const { data } = await store.dispatch("order/getProductList")
      console.log(data)
    } catch (error) {
      
    }
  }
}
</script>
