<template>
  <cs-layout class="">
    <pcs-navbar title="数据统计"></pcs-navbar>
    <view class="card mt-2 pb-4">
      <text class="text-36 text-center inline-block mb-2 w100% mt-4">学生各阶段人员分布</text>
      <l-echart ref="chart"></l-echart>
    </view>
  </cs-layout>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import LEchart from '@/uni_modules/lime-echart_0.6.5/components/l-echart/l-echart.vue'
import { ref } from 'vue'
import { getStatistic } from '@/api/common'
import { onShow } from '@dcloudio/uni-app'
const chart = ref()
const newData = ref([])
const option = ref({
  legend: {
    top: 'bottom',
    show: true,
    width: 150
  },
  // toolbox: {
  //   show: true
  // },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [0, 80],
      top: [0, 0],
      center: ['50%', '30%'],
      roseType: 'area',
      label: {
        show: false
      },
      data: [
        {
          status: 1,
          value: 0,
          name: '1.申请入党阶段'
        },
        {
          status: 2,
          value: 0,
          name: '2.入党积极分子的确定和培养考察阶段'
        },
        {
          status: 3,
          value: 0,
          name: '3.发展对象确定和考察阶段'
        },
        {
          status: 4,
          value: 0,
          name: '4.预备党员接收阶段'
        },
        {
          status: 5,
          value: 0,
          name: '5.预备党员教育考察和转正阶段'
        }
      ]
    }
  ]
})

const fetchStatistic = async () => {
  const { data } = await getStatistic()
  const baseData = option.value.series[0].data
  newData.value = option.value.series[0].data.map((i, idx) => ({ ...i, value: data[idx + 1] }))
  option.value.series[0].data = newData.value
  console.log('newData.value: ', newData.value)

  chart.value.init(echarts, (chart) => {
    chart.setOption(option.value)
  })
}
onShow(() => {
  fetchStatistic()
})
</script>

<style lang="scss" scoped></style>
