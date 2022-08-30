<template>
  <div class="entry-tittle d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">29</span>
      <span class="mx-1 fs-3">Agosto</span>
      <span class="mx-2 fs-4 fw-light">2022</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Upload photo
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happened now ?"></textarea>
  </div>
  <Fab icon="fa-save" />
  <img
    class="img-thumbnail"
    src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
    alt="entry-picture"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
  },
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
