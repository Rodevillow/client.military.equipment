<template>
  <div class="dashboard">
<!--    <UiBlockSlider class="mb-5"/>-->
    <h1>DASBOARD Page</h1>
    <UiBlockFilterPanel />
    <UiBlockItems :with-optional-panel="true" />

  </div>
</template>

<script>
import UiBlockFilterPanel from "~/components/UiBlockFilterPanel";
import UiBlockItems from "~/components/UiBlockItems";

export default {
  name: 'DashboardPage',
  layout: 'LayoutDefault',
  middleware: 'notAuthenticated',
  components: {
    UiBlockItems
  }
}
</script>

<style lang="scss" scoped>
.dashboard {

}
</style>
