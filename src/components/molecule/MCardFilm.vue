<template>
  <div class="card">
    <div class="card_img">
      <AImg :src="imgPath(film.poster_path)" :title="film.title" />
    </div>
    <ATitle class="card_title" tag="h5" :title="film.title" />
    <div class="card_info">
      <MBox label="Voto" :score="film.vote_average" />
      <MBox label="Votato" :score="film.vote_count" />
    </div>
  </div>
</template>

<script>
import AImg from "../atom/Aimg.vue";
import ATitle from "../atom/ATitle.vue";
import MBox from "./MBox.vue";
export default {
  components: { AImg, ATitle, MBox },
  name: "MCardFilm",
  props: {
    film: Object,
  },
  methods: {
    imgPath(path) {
      const PARTIAL_PATH = "https://image.tmdb.org/t/p/w1280/";
      return PARTIAL_PATH + path;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: var(--padding-sm);
  background-color: var(--clr-primary-1);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1.5rem;
  &_img {
  }
  &_info {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &_title {
    text-align: center;
  }
}
</style>