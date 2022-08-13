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
                     @on-input="onInputNickname"
                     @on-blur="onInputNickname"
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
                     @on-input="onInputEmail"
                     @on-blur="onInputEmail"
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
                     @on-input="onInputPassword"
                     @on-blur="onInputPassword"
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
                     @on-input="onInputPasswordConfirmation"
                     @on-blur="onInputPasswordConfirmation"
            ></UiInput>
          </UiField>
          <UiButtonDefault class="w-100"
                           :class="{'singup-submit': isFormFull}"
                           @on-click="onSubmitForm"
                           :disabled="!isFormFull"
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
    isFormFull() {
      return this.form_data.nickname
        && this.form_data.email
        && this.form_data.password
        && this.form_data.password_confirmation
    }
  },
  methods: {
    onInputNickname(event) {
      this.form_data.nickname = event.target.value;
      this.validateNickname(this.form_data.nickname, this.errors.nickname);
    },
    onInputEmail(event) {
      this.form_data.email = event.target.value;
    },
    onInputPassword(event) {
      this.form_data.password = event.target.value;
    },
    onInputPasswordConfirmation(event) {
      this.form_data.password_confirmation = event.target.value;
    },
    onSubmitForm() {
      this.errors.nickname.errors = [
        'Nickname have an error! =(',
        'Some test error again!'
      ];
      this.errors.email.errors = [
        'Email have an error! =(',
        'Some test error again!'
      ];
      this.errors.password.errors = [
        'Password have an error! =(',
        'Some test error again!'
      ];
      this.errors.password_confirmation.errors = [
        'Password confirmation have an error! =(',
        'Some test error again!'
      ];
      alert('Заглушка');
    },
    // -------------------------
    validateNickname(value, error) {
      error.isDirty = true;
      error.errors = [];

      if (!value) {
        error.errors.push('Нікнейм обовєязковий!');
      }

      if (value.length > 50) {
        error.errors.push('Нікнейм має бути не довший за 50 символів!');
      }

      // TODO :: Зробити перевірку (регулярку) яка буде перевіряти щоб були тільки букви (великі та малі), а всіляких спецсимволів не було!
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

      // TODO :: Зробити перевірку (регулярку) яка буде перевіряти щоб були тільки букви (великі та малі), а всіляких спецсимволів не було!
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

      // TODO :: Зробити перевірку (регулярку) яка буде перевіряти щоб були тільки букви (великі та малі), а всіляких спецсимволів не було!
    },
    validatePasswordConfirmation(value, error) {
      error.isDirty = true;
      error.errors = [];

      if (!value) {
        error.errors.push('Підтвердження паролю обовєязкове!');
      }

      if (value.length > 50) {
        error.errors.push('Підтвердження паролю має бути не довший за 50 символів!');
      }

      // TODO :: Зробити перевірку (регулярку) яка буде перевіряти щоб були тільки букви (великі та малі), а всіляких спецсимволів не було!
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_variables.scss";

  .singup {
    background-color: $dark-color;
    //padding: $padding-default * 4;
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
