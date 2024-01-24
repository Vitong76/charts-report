<template>
    <div class="bottom-view-container">
        <div class="view">
            <el-card shadow="hover">
                <template
                    #header
                >
                    <div class="title-wrapper">
                        关键词搜索
                    </div>
                </template>
                <div class="chart-wrapper">
                    <div class="chart">
                        <div class="chart-title">
                            搜索用户数
                        </div>
                        <div class="chart-date">
                            93,634
                        </div>
                        <v-chart :option="searchUserCharts"></v-chart>
                    </div>
                    <div class="chart">
                        <div class="chart-title">
                            搜索量
                        </div>
                        <div class="chart-date">
                            63,945
                        </div>
                        <v-chart :option="searchDataCharts"></v-chart>
                    </div>
                </div>
                <div class="table-wrapper">
                    <el-table :data="searchTable">
                        <el-table-column prop="rank" label="排名" ></el-table-column>
                        <el-table-column prop="keyword" label="关键词" ></el-table-column>
                        <el-table-column prop="count" label="总搜索量" ></el-table-column>
                        <el-table-column prop="users" label="总用户数" ></el-table-column>
                    </el-table>
                    <el-pagination
                        layout="prev, pager, next"
                        :total="10"
                        :page-size="4"
                    >
                    </el-pagination>
                </div>
            </el-card>
        </div>
        <div class="view">
            <el-card shadow="hover">
                <template #header>
                    <div class="title-wrapper">
                        分类销售排行
                        <div class="radio-wrapper">
                            <el-radio-group v-model="salesRankKey">
                                <el-radio-button label="商品"></el-radio-button>
                                <el-radio-button label="品类"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                </template>
                <div class="radio-charts">
                    <v-chart></v-chart>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import {
    ElCard,
    ElRow,
    ElCol,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElRadioGroup,
    ElRadioButton,
} from 'element-plus';
import { ref, reactive } from 'vue';
import VChart from 'vue-echarts';

export default {
    name: 'bottomView',
    components: {
        ElCard,
        ElCol,
        ElRow,
        ElTable,
        ElTableColumn,
        ElPagination,
        ElRadioGroup,
        ElRadioButton,
        VChart,
    },
    setup() {
        const searchUserCharts = reactive({
            xAxis: {
                type: 'category',
                boundaryGap: false,
            },
            yAxis: {
                show: false,
            },
            series: [{
                type: 'line',
                data: [100, 250, 200, 250, 300],
                areaStyle: {
                    color: 'rgba(95,187,255,.5)',
                },
                lineStyle: {
                    color: 'rgb(95,187,255)',
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
        const searchDataCharts = reactive({
            xAxis: {
                type: 'category',
                boundaryGap: false,
            },
            yAxis: {
                show: false,
            },
            series: [{
                type: 'line',
                data: [100, 250, 200, 250, 300],
                areaStyle: {
                    color: 'rgba(95,187,255,.5)',
                },
                lineStyle: {
                    color: 'rgb(95,187,255)',
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
        const searchTable = reactive([
            {
                id: 1, rank: 1, keyword: '北京', count: 100, users: 98, range: '90%',
            },
            {
                id: 2, rank: 2, keyword: '广州', count: 100, users: 98, range: '90%',
            },
            {
                id: 3, rank: 3, keyword: '深圳', count: 100, users: 98, range: '90%',
            },
        ]);
        const salesRankKey = ref('商品');
        return {
            searchUserCharts,
            searchDataCharts,
            searchTable,
            salesRankKey,
        };
    },
};
</script>

<style lang="scss" scoped>
.bottom-view-container {
    display: flex;
    margin-top: 20px;
    .view {
        flex: 1;
        &:first-child {
            padding: 0 10px 0 0;
        }
        &:last-child {
            padding-left: 10px;
        }
        .title-wrapper {
            display: flex;
            align-items: center;
            height: 60px;
            box-sizing: border-box;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            font-weight: 500;
            padding: 0 0 0 20px;
            .radio-wrapper {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                padding-right: 20px;
            }
        }
        .chart-wrapper {
            display: flex;
            // flex-direction: column;
            // height: 452px;

            .chart {
                // height: 100%;
                flex: 1;
                padding: 0 10px;
                .chart-title {
                    color: #999;
                    font-size: 14px;
                }
                .chart-data {
                    font-size: 22px;
                    color: #333;
                    font-weight: 500;
                    letter-spacing: 2px;
                }
                .echarts {
                    height: 50px;
                }
            }
        }
        .table-wrapper {
            padding: 20px 10px 10px;
            .el-pagination {
                padding-top: 10px;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
}
</style>