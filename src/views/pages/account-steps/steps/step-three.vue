<template>
  <div class="step-form">
    <div class="card">
      <div class="card-body p-0">
        <div class="steps-form-title bg-primary">
          <div class="form-title-text">
            <h6 class="text-white">
              <i class="mdi mdi-account"></i>Declaration and Activation
            </h6>
          </div>
          <div class="form-title-count">
            <h5 class="text-white">Step 3 of 3</h5>
          </div>
        </div>
        <div class="step-form-content-inner">
          <form class="needs-validation">
            <div class="row">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Employment Details</h6>
                </div>
              </div>

              <div class="col-md-12">
                <b-form-group
                  label="Employment type"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-radio-group
                   
                    id="employment_id"
                    value-field="id"
                    text-field="title"
                    v-model="details.employment_id"
                    :options="preRequest.employmentTypes"
                    :aria-describedby="ariaDescribedby"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.employment_id.$error,
                    }"
                    name="employment_id"
                  ></b-form-radio-group>
                  <div
                    v-if="submitted && $v.details.employment_id.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.employment_id.required"
                      >This field is required.</span
                    >
                  </div>
                </b-form-group>
              </div>
              <template
                v-if="
                  details.employment_id == '1' ||
                  details.employment_id == '3' ||
                  details.employment_id == '4'
                "
              >
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="officeName" class="required"
                      >Organization Name</label
                    >
                    <input
                      id="officeName"
                      type="text"
                      class="form-control"
                      name="officeName"
                      v-model="details.organization_name"
                      :class="{
                        'is-invalid':
                          submitted && $v.details.organization_name.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.details.organization_name.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.details.organization_name.required"
                        >This field is required.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="officeAddress" class="required"
                      >Organization Address</label
                    >
                    <input
                      id="officeAddress"
                      type="text"
                      class="form-control"
                      name="officeAddress"
                      v-model="details.organization_address"
                      :class="{
                        'is-invalid':
                          submitted && $v.details.organization_address.$error,
                      }"
                    />
                    <div
                      v-if="
                        submitted && $v.details.organization_address.$error
                      "
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.details.organization_address.required"
                        >This field is required.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="designation" class="required"
                      >Designation</label
                    >
                    <input
                      id="designation"
                      type="text"
                      class="form-control"
                      name="designation"
                      v-model="details.designation"
                      :class="{
                        'is-invalid':
                          submitted &&
                          $v.details.designation.$error,
                      }"
                    />
                    <div
                      v-if="
                        submitted &&
                        $v.details.designation.$error
                      "
                      class="invalid-feedback"
                    >
                      <span
                        v-if="!$v.details.designation.required"
                        >This field is required.</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="contact_no" class="required"
                      >Contact Number</label
                    >
                    <input
                      id="contact_no"
                      type="text"
                      class="form-control"
                      name="contact_no"
                      v-model="details.organization_contact_no"
                      :class="{
                        'is-invalid':
                          submitted &&
                          $v.details.organization_contact_no.$error,
                      }"
                    />
                    <div
                      v-if="
                        submitted && $v.details.organization_contact_no.$error
                      "
                      class="invalid-feedback"
                    >
                      <span
                        v-if="!$v.details.organization_contact_no.required"
                        >This field is required.</span
                      >
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Declaration</h6>
                </div>
              </div>
              <div class="col-md-4">              
                <div class="form-group">
                  <label>Purpose of account</label>
                    <b-form-select
                    class="form-control"
                    :options="preRequest.purposeOfAccount"
                    value-field="id"
                    text-field="title"
                    v-model="details.purpose_of_account"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.purpose_of_account.$error,
                    }"
                  ></b-form-select>
                  
                  <div
                    v-if="submitted && $v.details.purpose_of_account.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.purpose_of_account.required"
                      >This field is required.</span
                    >                   
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Source of fund</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.fundSource"
                    value-field="id"
                    text-field="title"
                    v-model="details.source_of_fund"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.source_of_fund.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.details.source_of_fund.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.source_of_fund.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Expected Annual Transaction</label>
                  <input
                    id="expected_annual_income"
                    type="text"
                    class="form-control"
                    name="expected_annual_income"
                    v-model="details.expected_annual_income"
                  />
                  <!-- <b-form-select
                    class="form-control"
                    :options="preRequest.transactions"
                    value-field="id"
                    text-field="title"
                    v-model="details.expected_annual_income"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.expected_annual_income.$error,
                    }"
                  ></b-form-select> -->
                  <div
                    v-if="submitted && $v.details.expected_annual_income.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.expected_annual_income.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <b-form-group
                  label="Are You Convicted For Any Crime?"
                  v-slot="{ ariaDescribedby }"
                >
                  <b-form-radio-group
                    id="has_criminal_offense"
                    v-model="details.has_criminal_offense"
                    :options="preRequest.crimeTypes"
                   :aria-describedby="ariaDescribedby"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.has_criminal_offense.$error,
                    }"
                    name="has_criminal_offense"
                  ></b-form-radio-group>
                   <div
                    v-if="submitted && $v.details.has_criminal_offense.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.has_criminal_offense.required"
                      >This field is required.</span
                    >
                  </div>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Account Services</h6>
                </div>
              </div>
              <div class="col-md-12">
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group
                    id="checkbox-group-1"
                    v-model="details.account_services"
                    :options="preRequest.account_services"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.account_services.$error,
                    }"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-1"
                  ></b-form-checkbox-group>
                  <div
                    v-if="submitted && $v.details.account_services.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.account_services.required"
                      >This field is required.</span
                    >
                  </div>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Upload Documents</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="required"
                    >Upload your recently taken PP size photo here.</label
                  >
                  <b-form-file plain  :class="{
                      'is-invalid':
                        submitted && $v.details.pp_photo.$error,
                    }" accept="image/jpeg, image/png" @change="onFileChange($event, 'pp_photo')"></b-form-file>
                  <output>
                      <img class="preview-image" :src="passportUri" v-if="passportUri">
                      <!-- <p v-else>No image...</p> -->
                  </output>
                  <div
                    v-if="submitted && $v.details.pp_photo.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.pp_photo.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="required"
                    >Upload your document_photo or pp_photo here.</label
                  >
                  <b-form-file  :class="{
                      'is-invalid':
                        submitted && $v.details.document_photo.$error,
                    }" plain  accept="image/jpeg, image/png" @change="onFileChange($event, 'document_photo')"></b-form-file>
                  <output>
                      <img class="preview-image" :src="citizenshipUri" v-if="citizenshipUri">
                      <!-- <p v-else>No image...</p> -->
                  </output>
                  <div
                    v-if="submitted && $v.details.document_photo.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.document_photo.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="userName" class="required"
                    >Preferred Branch</label
                  >
                  <b-form-select
                    class="form-control"
                    :options="preRequest.branches"
                    value-field="id"
                    text-field="title"
                    v-model="details.branch_id"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.branch_id.$error,
                    }"
                  ></b-form-select>
                 
                  <div
                    v-if="submitted && $v.details.branch_id.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.branch_id.required"
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
  </div>
</template>
<script>
import Promise from "../../../../lib/mixins/ExtendedPromises";
import StepBasic from "@/repositories/stepsBasic";

import { required, requiredIf, sameAs, email } from "vuelidate/lib/validators";

/**
 * Form validation component
 */

import { bus } from "../../../../main";

export default {
  mixins: [Promise],
  name: "StepThree",
  components: {},
  data() {
    return {
      submitted: false,
      preRequest: {
        employmentTypes: [
        ],
        crimeTypes: [
          {
            value: "yes",
            text: "Yes",
          },
          {
            value: "no",
            text: "No",
          },
        ],
        purposeOfAccount: [],
        fundSource: [],
        transactions: [],
        branches: [],
        account_services: [
          {
            text: "Internet Banking",
            value: "internet_banking",
          },
          {
            text: "Debit Card",
            value: "debit_card",
          },
          {
            text: "Mobile Banking",
            value: "mobile_banking",
          },
          {
            text: "Cheque Book",
            value: "cheque_book",
          },
          {
            text: "Utility Payment",
            value: "utility_payment",
          },
        ],
      },
      citizenshipUri: null,
      passportUri: null,
      details: {
        employment_id: "",
        purpose_of_account: "",
        source_of_fund: "",
        expected_annual_income: "",
        has_criminal_offense: "no",
        document_photo: null,
        pp_photo: null,
        organization_name: "",
        organization_address: "",
        designation: "",
        organization_contact_no: "",
        account_services: [],
        branch_id: "",
        // want_cheque_book: "0",
        // want_internet_banking: "0",
        // want_mobile_banking: "0",
        // want_debit_card: "0",
        source_of_fund_other: "op",
        purpose_of_account_other: "op"
      },
       
    };
  },
  validations: {
    details: {
      employment_id: { required },
      purpose_of_account: { required },
      source_of_fund: { required },
      expected_annual_income: { required },
      has_criminal_offense: { required },
      document_photo: {required},
      pp_photo: {required},
   
        organization_name: {
          required: requiredIf(function () {            
            if(this.details.employment_id === '1' || this.details.employment_id === '3' || this.details.employment_id === '4'){
              return true;
            } else {
              return false;
            }
          })
        },
        organization_address: { 
          required: requiredIf(function () {            
            if(this.details.employment_id === '1' || this.details.employment_id === '3' || this.details.employment_id === '4'){
              return true;
            } else {
              return false;
            }
          })
         },
        designation: { 
          required: requiredIf(function () {            
            if(this.details.employment_id === '1' || this.details.employment_id === '3' || this.details.employment_id === '4'){
              return true;
            } else {
              return false;
            }
          })
         },
        organization_contact_no: { 
          required: requiredIf(function () {            
            if(this.details.employment_id === '1' || this.details.employment_id === '3' || this.details.employment_id === '4'){
              return true;
            } else {
              return false;
            }
          })
         },
      
      branch_id: { required },
      account_services: {required}
      
    },
  },
  created() {
    bus.$on("validateFieldstepThree", () => {
      console.log("bus");
      this.submitted = true;
      // stop here if form is invalid
      console.log('this.$v', this.$v)
      this.$v.$touch();
      console.log(!this.$v.$invalid);
      this.$emit("validateField", {
        step: "stepThree",
        value: !this.$v.$invalid,
        data: this.details
      });
    });
    
 
  },
  mounted() {
    this.param = this.$route.params.id;
    this.getPreRequest();
  },
  methods: {
   
    employmentSelected() {},
    onFileChange(event, name) {
      console.log('event', event)
      const file = event.target.files[0];
      this.details[name] = file;
      let uri;
      if(name == 'document_photo') {
        uri = 'citizenshipUri';
      } else if(name == 'pp_photo') {
        uri = 'passportUri';
      }
      if (!file) {
        return false
      }
      if (!file.type.match('image.*')) {
        return false
      }
      const reader = new FileReader()
      const self = this
      reader.onload = function (e) {
        console.log(e)
        self[uri] = e.target.result
      }
      reader.readAsDataURL(file)
    },
    getPreRequest() {
      const operation = this.response(StepBasic.getPreRequestSteps(this.param, 'step-3-pre-requisite'));
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            console.log('step-3',data);
            this.preRequest.employmentTypes = data.employment_types;
            this.preRequest.purposeOfAccount = data.purposeAccounts;
            this.preRequest.fundSource = data.incomeSources;
            this.preRequest.branches = data.branches;

            if (data.type == "Update") {
              for (const [key, value] of Object.entries(data.step3details.acc_occupation_details)) {
                if (this.details.hasOwnProperty(key)) {
                  this.details[key] = value;
                }
              }
              for (const [key, value] of Object.entries(data.step3details.acc_service_details)) {
                if (this.details.hasOwnProperty(key)) {
                  this.details[key] = value;
                }
                
              }
              this.details.has_criminal_offense == 0 ? this.details.has_criminal_offense = 'no' : this.details.has_criminal_offense = 'yes';
              this.details.account_services = data.requestedServices;
              bus.$emit('getStepData', {
                pageType: 'update',
                info: data.accountStatus.account_status,
                guid: ''
              });
            } else {

              bus.$emit('getStepData', {
                pageType: 'create',
                info: {},
                guid: ""
              });

            }

            
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>