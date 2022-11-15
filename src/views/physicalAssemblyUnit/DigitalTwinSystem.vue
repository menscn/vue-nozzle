/**
 * 基础菜单 商品管理
 */
<template>
    <div>
        <iframe src="http://127.0.0.1:5502/index.html" id="map" scrolling="no" frameborder="0"
            style="position:absolute;top:60px;left: 240px;right:0px;bottom:10px;"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
        /**
        * iframe-宽高自适应显示   
        */
        function changeMapIframe() {
            const map = document.getElementById('map');
            const deviceWidth = document.body.clientWidth;
            const deviceHeight = document.body.clientHeight;
            map.style.width = 1678 + 'px'; //数字是页面布局宽度差值
            map.style.height = 1020 + 'px'; //数字是页面布局高度差
        }

        changeMapIframe()

        window.onresize = function () {
            changeMapIframe()
        }
    }
}
</script>

<style scoped>
.user-search {
    margin-top: 20px;
}

.userRole {
    width: 100%;
}
</style>