<template>
  <Layout :class="editable ? 'editable-form': 'non-editable'">
    <PageHeader :title="title" :items="items" />
    <div class="row mb-4">
      <div class="col-md-12 d-flex justify-content-end">
        <div class="button-items">
          <b-button variant="success" @click="toggleEditable">
             {{ editable ? "Disable Edit" : "Enable Edit" }} 
          </b-button>
        </div>
      </div>
    </div>
    <stepOne ref="stepOne" />
    <stepTwo ref="stepTwo" />
    <stepThree ref="stepThree" />
    <div class="row mb-4" v-if="isDataLoaded && userDetail.accountStatus.account_status == 'Submitted'">
      <div class="col-md-12 d-flex justify-content-end">
        <div class="button-items">
          <!-- <b-button variant="success">Account Log</b-button>
          <b-button variant="success">Print Form</b-button>-->
          <b-button variant="secondary"  @click="updateForm">
             <b-spinner small v-if="updateFormLoading"></b-spinner>
            Update Form</b-button> 
          <b-button variant="success" @click="viewActions"
            >Form Actions</b-button
          >
        </div>
      </div>
    </div>
    <b-modal
      id="modal-actions"
      ref="modal-actions"
      scrollable
      title="Please Select Appropriate Action"
      title-class="font-14"
    >
      <div class="form-group">
        <label class="required">Status</label>
        <b-form-select
          class="form-control"
          :options="statusList"
          v-model="formAction.status"
          :class="{
            'is-invalid': submitted && $v.formAction.status.$error,
          }"
        ></b-form-select>
        <div
          v-if="submitted && $v.formAction.status.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.formAction.status.required"
            >This field is required.</span
          >
        </div>
      </div>
      <div class="form-group">
        <label for="remarks" class="required">Remark</label>
        <input
          id="remarks"
          type="text"
          class="form-control"
          name="remarks"
          v-model="formAction.remarks"
          :class="{
            'is-invalid': submitted && $v.formAction.remarks.$error,
          }"
        />
        <div
          v-if="submitted && $v.formAction.remarks.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.formAction.remarks.required"
            >This field is required.</span
          >
        </div>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" @click="cancel()"> Cancel </b-button>
        <!-- Button with custom close trigger value -->
        <b-button size="sm" variant="success" @click="submitStatus">
          Submit
        </b-button>
      </template>
    </b-modal>
  </Layout>
</template>
<script>
import Promise from "@/lib/mixins/ExtendedPromises";
import Api from "@/repositories/adminOnline";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import stepOne from "./step-one-review.vue";
import stepTwo from "./step-two-review.vue";
import stepThree from "./step-three-review.vue";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [Promise],
  page: {
    title: "Review Request",
    meta: [{ name: "description", content: appConfig.description }],
  },
  name: "ReviewPage",
  //   mixins: [Promise],
  components: { Layout, PageHeader, stepOne, stepTwo, stepThree },
  data() {
    return {
      updateFormLoading: false,
      preRequest: [],
      isDataLoaded: false,
      editable: false,
      title: "Review Request",
      items: [
        {
          text: "Online Account",
          href: "/",
        },
        {
          text: "Review Account",
          active: true,
        },
      ],
      param: "",
      userDetail: {},
      submitted: false,
      statusList: [
        { value: "Approved", text: "Approved" },
        { value: "Rejected", text: "Rejected" },
        { value: "Returned", text: "Returned" },
      ],
      formAction: {
        status: "",
        remarks: "",
      },
    };
  },
  validations: {
    formAction: {
      status: { required },
      remarks: { required },
    },
  },
  mounted() {
    this.param = this.$route.params.id;
    
    this.getPreInfo();
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {},
  },
  methods: {
    toggleEditable() {
      this.editable = !this.editable
    },
    makeToast(message) {
      this.$bvToast.toast(`${message.message}`, {
        title: `${message.title}`,
        autoHideDelay: 5000,
        variant: message.variant,
        appendToast: false,
      });
    },
    submitStatus() {
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const operation = this.response(
          Api.handleAccount(this.param, this.formAction)
        );
        operation
          .then((data) => {
            if (operation.isFulfilled()) {
              console.log("update-detail", data);

              this.$refs["modal-actions"].hide();
            }
          })
          .catch((err) => {
            console.log(err);
            let message = {
              title: "Error",
              message: err.data.errors.message[0],
              variant: "danger",
            };
            this.makeToast(message);
          });
      }
    },
    viewActions() {
      this.$refs["modal-actions"].show();
    },
    updateForm() {
       let payload = {};
       let resultOne = this.$refs.stepOne.submitForm()
       console.log('result',resultOne)
       let resultTwo = this.$refs.stepTwo.submitForm()
       console.log('resultTwo',resultTwo)
       let resultThree = this.$refs.stepThree.submitForm()
       console.log('resultThree', resultThree)
       if(resultOne.validate && resultTwo.validate && resultThree.validate) {
         payload = {...payload, ...resultOne.data, ...resultTwo.data, ...resultThree.data}
         
         if(payload.pp_photo == null) {
           this.userDetail.documents.forEach(item => {
            if(item.type == 'pp_photo'){
              payload.pp_photo = item.link;
            }
           })
         }
         if(payload.citizenship == null) {
           this.userDetail.documents.forEach(item => {
            if(item.type == 'document_photo'){
              payload.citizenship = item.link;
            }
           })
         }
         this.updateFormLoading = true;
         const operation = this.response(Api.updateAccount(this.param, payload));
          operation
            .then((data) => {
              if (operation.isFulfilled()) {
                console.log("update-data", data);
                this.updateFormLoading = false;
                let message = {
                    title: "Success",
                    message: data.message,
                    variant: "success",
                  };
                  this.makeToast(message);
                  setTimeout(() => {
                    this.$router.push({name:'onlineAllRequest'})
                  }, 1000)
                
              }
            })
            .catch((err) => {
              let message = {
              title: "Error",
              message: err.data.message,
              variant: "danger",
              };
              this.makeToast(message);
              this.updateFormLoading = false;
            });
       }
      
    },
     getPreInfo() {
      const operation = this.response(Api.getPreRequest());
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            console.log("detail-prerequest", data);
            this.preRequest = data;
            this.getDetailData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDetailData() {
     
      const operation = this.response(Api.getAccountDetail(this.param));
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            console.log("detail", data);
            this.userDetail = data;
            this.$refs.stepOne.getPreRequest(this.userDetail);
            this.userDetail.districts = this.preRequest.districts;
            this.userDetail.provinces = this.preRequest.province;
            this.$refs.stepTwo.getPreRequest(this.userDetail);
            this.userDetail.employment_types = this.preRequest.employments;
            this.userDetail.purposeAccounts = this.preRequest.purposeAccounts;
            this.userDetail.incomeSources = this.preRequest.incomeSources;
            
            this.userDetail.branches = this.preRequest.branches;
            this.$refs.stepThree.getPreRequest(this.userDetail);
            this.isDataLoaded = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
   
  },
};
</script>
