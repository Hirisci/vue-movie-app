<template>
  <div class="container">
    <MCardFilm
      class="card"
      v-for="film in listFilm"
      :key="film.id"
      :film="film"
    />
  </div>
</template>

<script>
import axios from "axios";
import MCardFilm from "../molecule/MCardFilm.vue";
export default {
  components: { MCardFilm },
  name: "OListFilm",
  data() {
    return {
      listFilm: [],
    };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
      )
      .then((response) => {
        // handle success
        this.listFilm = response.data.results;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
}
</style>