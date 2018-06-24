<template>
  <v-modal name="ProjectDetail">
    <p>
      hello, world!
    </p>
    <!-- <carousel :per-page="1">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel> -->
  </v-modal>
</template>

<script>
// import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ProjectDetail",
  // components: {
  //   Carousel,
  //   Slide
  // },
  methods: {
    // beforeOpen (event) {
    //   console.log(event.params.foo);
    // }
  }
  // props: {
  //   project: {
  //     type: Object,
  //     required: true,
  //     default: () => {
  //       return {
  //         name: "default",
  //         date: "2018/6/12",
  //         description: "default desc"
  //       };
  //     }
  //   }
  // }
};
</script>

<style lang="scss" scoped>
@import "@/main.scss";
// .detail {
//   background-color: $white;
//   display: flex;
//   padding: 2.5rem;
//   margin: auto;
//   margin-top: 3rem;
//   width: 80%;
//   transition: all 0.7s ease;
//   flex-direction: column;
//   align-items: center;
//   &__carousel {
//     width: 100%;
//   }
//   .title {
//     font-family: $montserrat;
//     font-weight: 700;
//     font-size: 20px;
//   }
// }
// @media screen and (max-width: $desktop) {
//   .detail {
//     width: 90%;
//   }
// }
// @media screen and (max-width: $tablet) {
//   .detail {
//     width: 100%;
//   }
// }
</style>
