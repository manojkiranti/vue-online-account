<template>
  <div class="step-form">
    <div class="card">
      <div class="card-body p-0">
        <div class="steps-form-title bg-primary">
          <div class="form-title-text">
            <h6 class="text-white"><i class="mdi mdi-account"></i>Sign Up</h6>
          </div>
          <div class="form-title-count">
            <h5 class="text-white">Step 1 of 3</h5>
          </div>
        </div>
        <div class="step-form-content-inner">
          <form class="needs-validation">
            <div class="row">
              <!-- <div class="col-md-4">
                  <md-field>
                    <label>Type here!</label>
                    <md-input></md-input>
                  </md-field>
                </div> -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="full_name" class="required">Full Name</label>
                  <input
                    id="full_name"
                    type="text"
                    class="form-control"
                    name="full_name"
                    v-model="basicDetail.full_name"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.full_name.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.basicDetail.full_name.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.full_name.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label for="mobile_no" class="required">Mobile</label>
                  <input
                    id="mobile_no"
                    type="text"
                    class="form-control"
                    name="mobile_no"
                    v-model="basicDetail.mobile_no"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.mobile_no.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.basicDetail.mobile_no.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.mobile_no.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="email" class="required">Email</label>
                  <input
                    id="email"
                    type="text"
                    class="form-control"
                    name="email"
                    v-model="basicDetail.email"
                    :class="{
                      'is-invalid': submitted && $v.basicDetail.email.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.basicDetail.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.email.required"
                      >This field is required.</span
                    >
                    <span v-if="!$v.basicDetail.email.email"
                      >Please enter a valid email.</span
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <NepaliDatePicker
                  @datePicked="nepaliBirthPicked"
                  placeholder="Select date of birth(BS)"
                  labelClass="required"
                  label="Date of birth BS"
                  :class="{
                    'is-invalid':
                      submitted && $v.basicDetail.date_of_birth_bs.$error,
                  }"
                  ref="nepaliDatePicker"
                  @getAdDate="getAdBirthDate"
                />
                <div
                  v-if="submitted && $v.basicDetail.date_of_birth_bs.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.basicDetail.date_of_birth_bs.required"
                    >This field is required.</span
                  >
                </div>
              </div>
              <div class="col-md-4">
                <date-picker-custome
                  ref="datePickerCustome"
                  placeholder="Select date of birth(AD)"
                  label="Date of birth AD"
                  labelClass="required"
                  :class="{
                    'is-invalid':
                      submitted && $v.basicDetail.date_of_birth.$error,
                  }"
                  @datePicked="adBirthPicked"
                  @getBsDate="getBsBirthDate"
                />
                <div
                  v-if="submitted && $v.basicDetail.date_of_birth.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.basicDetail.date_of_birth.required"
                    >This field is required.</span
                  >
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="required">Salutation</label>
                  <b-form-select
                    class="form-control"
                    @change="salutationChanged"
                    :options="preRequest.salutations"
                    v-model="basicDetail.salutation"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.salutation.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.basicDetail.salutation.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.salutation.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="required">Gender</label>
                  <b-form-select
                    @change="genderChanged"
                    :options="preRequest.genders"
                    v-model="basicDetail.gender"
                    :class="{
                      'is-invalid': submitted && $v.basicDetail.gender.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.basicDetail.gender.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.gender.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-check mt-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value
                    id="terms_condition"
                    v-model="basicDetail.terms_condition"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.terms_condition.$error,
                    }"
                  />
                  <label
                   
                    class="form-check-label text-primary text-link"
                    for="terms_condition"
                  >
                    I accept terms and condition of bank.</label
                  >
                  <div
                    v-if="submitted && $v.basicDetail.terms_condition.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.terms_condition.sameAs"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
import NepaliDatePicker from "@/components/NepaliDatePicker.vue";
import DatePickerCustome from "@/components/DatePickerCustome.vue";


import { required, requiredIf, sameAs, email } from "vuelidate/lib/validators";

/**
 * Form validation component
 */



export default {
  name: "StepOneReview",
  components: { NepaliDatePicker, DatePickerCustome },
  data() {
    return {
      param: "",
      currentPage: 0,
      pageCount: 0,
      hasAccount: "no",
      existingOptions: [
        { text: "Yes", value: "yes" },
        { text: "No", value: "no" },
      ],
      selected: "first",
      submitted: false,
      preRequest: {
        genders: [],
        salutations: [],
      },
      basicDetail: {
        salutation: "",
        gender: "",
        full_name: "",
        mobile_no: "",
        email: "",
        date_of_birth_bs: "",
        date_of_birth: "",
        terms_condition: "",
      },
    };
  },
  validations: {
    basicDetail: {
      salutation: { required },
      gender: { required },
      full_name: { required },
      mobile_no: { required },
      email: { required, email },
      date_of_birth_bs: { required },
      date_of_birth: { required },
      terms_condition: { required, sameAs: sameAs(() => true) },
    },
  },
  created() {},
  mounted() {
    // this.param = this.$route.params.id;
    // this.getPreRequest();
    // this.src.promise.then((pdf) => {
    //   this.numPages = pdf.numPages;
    // });
  },
  methods: {
    submitForm() {
      this.submitted = true;
      this.$v.$touch();
      return  {
        validate: !this.$v.$invalid,
        data: this.basicDetail
      }
    },
    hasAlreadyAccount() {
      console.log(this.hasAccount);
      this.$emit("hasAccount", this.hasAccount);
    },
    viewTerms() {
      this.$refs["modal-scrollable"].show();
    },
    nepaliBirthPicked(val) {
      this.basicDetail.date_of_birth_bs = val;
    },
    adBirthPicked(val) {
      this.basicDetail.date_of_birth = val;
    },
    getAdBirthDate(val) {
      console.log("ad", val);
      // this.basicDetail.date_of_birth = val;
      this.$refs.datePickerCustome.setDate(val);
      this.basicDetail.date_of_birth = val;
    },
    getBsBirthDate(val) {
      console.log("bs", val);
      this.$refs.nepaliDatePicker.setDate(val);
      this.basicDetail.date_of_birth_bs = val;
    },
    getPreRequest(data) {
      console.log("step-1-review", data);
      this.preRequest.product = data.product;
      this.preRequest.salutations = data.salutations;
      this.preRequest.genders = data.genders;
      this.preRequest.branches = data.branches;

      for (const [key, value] of Object.entries(data.account)) {
        if (this.basicDetail.hasOwnProperty(key)) {
          this.basicDetail[key] = value;
          if (key == "date_of_birth") {
            this.$refs.datePickerCustome.setDate(value);
          }
          if (key == "date_of_birth_bs") {
            this.$refs.nepaliDatePicker.setDate(value);
          }
        }
      }
      this.basicDetail.terms_condition = true;
    },
    genderChanged() {
      if (this.basicDetail.gender == "Male") {
        this.basicDetail.salutation = "Mr";
      } else if (this.basicDetail.gender == "Female") {
        this.basicDetail.salutation = "Miss";
      }
    },
    salutationChanged() {
      if (this.basicDetail.salutation == "Mr") {
        this.basicDetail.gender = "Male";
      } else if (this.basicDetail.salutation == "Miss") {
        this.basicDetail.gender = "Female";
      }
    },
  },
};
</script>