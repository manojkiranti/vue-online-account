<script>
import { required } from "vuelidate/lib/validators";
import Promise from "../../../lib/mixins/ExtendedPromises";
import Auth from "../../../repositories/auth";



export default {
  mixins: [Promise],
  data() {
    return {
      loading: false,
      // email: "admin@themesdesign.in",
      // password: "123456",
      email: "",
      password: "",
      submitted: false,
      currentYear: "",
      notification: {
        message: ''
      }
    };
  },
  // computed: {
  //   notification() {
  //     return this.$store ? this.$store.state.notification : null;
  //   }
  // },
  created() {
    document.body.classList.add("auth-body-bg");
  },
  validations: {
    email: { required },
    password: { required }
  },
   mounted() {
    var today = new Date();
    this.currentYear = today.getFullYear()
  },
  methods: {
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.loading = true;
        this.notification.message = '';
        this.tryingToLogIn = true;
        this.authError = null;

     
        let formData = new FormData();
        formData.append("username", this.email);
        formData.append("password", this.password);
        // let loginData = {
        //   username: this.email,
        //   password: this.password
        // }
        const operation = this.response(Auth.login(formData));
        operation
          .then(data => {
            if (operation.isFulfilled()) {
                this.notification.message = data.message;
                this.$store.commit("loginSuccess", data);
                this.tryingToLogIn = false;
                this.isAuthError = false;
                // Redirect to the originally requested page, or to the home page
                this.loading = false;
                this.$router.push(
                  this.$route.query.redirectFrom || { name: "Dashboard" }
                );
              console.log(data)
            }
          })
          .catch(err => {
            this.loading = false;
             this.notification.message = err.data.message;
             this.tryingToLogIn = false;
             this.authError = err ? err : "";
             this.isAuthError = true;
            if (operation.isRejected()) {
              this.$store.commit("loginFailed", { err });
            }
          });
      }
    }
    // tryToLogIn() {
    //   this.submitted = true;
    //   // stop here if form is invalid
    //   this.$v.$touch();

    //   if (this.$v.$invalid) {
    //     return;
    //   } else {
    //     if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
    //       this.tryingToLogIn = true;
    //       // Reset the authError if it existed.
    //       this.authError = null;
          
    //       return (
    //         this.logIn({
    //           email: this.email,
    //           password: this.password
    //         })
    //           // eslint-disable-next-line no-unused-vars
    //           .then(token => {
    //             this.tryingToLogIn = false;
    //             this.isAuthError = false;
    //             // Redirect to the originally requested page, or to the home page
    //             this.$router.push(
    //               this.$route.query.redirectFrom || { name: "home" }
    //             );
    //           })
    //           .catch(error => {
    //             this.tryingToLogIn = false;
    //             this.authError = error ? error : "";
    //             this.isAuthError = true;
    //           })
    //       );
    //     } else {
    //       const { email, password } = this;
    //       if (email && password) {
    //         this.login({ email, password });            
    //       }
    //     }
    //   }
    // }
  }
};
</script>

<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <a href="/">
        <i class="mdi mdi-home-variant h2 text-white"></i>
      </a>
    </div>
    <div>
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-lg-4">
            <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100">
              <div class="w-100">
                <div class="row justify-content-center">
                  <div class="col-lg-9">
                    <div>
                      <div class="text-center">
                        <div>
                          <a href="/" class="logo pt-3">
                            <img src="@/assets/images/logo.png" height="50" alt="logo" />
                          </a>
                        </div>

                        <h4 class="font-size-18 mt-4">Welcome Back !</h4>
                        <p class="text-muted">Sign in to continue to online account admin.</p>
                      </div>

                      <b-alert
                        variant="danger"
                        class="mt-3"
                        v-if="notification.message"
                        show
                        dismissible
                      >{{notification.message}}</b-alert>

                      <div class="p-2 mt-5">
                        <form class="form-horizontal" @submit.prevent="tryToLogIn">
                          <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-mail-line auti-custom-input-icon"></i>
                            <label for="email">Email</label>
                            <input
                          
                              v-model="email"
                              class="form-control"
                              id="email"
                              placeholder="Enter email"
                              :class="{ 'is-invalid': submitted && $v.email.$error }"
                            />
                            <div v-if="submitted && !$v.email.required" class="invalid-feedback">
                              <span v-if="!$v.email.required">Email is required.</span>
                            </div>
                          </div>

                          <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-lock-2-line auti-custom-input-icon"></i>
                            <label for="userpassword">Password</label>
                            <input
                              v-model="password"
                              type="password"
                              class="form-control"
                              id="userpassword"
                              placeholder="Enter password"
                              :class="{ 'is-invalid': submitted && $v.password.$error }"
                            />
                            <div
                              v-if="submitted && !$v.password.required"
                              class="invalid-feedback"
                            >Password is required.</div>
                          </div>

                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customControlInline"
                            />
                            <label
                              class="custom-control-label"
                              for="customControlInline"
                            >Remember me</label>
                          </div>

                          <div class="mt-4 text-center">
                            <button
                              class="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                            <b-spinner small v-if="loading"></b-spinner>
                            Log In</button>
                          </div>

                          <!-- <div class="mt-4 text-center">
                            <router-link tag="a" to="/forgot-password" class="text-muted">
                              <i class="mdi mdi-lock mr-1"></i> Forgot your password?
                            </router-link>
                          </div> -->
                        </form>
                      </div>

                      <div class="mt-5 text-center">
                        <!-- <p>
                          Don't have an account ?
                          <router-link
                            tag="a"
                            to="/register"
                            class="font-weight-medium text-primary"
                          >Register</router-link>
                        </p> -->
                        <p>
                          © {{currentYear}} ICFC Development Bank.
                          <!-- <i class="mdi mdi-heart text-danger"></i> by Themesdesign -->
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="authentication-bg">
              <div class="bg-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>