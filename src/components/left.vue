<template>
  <div class="screen-left">
    <div class="line-1">
      <img class="line-logo" src="../assets/logo.png" alt="" />
      <span>14号线 Line14</span>
      <span class="right-text">{{ cunrretDate }}</span>
    </div>
    <div class="text-center middle-box">
      <img class="left-img" src="../assets/arrow-right.png" alt="" />
      <div class="inline-blcok text-left">
        <p class="font-73">往{{ this.$store.state.destination.cn_name }}方向</p>
        <p class="font-50">To {{ this.$store.state.destination.en_name }}</p>
      </div>
    </div>
    <div class="text-center ">
      <div class="inline-blcok margin-box">
        <p class="font-50">首班</p>
        <p class="font-24">First train</p>
      </div>
      <div class="inline-blcok font-60 margin-box vertical-super">
        06:00
      </div>
      <div class="inline-blcok margin-box">
        <p class="font-50">末班</p>
        <p class="font-24">Last train</p>
      </div>
      <div class="inline-blcok font-60 margin-box vertical-super">
        23:00
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cunrretDate: '',
      timer: ''
    };
  },
  mounted() {
    let dayjs = require('dayjs');
    setInterval(() => {
      this.cunrretDate = dayjs().format('HH:mm');
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
p {
  padding: 0;
  margin: 0;
}
.screen-left {
  background: #8495aa;
  width: 772px;
  padding: 20px 30px;
  box-sizing: border-box;
  border-right: 10px solid #5a6c82;
  display: inline-block;
  height: 600px;
  color: #fff;
  vertical-align: top;
  .line-1 {
    font-size: 53px;
    vertical-align: top;
  }
  .line-logo {
    vertical-align: top;
    margin-top: 10px;
    margin-right: 10px;
  }
  .right-text {
    float: right;
    vertical-align: top;
    margin-top: 2px;
    font-size: 60px;
  }
  .left-img {
    display: inline-block;
    margin: 0 60px 0 0;
    position: relative;
    top: -10px;
  }
  .right-text-box {
    display: inline-block;
    width: 370px;
    p {
      margin: 0;
      padding: 0;
    }
  }
  .middle-box {
    padding: 100px 0;
    p {
      line-height: 90px;
    }
  }
  .font-73 {
    font-size: 73px;
  }
  .font-60 {
    font-size: 60px;
  }
  .font-50 {
    font-size: 50px;
  }
  .font-24 {
    font-size: 24px;
  }

  .inline-blcok {
    display: inline-block;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .margin-box {
    margin: 0 20px;
  }
  .vertical-super {
    vertical-align: text-bottom;
  }
}
</style>
