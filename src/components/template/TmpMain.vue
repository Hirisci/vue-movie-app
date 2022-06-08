<template>
  <main>
    <OListFilm />
  </main>
</template>

<script>
import OListFilm from "../organis/OListFilm.vue";
export default {
  components: { OListFilm },
  name: "TmpMain",
};
</script>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - var(--hgt-header));
  background-color: var(--clr-primary-0);
}
</style>