<template>
    <div class="page">
      <div class="page__header-bar">
        <left-bar />
      </div>
      <nuxt />
    </div>
</template>

<script>

import LeftBar from '@/components/HeaderLeftBar' 


export default {
  components: {
    LeftBar
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