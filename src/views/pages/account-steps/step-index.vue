<template>
  <div class="steps-wrapper">
    <div class="steps-form-content">
      <div class="container container-md">
        <div class="row">
          <div class="col-12">
            <form-wizard
              color="#002565 "
              @on-loading="setLoading"
              @on-complete="onComplete"
              @on-change="tabChanged"
              :start-index="startIndex"
              @on-validate="onValidate"
              
              ref="formWizard"
            >
              <template slot="footer" slot-scope="props" >
                <div class="wizard-footer-left">
                  <button
                    class="btn mr-2"
                    v-if="props.activeTabIndex > 0"
                    @click="props.prevTab()"
                    :style="props.fillButtonStyle"
                  >
                    Previous
                  </button>

                  <template v-if="(currentPage.pageType == 'update' && currentPage.pageInfo == 'Step2' && startIndex == '0') 
                  || (currentPage.pageType == 'update' && currentPage.pageInfo == 'Step2' && startIndex == '1')
                  || (currentPage.pageType == 'update' && currentPage.pageInfo == 'Step1' && startIndex == '0')
                  || (currentPage.pageType == 'update' && currentPage.pageInfo == 'Returned' && startIndex == '0')
                  ">
                    <b-button
                      variant="primary"
                      v-if="!props.isLastStep"
                      @click="skipPage"
                      >Skip</b-button>
                  </template>
                    
                </div>
                <div class="wizard-footer-right" v-if="hasAlreadyAccount == 'no'">
                  <b-button
                    class="mr-2"
                    variant="primary"
                    v-if="props.activeTabIndex > 0 && !props.isLastStep"
                    >Save As Draft</b-button>
                  <button
                    v-if="!props.isLastStep"
                    @click="props.nextTab()"
                    class="btn wizard-footer-right"
                    :style="props.fillButtonStyle"
                  >
                    {{ currentPage.pageType == "update" ? "Update": "Next" }}
                  </button> 

                  <button
                    v-else
                    @click="onComplete"
                    class="btn wizard-footer-right finish-button"
                    :style="props.fillButtonStyle"
                  >
                    {{ props.isLastStep ? "Submit" : "Next" }}
                  </button>
                </div>
              </template>

              <tab-content
                icon="mdi mdi-account-circle"
                title="Basic Detail"
                :route="route.step1"
                :before-change="() => validateStep('stepOne')"
              >
              </tab-content>
              <tab-content
                icon="mdi mdi-book-information-variant"
                title="Address Information"
                :route="route.step2"
                :before-change="() => validateStep('stepTwo')"
              >
              </tab-content>
              <tab-content
                icon="mdi mdi-rocket"
                title="Declaration"
                :route="route.step3"
                :before-change="() => validateStep('stepThree')"
              >
              </tab-content>
              <transition name="fade" mode="out-in">
                <router-view @validateField="validateField" @hasAccount="hasAccount"> </router-view>
              </transition>
              <Loader v-if="loading" />
            </form-wizard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import Promises from "../../../lib/mixins/ExtendedPromises";
import stepApi from "../../../repositories/stepsBasic";
import Loader from "@/components/loader";

import { bus } from "../../../main";

const {
  BASE_KEY,
  getStepId,
  setStepId,
  removeStepId,
} = require("../../../lib/storage");

export default {
  name: "StepIndex",
  mixins: [Promises],
  components: { FormWizard, TabContent, Loader },
  data() {
    return {      
      currentPage: {
        pageType: "create",
        pageInfo: {},
        guid: ""
      },
      loading: false,
      param: "",
      route: {
        step1: `/basic/${this.param}`,
        step2: `/account-information/${this.param}`,
        step3: `/activation/${this.param}`,
      },
      validation: {
        stepOne: false,
        stepTwo: false,
      },
      stepData: {
        stepOne: "",
      },
      startIndex: 0,
      hasAlreadyAccount: 'no'
    };
  },
  created() {
    this.setPageSetting()
    bus.$on('getStepData', (data) => {
      console.log('getStepData',data)
      this.currentPage.pageType = data.pageType;
      this.currentPage.pageInfo = data.info
      this.currentPage.guid = data.guid
    })
    bus.$on('showDialogBox', (data) => {
      let message = {
              title: data.messageType,
              message: data.message,
              variant: "danger",
            };
            this.makeToast(message);
    })
  },
  watch: {
     $route(to, from){
       this.setPageSetting()
     }
  },
  mounted() {},
  methods: {
    setPageSetting() {
      this.param = this.$route.params.id;
      if (this.param == "undefined") {
        this.param = getStepId();
      } else {
        setStepId(this.param);
      }
      console.log("this.$route.params", this.$route.params);
      this.route.step1 = `/basic/${this.param}`;
      this.route.step2 = `/account-information/${this.param}`;
      this.route.step3 = `/activation/${this.param}`;
      if (this.$route.name == "AccountInformation") {
        this.startIndex = 1;
      } else if (this.$route.name == "activation") {
        this.startIndex = 2;
      } else {
        this.startIndex = 0;
      }
    },
    skipPage() {
      if(this.startIndex == 0 && this.currentPage.pageInfo == 'Step1') {
        this.$refs.formWizard.changeTab(0,1);
      }
      if(this.startIndex == 0 && this.currentPage.pageInfo == 'Step2') {
        this.$refs.formWizard.changeTab(0,1);
      }

      if(this.startIndex == 0 && this.currentPage.pageInfo == 'Returned') {
        this.$refs.formWizard.changeTab(0,1);
      }

      if(this.startIndex == 1 && this.currentPage.pageInfo == 'Step2') {
        this.$refs.formWizard.changeTab(1,2);
      }

    },
    changeTab(val) {
      this.$refs.formWizard.changeTab(0,1);
    },
    onValidate(val) {
      console.log('onvalidate',val)
    },
    hasAccount(val) {
      this.hasAlreadyAccount = val;
    },
    makeToast(message) {
      this.$bvToast.toast(`${message.message}`, {
        title: `${message.title}`,
        autoHideDelay: 5000,
        variant: message.variant,
        appendToast: false,
      });
    },
    tabChanged(val1, val2) {
      console.log("va1", val1, "val2", val2);
    },
    activateFields() {
      this.$refs.formWizard.nextTab();
    },
    setLoading(val) {
      console.log("set loading", val);
    },
    validateField(option) {
      this.validation[option.step] = option.value;
      console.log("option", option);
      this.stepData[option.step] = option.data;
    },
    onComplete() {
      let name = "stepThree";
      bus.$emit(`validateField${name}`);
      if (!this.validation[name]) {
        return false;
      } else {
        this.loading = true;
        let formData = new FormData();
        for (var key in this.stepData[name]) {
          formData.append(key, this.stepData[name][key]);
        }
        let operation;
        if(this.currentPage.pageType == 'update') {
          operation = this.response(
          stepApi.stepThreeUpdate(formData, this.param)
        );
        } else {
          operation = this.response(
          stepApi.stepThreePost(formData, this.param)
        );

        }
        
        operation
          .then((data) => {
            console.log("data-3", data);
            this.loading = false;
            this.$router.push(`/congratulation/${data.access_token}`);
          })
          .catch((err) => {
            console.log("err-log", err);
            let errMsg = err.data[Object.keys(err.data)[0]];
            console.log("errMsg", errMsg);
            this.loading = false;
            let message = {
              title: "Error",
              message: errMsg,
              variant: "danger",
            };
            this.makeToast(message);
          });
      }
    },
    validateStep(name) {
      bus.$emit(`validateField${name}`);
      if (!this.validation[name]) {
        return false;
      } else {
        this.loading = true;
        let operation;

        if (name == "stepOne") {
              console.log('this.currentPage', this.currentPage)
              if(this.currentPage.pageType == 'update') {
                operation = this.response(stepApi.stepOneUpdate(this.stepData[name], this.param));
              } else {
                operation = this.response(stepApi.stepOnePost(this.stepData[name], this.param));
              }
        }
        if (name == "stepTwo") {
          if(this.currentPage.pageType == 'update') {
            operation = this.response(stepApi.stepTwoUpdate(this.stepData[name], this.param));
          } else {
            operation = this.response(stepApi.stepTwoPost(this.stepData[name], this.param));
          }          
        }

        return new Promise((resolve, reject) => {
          operation
            .then((data) => {
              console.log("data", data);
              if (operation.isFulfilled()) {
              }
              this.loading = false;
              let message = {
                title: "Success",
                message: data.message,
                variant: "success",
              };
              this.makeToast(message);
              if (name == "stepOne") {
                this.$router.push(`/verify-user/${data.access_token}`);
                return;
              }
              if (name == "stepTwo") {
                this.route.step3 = `/activation/${data.access_token}`;
              }
              resolve(this.validation[name]);
            })
            .catch((err) => {
              console.log("err-log", err);
              this.loading = false;
              let errMsg = err.data[Object.keys(err.data)[0]];
              console.log("errMsg", errMsg);
              
              let message = {
                title: "Error",
                message: errMsg,
                variant: "danger",
              };
              this.makeToast(message);
              reject("error");
            });
        });
      }
    },
  },
};
</script>