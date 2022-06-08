<template>
  <div id="app">
    <TmpHeader />
    <TmpMain />
  </div>
</template>

<script>
import TmpHeader from "./components/template/TmpHeader.vue";
import TmpMain from "./components/template/TmpMain.vue";
export default {
  name: "App",
  components: { TmpHeader, TmpMain },
};
</script>

<style lang="scss">
@import "./assets/style/style.scss";

.invisible {
  display: none;
}
</style>
