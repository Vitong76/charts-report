<template>
    <div class="container">
        <div class="title">
            {{ title }}
        </div>
        <div class="value">
            {{ value }}
        </div>
        <div class="chart">
            <slot name="charts"></slot>
        </div>
        <div class="line" />
        <div class="total">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonCard',
    props: [
        'title',
        'value',
    ],
};
</script>

<style lang="scss" scoped>
.title {
    font-size: 12px;
}

.value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
}

.chart {
    height: 50px;
}

.line {
    margin: 10px 0;
    border-top: 1px solid #eee;
}

.total {
    font-size: 12px;
    color: #666;
}

</style>