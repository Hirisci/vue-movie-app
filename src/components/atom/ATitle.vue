<template>
  <component class="title" :is="tag">{{ title }}</component>
</template>

<script>
export default {
  name: "ATitle",
  props: {
    tag: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: var(--clr-primary-4);
}
</style>