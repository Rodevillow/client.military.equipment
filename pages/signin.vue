<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6 mx-auto">
      <div class="singin">
        <UiField label="Email" :value="email" class="mb-4">
          <UiInput :value="email"
                   plaseholder="Введіть пошту"
                   @on-input="onInputEmail"
                   @on-focus="onFocusEmail"
                   @on-blur="onBlueEmail"
          ></UiInput>
        </UiField>
        <UiField label="Пароль" :value="password" class="mb-4">
          <UiInput :value="password"
                   plaseholder="Введіть пароль"
                   @on-input="onInputPassword"
                   @on-focus="onFocusPassword"
                   @on-blur="onBluePassword"
          ></UiInput>
        </UiField>
        <UiButtonDefault class="w-100" @on-click="onSubmitForm">
          Увійти
        </UiButtonDefault>
      </div>
    </div>
  </div>
</template>

<script>
import UiButtonDefault from "@/components/UiButtonDefault";

export default {
  name: 'SignIn',
  layout: 'LayoutDefault',
  components: {
    UiButtonDefault
  },
  data: () => {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    onInputEmail(event) {
      this.email = event.target.value;
    },
    onFocusEmail(event) {
      this.email = event.target.value;
    },
    onBlueEmail(event) {
      this.email = event.target.value;
    },
    onInputPassword(event) {
      this.password = event.target.value;
    },
    onFocusPassword(event) {
      this.password = event.target.value;
    },
    onBluePassword(event) {
      this.password = event.target.value;
    },
    onSubmitForm() {
      alert('Заглушка');
    }
  }
}
</script>

<style lang="scss" scoped>
.singin {
  height: calc(100vh - 69px - 69px - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
