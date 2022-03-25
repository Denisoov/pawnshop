<template>
    <div class="page">
      <header-left-bar class="page__header-bar" v-if="authorized" />
      <nuxt class="page__content" />
    </div>
</template>

<script>

import HeaderLeftBar from '@/components/HeaderLeftBar' 

export default {
  components: {
    HeaderLeftBar
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
    align-items: flex-start;
    justify-content: flex-start;
    background-color: $background-default;

    &__content {
      width: 100%;
      min-height: 100%;
      padding-top: 60px;
      margin: 0 60px;
      }
  }
</style>