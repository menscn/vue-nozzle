<template>
    <div>
        <el-row>
            <el-col :span="16" style="padding:5px">
                <el-row>
                    <el-card>
                        <el-row style="border-bottom: 2px solid black;">
                            <b style="font-size: large;">装配零部件组合</b>
                        </el-row>
                        <el-row style="padding-top:20px">
                            <el-table :data="combinationData" border style="max-height: 270px;text-align: center;">
                                <el-table-column fixed prop="id" label="编号" min-width="100">
                                </el-table-column>
                                <el-table-column prop="rxjt" label="柔性接头编号" min-width="130">
                                </el-table-column>
                                <el-table-column prop="gdt" label="固定体编号" min-width="130">
                                </el-table-column>
                                <el-table-column prop="bhgd" label="保护工段编号" min-width="130">
                                </el-table-column>
                                <el-table-column prop="kzd" label="扩张段编号" min-width="130">
                                </el-table-column>
                                <el-table-column prop="jtfrh" label="接头放热环编号" min-width="130">
                                </el-table-column>
                                <el-table-column prop="hc" label="HC组件编号" min-width="130">
                                </el-table-column>
                            </el-table>
                        </el-row>
                        <el-pagination class="pagination" background layout="prev, pager, next,jumper,total"
                            @current-change="handlepagechange" :total="pagination.total"
                            :page-size="pagination.pageSize" :current-page="pagination.currentpage">
                            <!--分别是前一页，当前页面,下一个,跳转布局 总数 页面大小 当前也-->
                        </el-pagination>
                    </el-card>
                </el-row>
                <el-row style="margin-top:10px">
                    <el-col :span="12">
                        <el-card>
                            <el-row style="border-bottom: 2px solid black;">
                                <b style="font-size: large;">零部件替换方案</b>
                            </el-row>
                            <el-row style="padding-top:1px">
                                <el-table :data="tableData" style="width: 100% ;height:283px;"
                                    :row-class-name="tableRowClassName">
                                    <el-table-column prop="fix" label="零部件名" width="120">
                                    </el-table-column>
                                    <el-table-column prop="id" label="编号" width="120">
                                    </el-table-column>
                                    <el-table-column label="详细信息">
                                        <el-button size="medium" type="primary" icon="el-icon-view" plain round>查看详细信息
                                        </el-button>
                                    </el-table-column>
                                </el-table>

                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card>
                            <el-row style="border-bottom: 2px solid black;">
                                <b style="font-size: large;">零部件修配方案</b>
                            </el-row>
                            <el-row style="padding-top:20px">
                                <el-table :data="tableData" style="width: 100% ;height:110px;"
                                    :row-class-name="tableRowClassName">
                                    <el-table-column prop="fix" label="特征名" width="120">
                                    </el-table-column>
                                    <el-table-column prop="id" label="修配量" width="120">
                                    </el-table-column>
                                    <el-table-column label="详细信息">
                                        <el-button size="medium" type="primary" icon="el-icon-view" plain round>查看详细信息
                                        </el-button>
                                    </el-table-column>
                                </el-table>
                            </el-row>
                            <el-row style="border-bottom: 2px solid black;">
                                <b style="font-size: large;">装配工艺修配方案</b>
                            </el-row>
                            <el-row style="padding-top:20px">
                                <el-table :data="tableData" style="width: 100% ;height:110px;"
                                    :row-class-name="tableRowClassName">
                                    <el-table-column prop="fix" label="工序号" width="120">
                                    </el-table-column>
                                    <el-table-column prop="id" label="修改量" width="120">
                                    </el-table-column>
                                    <el-table-column label="详细信息">
                                        <el-button size="medium" type="primary" icon="el-icon-view" plain round>查看详细信息
                                        </el-button>
                                    </el-table-column>
                                </el-table>

                            </el-row>
                        </el-card>

                    </el-col>
                </el-row>
                <el-row style="margin-top:10px">
                    <el-col :span="12">
                        <el-card>
                            <el-row style="border-bottom: 2px solid black;">
                                <b style="font-size: large;">摆缝间隙质量统计</b>
                            </el-row>
                            <el-row style="padding-top:10px">
                                <div id="bar" style="width:420px;height: 192px;"></div>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card>
                            <el-row style="border-bottom: 2px solid black;">
                                <b style="font-size: large;">同轴度质量统计</b>
                            </el-row>
                            <el-row style="padding-top:10px">
                                <div id="bar-2" style="width:420px;height: 192px;"></div>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>

            </el-col>
            <el-col :span="8" style="padding:5px">
                <el-card>
                    <el-row style="border-bottom: 2px solid black;">
                        <b style="font-size: large;">喷管装配质量指标</b>
                    </el-row>
                    <el-row style="padding-top:20px">
                        <img src="../../../static/nozzle.png" width="100%" style="margin-top:5px" />
                    </el-row>
                </el-card>
                <el-card style="margin-top:10px">
                    <el-row style="border-bottom: 2px solid black;">
                        <b style="font-size: large;">喷管装配指标</b>
                    </el-row>
                    <el-row style="padding-top:20px">
                        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                            <el-table-column prop="fix" label="指标名" width="120">
                            </el-table-column>
                            <el-table-column prop="id" label="标签名" width="120">
                            </el-table-column>
                            <el-table-column prop="function" label="合理范围">
                            </el-table-column>
                        </el-table>
                    </el-row>
                </el-card>
                <el-row style="margin-top:30px">
                    <el-col :span="12">
                        <el-button size="medium" type="primary" icon="el-icon-view" plain round>孪生系统仿真
                        </el-button>
                    </el-col>
                    <el-col :span="12">
                        <el-button size="medium" type="primary" icon="el-icon-view" plain round>查看仿真结果
                        </el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        },
        barEcharts() {
            var myChart = this.$echarts.init(document.getElementById('bar'))
            // 配置图表
            var option = {
                title: {
                },
                //提示框
                tooltip: {},
                legend: {
                    data: ['']
                },
                //x轴显示种类
                xAxis: {
                    data: ['种类一', '种类二', '种类三', '种类四', '种类五', '种类六']
                },
                //y轴可填数值等
                yAxis: {
                },
                series: [{
                    name: '销量',
                    type: 'bar',
                    //y轴数值
                    data: [5,
                        {
                            value: 20,
                            itemStyle: {
                                color: '#FFB5C5'
                            }
                        }, 36, 10, 10, 20]
                }],
                grid: {
                    left: '3%', //默认10%
                    right: '4%', //默认10%
                    bottom: '1%', //默认60
                    top: '1%',
                    containLabel: true
                    //grid区域是否包含坐标轴的刻度标签
                },
            }
            myChart.setOption(option)
        },
        bar2Echarts() {
            var myChart = this.$echarts.init(document.getElementById('bar-2'))
            // 配置图表
            var option = {
                title: {
                },
                //提示框
                tooltip: {},
                legend: {
                    data: ['']
                },
                //x轴显示种类
                xAxis: {
                    data: ['种类一', '种类二', '种类三', '种类四', '种类五', '种类六']
                },
                //y轴可填数值等
                yAxis: {
                },
                series: [{
                    name: '销量',
                    type: 'bar',
                    //y轴数值
                    data: [5,
                        {
                            value: 20,
                            itemStyle: {
                                color: '#FFB5C5'
                            }
                        }, 36, 10, 10, 20]
                }],
                grid: {
                    left: '3%', //默认10%
                    right: '4%', //默认10%
                    bottom: '1%', //默认60
                    top: '1%',
                    containLabel: true
                    //grid区域是否包含坐标轴的刻度标签
                },
            }
            myChart.setOption(option)
        }
    },
    data() {
        return {
            combinationData: [{ id: '1', rxjt: 'rjxt_1', gdt: 'gdt_5', kzd: 'kzd_5', bhgd: 'bhgd_4', jtfrh: 'jtfrh_1', hc: 'hc_2' }],
            tableData: [{
                fix: '218内夹爪',
                id: 'fix218',
                function: '抓取柔性接头',
            }, {
                fix: '360外夹爪',
                id: 'fix360',
                function: '抓取固定体、保护工段、柔性接头-固定体装配体以及最终成品',
            }, {
                fix: '156内夹爪',
                id: 'fix218',
                function: '抓取扩张段',
            }, {
                fix: '170内夹爪',
                id: 'fix218',
                function: '抓取HC组件',
            }, {
                fix: '322外夹爪',
                id: 'fix218',
                function: '抓取接头放热环',
            }, {
                fix: '开口夹爪',
                id: 'fix1',
                function: '抓取柔性接头与固定体的装配体，并旋转安装',
            }], total: 1, // 总记录数
            current: 1, // 页码
            limit: 1, // 每页记录数
            pages: '1', //总页码数
            pagination: {
                currentpage: 1,
                pageSize: 10,
                total: 1,
            }
        }
    },

    created() {
    },
    mounted() {
        this.barEcharts();
        this.bar2Echarts();
    }
}
</script>

<style scoped>
.device-size {
    flex: 1;
    width: 30%;
    min-width: 30%;
    max-width: 30%;
    height: 350px;
    margin-left: 20px;
}

.device-deploy {
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-content: normal;
}

.image-style {
    width: 160px;
    height: 130px;
    object-fit: scale-down;
}

.form-width {
    display: inline-block;
    width: 300px;
}

.big-font {
    font-size: large;
}

.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}

.label-font-size>>>.el-form-item__label {
    font-size: large;
}

.item-font-size>>>.el-form-item__content {
    font-size: large;
}

.device-image {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
}

.header-font {
    font-size: large;
}

.divider-type {
    margin-top: 10px;
    margin-bottom: 10px;
}

.pagination-center {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>

