<script>
  import NavigationPage from '@/components/NavigationPage.vue';
  import FooterPage from '@/components/FooterPage.vue';
  export default {
    components: {
      NavigationPage,
      FooterPage,
    }
  };
</script>

<template>
  <NavigationPage />
  <router-view />
  <FooterPage />
</template>

<style scoped></style>
