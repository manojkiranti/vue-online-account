<template>
  <div class="start-step">
    <div class="container container-sm">
      <div class="row">
        
        <div class="col-lg-8">
            <h4>Do You have existing Bank Account?</h4>
              <b-form-group label="Individual radios">
                <b-form-radio
                  v-model="selected"
                  @input="verifyInput"
                  name="some-radios"
                  value="yes"
                  >Yes</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  @input="verifyInput"
                  name="some-radios"
                  value="no"
                  >No</b-form-radio
                >
              </b-form-group>
        </div>
        <div class="col-lg-4">
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "StartStep",
  data() {
    return {
      selected: "",
      params: "",
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.params = this.$route.params.id;
  },
  methods: {
    verifyInput() {
      this.$router.push(`/account-step/${this.params}`);
    },
  },
};
</script>