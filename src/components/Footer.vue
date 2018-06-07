<template>
  <footer class="TheFooter p-b-md">
    <div class="content has-text-centered">
      <a >
        <span class="icon is-large">
          <i 
            class="fab fa-linkedin fa-lg"
            aria-hidden="true"/>
        </span> 
      </a>
      <a >
        <span class="icon is-large">
          <i 
            class="fab fa-github fa-lg"
            aria-hidden="true"/>
        </span>
      </a>
      <a >
        <span class="icon is-large">
          <i 
            class="fas fa-envelope fa-lg"
            aria-hidden="true"/>
        </span>
      </a>
      <h6 class="is-marginless">@2018 Hao Ran Chen</h6>
    </div>
  </footer>
    
</template>

<script>
export default {};
</script>

<style lang="sass">
@import '../main.sass'
//https://github.com/jgthms/bulma/issues/47 sticky footer
.TheFooter 
  background-color: #f7f8fa
  flex-shrink: 0
  font-family: $montserrat
  font-weight: 600
</style>
