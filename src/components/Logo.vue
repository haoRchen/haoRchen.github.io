<template>
  <svg 
    class="logo"
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg">
    <rect class="logo__rectangle"/>
    <text 
      class="logo__text" 
      x="36" 
      y="64">
      H
    </text>
  </svg>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss" scoped>
@import "../main.scss";
@keyframes pulsate {
  0% {
    opacity: 1;
    transform: translate(0, -5px);
  }
  50% {
    opacity: 0.7;
    transform: translate(0, 5px);
  }
  100% {
    opacity: 1;
    transform: translate(0, -5px);
  }
}
.logo {
  $self: &;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: transparent;
  &:hover {
    & #{$self}__text {
      animation: pulsate 1.3s ease-in infinite;
    }
    & #{$self}__rectangle {
      stroke-dashoffset: 100;
      // stroke-dasharray: 0, 0, 100, 300;
      stroke-dasharray: 100, 200;
    }
  }
  &:focus {
    & #{$self}__rectangle {
      stroke-dasharray: 100, 300;
    }
  }
  &__text {
    stroke-width: 20px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 40px;
    fill: $white;
    transform-origin: center;
    transition: all 0.4s ease-in-out 0s;
  }
  &__rectangle {
    width: 100px;
    height: 100px;
    fill: transparent;
    stroke: $white;
    stroke-width: 8;
    // stroke-dasharray: 0, 0, 400, 500;
    // stroke-dasharray: 500, 500;
    // length, gap, length, gap
    stroke-dasharray: 0, 0, 600, 600;
    stroke-dashoffset: 100;
    transition: stroke-dasharray 0.5s;
  }
}
</style>
