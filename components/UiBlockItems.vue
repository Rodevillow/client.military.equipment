<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" img-url="https://apostrophe.ua/uploads/image/cb53eb37570f5425d16d2f214f13dc41.jpg" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" img-url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_kxesdipMun-fpEBWHJNBBOLavWAWO-cOg&usqp=CAU" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <UiBlockItem :options-panel="withOptionalPanel" />
    </div>
  </div>
</template>

<script>
import UiBlockItem from "~/components/UiBlockItem";

export default {
  name: "UiBlockItems",
  props: {
    withOptionalPanel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    UiBlockItem
  }

}
</script>
