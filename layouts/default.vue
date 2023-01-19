<template>
    <div>
        <AppHeader />
        <Nuxt />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '~/components/includes/AppHeader.vue';
import AppFooter from '~/components/includes/AppFooter.vue';
export default {
  name: 'default', 
  components:{
    AppHeader,
    AppFooter,
  },

}
</script>