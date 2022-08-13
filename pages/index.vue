<template>
  <div class="index">
<!--    <UiBlockSlider class="mb-5"/>-->
    <UiBlockFilterPanel />
    <UiBlockItems />
  </div>
</template>

<script>
import UiBlockFilterPanel from "~/components/UiBlockFilterPanel";
import UiBlockItems from "~/components/UiBlockItems";

export default {
  name: 'IndexPage',
  layout: 'LayoutDefault',
  components: {
    UiBlockItems
  }
}
</script>

<style lang="scss" scoped>
.index {

}
</style>
