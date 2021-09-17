<template>
  <div id="app">
    <div v-show="emergency" class="emergency-box">
      <div class="emergency-img">
        <img src="./assets/danger-page-7.png" alt="" />
      </div>
      <div class="emergency-text">
        <p>列车停运，请按引导有序出站</p>
        <p class="en">Train stoped. Please exit in order</p>
      </div>
    </div>
    <div v-show="!emergency">
      <router-view />
    </div>
  </div>
</template>
<script>
import { agsagsInfo } from '../src/services/user';
export default {
  data() {
    return {
      emergency: false
    };
  },
  mounted() {
    setInterval(() => {
      this.getDangerInfo();
    }, 3000);
  },
  methods: {
    // 监听紧急状态
    getDangerInfo() {
      agsagsInfo(1).then(res => {
        // 如果返回值 那么页面进行跳转至应急页面
        if (res.data.result.page_type) {
          this.emergency = true;
        } else {
          this.emergency = false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000;
  width: 3840px;
  height: 600px;
  overflow: hidden;
}
body {
  padding: 0;
  margin: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.emergency-box {
  border: 20px solid #d30000;
  width: 3840px;
  height: 600px;
  box-sizing: border-box;
  background: rgba(211, 0, 1, 0.2) url('./assets/bj.png') repeat 0 0;
  .emergency-img {
    height: 560px;
    width: 800px;
    display: block;
    float: left;
    img {
      width: 500px;
      margin-top: 30px;
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
