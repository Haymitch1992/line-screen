<template>
  <div class="screen-contianer">
    <div v-show="this.$store.state.pageStatus === 'service_scene'">
      <screen-left></screen-left>
      <screen-right></screen-right>
      <socket-item class="socket-item"></socket-item>
    </div>

    <div
      v-show="this.$store.state.pageStatus === 'emergency_fire'"
      class="emergency-box"
    >
      <div class="emergency-img">
        <img src="../assets/danger-page-7.png" alt="" />
      </div>
      <div class="emergency-text">
        <p>列车停运，请按引导有序出站</p>
        <p class="en">Train stoped. Please exit in order</p>
      </div>
    </div>
  </div>
</template>

<script>
import screenLeft from '../components/left';
import screenRight from '../components/right';
import socketItem from '../components/socket.vue';
export default {
  components: {
    screenLeft,
    screenRight,
    socketItem
  }
};
</script>

<style lang="scss">
.screen-contianer {
  text-align: left;
}

.emergency-box {
  border: 20px solid #d30000;
  width: 3840px;
  height: 600px;
  box-sizing: border-box;
  background: rgba(211, 0, 1, 0.2) url('../assets/bj.png') repeat 0 0;
  .emergency-img {
    height: 560px;
    width: 800px;
    display: block;
    float: left;
    img {
      width: 400px;
      margin-top: 80px;
      margin-left: 140px;
    }
  }
  .emergency-text {
    height: 560px;
    width: 2600px;
    display: block;
    float: left;
    font-size: 160px;
    color: #d30000;
    padding-top: 100px;
    p {
      padding: 0;
      margin: 0;
      text-align: left;
    }
    .en {
      font-size: 120px;
    }
  }
}
</style>
