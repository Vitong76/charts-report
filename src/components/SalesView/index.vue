<template>
    <div class="sales-container">
        <el-card shadow="hover">
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
            <template>
                content
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

        const onMenuSelect = (inx) => {
            activeInx.value = inx;
        };

        return {
            activeInx,
            radioSelect,
            onMenuSelect,
            date,
            pickerOptions,
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
</style>