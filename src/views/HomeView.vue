<template>
    <div class="home">
        <top-view></top-view>
        <sales-view></sales-view>
        <bottom-view></bottom-view>
        <map-view></map-view>
    </div>
</template>

<script>
import TopView from '@/components/TopView/index.vue';
import SalesView from '@/components/SalesView/index.vue';
import MapView from '@/components/MapView/index.vue';
import BottomView from '@/components/BottomView/index.vue';

export default {
    name: 'homeView',
    components: {
        TopView,
        SalesView,
        MapView,
        BottomView,
    },
};
</script>

<style>
    .home {
        width: 100%;
        height: 100%;
        background: #eee;
        padding: 20px 20px;
        box-sizing: border-box;
    }
    .el-card__header {
        border-bottom: 0;
        padding: 0;
    }
</style>
