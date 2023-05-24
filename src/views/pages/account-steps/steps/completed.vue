<template>
  <div class="otp-verify">
    <div class="middle-box">
      <div class="card pricing-box">
        <div class="card-body p-4">
          <div class="text-center">
            <div class="mt-3 mb-3">
              <div class="congraz-img">
                <img src="@/assets/images/congratulation-2.png" alt="" />
              </div>
            </div>
            <h6 class="mb-4">
              {{userInfo.message}}
            </h6>
            <p>
              Please secure these information. You need to bring these
              information while visiting our branch.
            </p>
            <h5>Reference Number: {{userInfo.reference_code}}</h5>
            <h5>Name: {{userInfo.fullname}}</h5>
            <h5>Branch: {{userInfo.branch}}</h5>
            <div class="mt-4 mb-3">
              <a class="btn btn-primary w-md" @click="navigateSted"
                >Home</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Promise from "../../../../lib/mixins/ExtendedPromises";
import StepBasic from "@/repositories/stepsBasic";
export default {
  name: "Completed",
  mixins: [Promise],
  data () {
    return {
      param: "",
      userInfo: {
        branch: "",
        fullname: "",
        reference_code: "",
        message: ""
      }
    }
  },
  mounted() {
    this.param = this.$route.params.id;
    this.getPreRequest();
  },
  methods: {
    getPreRequest() {
      const operation = this.response(
        StepBasic.finalRequest(this.param)
      );
      operation
        .then((data) => {
          console.log(data)
          this.userInfo.message = data.message;
          this.userInfo.branch = data.account.branch;
          this.userInfo.reference_code = data.account.reference_code;
          this.userInfo.fullname = data.account.fullname;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    navigateSted() {
      this.$router.push({name: 'products'});
    },
  },
};
</script>