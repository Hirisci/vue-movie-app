<template>
  <input :class="{ animation: isVisibile }" placeholder="search" type="text" />
</template>

<script>
export default {
  name: "AInputText",
  props: {
    isVisibile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 10rem;
  padding: var(--padding-xs);
  border-radius: 0.5rem 0 0 0.5rem;
  border-color: var(--clr-primary-0);
  background-color: var(--clr-primary-3);
  width: 0%;
  transition: width 0.5s ease-in;
}
input.animation {
  width: 100%;
  padding: var(--padding-sm);
}
</style>