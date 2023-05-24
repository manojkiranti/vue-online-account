<template>
  <div class="create-training">
    <form class="form-horizontal" @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <h6 class="mb-4">Product Category Info</h6>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="productCategory.name"
              type="text"
              class="form-control"
              placeholder="Enter Name"
              :class="{
                'is-invalid': submitted && $v.productCategory.name.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.name.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.name.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Name Np</label>
            <input
              v-model="productCategory.name_np"
              type="text"
              class="form-control"
              placeholder="Enter Name NP"
              :class="{
                'is-invalid': submitted && $v.productCategory.name_np.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.name_np.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.name_np.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>
        
        <div class="col-md-12">
          <div class="form-group">
            <label>Description</label>
            <textarea
              v-model="productCategory.description"
              type="text"
              class="form-control"
              placeholder="Description"
              :class="{
                'is-invalid': submitted && $v.productCategory.description.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.description.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.description.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Description NP</label>
            <textarea
              v-model="productCategory.description_np"
              type="text"
              class="form-control"
              placeholder="Description NP"
              :class="{
                'is-invalid': submitted && $v.productCategory.description_np.$error,
              }"
            />
            <div
              v-if="submitted && $v.productCategory.description_np.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.productCategory.description_np.required"
                >This field is required.</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Slug</label>
            <input
              v-model="productCategory.slug"
              type="text"
              class="form-control"
              placeholder="Slug"
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

         <div class="col-md-6">
          <div class="form-group">
            <label>Status</label>
            <div>
              <switches
                v-model="productCategory.status"
                type-bold="false"
                color="info"
                class="ml-1 mb-0"
                text-enabled="active"
                text-disabled="inactive"
              ></switches>
            </div>
          </div>
        </div>

        <div class="col-md-6">
                <div class="form-group">
                  <label class="required"
                    >Upload feature image.</label
                  >
                  <b-form-file  :class="{
                      'is-invalid':
                        submitted && $v.productCategory.featured_image.$error,
                    }" plain  accept="image/jpeg, image/png" @change="onFileChange($event, 'featured_image')"></b-form-file>
                  <output>
                      <img class="preview-image" :src="featureImgUri" v-if="featureImgUri">
                      <!-- <p v-else>No image...</p> -->
                  </output>
                  <div
                    v-if="submitted && $v.productCategory.featured_image.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.productCategory.featured_image.required"
                      >This field is required.</span
                    >
                  </div>
                </div>
              </div>
        <div class="col-md-6">
                <div class="form-group">
                  <label class="required"
                    >Upload Thumb image.</label
                  >
                  <b-form-file  :class="{
                      'is-invalid':
                        submitted && $v.productCategory.thumb_image.$error,
                    }" plain  accept="image/jpeg, image/png" @change="onFileChange($event, 'thumb_image')"></b-form-file>
                  <output>
                      <img class="preview-image" :src="thumbImageUri" v-if="thumbImageUri">
                      <!-- <p v-else>No image...</p> -->
                  </output>
                  <div
                    v-if="submitted && $v.productCategory.thumb_image.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.productCategory.thumb_image.required"
                      >This field is required.</span
                    >
                  </div>
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

export default {
  name: "ProductCategoryModal",
  components: { Switches },
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
  },
  data() {
    return {
      baseUrl: 'https://bodeod.nicasiabank.com/public/',
      submitted: false,
      featureImgUri: "",
      thumbImageUri: "",
      productCategory: {
        name: "",
        name_np: "",
        description: "",
        description_np: "",
        slug: "",
        order_by: 2,
        featured_image: "",
        thumb_image: ""
      },
    };
  },
  validations: {
    productCategory: {
      name: { required },
      name_np: { required },
      description: { required },
      description_np: { required },
      slug: { required },
      featured_image: { required },
      thumb_image: { required }
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
        name: "",
        name_np: "",
        description: "",
        description_np: "",
        slug: "",
        order_by: 2,
        featured_image: "",
        thumb_image: ""
      }
    } else {
      console.log(this.selectedRow);
      for (const [key, value] of Object.entries(this.selectedRow)) {
        for (const [key2, value2] of Object.entries(this.productCategory)) {
          if (key2 == key) {
            this.productCategory[key2] = value;
          }
          if (key == "status") {
            this.productCategory.status =
            this.productCategory.status == "active" ? true : false;
          }
          
        }
      }
      this.featureImgUri = this.selectedRow.featured_image_url;
      this.thumbImageUri = this.selectedRow.thumb_image_url;
    }
  },
  methods: {
    onFileChange(event, name) {
      console.log('event', event)
      const file = event.target.files[0]
      this.productCategory[name] = file;
      let uri;
      if(name == 'featured_image') {
        uri = 'featureImgUri';
      } else if(name == 'thumb_image') {
        uri = 'thumbImageUri';
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
