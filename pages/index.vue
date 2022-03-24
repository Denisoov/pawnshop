<template>
  <div class="content">
    <table-orders />
  </div>
</template>

<script>

import TableOrders from "../components/TableOrders.vue"

export default {
  components: {
    TableOrders
  }
}
</script>

<style lang="scss">
  .content {
    width: 100%;
    padding-top: 60px;
    margin: 0 60px;
  }
</style>