<template>
  <div class="modal is-active">
    <div class="modal-background"/>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ project.name }}</p>
        <button 
          class="delete" 
          aria-label="close"/>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">View Demo</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailModal",
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: "default",
          date: "2018/6/12",
          description: "default desc"
        };
      }
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
