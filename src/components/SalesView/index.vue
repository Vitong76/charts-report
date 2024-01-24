<template>
    <div class="sales-container">
        <el-card shadow="hover" :body-style="{padding: 0}">
            <template #header>
                <div class="menu-wrapper">
                    <el-menu class="sales-menu" mode="horizontal" :default-active="activeInx" @select="onMenuSelect">
                        <el-menu-item index="1">限售额</el-menu-item>
                        <el-menu-item index="2">访问量</el-menu-item>
                    </el-menu>
                    <div class="menu-right">
                        <el-radio-group v-model="radioSelect">
                            <el-radio-button label="今日"></el-radio-button>
                            <el-radio-button label="本周"></el-radio-button>
                            <el-radio-button label="本月"></el-radio-button>
                            <el-radio-button label="今年"></el-radio-button>
                        </el-radio-group>
                        <el-date-picker
                            type="daterange"
                            v-model="date"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :shortcuts="pickerOptions"
                            :unlink-panels="true"
                        ></el-date-picker>
                    </div>
                </div>
            </template>
            <template style="display: block;">
                <div class="sales-charts-container">
                    <div class="charts-container">
                        <v-chart :option="salesOptions"></v-chart>
                    </div>
                    <div class="search-container">
                        <div class="search-title">
                            排行榜
                        </div>
                        <div class="search-list-container">
                            <div class="search-item" v-for="item in rankList" :key="item.no">
                                <div class="item-no" :class="{'top-no': item.no <= 3}">
                                    {{ item.no }}
                                </div>
                                <div class="item-name">
                                    {{ item.title }}
                                </div>
                                <div class="money">
                                    {{ item.money }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </el-card>
        <!-- <v-chart class="chart" :option="option"></v-chart> -->
    </div>
</template>

<script>
import VChart from 'vue-echarts';
import { ref, reactive } from 'vue';
import {
    ElCard,
    ElMenu,
    ElMenuItem,
    ElRadioGroup,
    ElRadio,
    ElDatePicker,
    ElRadioButton,
} from 'element-plus';

export default {
    name: 'salesView',
    components: {
        VChart,
        ElCard,
        ElMenu,
        ElMenuItem,
        ElRadioGroup,
        ElRadio,
        ElDatePicker,
        ElRadioButton,
    },
    setup() {
        const activeInx = ref('1');
        const radioSelect = ref('今日');
        const date = ref('');
        const pickerOptions = reactive([
            {
                text: '最近一周',
                value(picker) {
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 24 * 1000 * 7);
                    const end = new Date();
                    return [start, end];
                },
            },
            {
                text: '最近一个月',
                value(picker) {
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 24 * 1000 * 30);
                    const end = new Date();
                    return [start, end];
                },
            },
            {
                text: '最近三个月',
                value(picker) {
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 24 * 1000 * 90);
                    const end = new Date();
                    return [start, end];
                },
            },
        ]);
        const rankList = reactive([
            {
                no: 1,
                title: '麦当劳',
                money: '323,235',
            },
            {
                no: 2,
                title: '肯德基',
                money: '323,235',
            },
            {
                no: 3,
                title: '华莱士',
                money: '323,235',
            },
            {
                no: 4,
                title: '德克士',
                money: '323,235',
            },
            {
                no: 5,
                title: '塔斯订',
                money: '323,235',
            },
        ]);
        const salesOptions = reactive({
            title: {
                text: '年度销售额',
                textStyle: {
                    fontSize: 12,
                    color: '#666',
                },
                left: 25,
                top: 20,
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    alignWithLabel: true,
                    lineStyle: {
                        color: '#999',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#999',
                    },
                },
                axisLabel: {
                    color: '#333',
                },
            },
            yAxis: {
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        type: 'dotted',
                        color: '#999',
                    },
                },
            },
            series: [{
                type: 'bar',
                barWidth: '35%',
                data: [200, 500, 600, 365, 493, 528, 200, 500, 600, 365, 493, 528],
            }],
            color: ['#3398db'],
            grid: {
                top: 70,
                left: 60,
                right: 60,
                bottom: 50,
            },
        });

        const onMenuSelect = (inx) => {
            activeInx.value = inx;
        };

        return {
            activeInx,
            radioSelect,
            onMenuSelect,
            date,
            pickerOptions,
            rankList,
            salesOptions,
        };
    },
};
</script>

<style lang="scss" scoped>
    .sales-container {
        padding-top: 20px;
    }

    .menu-wrapper {
        display: flex;
        position: relative;
    }

    .sales-menu {
        width: 100%;
        padding-left: 36px;
    }

    .menu-right {
        position: absolute;
        right: 36px;
        display: flex;
        height: 100%;
        align-items: center;

        .el-radio-group {
            margin-right: 16px;
        }
    }

    .sales-charts-container {
        display: flex;
        height: 270px;

        .charts-container {
            width: 70%;
            flex: 0 0 70%;
            height: 100%;
        }

        .search-container {
            flex: 1;
            width: 100%;
            height: 100%;
            overflow-y: auto;

            .search-title {
                font-size: 12px;
                margin-bottom: 20px;
                margin-top: 20px;
                color: #666;
                font-weight: 500;
            }

            .search-list-container {

                .search-item {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    height: 20px;
                    padding: 6px 20px 6px 0;

                    .item-no {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 20px;
                        height: 20px;
                        color: #333;
                    }

                    .top-no {
                        border-radius: 50%;
                        background-color: #000;
                        color: #fff;
                    }

                    .item-name {
                        margin-left: 10px;
                        color: #333;
                    }

                    .money {
                        margin-left: auto;
                    }
                }
            }
        }
    }
</style>