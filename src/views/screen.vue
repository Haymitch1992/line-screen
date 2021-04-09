<template>
  <div class="screen-contianer">
    <screen-left></screen-left>
  </div>
</template>

<script>
import screenLeft from '../components/left';

export default {
  components: {
    screenLeft
  }
};
</script>

<style>
.screen-contianer {
  text-align: left;
}
</style>
