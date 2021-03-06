<template>
  <div class="home">
    <div class="outer">
      <div id="cards">
        <PostTodo />
        <DetailTodo />
      </div>
    </div>
  </div>
</template>

<script>
import DetailTodo from '../components/DetailTodo.vue';
import PostTodo from '../components/PostTodo'

export default {
  components: {
    PostTodo,
    DetailTodo,
    }
};
</script>

<style scoped>
#outer {
  width: 100%;
  height: 100%;
}

#cards {
  width: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>