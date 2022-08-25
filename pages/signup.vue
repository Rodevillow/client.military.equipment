<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6 mx-auto">
      <div class="singup__wrapper">
        <div class="singup">
          <UiField label="Нікнейм"
                   :value="form_data.nickname"
                   :errors="errors.nickname.errors"
                   class="mb-4"
          >
            <UiInput :value="form_data.nickname"
                     @custom-input="onInputNickname"
                     @custom-blur="onInputNickname"
                     :errors="errors.nickname.errors"
                     :is-dirty="errors.nickname.isDirty"
                     plaseholder="Введіть нікнейм"
            ></UiInput>
          </UiField>
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
          <UiField label="Повторіть пароль"
                   :value="form_data.password_confirmation"
                   :errors="errors.password_confirmation.errors"
                   class="mb-4"
          >
            <UiInput type="password"
                     plaseholder="Введіть пароль повторно"
                     :value="form_data.password_confirmation"
                     @custom-input="onInputPasswordConfirmation"
                     @custom-blur="onInputPasswordConfirmation"
                     :errors="errors.password_confirmation.errors"
                     :is-dirty="errors.password_confirmation.isDirty"
            ></UiInput>
          </UiField>
          <UiButtonDefault class="w-100 signup-submit"
                           @custom-click="onSubmitForm"
                           :is-accent="isFormFullAndValid"
          >
            Зарегеструватися
          </UiButtonDefault>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiButtonDefault from "@/components/UiButtonDefault";

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
      form_data: {
        nickname: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: {
        nickname: {...defaultErrorObject},
        email: {...defaultErrorObject},
        password: {...defaultErrorObject},
        password_confirmation: {...defaultErrorObject},
      }
    }
  },
  components: {
    UiButtonDefault
  },
  computed: {
    isFormFullAndValid() {
      return !!this.checkIsFormFull() && this.form_data.password === this.form_data.password_confirmation;
    }
    // test () {
    //   return this.$store.state.auth.counter;
    // }
  },
  methods: {
    onInputNickname(event) {
      this.form_data.nickname = event.target.value;
      this.validateNickname(this.form_data.nickname, this.errors.nickname);
    },
    onInputEmail(event) {
      this.form_data.email = event.target.value;
      this.validateEmail(this.form_data.email, this.errors.email);
    },
    onInputPassword(event) {
      this.form_data.password = event.target.value;
      this.validatePassword(this.form_data.password, this.errors.password);
      this.validatePasswordConfirmation(this.form_data, this.errors.password_confirmation);
    },
    onInputPasswordConfirmation(event) {
      this.form_data.password_confirmation = event.target.value;
      this.validatePasswordConfirmation(this.form_data, this.errors.password_confirmation);
    },
    // -----------------------------------------------------
    setErrorsFromApi(errorsForApi) {
      for (const [key, value] of Object.entries(errorsForApi)) {
        console.log(key, value);
        this.errors[key] = {
          isDirty: true,
          errors: value
        };
      }
    },
    checkIsFormFull() {
      return (
        this.form_data.nickname &&
        this.form_data.email &&
        this.form_data.password &&
        this.form_data.password_confirmation
      );
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
    async sendRequestToAuthRegister() {
      try {
        const res = await this.$axios.$post('/api/auth/register', this.form_data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        });

        this.$store.commit('auth/commitRegister', {
          accessToken: res.data.auth.original.access_token,
          user: res.data.user
        })

        this.clearFormData();
        this.clearErrorsData();

        await this.$router.push('/dashboard');

      } catch ({ response }) {
        if (response.status === 422) {
          const errors = response.data.errors;
          this.setErrorsFromApi(errors);
        }
      }
    },
    onSubmitForm() {
      this.validateNickname(this.form_data.nickname, this.errors.nickname);
      this.validateEmail(this.form_data.email, this.errors.email);
      this.validatePassword(this.form_data.password, this.errors.password);
      this.validatePasswordConfirmation(this.form_data, this.errors.password_confirmation);

      if(this.checkIsFormValid(this.errors)) {
        this.sendRequestToAuthRegister();
      }
    },
    clearFormData() {
      this.form_data.nickname = "";
      this.form_data.email = "";
      this.form_data.password = "";
      this.form_data.password_confirmation = "";
    },
    clearErrorsData() {
      this.errors.nickname.isDirty = false;
      this.errors.nickname.errors = [];
      this.errors.email.isDirty = false;
      this.errors.email = [];
      this.errors.password.isDirty = false;
      this.errors.password = [];
      this.errors.password_confirmation.isDirty = false;
      this.errors.password_confirmation = [];
    },
    // -----------------------------------------------------
    validateNickname(value, error) {
      error.isDirty = true;
      error.errors = [];

      if (!value) {
        error.errors.push('Нікнейм обовєязковий!');
      }

      if (value.length > 50) {
        error.errors.push('Нікнейм має бути не довший за 50 символів!');
      }
    },
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
    validatePasswordConfirmation(data, error) {
      error.isDirty = true;
      error.errors = [];

      if (!data.password_confirmation) {
        error.errors.push('Підтвердження паролю обовєязкове!');
      }

      if (data.password_confirmation.length > 50) {
        error.errors.push('Підтвердження паролю має бути не довший за 50 символів!');
      }

      if (data.password !== data.password_confirmation) {
        error.errors.push('Паролі не співпадають!');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_variables.scss";

  .singup {
    background-color: $dark-color;
    border-radius: $border-radius-default;

    &__wrapper {
      height: calc(100vh - 69px - 69px - 40px);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-submit {
      color: $light-color !important;
      border-color: $light-color !important;
    }
  }
</style>
