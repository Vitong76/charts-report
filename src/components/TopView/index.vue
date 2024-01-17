<template>
    <div class="top-view-container">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card class="box-card" body-class="top-charts-area" shadow="hover">
                    <common-card
                        title="累计销售额"
                        value="¥ 32,500,110"
                    >
                        <template v-slot:charts>
                            <div class="compare-area">
                                <div class="compare-item">
                                    <span>日同比</span>
                                    <span style="margin-left: 5px;color: #333;font-weight: 700;">7.33%</span>
                                    <div class="increase"></div>
                                </div>
                                <div class="compare-item">
                                    <span>月同比</span>
                                    <span style="margin-left: 5px;color: #333;font-weight: 700;">38.79%</span>
                                    <div class="reduce"></div>
                                </div>
                            </div>
                        </template>
                        <template v-slot:footer>
                            <span class="money-decorate">昨日销售额 </span>
                            <span class="money">¥ 30,000,000</span>
                        </template>
                    </common-card>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card" body-class="top-charts-area" shadow="hover">
                    <common-card
                        title="累计订单量"
                        value="2,157,420"
                    >
                        <template v-slot:charts>
                            <div id="total-order-charts" style="width: 100%;height: 100%;"></div>
                        </template>
                        <template v-slot:footer>
                            <span class="money-decorate">昨日订单量 </span>
                            <span class="money">20,000,000</span>
                        </template>
                    </common-card>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card" body-class="top-charts-area" shadow="hover">
                    <common-card
                        title="今日交易用户数"
                        value="81,014"
                    >
                        <template v-slot:charts>
                            <div id="return-goods-charts" style="width: 100%;height: 100%;"></div>
                        </template>
                        <template v-slot:footer>
                            <span class="money-decorate">退货率 </span>
                            <span class="money">5.14%</span>
                        </template>
                    </common-card>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card" body-class="top-charts-area" shadow="hover">
                    <common-card
                        title="累计用户数"
                        value="1,087,503"
                    >
                        <template v-slot:charts>
                            <div id="all-users-charts" style="width: 100%;height: 100%;"></div>
                        </template>
                        <template v-slot:footer>
                            <div class="total-users-footer">
                                <span class="money-decorate">日同比</span>
                                <span class="money">8.73%</span>
                                <span class="increase"></span>
                                <span class="money-decorate" style="margin-left: 10px;">月同比</span>
                                <span class="money">35.91%</span>
                                <span class="increase"></span>
                            </div>
                        </template>
                    </common-card>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {
    ElCard,
    ElRow,
    ElCol,
} from 'element-plus';
import CommonCard from '@/components/CommonCard/index.vue';
import { onMounted } from 'vue';
import * as Echarts from 'echarts';

export default {
    name: 'topView',
    components: {
        ElCard,
        ElCol,
        ElRow,
        CommonCard,
    },
    setup() {
        // 开始之后调用部分参数
        onMounted(() => {
            // 开始设置今日订单量的charts图
            const totalChartsDom = document.getElementById('total-order-charts');
            const totalCharts = Echarts.init(totalChartsDom, 'light');
            totalCharts.setOption({
                xAxis: {
                    type: 'category',
                    show: false,
                    boundaryGap: false,
                },
                yAxis: {
                    show: false,
                },
                series: [{
                    type: 'line',
                    data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
                    areaStyle: {
                        color: 'purple',
                    },
                    lineStyle: {
                        width: 0,

                    },
                    itemStyle: {
                        opacity: 0,
                    },
                    smooth: true,
                }],
                grid: {
                    left: 0,
                    bottom: 0,
                    right: 0,
                    top: 0,
                },
            });
            // 设置退货率表格
            const returnGoodsDom = document.getElementById('return-goods-charts');
            const rgCharts = Echarts.init(returnGoodsDom, 'light');
            rgCharts.setOption({
                color: ['#3398db'],
                xAxis: {
                    type: 'category',
                    data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
                    show: false,
                },
                yAxis: {
                    show: false,
                },
                series: [{
                    type: 'bar',
                    data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
                    barWidth: '60%',
                }],
                grid: {
                    left: 0,
                    bottom: 0,
                    right: 0,
                    top: 0,
                },
            });
            // 设置用户总数表格
            const allUserDom = document.getElementById('all-users-charts');
            const allUserCharts = Echarts.init(allUserDom, 'light');
            allUserCharts.setOption({
                xAxis: {
                    show: false,
                },
                yAxis: {
                    type: 'category',
                    show: false,
                },
                series: [{
                    type: 'bar',
                    stack: '总量',
                    data: [200],
                    barWidth: 10,
                    itemStyle: {
                        color: '#45c946',
                    },
                },
                {
                    type: 'bar',
                    stack: '总量',
                    data: [300],
                    barWidth: 10,
                    itemStyle: {
                        color: '#eee',
                    },
                },
                {
                    type: 'custom',
                    data: [200],
                    renderItem: (params, api) => {
                        const value = api.value(0);
                        const endPoint = api.coord([value, 0]);
                        return {
                            type: 'group',
                            x: endPoint[0],
                            y: endPoint[1],
                            children: [
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M94.8 304.5L512 721.8l416-416-833.2-1.3z m0 0',
                                        x: -5,
                                        y: -20,
                                        width: 10,
                                        height: 10,
                                        layout: 'cover',
                                    },
                                    style: {
                                        fill: '#45c946',
                                    },
                                },
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M928 721.8L510.8 304.5l-416 416 833.2 1.3z m0 0',
                                        x: -5,
                                        y: 10,
                                        width: 10,
                                        height: 10,
                                        layout: 'cover',
                                    },
                                    style: {
                                        fill: '#45c946',
                                    },
                                },
                            ],

                        };
                    },
                }],
                grid: {
                    left: 0,
                    bottom: 0,
                    right: 0,
                    top: 0,
                },
            });
        });
    },
};
</script>

<style lang="scss" scoped>
.top-view-container {

    :deep .top-charts-area {
        padding: 20px;
    }

}

.box-card {

    .compare {
        height: 100%;
        background-color: yellowgreen;
    }

    .money-decorate {
        font-size: 12px;
    }

    .money {
        margin-left: 5px;
        color: #333;
        font-weight: 700;
        font-size: 12px;
    }
}

.compare-area {
    font-size: 12px;
    color: #666;
    display: flex;
    flex-direction: column;
    height: 100%;

    .compare-item {
        margin: 0;
        margin-top: 3px;
        display: flex;
        align-items: center;
        flex: 1;

    }
}

.total-users-footer {
    display: flex;
    align-items: center;
    line-height: 16px;
}
</style>