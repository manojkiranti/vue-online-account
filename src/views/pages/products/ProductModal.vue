<template>
  <div class="create-training">
    <form class="form-horizontal" @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <h6 class="mb-4">Product Info</h6>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Title</label>
            <input
              v-model="productCategory.title"
              type="text"
              class="form-control"
              placeholder="Enter title"
              :class="{
                'is-invalid': submitted && $v.productCategory.title.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.title.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.title.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>Title Np</label>
            <input
              v-model="productCategory.title_np"
              type="text"
              class="form-control"
              placeholder="Enter Title NP"
              :class="{
                'is-invalid': submitted && $v.productCategory.title_np.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.title_np.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.title_np.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>

          <div class="col-md-4">
          <div class="form-group">
            <label>Slug</label>
            <input
              v-model="productCategory.slug"
              type="text"
              class="form-control"
              placeholder="Enter Slug"
              :class="{
                'is-invalid': submitted && $v.productCategory.slug.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.slug.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.slug.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Product Category</label>
            <b-form-select
              class="form-control"
              :options="productCategoryList"
              value-field="id"
               text-field="name"
              v-model="productCategory.product_category_id"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Interest Rate</label>
            <input
              v-model="productCategory.interest_rate"
              type="text"
              class="form-control"
              placeholder="Enter Interest Rate"
            />
            <!-- <div
              v-if="submitted && $v.productCategory.title_np.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.title_np.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Scheme Code</label>
            <input
              v-model="productCategory.scheme_code"
              type="text"
              class="form-control"
              placeholder="Enter Scheme Code"
            />
            <!-- <div
              v-if="submitted && $v.productCategory.title_np.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.title_np.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Is Featured</label>
            <b-form-select
              class="form-control"
              :options="preRequest.isFeaturedList"
              v-model="productCategory.is_featured"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Minimum age status</label>
            <b-form-select
              class="form-control"
              :options="preRequest.ageStatusList"
              v-model="productCategory.minimum_age_status"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Minimum Age</label>
            <input
              v-model="productCategory.minimum_age"
              type="text"
              class="form-control"
              placeholder="minimum age"
            />
            <!-- <div
              v-if="submitted && $v.productCategory.title_np.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.title_np.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Maximum age status</label>
            <b-form-select
              class="form-control"
              :options="preRequest.ageStatusList"
              v-model="productCategory.maximum_age_status"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label>Maximum age</label>
            <input
              v-model="productCategory.maximum_age"
              type="text"
              class="form-control"
              placeholder="maximum age"
            />
            <!-- <div
              v-if="submitted && $v.productCategory.title_np.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.title_np.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Status</label>
            <b-form-select
              class="form-control"
              :options="preRequest.statusList"
              v-model="productCategory.status"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">

          <!-- <div class="form-group">
            <label>Salutation</label>
            <input
              v-model="productCategory.salutation"
              type="text"
              class="form-control"
              placeholder="salutation"
              :class="{
                'is-invalid': submitted && $v.productCategory.salutation.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.salutation.required"
                >This field is required.</span
              >
            </div>
          </div> -->
          <div class="form-group">
            <label>Salutation</label>
            <multiselect placeholder="select salutation" :multiple="true" v-model="productCategory.salutation" :options="preRequest.salutations"></multiselect>
          </div>
        </div>

        <div class="col-md-4">
          
          <div class="form-group">
            <label>Gender</label>
            <multiselect placeholder="select salutation" :multiple="true" v-model="productCategory.gender" :options="preRequest.genders"></multiselect>
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Has insurance property</label>
            <b-form-select
              class="form-control"
              :options="preRequest.isFeaturedList"
              v-model="productCategory.has_insurance_property"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Has Payroll</label>
            <b-form-select
              class="form-control"
              :options="preRequest.isFeaturedList"
              v-model="productCategory.has_payroll"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-group">
            <label class="required">Has Recurring</label>
            <b-form-select
              class="form-control"
              :options="preRequest.isFeaturedList"
              v-model="productCategory.has_recurring"
            ></b-form-select>
            <!-- <div
              v-if="submitted && $v.basicDetail.salutation.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.basicDetail.salutation.required"
                >This field is required.</span
              >
            </div> -->
          </div>
        </div>
        
         <div class="col-md-4">
          <div class="form-group">
            <label class="required">Upload feature image.</label>
            <b-form-file
              :class="{
                'is-invalid': submitted && $v.productCategory.image.$error,
              }"
              plain
              accept="image/jpeg, image/png"
              @change="onFileChange($event, 'image')"
            ></b-form-file>
            <output>
              <img
                class="preview-image"
                :src="featureImgUri"
                v-if="featureImgUri"
              />
              <!-- <p v-else>No image...</p> -->
            </output>
            <div
              v-if="submitted && $v.productCategory.image.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.image.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="required">Description.</label>
            <vue-editor v-model="productCategory.short_description"></vue-editor>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <b-button class="float-right" variant="primary" type="submit">
            <b-spinner small v-if="createLoading"></b-spinner>
            Submit</b-button
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import Switches from "vue-switches";
import Multiselect from "vue-multiselect";
import { VueEditor } from "vue2-editor";
export default {
  name: "ProductModal",
  components: { Switches, Multiselect, VueEditor },
  props: {
    modalType: {
      type: String,
      default: "create",
    },
    selectedRow: {
      type: Object,
      default: () => {},
    },
    trainingTypes: {
      type: Array,
      default: () => [],
    },
    createLoading: {
      type: Boolean,
      default: false,
    },
    productCategoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      submitted: false,
      featureImgUri: "",
      preRequest: {
        ageStatusList: [
          {
            text: "active",
            value: "active",
          },
          {
            text: "inactive",
            value: "inactive",
          },
        ],
        statusList: [
          {
            text: "active",
            value: "active",
          },
          {
            text: "inactive",
            value: "inactive",
          },
          {
            text: "pending",
            value: "pending",
          },
        ],
        isFeaturedList: [
          {
            text: "yes",
            value: "yes",
          },
          {
            text: "no",
            value: "no",
          },
        ],
        salutations: ["Miss", "Mr", "Mrs", "Minor"],
        genders: ["Male", "Female", "Other"]
      },
      productCategory: {
        title: "",
        title_np: "",
        slug: "",
        product_category_id: "",
        image: "",
        scheme_code: "",
        is_featured: "",
        minimum_age_status: "",
        minimum_age: "",
        maximum_age_status: "",
        maximum_age: "",
        status: "",
        salutation: "",
        gender: "",
        has_insurance_property: "",
        has_payroll: "",
        has_recurring: "",
        order_by: 2,
        interest_rate: "",
        short_description: "",
      },
    };
  },
  validations: {
    productCategory: {
      title: { required },
      title_np: { required },
      slug: { required },
      salutation: { required },
      image: { required },
    },
  },
  computed: {
    progress: function () {
      return Math.round(100 / this.max_step) * this.current_step;
    },
  },
  mounted() {
    if (this.modalType == "create") {
      this.productCategory = {
        title: "",
        title_np: "",
        slug: "",
        product_category_id: "",
        image: "",
        scheme_code: "",
        is_featured: "",
        minimum_age_status: "",
        minimum_age: "",
        maximum_age_status: "",
        maximum_age: "",
        status: "",
        salutation: "",
        gender: "",
        has_insurance_property: "",
        has_payroll: "",
        has_recurring: "",
        order_by: 2,
        interest_rate: "",
        short_description: "",
      };
    } else {
      console.log(this.selectedRow);
      for (const [key, value] of Object.entries(this.selectedRow)) {
        for (const [key2, value2] of Object.entries(this.productCategory)) {
          if (key2 == key) {
            this.productCategory[key2] = value;
          }
          // if (key == "status") {
          //   this.productCategory.status =
          //     this.productCategory.status == "active" ? true : false;
          // }
        }
      }
      this.featureImgUri = this.selectedRow.image_url;
    }
  },
  methods: {
    onFileChange(event, name) {
      console.log("event", event);
      const file = event.target.files[0];
      this.productCategory[name] = file;
      let uri;
      if (name == "image") {
        uri = "featureImgUri";
      }
      if (!file) {
        return false;
      }
      if (!file.type.match("image.*")) {
        return false;
      }
      const reader = new FileReader();
      const self = this;
      reader.onload = function (e) {
        console.log(e);
        self[uri] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitForm() {
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.productCategory.$invalid) {
        this.$emit("submitForm", this.productCategory);
      }
    },
  },
};
</script>
