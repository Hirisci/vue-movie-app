<template>
  <div class="serch-bar">
    <AInputText class="serch-bar_text" :isVisibile="inputVisible" />
    <font-awesome-icon
      @click="inputVisible = !inputVisible"
      class="serch-bar_icon"
      :class="{
        animateOpen: inputVisible,
        animateClose: !inputVisible,
      }"
      icon="fa-solid fa-magnifying-glass"
    />
  </div>
</template>

<script>
import AInputText from "../atom/AInputText.vue";
export default {
  components: { AInputText },
  name: "MSerchBar",
  data() {
    return {
      inputVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.serch-bar {
  display: flex;
  justify-content: end;
  align-items: center;

  &_icon {
    cursor: pointer;
    aspect-ratio: 1/1;
    border-radius: 100%;
    padding: var(--padding-md);
    font-size: var(--fs-lg);
    border-color: var(--clr-primary-0);
    background: var(--clr-primary-3);
    color: var(--clr-txt-1);
    &.animateOpen {
      animation: minus 0.66s;
    }
    &.animateClose {
      animation: minus1 0.66s;
    }
  }
  &_text {
    margin-right: -15px;
  }
}

@keyframes minus {
  50% {
    transform: scale(0.8);
  }
}
@keyframes minus1 {
  50% {
    transform: scale(0.8);
  }
}
</style>