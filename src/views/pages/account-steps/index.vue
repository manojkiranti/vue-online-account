<template>
  <div class="online-account-page">
    <StepsHeader :headerTitle="headerTitle" />
    <router-view></router-view>
    <Footer class="steps-footer" />
    <Loader v-if="showLoading" />
  </div>
</template>
<script>
import StepsHeader from "@/components/steps-header.vue";
import Footer from "@/components/footer.vue";
import Loader from "@/components/loader.vue";

export default {
  name: "AccountIndex",
  components: {  StepsHeader, Footer, Loader },
  data() {
    return {
      headerTitle: "Online Account Opening Portal",
      showLoading: false
    };
  },
  mounted() {
 
  },
  methods: {
    
  },
};
</script>