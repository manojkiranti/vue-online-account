<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Total Request",
          icon: "ri-stack-line",
          value: "1452",
          subvalue: " 2.4% "
        },
        {
          title: "Total Approved Request",
          icon: "ri-store-2-line",
          value: "452",
          subvalue: " 2.4% "
        },
        {
          title: "Total Rejected Request",
          icon: "ri-briefcase-4-line",
          value: "15",
          subvalue: " 2.4% "
        },
        {
          title: "Total Pending Request",
          icon: "ri-briefcase-4-line",
          value: "150",
          subvalue: " 2.4% "
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-3" v-for="(data, index) in statData" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2">{{data.title}}</p>
              <h4 class="mb-0">{{data.value}}</h4>
            </div>
            <div class="text-primary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
          </div>
        </div>

        <div class="card-body border-top py-3">
          <div class="text-truncate">
            <span class="badge badge-soft-success font-size-11">
              <i class="mdi mdi-menu-up"></i>
              {{data.subvalue}}
            </span>
            <span class="text-muted ml-2">From previous period</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>