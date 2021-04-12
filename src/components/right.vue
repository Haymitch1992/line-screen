<template>
  <div class="screen-right">
    <div class="station-box">
      <div class="station-item" v-for="(item, index) in topData" :key="index">
        <p class="station-name">{{ item.name }}</p>
        <p class="station-name-en">{{ item.nameEn }}</p>
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
      </div>
    </div>
    <div class="information-box"></div>
    <div class="station-box">
      <div
        class="station-item"
        v-for="(item, index) in bottomData"
        :key="index"
      >
        <p class="station-name">{{ item.name }}</p>
        <p class="station-name-en">{{ item.nameEn }}</p>
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
    }
  },
  mounted() {
    this.incisionData();
  }
};
</script>

<style lang="scss" scoped>
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
  height: 300px;
}
.information-box {
  background: #fff;
  border: 10px solid #c9c9c9;
  border-left: none;
  box-shadow: 1px 1px 10px #5488c7;
  width: 2950px;
}
</style>
