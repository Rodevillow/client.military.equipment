<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6 mx-auto">
      <div class="singin__wrapper">
        <div class="singin">
          <UiAlertDanger class="mb-5"
                         :message="alerts.danger"
                         v-if="!!alerts.danger"
                         @custom-close="handleAlertDangerClose"
          />
          <UiField label="Email"
                   :value="form_data.email"
                   :errors="errors.email.errors"
                   class="mb-4"
          >
            <UiInput plaseholder="example@gmail.com"
                     :value="form_data.email"
                     @custom-input="onInputEmail"
                     @custom-blur="onInputEmail"
                     :errors="errors.email.errors"
                     :is-dirty="errors.email.isDirty"
            ></UiInput>
          </UiField>
          <UiField label="Пароль"
                   :value="form_data.password"
                   :errors="errors.password.errors"
                   class="mb-4"
          >
            <UiInput type="password"
                     plaseholder="Введіть пароль"
                     :value="form_data.password"
                     @custom-input="onInputPassword"
                     @custom-blur="onInputPassword"
                     :errors="errors.password.errors"
                     :is-dirty="errors.password.isDirty"
            ></UiInput>
          </UiField>
          <UiButtonDefault class="w-100 singin-submit"
                           @custom-click="onSubmitForm"
                           :is-accent="isFormFullAndValid"
          >
            Авторизуватися
          </UiButtonDefault>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiButtonDefault from "@/components/UiButtonDefault";
import UiAlertDanger from "@/components/UiAlertDanger";

const defaultErrorObject = {
  isDirty: false,
  errors: []
};

export default {
  name: 'SignUp',
  layout: 'LayoutDefault',
  middleware: 'authenticated',
  data: () => {
    return {
      alerts: {
        danger: ""
      },
      form_data: {
        email: "",
        password: "",
      },
      errors: {
        email: {...defaultErrorObject},
        password: {...defaultErrorObject},
      }
    }
  },
  components: {
    UiButtonDefault,
    UiAlertDanger
  },
  computed: {
    isFormFullAndValid() {
      return !!this.checkIsFormFull();
    }
    // test () {
    //   return this.$store.state.auth.counter;
    // }
  },
  methods: {
    onInputEmail(event) {
      this.form_data.email = event.target.value;
      this.validateEmail(this.form_data.email, this.errors.email);
    },
    onInputPassword(event) {
      this.form_data.password = event.target.value;
      this.validatePassword(this.form_data.password, this.errors.password);
    },
    // -----------------------------------------------------
    setErrorsFromApi(errorsForApi) {
      for (const [key, value] of Object.entries(errorsForApi)) {
        this.errors[key].errors = value;
      }
    },
    checkIsFormFull() {
      return this.form_data.email && this.form_data.password;
    },
    checkIsFormValid(errors) {

      let isValid = true;

      for (const [key, value] of Object.entries(errors)) {
        if (value.errors.length > 0) {
          isValid = false;
        }
      }

      return isValid;
    },
    async sendRequestToAuthLogin() {
      try {
        const res = await this.$axios.$post('/api/auth/login', this.form_data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        });

        this.$store.commit('auth/commitLogin', {
          accessToken: res.data.auth.original.access_token,
          user: res.data.user
        })

        await this.$router.push('/dashboard');

      } catch ({ response }) {
        console.log(response);
        if (response.status === 422) {
          const errors = response.data.errors;
          this.setErrorsFromApi(errors);
        }
        if (response.status === 401) {
          this.alerts.danger = response.data.message
        }
      }
    },
    onSubmitForm() {
      this.validateEmail(this.form_data.email, this.errors.email);
      this.validatePassword(this.form_data.password, this.errors.password);

      if(this.checkIsFormValid(this.errors)) {
        this.sendRequestToAuthLogin();
        this.clearFormData();
        this.clearErrorsData();
      }
    },
    clearFormData() {
      this.form_data.email = "";
      this.form_data.password = "";
    },
    clearErrorsData() {
      this.errors.nickname = {...defaultErrorObject};
      this.errors.email = {...defaultErrorObject};
      this.errors.password = {...defaultErrorObject};
      this.errors.password_confirmation = {...defaultErrorObject};
    },
    handleAlertDangerClose() {
      this.alerts.danger = "";
    },
    // -----------------------------------------------------
    validateEmail(value, error) {
      error.isDirty = true;
      error.errors = [];

      if (!value) {
        error.errors.push('Пошта обовєязкова!');
      }

      if (value.length > 50) {
        error.errors.push('Пошта має бути не довшою ніж 50 символів!');
      }

      if (!String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        error.errors.push('Неправильний формат пошти!');
      }
    },
    validatePassword(value, error) {
      error.isDirty = true;
      error.errors = [];

      if (!value) {
        error.errors.push('Пароль обовєязковий!');
      }

      if (value.length > 50) {
        error.errors.push('Пароль має бути не довший за 50 символів!');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.singin {
  background-color: $dark-color;
  border-radius: $border-radius-default;

  &__wrapper {
    height: calc(100vh - 69px - 69px - 40px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-submit {
    color: $light-low-color;
    border-color: $light-low-color;
  }
}
</style>
