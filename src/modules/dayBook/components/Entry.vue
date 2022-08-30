<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-tittle d-flex">
      <span class="text-success fs-5 fw-bold">29</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fw-light">20222</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde tenetur doloremque
      voluptatem vel fugit eveniet ipsa, culpa, laboriosam, assumenda aliquid. Culpa optio nulla
      corrupti earum id nesciunt sed delectus!
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
