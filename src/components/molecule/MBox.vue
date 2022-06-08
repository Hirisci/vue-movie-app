<template>
  <div>
    <ATitle class="label" tag="h6" :title="label" />
    <AScore class="number" :score="score" />
  </div>
</template>

<script>
import AScore from "../atom/AScore.vue";
import ATitle from "../atom/ATitle.vue";
export default {
  components: { AScore, ATitle },
  name: "MBox",
  props: {
    label: String,
    score: Number,
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-primary-3);
  width: calc((100% / 2) - 1rem);
  .label {
    letter-spacing: 0.2rem;
    font-weight: 300;
    text-transform: uppercase;
    padding: var(--padding-xs);
    background-color: var(--clr-primary-0);
    width: 100%;
    text-align: center;
  }
  .number {
    text-align: center;
    width: 100%;
    padding: var(--padding-xs);
  }
}
</style>