<template>
  <img :src="src" :alt="title" />
</template>

<script>
export default {
  name: "AImg",
  props: {
    src: { type: String, default: "" },
    title: { type: String, default: "titolo non disponibile" },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>