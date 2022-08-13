<template>
  <div class="ui-block-filter-panel">
    <UiField>
      <UiInput>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0632 12.2317C15.4681 9.97993 15.4681 6.32903 13.0632 4.07723C10.6584 1.82542 6.75929 1.82542 4.35441 4.07723C1.94954 6.32903 1.94954 9.97993 4.35441 12.2317C6.75929 14.4835 10.6584 14.4835 13.0632 12.2317Z" stroke="#CAC1C1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.0727 12.2314L21.3694 20" stroke="#CAC1C1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </UiInput>
    </UiField>
  </div>
</template>

<script>
export default {
  name: "UiBlockFilterPanel",
  components: {

  }
}
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_variables.scss";

.ui-block-filter-panel {
  display: flex;
  margin-bottom: $margin-default * 2;
}
</style>
