# line-srceen 深圳地铁到站提示屏（pis 屏幕）

终端屏幕设计尺寸 3840px 600px
![pis](/src/assets/pis.gif)

- 列车有三个状态 分别为 未到站、即将到站、已到站
- 未到站显示 预计到达时间
- 即将到站 和 已到站 显示车辆状态（车厢拥挤度、温度等）

## 版本更新

2021-07-09

- 车站数据 每个 100s 刷新一次
- 车辆数据 10s 刷新一次

## 安装

```bash
# 打包elctron 客户端版本
yarn electron:build
# 打包网页版
yarn build
```
