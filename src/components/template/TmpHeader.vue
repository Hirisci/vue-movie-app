<template>
  <header>
    <MSearchBar class="search-bar" />
  </header>
</template>

<script>
import MSearchBar from "../molecule/MSearchBar.vue";
export default {
  components: { MSearchBar },
  name: "TmpHeader",
};
</script>

<style lang="scss" scoped>
header {
  padding: var(--padding-md);
  height: var(--hgt-header);
  background-color: var(--clr-primary-1);
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>