<template>
  <div class="screen-right">
    <div class="station-box">
      <div class="station-item" v-for="(item, index) in topData" :key="index">
        <div class="view-box">
          <div class="scoll-box" :class="index >= currentIndex ? 'roll' : ''">
            <div class="view-station">
              <p class="station-name">{{ item.name }}</p>
              <p class="station-name-en">{{ item.nameEn }}</p>
            </div>
            <div class="view-time">
              <p class="station-name">09:30</p>
            </div>
            <div class="view-station">
              <p class="station-name">{{ item.name }}</p>
              <p class="station-name-en">{{ item.nameEn }}</p>
            </div>
          </div>
        </div>

        <div class="postion-box">
          <div class="line">
            <img
              v-if="item.isTransfer"
              src="../assets/transfer.png"
              alt=""
              class="transfer-icon"
            />
            <span v-if="!item.isTransfer" class="station-icon"></span>
          </div>
          <div class="line">
            <span
              v-for="(lineNum, index) in item.transferLine"
              :key="index"
              class="line-num"
              :class="'line-' + lineNum"
            >
              {{ lineNum }}
            </span>
          </div>
        </div>
        <div :class="index >= currentIndex ? '' : 'arrive-line'"></div>
        <div v-if="index === currentIndex - 1" class="right-arrow-box">
          <img src="../assets/arrow-right-2.png" alt="" />
        </div>
      </div>
    </div>
    <div class="information-box" v-if="tag === 1">
      <div class="inline-block-item block-item-1">
        <p class="information-text-1">当前站</p>
        <p class="information-text-2">Current station</p>
      </div>
      <div class="inline-block-item information-contaienr block-item-2">
        <p>{{ currentStation.name }}</p>
        <p class="font24">{{ currentStation.nameEn }}</p>
      </div>
      <img src="../assets/arrow-right-1.png" alt="" class="arrow-right-img" />
      <div class="inline-block-item block-item-3">
        <p class="information-text-1">下一站</p>
        <p class="information-text-2">Next station</p>
      </div>
      <div class="inline-block-item information-contaienr block-item-4">
        <p>{{ nextStataion.name }}</p>
        <p class="font24">{{ nextStataion.nameEn }}</p>
      </div>
      <div class="inline-block-item block-item-5">
        <p class="font60 color666">预计到站时间</p>
        <p class="font24 color666">Estimated arrival time</p>
      </div>
      <div class="inline-block-item font80 colorBlue block-item-6">
        2分钟(min)
      </div>
    </div>
    <div class="information-box" v-if="tag === 2">
      <div class="subway-container">
        <p class="location">
          <img src="../assets/arrow-bottom.png" alt="" />
          您在此处 You're here
        </p>
        <img src="../assets/car-2.png" alt="" />
      </div>
      <ul class="subway-status-ul">
        <li>
          <span class="status-icon status-1"></span>
          <div class="inline-block">
            <p>轻松舒适</p>
            <p class="font16">Relaxed and comfortable</p>
          </div>
        </li>
        <li>
          <span class="status-icon status-2"></span>
          <div class="inline-block">
            <p>严重拥挤</p>
            <p class="font16">Severe congestion</p>
          </div>
        </li>
        <li>
          <span class="status-icon status-3"></span>
          <div class="inline-block">
            <p>轻度拥挤</p>
            <p class="font16">
              Mild congestion
            </p>
          </div>
        </li>
        <li>
          <span class="status-icon">
            <img src="../assets/wheelchair.png" alt="" />
          </span>
          <div class="inline-block">
            <p>无障碍车厢</p>
            <p class="font16">Barrier free carriage</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="station-box">
      <div
        class="station-item"
        v-for="(item, index) in bottomData"
        :key="index"
      >
        <div class="view-box">
          <div class="scoll-box  roll">
            <div class="view-station">
              <p class="station-name">{{ item.name }}</p>
              <p class="station-name-en">{{ item.nameEn }}</p>
            </div>
            <div class="view-time">
              <p class="station-name">09:30</p>
            </div>
            <div class="view-station">
              <p class="station-name">{{ item.name }}</p>
              <p class="station-name-en">{{ item.nameEn }}</p>
            </div>
          </div>
        </div>

        <div class="postion-box-bottom">
          <div class="line">
            <span
              v-for="(lineNum, index) in item.transferLine"
              :key="index"
              class="line-num"
              :class="'line-' + lineNum"
            >
              {{ lineNum }}
            </span>
          </div>
          <div class="line">
            <img
              v-if="item.isTransfer"
              src="../assets/transfer.png"
              alt=""
              class="transfer-icon"
            />
            <span v-if="!item.isTransfer" class="station-icon"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: 1,
      currentIndex: 8,
      currentStation: {
        name: '大运',
        nameEn: 'Universiade',
        isTransfer: false,
        transferLine: []
      },
      nextStataion: {
        name: '肿瘤医院',
        nameEn: 'Tumour Hospital',
        isTransfer: false,
        transferLine: []
      },
      topData: [],
      bottomData: [],
      stationData: [
        {
          name: '岗厦北',
          nameEn: 'Gangxia North',
          isTransfer: true,
          transferLine: [2]
        },
        {
          name: '黄木岗',
          nameEn: 'Huangmugang',
          isTransfer: true,
          transferLine: [7]
        },
        {
          name: '清水河',
          nameEn: 'Qingshuihe',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '布吉',
          nameEn: 'Buji',
          isTransfer: true,
          transferLine: [5, 3]
        },
        {
          name: '石芽岭',
          nameEn: 'Shiyaling',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '六约北',
          nameEn: 'Liuyue North',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '四联',
          nameEn: 'Silian',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '坳背',
          nameEn: 'Aobei',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '大运',
          nameEn: 'Universiade',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '肿瘤医院',
          nameEn: 'Tumour Hospital',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '宝荷',
          nameEn: 'Baohe',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '宝龙',
          nameEn: 'Baolong',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '沙湖',
          nameEn: 'Shahu',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '坪山围',
          nameEn: 'Pingshanwei',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '坪山广场',
          nameEn: 'Pingshan Square',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '朱洋坑',
          nameEn: 'Zhuyangkeng',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '坑梓',
          nameEn: 'Kengzi',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '沙田',
          nameEn: 'Shatian',
          isTransfer: true,
          transferLine: [5, 3]
        }
      ]
    };
  },
  methods: {
    incisionData() {
      this.topData = this.stationData.slice(0, 9);
      this.bottomData = this.stationData.slice(9, 18).reverse();
    },
    changeTag() {
      setInterval(() => {
        if (this.tag === 1) {
          this.tag = 2;
        } else {
          this.tag = 2;
        }
      }, 10000);
    }
  },
  mounted() {
    this.incisionData();
    this.changeTag();
  }
};
</script>

<style lang="scss" scoped>
@keyframes example {
  0% {
    left: 0px;
  }
  50% {
    left: 0px;
  }
  80% {
    left: -660px;
  }
  100% {
    left: -660px;
  }
}
p {
  padding: 0;
  margin: 0;
}
.screen-right {
  display: inline-block;
  background: #e6e6e6;
  width: calc(3840px - 772px);
  overflow: hidden;
}
.station-box {
  height: 140px;
  // background: #d6e4f7;
  .view-box {
    width: 330px;
    overflow: hidden;
    display: inline-block;
    position: relative;
    height: 150px;
    .scoll-box {
      position: absolute;
      top: 0;
      width: 1000px;
      text-align: left;
    }
    .roll {
      animation: example 10s linear 2s infinite;
    }
    .view-station {
      display: inline-block;
      width: 330px;
    }
    .view-time {
      width: 330px;
      display: inline-block;
    }
  }
  .arrive-line {
    position: absolute;
    width: 100%;
    height: 140px;
    background: rgba(214, 228, 247, 1);
    border-bottom: 10px solid #5488c7;
    top: 0px;
    z-index: 1;
    left: -50%;
  }
  .station-item {
    width: 330px;
    height: 116px;
    display: inline-block;
    text-align: center;
    position: relative;
    padding-top: 24px;
    .right-arrow-box {
      width: 100%;
      position: absolute;
      right: -50%;
      height: 160px;
      top: 0;
      img {
        margin-top: 130px;
      }
    }
    .station-name {
      font-size: 40px;
      padding-bottom: 4px;
      position: relative;
      z-index: 2;
    }
    .station-name-en {
      font-size: 24px;
      position: relative;
      z-index: 2;
    }
    .postion-box {
      position: absolute;
      bottom: -66px;
      width: 100%;
      height: 82px;
      z-index: 2;
    }
    .postion-box-bottom {
      position: absolute;
      top: -66px;
      width: 100%;
      height: 82px;
      .line {
        height: 40px;
      }
    }
    p {
      text-align: center;
    }
    .transfer-icon {
      display: inline-block;
    }
    .station-icon {
      width: 30px;
      height: 30px;
      display: inline-block;
      border-radius: 50%;
      border: 4px solid #5488c7;
      vertical-align: top;
      background: #fff;
    }
    .line-num {
      font-size: 24px;
      color: #fff;
      background: #b75020;
      border-radius: 14px;
      width: 44px;
      text-align: center;
      display: inline-block;
      vertical-align: top;
      line-height: 36px;
      margin: 0 4px;
    }
    .line-3 {
      background: #00a4df;
    }
    .line-2 {
      background: #b75020;
    }
    .line-7 {
      background: #003a91;
    }
    .line-5 {
      background: #904696;
    }
  }
}
.information-box {
  height: 220px;
  padding-top: 80px;
}
.information-box {
  background: #fff;
  border: 10px solid #c9c9c9;
  border-left: none;
  box-shadow: 1px 1px 10px #5488c7;
  text-align: center;
  width: 2950px;
  .block-item-1 {
    width: 300px;
  }
  .block-item-2 {
    width: 300px;
  }
  .block-item-3 {
    width: 240px;
  }
  .block-item-4 {
    width: 500px;
  }
  .block-item-5 {
    width: 600px;
    padding-left: 100px;
  }
  .block-item-6 {
    width: 500px;
  }
  .information-text-1 {
    font-size: 36px;
    color: #666;
  }
  .information-text-2 {
    font-size: 20px;
    color: #666;
  }
  .inline-block-item {
    display: inline-block;
    vertical-align: middle;
  }
  .arrow-right-img {
    margin: 0 40px;
    display: inline-block;
    position: relative;
    top: 20px;
  }
  .information-contaienr {
    width: 320px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 60px;
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    padding: 15px 0;
    margin: 0 20px;
  }
  .color666 {
    color: #666;
  }
  .font24 {
    font-size: 24px;
  }
  .font60 {
    font-size: 60px;
  }
  .colorBlue {
    color: #5488c7;
  }
  .font80 {
    font-size: 80px;
  }
  .status-icon {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 20px;
    vertical-align: top;
    margin-top: 14px;
  }
  .status-1 {
    background: #61daa2;
  }
  .status-2 {
    background: #de6173;
  }
  .status-3 {
    background: #ec924b;
  }
  .inline-block {
    display: inline-block;
    text-align: left;
  }
  .subway-container {
    width: 1500px;
    display: inline-block;
    position: relative;
    margin-right: 400px;
    margin-left: 200px;

    .location {
      position: absolute;
      width: 500px;
      display: inline-block;
      right: 0px;
      font-size: 32px;
      top: -60px;
      img {
        margin-top: 4px;
        margin-right: 10px;
        vertical-align: top;
      }
    }
  }
  .subway-status-ul {
    width: 600px;
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0;
    li {
      width: 280px;
      float: left;
      text-align: left;
      font-size: 32px;
      height: 80px;
    }
    .font16 {
      font-size: 16px;
    }
  }
}
</style>
