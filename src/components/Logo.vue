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
.logo {
  $self: &;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: white;
  &:hover {
    & #{$self}__text {
      transform: translate(-22px, 0) scale(0.85);
    }
    & #{$self}__rectangle {
      stroke-dasharray: 300, 300px;
    }
  }
  &:focus {
    & #{$self}__rectangle {
      stroke-dasharray: 100px;
    }
  }
  &__text {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 40px;
    fill: black;
    transform-origin: center;
    transition: all 0.4s ease-in-out 0s;
  }
  &__rectangle {
    width: 100px;
    height: 100px;
    fill: transparent;
    stroke: black;
    stroke-width: 8;
    stroke-dasharray: 0, 0, 400, 400;
    // stroke-dashoffset: 1700;
    transition: stroke-dasharray 1s;
  }
}
</style>
