<template>
  <header id="form-page-topbar">
    <div class="navbar-header">
      <div class="d-flex logo-wrapper">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo.png" alt height="42" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo.png" alt height="50" />
            </span>
          </a>

          <a href="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo.png" alt height="20" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo.png" alt height="50" />
            </span>
          </a>
        </div>
      </div>
      <div class="header-title">
        <h5 class="color-primary">{{ headerTitle }}</h5>
      </div>
      <div class="header-right d-flex sm-100">
        <b-nav-form class="header-form" v-if="startUp">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Reference Number"
            v-model="user"
            :class="{
              'is-invalid': submitted && $v.user.$error,
            }"
          ></b-form-input>
          <div
            v-if="submitted && $v.user.$error"
            class="invalid-feedback invalid-feedback-header"
          >
            <span v-if="!$v.user.required">Plese enter user ID.</span>
          </div>
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            variant="primary"
            @click="searchUser"
          >
            <b-spinner small v-if="loading"></b-spinner> Search</b-button
          >
        </b-nav-form>
        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            @click="initFullScreen"
          >
            <i class="ri-fullscreen-line"></i>
          </button>
        </div>

        <!-- <b-dropdown
          right
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          variant="black"
        >

          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-0">{{ $t('navbar.dropdown.notification.text')}}</h6>
              </div>
              <div class="col-auto">
                <a href="#!" class="small">{{ $t('navbar.dropdown.notification.subtext')}}</a>
              </div>
            </div>
          </div>
         
          <div class="p-2 border-top">
            <a
              class="btn btn-sm btn-link font-size-14 btn-block text-center"
              href="javascript:void(0)"
            >
              <i class="mdi mdi-arrow-right-circle mr-1"></i>
              {{ $t('navbar.dropdown.notification.button')}}
            </a>
          </div>
        </b-dropdown> -->

        <b-dropdown
          right
          variant="black"
          toggle-class="header-item"
          class="d-inline-block user-dropdown customer-care"
        >
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/customer-service.png"
              alt="Header Avatar"
            />

            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item-->
          <!-- <a class="dropdown-item" href="#">
            <i class="ri-user-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.profile') }}
          </a>
          <a class="dropdown-item" href="#">
            <i class="ri-wallet-2-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.mywallet') }}
          </a>
          <a class="dropdown-item d-block" href="#">
            <span class="badge badge-success float-right mt-1">11</span>
            <i class="ri-settings-2-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.settings') }}
          </a>
          <a class="dropdown-item" href="#">
            <i class="ri-lock-unlock-line align-middle mr-1"></i>
            {{ $t('navbar.dropdown.kevin.list.lockscreen') }}
          </a> -->
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-primary" href="tel:+977-01-4545885/86">
            <i class="mdi mdi-phone"></i>
            {{contactInfo.phone}}
          </a>
        </b-dropdown>

        <!-- <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle waves-effect toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="ri-settings-2-line toggle-right"></i>
          </button>
        </div> -->
      </div>
    </div>
    <b-modal
      id="modal-scrollable"
      scrollable
      title="Verification!"
      ref="modal-scrollable"
      title-class="font-18"
    >
      <p>
        A six digit code is emailed/texted to you. Please enter the code below
        and Procee
      </p>

      <div class="form-group">
        <input
          id="otp"
          type="text"
          class="form-control"
          name="userName"
          placeholder="Please enter the otp"
          v-model="otp"
        />
      </div>
      <template #modal-footer="{ }">
       <b-button variant="outline-secondary">Resend OTP</b-button>
        <!-- Button with custom close trigger value -->
        <b-button  variant="primary">
          Proceed
        </b-button>
      </template>
    </b-modal>
  </header>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "StepsHeader",
  props: {
    headerTitle: {
      default: "Sarbashrestha Bachat Khata",
    },
  },
  data() {
    return {
      user: "",
      loading: false,
      submitted: false,
      otp: "",
      startUp: true,
      contactInfo: { 
        phone: '+977-01-4545885/86'
      }
    };
  },
  validations: {
    user: { required },
  },
  watch: {
      $route(to, from){
        if(to.name == 'products') {
          this.startUp = true;
        } else {
          this.startUp = false;
        }
    }
  },
  mounted () {
    console.log(this.$route)
    if(this.$route.name == 'products') {
      this.startUp = true;
    } else {
      this.startUp = false;
    }
  },
  methods: {
    searchUser() {
      this.submitted = true;
      this.$v.$touch();
      // console.log(!this.$v.$invalid);

      if (!this.$v.$invalid) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$refs["modal-scrollable"].show();
        }, 300);
      }
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
};
</script>