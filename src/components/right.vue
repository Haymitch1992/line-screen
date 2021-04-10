<template>
  <div class="screen-right">
    <div class="station-box">
      <div class="station-item" v-for="(item, index) in topData" :key="index">
        <p>{{ item.name }}</p>
        <p>{{ item.nameEn }}</p>
      </div>
    </div>
    <div class="information-box"></div>
    <div class="station-box">
      <div
        class="station-item"
        v-for="(item, index) in bottomData"
        :key="index"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.nameEn }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          isTransfer: false,
          transferLine: []
        }
      ]
    };
  },
  methods: {
    incisionData() {
      this.topData = this.stationData.slice(0, 8);
      this.bottomData = this.stationData.slice(8, 15);
    }
  },
  mounted() {
    this.incisionData();
  }
};
</script>

<style lang="scss" scoped>
.screen-right {
  display: inline-block;
  background: #e6e6e6;
  width: 3000px;
}
.station-box {
  height: 140px;
  .station-item {
    width: 200px;
    height: 140px;
    display: inline-block;
    p {
      text-align: center;
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
}
</style>
