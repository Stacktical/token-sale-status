<template>
  <v-app>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  import Home from '@/components/home/Home';

  export default {
    data() {
      return {};
    },
    components: {
      Home,
    },
};
</script>


<style lang="stylus">
  @import './stylus/vue';
</style>

<style lang="scss">
  @import './stylus/main.scss';
</style>
