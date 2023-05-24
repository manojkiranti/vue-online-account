<template>
  <div class="step-form">
    <div class="card">
      <div class="card-body p-0">
        <div class="steps-form-title bg-primary">
          <div class="form-title-text">
            <h6 class="text-white">
              <i class="mdi mdi-account"></i>Account Information
            </h6>
          </div>
          <div class="form-title-count">
            <h5 class="text-white">Step 2 of 3</h5>
          </div>
        </div>
        <div class="step-form-content-inner">
          <form class="needs-validation">
            <div class="row">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Personal Details</h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="required">Nationality</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.nationality"
                    value-field="id"
                    text-field="title"
                    v-model="details.nationality"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.nationality.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.details.nationality.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.nationality.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="required">Marital Status</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.maritalStatus"
                    value-field="id"
                    text-field="title"
                    v-model="details.marital_status"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.marital_status.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="submitted && $v.details.marital_status.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.marital_status.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="father_name" class="required">Father Name</label>
                  <input
                    id="father_name"
                    type="text"
                    class="form-control"
                    name="father_name"
                    v-model="details.father_name"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.details.father_name.$error,
                    }"
                  />
                  <div
                    v-if="
                      submitted &&
                      $v.details.father_name.$error
                    "
                    class="invalid-feedback"
                  >
                    <span
                      v-if="!$v.details.father_name.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="mother_name" class="required">Mother Name</label>
                  <input
                    id="mother_name"
                    type="text"
                    class="form-control"
                    name="mother_name"
                    v-model="details.mother_name"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.details.mother_name.$error,
                    }"
                  />
                  <div
                    v-if="
                      submitted &&
                      $v.details.mother_name.$error
                    "
                    class="invalid-feedback"
                  >
                    <span
                      v-if="!$v.details.mother_name.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="grandfather_name" >Grandfather Name</label>
                  <input
                    id="grandfather_name"
                    type="text"
                    class="form-control"
                    name="grandfather_name"
                    v-model="details.grandfather_name"
                  
                  />
                  
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="grandmother_name">Grand Mother Name</label>
                  <input
                    id="grandmother_name"
                    type="text"
                    class="form-control"
                    name="grandmother_name"
                    v-model="details.grandmother_name"
                   
                  />
                  
                </div>
              </div>
              <div
                class="col-md-4"
                v-if="details.marital_status == 'married'"
              >
                <div class="form-group">
                  <label for="spouse_name" class="required">Spouse's Full Name</label>
                  <input
                    id="spouse_name"
                    type="text"
                    class="form-control"
                    name="spouse_name"
                    v-model="details.spouse_name"
                     :class="{
                      'is-invalid':
                        submitted && $v.details.marital_status.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.details.marital_status.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.marital_status.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="col-md-4"
                v-if="details.marital_status == 'married'"
              >
                <div class="form-group">
                  <label for="father_in_law_name">Father in law's Full Name</label>
                  <input
                    id="father_in_law_name"
                    type="text"
                    class="form-control"
                    name="father_in_law_name"
                    v-model="details.father_in_law_name"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Identification Details</h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="required">Identification Type</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.identificationTypes"
                    value-field="id"
                    text-field="title"
                    v-model="details.identification_type"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.identification_type.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="
                      submitted && $v.details.identification_type.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.identification_type.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="identification_no" class="required"
                    >Identification Number</label
                  >
                  <input
                    id="identification_no"
                    type="text"
                    class="form-control"
                    name="identification_no"
                    v-model="details.identification_no"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.details.identification_no.$error,
                    }"
                  />
                  <div
                    v-if="
                      submitted && $v.details.identification_no.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.identification_no.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="identification_issued_place" class="required"
                    >Place of issue</label
                  >
                  <input
                    id="identification_issued_place"
                    type="text"
                    class="form-control"
                    name="identification_issued_place"
                    v-model="details.identification_issued_place"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.details.identification_issued_place.$error,
                    }"
                  />
                  <div
                    v-if="
                      submitted && $v.details.identification_issued_place.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.identification_issued_place.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                 <date-picker-custome
                  ref="datePickerCustome"
                  placeholder="Date of issue"
                  label="Date of issue"
                  labelClass="required"
                  :class="{
                    'is-invalid':
                      submitted && $v.details.identification_issued_date_ad.$error,
                  }"
                  @datePicked="getIssuedDate"
                />
                <div
                  v-if="submitted && $v.details.identification_issued_date_ad.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.details.identification_issued_date_ad.required"
                    >This field is required.</span
                  >
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="pan_number"
                    >Pan Number</label
                  >
                  <input
                    id="pan_number"
                    type="number"
                    class="form-control"
                    name="pan_number"
                    v-model="details.pan_number"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Temporary Address</h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="temporary_address" class="required"
                    >Street Name/Tole</label
                  >
                  <input
                    id="temporary_address"
                    type="text"
                    class="form-control"
                    name="temporary_address"
                    v-model="details.temporary_street_name"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.temporary_street_name.$error,
                    }"
                  />
                 <div
                    v-if="submitted && $v.details.temporary_street_name.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.temporary_street_name.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="city"  class="required"
                    >Town/City</label
                  >
                  <input
                    id="city"
                    type="text"
                    class="form-control"
                    name="city"
                    v-model="details.temporary_town_city_name"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.temporary_town_city_name.$error,
                    }"
                  />
                 <div
                    v-if="submitted && $v.details.temporary_town_city_name.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.temporary_town_city_name.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label  class="required">District</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.districts"
                    value-field="id"
                    text-field="title"
                    v-model="details.temporary_district_id"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.temporary_district_id.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="
                      submitted && $v.details.temporary_district_id.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.temporary_district_id.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="ward_no"  class="required"
                    >Ward Number</label
                  >
                  <input
                    id="ward_no"
                    type="text"
                    class="form-control"
                    name="ward_no"
                    v-model="details.temporary_ward_number"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.details.temporary_ward_number.$error,
                    }"
                  />
                  <div
                    v-if="
                      submitted && $v.details.temporary_ward_number.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.temporary_ward_number.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label  class="required">State</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.states"
                    value-field="id"
                    text-field="title"
                    v-model="details.temporary_province_id"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.temporary_province_id.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="
                      submitted && $v.details.temporary_province_id.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.temporary_province_id.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <h6>Are the Permanent Address same as Temporary address ?</h6>
                <b-form-group  v-slot="{ ariaDescribedby }" >
                  <b-form-radio-group
                    @change="addressSelected"
                    id="radio-group-1"
                    v-model="details.sameAsTemp"
                    :options="optionsAddress"
                    :aria-describedby="ariaDescribedby"
                    name="radio-options"
                  ></b-form-radio-group>
                </b-form-group>
              </div>
            </div>
            <div class="row" v-if="!details.sameAsTemp">
              <div class="col-md-12">
                <div class="sub-heading">
                  <h6>Permanent Address</h6>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="permanent_address_streetname"  class="required"
                    >Street Name/Tole</label
                  >
                  <input
                    id="permanent_address_streetname"
                    type="text"
                    class="form-control"
                    name="permanent_address_streetname"
                    v-model="details.permanent_street_name"
                    
                  />
                 
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="permanent_address_city"  class="required"
                    >Town/City</label
                  >
                  <input
                    id="permanent_address_city"
                    type="text"
                    class="form-control"
                    name="permanent_address_city"
                    v-model="details.permanent_town_city_name"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.permanent_town_city_name.$error,
                    }"
                  />
                 <div
                    v-if="
                      submitted && $v.details.permanent_town_city_name.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.permanent_town_city_name.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label  class="required">District</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.districts"
                    value-field="id"
                    text-field="title"
                    v-model="details.permanent_district_id"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.permanent_district_id.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="
                      submitted && $v.details.permanent_district_id.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.permanent_district_id.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="permanent_address_ward_no"  class="required"
                    >Ward Number</label
                  >
                  <input
                    id="permanent_address_ward_no"
                    type="text"
                    class="form-control"
                    name="permanent_address_ward_no"
                    v-model="details.permanent_ward_number"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.details.permanent_ward_number.$error,
                    }"
                  />
                  <div
                    v-if="
                      submitted && $v.details.permanent_ward_number.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.permanent_ward_number.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label  class="required">State</label>

                  <b-form-select
                    class="form-control"
                    :options="preRequest.states"
                    value-field="id"
                    text-field="title"
                    v-model="details.permanent_province_id"
                    :class="{
                      'is-invalid':
                        submitted && $v.details.permanent_province_id.$error,
                    }"
                  ></b-form-select>
                  <div
                    v-if="
                      submitted && $v.details.permanent_province_id.$error
                    "
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.details.permanent_province_id.required"
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

import DatePickerCustome from "../../../../components/DatePickerCustome.vue";

import { required, requiredIf, sameAs, email } from "vuelidate/lib/validators";

/**
 * Form validation component
 */

import { bus } from "../../../../main";

export default {
  mixins: [Promise],
  name: "StepTwo",
  components: {  DatePickerCustome },
  data() {
    return {
      stepType: "create",
      submitted: false,
      optionsAddress: [
          { text: 'Yes', value: true },
          { text: 'No', value: false },
        ],
      preRequest: {
        districts: [],
        states: [],
        nationality: [
          {
            id: 149,
            title: "Nepal",
          },
        ],
        identificationTypes: [
          {
            id: "C",
            title: "Citizenship",
          },
          {
            id: "P",
            title: "Passport",
          },
        ],
        maritalStatus: [
          {
            id: "single",
            title: "Single",
          },
          {
            id: "married",
            title: "Married",
          },
          {
            id: "unmarried",
            title: "Unmarried",
          },
        ],
      },
      details: {
        nationality: "149",
        marital_status: "single",
        father_name: "",
        mother_name: "",
        grandfather_name: "",
        grandmother_name: "",
        spouse_name: "",
        father_in_law_name: "",
        identification_type: "C",
        identification_no: "",
        identification_issued_place: "",
        identification_issued_date_ad: "",
        pan_number: "",
        temporary_street_name: "",
        temporary_town_city_name: "",
        temporary_district_id: "",
        temporary_ward_number: "",
        temporary_province_id: "",
        permanent_street_name: "",
        permanent_town_city_name: "",
        permanent_district_id: "",
        permanent_ward_number: "",
        permanent_province_id: "",
        sameAsTemp: true
      },
    };
  },
  validations: {
    details: {
      nationality: { required },
      marital_status: { required },
      father_name: {required},
      mother_name: {required},
      identification_type: { required },
      identification_no: { required },
      identification_issued_place: { required },
      identification_issued_date_ad: { required },
      spouse_name: {
        required: requiredIf(function (nestedModel) {
          if (nestedModel.marital_status == "married") {
            return true;
          } else {
            return false;
          }
        }),
      },
      temporary_street_name: {required},
      temporary_town_city_name: {required},
      temporary_district_id: {required},
      temporary_ward_number: {required},
      temporary_province_id: {required},
      permanent_street_name: {
         required: requiredIf(function (){ 
            return !this.details.sameAsTemp
         }) 
      },
      permanent_town_city_name: {
        required: requiredIf(function (){ 
            return !this.details.sameAsTemp
         }) 
      },
      permanent_district_id: {
        required: requiredIf(function (){ 
            return !this.details.sameAsTemp
         }) 
      },
      permanent_ward_number: {
        required: requiredIf(function (){ 
            return !this.details.sameAsTemp
         }) 
      },
      permanent_province_id: {
        required: requiredIf(function (){ 
            return !this.details.sameAsTemp
         }) 
      },
     
    },
  },
  created() {
    bus.$on("validateFieldstepTwo", () => {
      if(this.details.sameAsTemp) {
         this.setPermanentAddress()
       }
      console.log("bus");
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch()
      console.log(this.$v);
      this.$emit("validateField", {
        step: "stepTwo",
        // value: !this.$v.$invalid,
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
    setPermanentAddress() {
      this.details.permanent_street_name = this.details.temporary_street_name,
      this.details.permanent_town_city_name = this.details.temporary_town_city_name,
      this.details.permanent_district_id = this.details.temporary_district_id,
      this.details.permanent_ward_number = this.details.temporary_ward_number,
      this.details.permanent_province_id = this.details.temporary_province_id
    },
    unSelectPermanentAddress() {
      this.details.permanent_street_name = "",
      this.details.permanent_town_city_name = "",
      this.details.permanent_district_id = "",
      this.details.permanent_ward_number = "",
      this.details.permanent_province_id = ""
    },
 
    getIssuedDate(val) {
      this.details.identification_issued_date_ad = val;
    },
    addressSelected() {
       if(this.details.sameAsTemp) {
         this.setPermanentAddress()
       } else {
         this.unSelectPermanentAddress()
       }
    },
    getPreRequest() {       
      const operation = this.response(StepBasic.getPreRequestSteps(this.param, 'step-2-pre-requisite'));
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            console.log('step-two-pre-requisite', data);
            this.preRequest.districts = data.districts;
            this.preRequest.states = data.provinces;
            console.log('step2', data)
            if (data.type == "Update") {
              this.stepType = "update";

              for (const [key, value] of Object.entries(data.step2details.acc_address_details)) {
                if (this.details.hasOwnProperty(key)) {
                  this.details[key] = value;
                }
              }

              for (const [key, value] of Object.entries(data.step2details.acc_identification_details)) {
                if (this.details.hasOwnProperty(key)) {
                  this.details[key] = value;
                }
              }

              if(data.step2details.acc_identification_details.identification_issued_date_ad != '' && data.step2details.acc_identification_details.identification_issued_date_ad != null){
                this.$refs.datePickerCustome.setDate(data.step2details.acc_identification_details.identification_issued_date_ad)
                }

              for (const [key, value] of Object.entries(data.step2details.acc_family_details)) {
                if (this.details.hasOwnProperty(key)) {
                  this.details[key] = value;
                }
              }

              bus.$emit('getStepData', {
                pageType: 'update',
                info: data.accountStatus.account_status,
                guid: ''
              });
            } else {
              this.stepType = "create";
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
          bus.$emit('getStepData', {
                pageType: 'create',
                info: {},
                guid: ""
          });

          bus.$emit('showDialogBox', {
               messageType: 'Error',
               message: err.data.errors.message[0]
          });
        });
    },
  },
};
</script>