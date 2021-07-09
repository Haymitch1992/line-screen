<template>
  <div class="screen-right">
    <!-- 站台信息上半部分 -->
    <div class="station-box">
      <!-- 第一站特殊处理 -->
      <div class="teshu" v-if="currentIndex === 0">
        <img src="../assets/arrow-right-2.gif" alt="" />
      </div>
      <div class="station-item" v-for="(item, index) in topData" :key="index">
        <div class="view-box">
          <div
            class="scoll-box"
            :class="index >= currentIndex && degraded ? 'roll' : ''"
          >
            <div class="view-station">
              <p class="station-name">{{ item.cn_name }}</p>
              <p class="station-name-en">{{ item.en_name }}</p>
            </div>
            <div class="view-time station-time">
              <p class="station-name">{{ item.arrialtime }}</p>
            </div>

            <div class="view-station">
              <p class="station-name">{{ item.cn_name }}</p>
              <p class="station-name-en">{{ item.en_name }}</p>
            </div>
          </div>
        </div>

        <div class="postion-box">
          <div class="line">
            <img
              v-if="
                item.isTransfer &&
                  (item.isCurrentStation == 1 || item.isCurrentStation == 2)
              "
              src="../assets/transfer.png"
              alt=""
              class="transfer-icon"
              :class="`active${item.isCurrentStation}`"
            />
            <img
              v-if="item.isTransfer && item.isCurrentStation == 0"
              src="../assets/transfer-2.png"
              alt=""
              class="transfer-icon"
              :class="`active${item.isCurrentStation}`"
            />
            <span
              v-if="!item.isTransfer"
              class="station-icon"
              :class="`active${item.isCurrentStation}`"
            ></span>
          </div>
          <div class="line">
            <span
              v-for="(lineNum, index) in item.transfer_line"
              :key="index"
              class="line-num"
              :class="'line-' + lineNum"
            >
              {{ lineNum }}
            </span>
          </div>
        </div>
        <div
          :class="
            index > upIndex
              ? ''
              : index < upIndex
              ? 'arrive-line'
              : 'current-line'
          "
        ></div>
        <div
          :class="
            upIndex === 9 && index === upIndex - 1 && currentIndex > 9
              ? 'border-item'
              : ''
          "
        ></div>
        <div
          :class="
            upIndex === 9 && index === upIndex - 1 && currentIndex > 9
              ? 'border-container'
              : ''
          "
        ></div>
        <div
          v-if="upIndex <= 9 && index === currentIndex - 1"
          :title="index"
          class="right-arrow-box"
          :class="`special-${index}`"
        >
          <div :class="`special-${index}`"></div>
          <img src="../assets/arrow-right-2.gif" alt="" />
        </div>
      </div>
    </div>
    <!-- pis屏幕中间切换内容1 -->
    <div class="information-box" v-if="arrival_state === 0">
      <div class="inline-block-item block-item-1" v-if="currentIndex < 17">
        <p class="information-text-1">
          当前站
        </p>
        <p class="information-text-2">This station</p>
      </div>
      <div class="inline-block-item block-item-1" v-if="currentIndex === 17">
        <p class="information-text-1">
          终点站
        </p>
        <p class="information-text-2">Terminus</p>
      </div>
      <div class="inline-block-item information-contaienr block-item-2">
        <p>{{ currentStation.name }}</p>
        <p class="font24">{{ currentStation.nameEn }}</p>
      </div>
      <img
        v-if="currentIndex < 17"
        src="../assets/arrow-right-1.png"
        alt=""
        class="arrow-right-img"
      />
      <div v-if="currentIndex < 17" class="inline-block-item block-item-3">
        <p class="information-text-1">下一站</p>
        <p class="information-text-2">Next station</p>
      </div>
      <div
        v-if="currentIndex < 17"
        class="inline-block-item information-contaienr block-item-4"
      >
        <p>{{ nextStataion.name }}</p>
        <p class="font24">{{ nextStataion.nameEn }}</p>
      </div>
      <div class="inline-block-item block-item-5" v-if="degraded">
        <p class="font60 color666">预计到站时间</p>
        <p class="font24 color666">Estimated arrival time</p>
      </div>
      <div
        class="inline-block-item font80 colorBlue block-item-6"
        v-if="degraded"
      >
        <span v-if="arrival_state === 0">{{ arrival_time }}分钟(min)</span>
        <span v-if="arrival_state === 1">即将到达</span>
        <span v-if="arrival_state === 2">已到站</span>
      </div>
    </div>
    <!-- pis屏幕中间切换内容2 -->
    <div
      class="information-box"
      v-if="arrival_state === 2 || arrival_state === 1"
    >
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
    <!-- 站台信息下半部分 -->
    <div class="station-box">
      <div
        class="station-item"
        v-for="(item, index) in bottomData"
        :key="index"
      >
        <div class="view-box">
          <div
            class="scoll-box "
            :class="
              downIndex < 0 && degraded
                ? 'roll'
                : index >= downIndex
                ? ''
                : 'roll'
            "
          >
            <div class="view-station">
              <p class="station-name">{{ item.cn_name }}</p>
              <p class="station-name-en">{{ item.en_name }}</p>
            </div>
            <div class="view-time station-time">
              <p class="station-name ">{{ item.arrialtime }}</p>
            </div>
            <div class="view-station">
              <p class="station-name">{{ item.cn_name }}</p>
              <p class="station-name-en">{{ item.en_name }}</p>
            </div>
          </div>
        </div>

        <div class="postion-box-bottom">
          <div class="line">
            <span
              v-for="(lineNum, index) in item.transfer_line"
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
              :class="`active${item.isCurrentStation}`"
            />
            <span
              v-if="!item.isTransfer"
              class="station-icon"
              :class="`active${item.isCurrentStation}`"
            ></span>
            <!-- <span
              v-if="!item.isTransfer"
              class="station-icon"
              :class="downIndex < 0 ? '' : index >= downIndex ? 'acitve' : ''"
            ></span> -->
          </div>
        </div>
        <div
          :class="
            downIndex < 0
              ? ''
              : index > downIndex
              ? 'arrive-line-2'
              : 'current-line-2'
          "
        ></div>
        <div
          v-if="downIndex <= 9 && index === downIndex - 1"
          class="right-arrow-box-2"
        >
          <img src="../assets/arrow-right-2.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stationInfo, trainInfo } from '@/services/user';
export default {
  data() {
    return {
      degraded: true,
      tag: 1,
      line_info: {},
      currentIndex: 8,
      currentStation: {
        // 当前站信息
        name: '大运',
        nameEn: 'Universiade',
        isTransfer: false,
        transferLine: []
      },
      nextStataion: {
        // 下一站信息
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
          arrialtime: '09:30',
          transferLine: [2]
        },
        {
          name: '黄木岗',
          nameEn: 'Huangmugang',
          isTransfer: true,
          arrialtime: '09:33',
          transferLine: [7]
        },
        {
          name: '清水河',
          nameEn: 'Qingshuihe',
          arrialtime: '09:36',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '布吉',
          nameEn: 'Buji',
          isTransfer: true,
          arrialtime: '09:38',
          transferLine: [5, 3]
        },
        {
          name: '石芽岭',
          nameEn: 'Shiyaling',
          isTransfer: false,
          arrialtime: '09:40',
          transferLine: []
        },
        {
          name: '六约北',
          nameEn: 'Liuyue North',
          isTransfer: false,
          arrialtime: '09:43',
          transferLine: []
        },
        {
          name: '四联',
          nameEn: 'Silian',
          isTransfer: false,
          arrialtime: '09:46',
          transferLine: []
        },
        {
          name: '坳背',
          nameEn: 'Aobei',
          isTransfer: false,
          arrialtime: '09:48',
          transferLine: []
        },
        {
          name: '大运',
          nameEn: 'Universiade',
          isTransfer: true,
          arrialtime: '09:50',
          transferLine: [3]
        },
        {
          name: '肿瘤医院',
          nameEn: 'Tumour Hospital',
          isTransfer: false,
          arrialtime: '09:52',
          transferLine: []
        },
        {
          name: '宝荷',
          nameEn: 'Baohe',
          isTransfer: false,
          arrialtime: '09:55',
          transferLine: []
        },
        {
          name: '宝龙',
          nameEn: 'Baolong',
          isTransfer: false,
          arrialtime: '09:57',
          transferLine: []
        },
        {
          name: '沙湖',
          nameEn: 'Shahu',
          isTransfer: false,
          arrialtime: '10:00',
          transferLine: []
        },
        {
          name: '坪山围',
          nameEn: 'Pingshanwei',
          isTransfer: false,
          arrialtime: '10:03',
          transferLine: []
        },
        {
          name: '坪山广场',
          nameEn: 'Pingshan Square',
          arrialtime: '10:06',
          isTransfer: false,
          transferLine: []
        },
        {
          name: '朱洋坑',
          nameEn: 'Zhuyangkeng',
          isTransfer: false,
          arrialtime: '10:09',
          transferLine: []
        },
        {
          name: '坑梓',
          nameEn: 'Kengzi',
          isTransfer: false,
          arrialtime: '10:12',
          transferLine: []
        },
        {
          name: '沙田',
          nameEn: 'Shatian',
          isTransfer: false,
          arrialtime: '10:15',
          transferLine: []
        }
      ],
      timer: '',
      arrival_time: 5, // 预计到站时间
      arrival_state: 0 // 到达状态 0 未到站 1 即将到站 2 已到站
    };
  },
  computed: {
    upIndex() {
      let num = '';
      // 如果当前站 大于 9
      if (this.currentIndex >= 9) {
        num = 9;
      } else {
        num = this.currentIndex;
      }
      return num;
    },
    downIndex() {
      let num = this.currentIndex - 18;
      // 如果当前站 大于 9
      if (this.currentIndex > 9) {
        num = Math.abs(num);
      } else {
        num = -1;
      }
      // 将当前站转成 可用数据

      return num;
    }
  },
  methods: {
    // 切换当前站
    incisionData() {
      // 增加模拟的时间
      var dayjs = require('dayjs');
      this.stationData.forEach((item, index) => {
        // 判断是否是换乘站
        item.isTransfer = false;
        item.isCurrentStation = 0;
        if (item.transfer_line && item.transfer_line.length) {
          item.isTransfer = true;
        }

        let num = 0;
        if (index >= this.currentIndex) {
          item.isCurrentStation = 2;
          num++;
          console.log(this.arrival_time);
          item.arrialtime = dayjs()
            .add(this.arrival_time + 3 * num, 'minute')
            .format('HH:mm');
        }
        if (index === this.currentIndex) {
          item.isCurrentStation = 1;
        }
      });
      this.topData = this.stationData.slice(0, 9);
      this.bottomData = this.stationData.slice(9, 18);
      this.bottomData.reverse();
    },

    getStationInfo() {
      trainInfo(1, 0, 1)
        .then(res => {
          // 获取到站情况
          console.log('当前信息', res.data);
          this.arrival_time = res.data.result[0].tarin_state.arrival_time;
          this.arrival_state = res.data.result[0].tarin_state.arrival_state;
          this.currentIndex = res.data.result[0].station_id - 1;
          this.incisionData(); // 拆分成两段
          this.degraded = true;
        })
        .catch(() => {
          // 降级逻辑 停止轮播
          this.degraded = false;
          this.arrival_state = 0;
          //
        });
    },
    afterStationInfo(res) {
      this.line_info = res.data.result[0];
      this.stationData = res.data.result[0].line_info.all_station;
      // 当前站赋值
      this.currentStation.name = res.data.result[0].station;
      this.currentStation.nameEn = res.data.result[0].station_en;
      // 下一站赋值
      this.nextStataion.name = res.data.result[0].next_station_info.cn_name;
      this.nextStataion.nameEn = res.data.result[0].next_station_info.en_name;
      // 设置终点站
      this.$store.commit(
        'setDestination',
        res.data.result[0].line_info.all_station[
          res.data.result[0].line_info.all_station.length - 1
        ]
      );
      // 设置首班 末班时间
      this.$store.commit('setLineInfo', {
        start_time: res.data.result[0].line_info.start_time,
        end_time: res.data.result[0].line_info.end_time
      });
      this.getStationInfo();
    }
  },
  mounted() {
    stationInfo(1, 0, 1).then(this.afterStationInfo);
    let num = 0;
    clearInterval(this.timer);
    // 每十秒钟请求一次当前 列车信息 100s请求一次线路信息
    // 定时请求数据
    this.timer = setInterval(() => {
      if (num >= 10) {
        num = 0;
        stationInfo(1, 0, 1).then(this.afterStationInfo);
      } else {
        num++;
        this.getStationInfo();
      }
    }, 10000);
  }
};
</script>

<style lang="scss" scoped>
@keyframes example {
  0% {
    left: 0px;
  }
  20% {
    left: 0px;
  }
  40% {
    left: -330px;
  }
  60% {
    left: -330px;
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
.teshu {
  position: absolute;
  left: 0;
  width: 175px;
  height: 140px;
  border-bottom: #c9c9c9;
  z-index: 10;
  img {
    position: absolute;
    bottom: -18px;
    left: 10px;
  }
}
.screen-right {
  display: inline-block;
  // background: #e6e6e6;
  background: #a9c8f2;
  width: calc(3840px - 772px);
  overflow: hidden;
  position: relative;
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
      animation: example 15s linear 2s infinite;
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
    // background: #a9c8f2;
    background: #e6e6e6;
    border-bottom: 10px solid #c9c9c9;
    // border-bottom: 10px solid #5488c7;
    top: 0px;
    z-index: 1;
    left: -50%;
  }
  .arrive-line-2 {
    position: absolute;
    width: 100%;
    height: 140px;
    // background: #a9c8f2;
    background: #e6e6e6;
    border-top: 10px solid #c9c9c9;
    // border-top: 10px solid #5488c7;
    top: -10px;
    z-index: 1;
    left: -50%;
  }
  .border-item {
    height: 320px;
    position: absolute;
    width: 155px;
    top: 140px;
    left: 50%;
    z-index: 2;
    box-sizing: border-box;
    // border: 10px solid #5488c7;
    border: 10px solid #c9c9c9;
    border-left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .border-container {
    height: 600px;
    position: absolute;
    // background: #a9c8f2;
    background: #e6e6e6;
    width: 262px;
    top: 0px;
    left: 50%;
    z-index: 0;
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
      height: 140px;
      top: 0;
      animation: arrive 2s linear 1s infinite alternate;
      // background: #d6e4f7;
      img {
        margin-top: 130px;
        position: relative;
        z-index: 10;
      }
    }
    .special-8 {
      width: 100%;
      position: absolute;
      right: -50%;
      height: 600px;
      top: 0;
      // background: #d6e4f7;
      .special-8 {
        width: 100%;
        height: 600px;
        position: absolute;
        left: 0;
        z-index: 1;
      }
      img {
        margin-top: 290px;
        transform: rotate(90deg);
        position: relative;
        left: -16px;
        z-index: 100;
      }
    }
    .right-arrow-box-2 {
      width: 100%;
      position: absolute;
      right: -50%;
      height: 140px;
      top: 0;
      z-index: 1;
      animation: arrive 2s linear 1s infinite alternate;
      // background: #d6e4f7;
      img {
        position: relative;
        top: -20px;
        transform: rotate(180deg);
        position: relative;
        z-index: 10;
      }
    }
    @keyframes arrive {
      0% {
        background-color: #e6e6e6;
      }
      50% {
        background-color: #a9c8f2;
      }
      100% {
        background-color: #e6e6e6;
      }
    }
    .station-name {
      font-size: 40px;
      padding-bottom: 4px;
      position: relative;
      z-index: 2;
    }
    .station-time {
      vertical-align: top;
      position: relative;
      top: 22px;
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
      z-index: 10;
    }
    .postion-box-bottom {
      position: absolute;
      top: -66px;
      width: 100%;
      height: 82px;
      z-index: 10;
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
    .transfer-icon.active1 {
      transform: scale(1.5);
    }
    .station-icon {
      width: 30px;
      height: 30px;
      display: inline-block;
      border-radius: 50%;
      border: 6px solid #5488c7;
      vertical-align: top;
      background: #fff;
    }
    .station-icon.active0 {
      border: 6px solid #c9c9c9;
    }
    .station-icon.active1 {
      border: 6px solid #5488c7;
      transform: scale(1.5);
    }
    .station-icon.active2 {
      border: 6px solid #5488c7;
    }
    .station-icon.acitve {
      border: 6px solid #c9c9c9;
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
  border: 10px solid #5488c7;
  border-left: none;
  // box-shadow: 1px 1px 10px #5488c7;
  text-align: center;
  width: 2950px;
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
