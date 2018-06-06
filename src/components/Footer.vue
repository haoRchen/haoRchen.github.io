<template>
  <footer class="footer p-b-s">
    <div class="content has-text-centered">
      <a class="button">
        <span class="icon is-large">
          <i class="fab fa-linkedin"/>
        </span> 
      </a>
      <a class="button">
        <span class="icon is-large">
          <i class="fab fa-github<"/>
        </span>
      </a>
      <a class="button">
        <span class="icon is-large">
          <i class="fas fa-envelope"/>
        </span>
      </a>
      <h6>@2018 Hao Ran Chen</h6>
    </div>
  </footer>
    
</template>

<script>
export default {};
</script>

<style lang="sass">
@import '../main.sass'
//https://github.com/jgthms/bulma/issues/47 sticky footer
.footer 
  background-color: #f7f8fa
  flex-shrink: 0
  font-family: 'Montserrat', Arial, sans-serif
  font-weight: 600
</style>
