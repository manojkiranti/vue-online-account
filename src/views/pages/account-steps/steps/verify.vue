<template>
  <div class="otp-verify">
    <div class="middle-box">
      <div class="card pricing-box">
        <div class="card-body p-4">
          <div class="text-center">
            <div class="mt-3">
              <i class="ri-phone-find-line text-primary h1"></i>
            </div>
            <h2 class="mt-4">Verification!</h2>

            <h6 class="mb-4">
              A six digit code is emailed/texted to you. Please enter the code
              below and Proceed
            </h6>

            <div class="form-group max-500">
              <input
                id="OTP"
                type="text"
                class="form-control"
                name="OTP"
                placeholder="Enter your OTP"
                v-model="otpCode"
                :class="{
                      'is-invalid':
                        submitted && $v.otpCode.$error,
                    }"
              />
              <div
                    v-if="submitted && $v.otpCode.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.otpCode.required"
                      >This field is required.</span
                    >
                    <span v-if="!$v.otpCode.minLength"
                      >Please enter valid six digit code.</span
                    >
                    <span v-if="!$v.otpCode.maxLength"
                      >Please enter valid six digit code.</span
                    >
                  </div>
            </div>
            <!-- <p class="mt-2">The code is valid for 3 minute(s).</p> -->
            <countdown :end-time="new Date().getTime() + 180000" >
              <span slot="process" class="text-danger" slot-scope="anyYouWantedScopName">{{
                `Lefttime: ${anyYouWantedScopName.timeObj.ceil.s}`
              }}</span>
              <span class="text-danger" slot="finish">OTP Expired!</span>
            </countdown>
            <div class="mt-4 mb-3">
              <a
                href="#"
                class="btn btn-primary w-md mr-2"
                @click="navigateSted"
                >Resend OTP</a
              >
              <a href="#" class="btn btn-primary w-md" @click="navigateSted"
                >Proceed</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vueAwesomeCountdown from "vue-awesome-countdown";
import { required,minLength, maxLength } from "vuelidate/lib/validators";
import Promises from "@/lib/mixins/ExtendedPromises";
import stepApi from "@/repositories/stepsBasic";
export default {
  name: "OtpVerify",
  mixins: [Promises],
  components: { vueAwesomeCountdown },
  data () {
    return {
      otpCode: "",
      param: "",
      submitted: false,
    }
  },
   validations: {
     otpCode: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(6)
       }
   },
  created () {
    this.param = this.$route.params.id;
  },
  mounted () {
    this.getPreRequest();
  },
  methods: {
    getPreRequest() {
       const operation = this.response(stepApi.otpPreRequest(this.param));
       operation
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    navigateSted() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      console.log(!this.$v.$invalid);
      if (!this.$v.$invalid) {
        this.$router.replace({path:`/account-information/${this.param}`}).catch(err => {
          console.log(err)
          this.resetRoute()
        })
      }
      
    },
    resetRoute() {
      this.$router.replace({path:`/account-information/${this.param}`}).catch(err => {
        console.log(err)
      })
    },
    startCallBack: function (x) {
      console.log(x);
    },
    endCallBack: function (x) {
      console.log(x);
    },
  },
};
</script>