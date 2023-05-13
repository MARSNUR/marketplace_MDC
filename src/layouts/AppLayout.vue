<template>
   <AppHeader msg="Something" />
   <AppMain msg="Welcome to Your Vue.js App" />
   <AppFooter msg="sdfsdf" />
   <router-view />
</template>
 
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppMain from '@/components/AppMain.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
   name: 'AppLayouts',
   components: {
      AppHeader,
      AppMain,
      AppFooter
   }
}
</script>