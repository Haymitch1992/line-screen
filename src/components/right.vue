<template>
  <div></div>
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
  }
};
</script>

<style></style>
