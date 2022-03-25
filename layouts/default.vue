<template>
    <div class="page">
      <div class="page__header-bar">
        <left-bar v-if="authorized" />
      </div>
      <nuxt />
    </div>
</template>

<script>

import LeftBar from '@/components/HeaderLeftBar' 


export default {
  components: {
    LeftBar
  },
  computed: {
    authorized() {
      return this.$store.getters['user/authorized']
    }
  }
}
</script>

<style lang="scss">
  .page {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: $background-default;
  }
</style>