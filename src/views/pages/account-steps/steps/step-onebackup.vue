<template>
  <div class="step-form">
    <div class="col-md-12 text-center">
      <h5>Do You Have existing bank account?</h5>
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          id="radio-group-1"
          v-model="hasAccount"
          :options="existingOptions"
          :aria-describedby="ariaDescribedby"
          name="radio-options"
        ></b-form-radio-group>
      </b-form-group>
    </div>
    <div class="card">
      <div class="card-body p-0">
        <div class="steps-form-title bg-primary">
          <div class="form-title-text">
            <h6 class="text-white">
              <i class="mdi mdi-account"></i>Personal Details
            </h6>
          </div>
          <div class="form-title-count">
            <h5 class="text-white">Step 1 of 4</h5>
          </div>
        </div>
        <div class="step-form-content-inner">
          <form class="needs-validation">
            <div class="row">
              <div class="col-md-4">
                <b-form-group label="Select Account Category">
                  <b-form-radio-group
                    id="account-category"
                    v-model="basicDetail.account_category"
                    :options="preRequest.product.features"
                    value-field="id"
                    text-field="name"
                    name="radio-options"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.account_category.$error,
                    }"
                  ></b-form-radio-group>
                  <div
                    v-if="submitted && $v.basicDetail.account_category.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.account_category.required"
                      >This field is required.</span
                    >
                  </div>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Salutation</label>
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
                  <label>Gender</label>
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
              <!-- <div class="col-md-4">
                  <md-field>
                    <label>Type here!</label>
                    <md-input></md-input>
                  </md-field>
                </div> -->
              <div class="col-md-4">
                <div class="form-group">
                  <label for="userName">Full Name</label>
                  <input
                    id="userName"
                    type="text"
                    class="form-control"
                    name="userName"
                    v-model="basicDetail.full_name"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.first_name.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.basicDetail.first_name.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.first_name.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
          
              <div class="col-md-4">
                <div class="form-group">
                  <label>Nationality</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.nationality"
                    value-field="id"
                    text-field="title"
                    v-model="basicDetail.nationality"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.nationality.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.basicDetail.nationality.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.nationality.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="userName">Phone</label>
                  <input
                    id="userName"
                    type="text"
                    class="form-control"
                    name="userName"
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
                  <label for="userName">Email</label>
                  <input
                    id="userName"
                    type="text"
                    class="form-control"
                    name="userName"
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
                <div class="form-group">
                  <label>Applying From</label>
                  <b-form-select
                    class="form-control"
                    :options="preRequest.applyingFromList"
                    value-field="id"
                    text-field="title"
                    v-model="basicDetail.apply_from"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.apply_from.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.basicDetail.apply_from.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.apply_from.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4" v-if="basicDetail.apply_from == 'Outside'">
                <div class="form-group">
                  <label for="userName">Foreign Phone</label>
                  <input
                    id="foreignPhone"
                    type="text"
                    class="form-control"
                    name="foreignPhone"
                    v-model="basicDetail.alternate_contact_number"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.basicDetail.alternate_contact_number.$error,
                    }"
                  />
                  <div
                    v-if="
                      submitted &&
                      $v.basicDetail.alternate_contact_number.$error
                    "
                    class="invalid-feedback"
                  >
                    <span
                      v-if="!$v.basicDetail.alternate_contact_number.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Preferred Branch</label>
                  <b-form-select
                    class="form-control"
                    :options="preRequest.branches"
                    value-field="id"
                    text-field="title"
                    v-model="basicDetail.branch"
                    :class="{
                      'is-invalid': submitted && $v.basicDetail.branch.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.basicDetail.branch.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.branch.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Currency</label>
                  <b-form-select
                    class="form-control"
                    :options="preRequest.currencyList"
                    value-field="id"
                    text-field="title"
                    v-model="basicDetail.currency_id"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.currency_id.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.basicDetail.currency_id.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.basicDetail.currency_id.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <NepaliDatePicker
                  @datePicked="nepaliBirthPicked"
                  placeholder="Select date of birth(BS)"
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
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value
                    id="defaultCheck1"
                    v-model="basicDetail.terms_condition"
                    :class="{
                      'is-invalid':
                        submitted && $v.basicDetail.terms_condition.$error,
                    }"
                  />
                  <label
                    @click="viewTerms"
                    class="form-check-label text-primary text-link"
                    for="defaultCheck1"
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
          </form>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-scrollable"
      ref="modal-scrollable"
      scrollable
      size="xl"
      title="Terms and condition"
      title-class="font-18"
    >
      <!-- <pdf
			src="./sample.pdf"
			@num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
		></pdf> -->
    </b-modal>
  </div>
</template>
<script>
import Promise from "../../../../lib/mixins/ExtendedPromises";
import Api from "../../../../repositories/stepOne";

import NepaliDatePicker from "../../../../components/NepaliDatePicker.vue";
import DatePickerCustome from "../../../../components/DatePickerCustome.vue";
import pdf from 'vue-pdf'


import { required, requiredIf, sameAs, email } from "vuelidate/lib/validators";

/**
 * Form validation component
 */

import { bus } from "../../../../main";


export default {
  mixins: [Promise],
  name: "StepOne",
  components: { NepaliDatePicker, DatePickerCustome, pdf },
  data() {
    return {
      currentPage: 0,
			pageCount: 0,
      hasAccount: "No",
      existingOptions: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" },
      ],
      selected: "first",
      submitted: false,
      preRequest: {
        branches: [],
        genders: [],
        salutations: [],
        product: [],
        nationality: [
          {
            id: 149,
            title: "Nepal",
          },
        ],
        applyingFromList: [
          {
            id: "Inside",
            title: "Inside Country",
          },
          {
            id: "Outside",
            title: "Outside Country",
          },
        ],
        currencyList: [
          {
            id: 1,
            title: "NPR",
          },
        ],
      },
      basicDetail: {
        account_category: "",
        salutation: "",
        gender: "",
        full_name: "",
        middle_name: "",
        last_name: "",
        nationality: "149",
        mobile_no: "",
        email: "",
        apply_from: "Inside",
        alternate_contact_number: "",
        branch: "",
        currency_id: "",
        date_of_birth_bs: "",
        date_of_birth: "",
        terms_condition: "",
      },
    };
  },
  validations: {
    basicDetail: {
      account_category: { required },
      salutation: { required },
      gender: { required },
      first_name: { required },
      last_name: { required },
      nationality: { required },
      mobile_no: { required },
      email: { required, email },
      apply_from: { required },
      alternate_contact_number: {
        required: requiredIf(function (nestedModel) {
          if (nestedModel.apply_from == "Inside") {
            return false;
          } else {
            return true;
          }
        }),
      },
      branch: { required },
      currency_id: { required },
      date_of_birth_bs: { required },
      date_of_birth: { required },
      terms_condition: { required, sameAs: sameAs(() => true) },
    },
  },
  created() {
    bus.$on("validateFieldstepOne", () => {
      console.log("bus");
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      console.log(!this.$v.$invalid);
      this.$emit("validateField", {
        step: "stepOne",
        value: !this.$v.$invalid,
      });
    });
  },
  mounted() {
    this.getPreRequest();
  },
  methods: {
    viewTerms() {
  
      this.$refs['modal-scrollable'].show()
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
    getPreRequest() {
      let param = {
        prd_id: "sarbashrestha-bachat-khata",
      };
      const operation = this.response(Api.getPreRequest(param));
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            console.log(data);
            this.preRequest.product = data.product;
            this.preRequest.salutations = data.salutations;
            this.preRequest.genders = data.genders;
            this.preRequest.branches = data.branches;
          }
        })
        .catch((err) => {
          console.log(err);
        });
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