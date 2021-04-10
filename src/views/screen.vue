<template>
  <div class="screen-contianer">
    <screen-left></screen-left>
    <screen-right></screen-right>
  </div>
</template>

<script>
import screenLeft from '../components/left';
import screenRight from '../components/right';
export default {
  components: {
    screenLeft,
    screenRight
  }
};
</script>

<style>
.screen-contianer {
  text-align: left;
}
</style>
