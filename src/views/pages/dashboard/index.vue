<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Stat from "./widget";
import RevenueAnalytics from "./revenue";


/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Stat,
    RevenueAnalytics,
    
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "online account"
        },
        {
          text: "Dashboard",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-12">
        <Stat />
        <RevenueAnalytics />
      </div>
    </div>
   
  </Layout>
</template>