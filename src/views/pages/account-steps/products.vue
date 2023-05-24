<template>
  <div class="product-page">
    <div class="product-page-wrap pt-4">
      <div class="container container-sm">
        <div class="row">
          <div class="col-md-12">
            <div class="products-carousel">
              <b-carousel style="text-shadow: 0px 0px 2px #000" fade controls indicators img-height="300">

                <b-carousel-slide :img-src="require('@/assets/images/banner-img1.jpg')"></b-carousel-slide>
                <b-carousel-slide :img-src="require('@/assets/images/banner-img2.jpg')"></b-carousel-slide>
                <b-carousel-slide :img-src="require('@/assets/images/banner-img3.jpg')"></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="list-heading">
              <h4 class="mb-0">Our Products</h4>
            </div>
          </div>
        </div>
        <div class="row display-mobile" >
          <div class="col-md-12">
            <div class="example-3d">
              <swiper class="swiper" :options="swiperOption">

                <swiper-slide v-for="(data, index) in shopsData" :key="index">
                  <div class="card">
                    <div class="card-body">
                      <div class="text-center">
                        <!-- <img :src="`${data.image_url}`" alt class="avatar-md mt-2 mb-4" /> -->
                        <img :src="`${shopsData[index].image}`" alt class="avatar-md mt-1 mb-2" />
                        <div class="media-body">
                          <h6 class="text-truncate">
                            <a href="#" class="text-dark">{{ data.title }}</a>
                          </h6>
                          <!-- <p class="text-muted">
                      <i class="mdi mdi-account mr-1"></i> {{ data.title_np }}
                    </p> -->
                        </div>
                      </div>
                      <hr class="my-3" />
                      <div class="row text-center">
                        <div class="col-12">
                          <h5 class="mb-0 text-primary font-weight-bold">
                            {{ data.interest_rate }} %
                          </h5>
                          <p class="text-muted mb-4">Interest Rate</p>
                        </div>
                      </div>
                      <div class="row text-center">
                        <div class="col-6">
                          <b-button pill variant="primary" @click="applyNow(data.slug)">Apply Now</b-button>
                        </div>
                        <div class="col-6">
                          <b-button @click="viewDetail(index)" pill variant="outline-secondary">View Details</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="row hidden-mobile">

          <div class="col-xl-4 col-sm-6" v-for="(data, index) in shopsData" :key="index">
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <!-- <img :src="`${data.image_url}`" alt class="avatar-md mt-2 mb-4" /> -->
                  <img :src="`${shopsData[index].image}`" alt class="avatar-md mt-1 mb-2" />
                  <div class="media-body">
                    <h6 class="text-truncate">
                      <a href="#" class="text-dark">{{ data.title }}</a>
                    </h6>
                    <!-- <p class="text-muted">
                      <i class="mdi mdi-account mr-1"></i> {{ data.title_np }}
                    </p> -->
                  </div>
                </div>
                <hr class="my-3" />
                <div class="row text-center">
                  <div class="col-12">
                    <h5 class="mb-0 text-primary font-weight-bold">
                      {{ data.interest_rate }} %
                    </h5>
                    <p class="text-muted mb-4">Interest Rate</p>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col-6">
                    <b-button pill variant="primary" @click="applyNow(data.products)">Apply Now</b-button>
                  </div>
                  <div class="col-6">
                    <b-button @click="viewDetail(index)" pill variant="outline-secondary">View Details</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-scrollable" scrollable :title="selectedProduct.title" ref="modal-scrollable"
      title-class="font-18">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <div class="detail-text" v-html="selectedProduct.short_description"></div>
    </b-modal>
  </div>
</template>
<script>


import Promise from "../../../lib/mixins/ExtendedPromises";
import Api from "../../../repositories/products";

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ProductPage",
  mixins: [Promise],
  components: { Swiper, SwiperSlide },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      title: "Products",
      products: [],
      selectedProduct: {
        title: '',
        short_description: ''
      },
      swiperOption: {
        slidesPerView: 'auto',
          spaceBetween: 30,
           pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
      
      },
      shopsData: [

        {
          image: require("@/assets/images/companies/img-1.png"),
          title: "ICFC BUMPER SAVING ACCOUNT",
          interest_rate: 12,
          name: "Wayne McClain",
          products: 86,
          balance: "$12,456",
        },
        {
          image: require("@/assets/images/companies/img-2.png"),
          title: "ICFC SOCIAL SECURITY",
          interest_rate: 13,
          name: "David Marshall",
          products: 72,
          balance: "$10,352",
        },
        {
          image: require("@/assets/images/companies/img-3.png"),
          title: "ICFC SAVING",
          interest_rate: 10,
          name: "Katia Stapleton",
          products: 75,
          balance: "$9,963",
        },
        {
          image: require("@/assets/images/companies/img-4.png"),
          title: "ICFC Premium Saving",
          interest_rate: 12,
          name: "Andrew Bivens",
          products: 65,
          balance: "$14,568",
        },
        {
          image: require("@/assets/images/companies/img-5.png"),
          title: "Saving Account",
          interest_rate: 12,
          name: "Mae Rankin",
          products: 82,
          balance: "$16,445",
        },
        {
          image: require("@/assets/images/companies/img-6.png"),
          title: "Employee Account",
          interest_rate: 12,
          name: " Brian Correa",
          products: 71,
          balance: "$11,523",
        },
        {
          image: require("@/assets/images/companies/img-7.png"),
          title: "Special Saving",
          interest_rate: 12,
          name: "Dean Odom",
          products: 66,
          balance: "$13,478",
        },
        {
          image: require("@/assets/images/companies/img-8.png"),
          title: "Super Saving Account",
          interest_rate: 12,
          name: "John McLeroy",
          products: 58,
          balance: "$14,654",
        },
        {
          image: require("@/assets/images/companies/img-8.png"),
          title: "ICFC Zero Balance",
          interest_rate: 12,
          name: "John McLeroy",
          products: 538,
          balance: "$14,654",
        },
        {
          image: require("@/assets/images/companies/img-8.png"),
          title: "Senior Citizen A/C",
          interest_rate: 12,
          name: "John McLeroy",
          products: 5383,
          balance: "$14,654",
        },
        {
          image: require("@/assets/images/companies/img-1.png"),
          title: "Keta Keti Bachat",
          interest_rate: 12,
          name: "Wayne McClain",
          products: 862,
          balance: "$12,456",
        },
        {
          image: require("@/assets/images/companies/img-1.png"),
          title: "Nari Bachat",
          interest_rate: 12,
          name: "Wayne McClain",
          products: 8622,
          balance: "$12,456",
        },
      ],
    };
  },

  mounted() {
    this.getPrerequest();
  },
  methods: {
    getPrerequest() {
      const operation = this.response(Api.getPreRequest());
      operation
        .then((data) => {
          if (operation.isFulfilled()) {
            console.log(data);
            this.products = data.products;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    viewDetail(index) {
      this.selectedProduct = this.products[index]
      this.$refs['modal-scrollable'].show()

    },
    applyNow(slug) {
      this.$router.push(`/basic/${slug}`)
    }
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
    width: 75%;
  }
  // .swiper-slide:nth-child(2n) {
  //   width: 55%;
  // }
  // .swiper-slide:nth-child(3n) {
  //   width: 35%;
  // }
</style>