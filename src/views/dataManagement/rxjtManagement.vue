<template>
    <div>
        <el-row>
            <el-col :span="18">
                <div class="grid-content bg-purple">
                    <el-table :data="tableData" border style="width: 100%;text-align: center;" height="850px">
                        <el-table-column fixed prop="id" label="编号" width="80">
                        </el-table-column>
                        <el-table-column prop="H1" label="H1" width="120">
                        </el-table-column>
                        <el-table-column prop="H2" label="H2" width="120">
                        </el-table-column>
                        <el-table-column prop="H3" label="H3" width="120">
                        </el-table-column>
                        <el-table-column prop="H4" label="H4" width="120">
                        </el-table-column>
                        <el-table-column prop="D1" label="D1" width="120">
                        </el-table-column>
                        <el-table-column prop="D2" label="D2" width="120">
                        </el-table-column>
                        <el-table-column prop="D3" label="D3" width="120">
                        </el-table-column>
                        <el-table-column prop="D4" label="D4" width="120">
                        </el-table-column>
                        <el-table-column prop="D5" label="D5" width="120">
                        </el-table-column>
                        <el-table-column prop="D6" label="D6" width="120">
                        </el-table-column>
                        <el-table-column prop="D7" label="D7" width="120">
                        </el-table-column>
                        <el-table-column prop="D8" label="D8" width="120">
                        </el-table-column>
                    </el-table>
                </div>
                <el-pagination class="pagination" background layout="prev, pager, next,jumper,total"
                    @current-change="handlepagechange" :total="pagination.total" :page-size="pagination.pageSize"
                    :current-page="pagination.currentpage">
                    <!--分别是前一页，当前页面,下一个,跳转布局 总数 页面大小 当前也-->
                </el-pagination>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light">
                    <el-card :body-style="{ padding: '10px' }">
                        <img src="../../../static/rxjt/1.png" class="image">
                        <div style="text-align: center;">
                            <span >柔性接头剖面图</span>
                            <div class="bottom clearfix">
                                <router-link to="/dataManagement/rxjtManagement">
                                    <el-button type="text" class="button">查看原图</el-button>
                                </router-link>
                            </div>
                        </div>
                    </el-card>
                </div>
                <div class="grid-content bg-purple-light">
                    <el-card :body-style="{ padding: '10px' }">
                        <img src="../../../static/rxjt/2.png" class="image">
                        <div style=" text-align: center;">
                            <span>柔性接头俯视图</span>
                            <div class="bottom clearfix">
                                <router-link to="/dataManagement/rxjtManagement">
                                    <el-button type="text" class="button">查看原图</el-button>
                                </router-link>
                            </div>
                        </div>
                    </el-card>
                </div>
                <div class="grid-content bg-purple-light">
                    <el-card :body-style="{ padding: '10px' }">
                        <img src="../../../static/rxjt/3.png" class="image">
                        <div style="text-align: center;">
                            <span>柔性接头仰视图</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <router-link to="/dataManagement/rxjtManagement">
                                    <el-button type="text" class="button">查看原图</el-button>
                                </router-link>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: "table",
    data() {
        return {
            tableData: [
            ],
            total: 0, // 总记录数
            current: 1, // 页码
            limit: 10, // 每页记录数
            pages: '0', //总页码数
            pagination: {
                currentpage: 1,
                pageSize: 20,
                total: 0,

            }
        }
    },
    methods: {
        handlepagechange(currentPage) {
            this.pagination.currentpage = currentPage;//传入参数变成当前页面 在调取查询操作
            this.getpage();
        },
        getpage() {
            let this1 = this;
            let data = [
                {
                    id: "1",
                    H1: "58.77472825",
                    H2: "7.90050667",
                    H3: "13.09813219",
                    H4: "7.750638995",
                    D1: "199.5283341",
                    D2: "169.9423575",
                    D3: "266.7352927",
                    D4: "275.6874117",
                    D5: "11.10256161",
                    D6: "259.963064",
                    D7: "218.1870508",
                    D8: "5.906240776"
                },
                {
                    id: "2",
                    H1: "58.77472825",
                    H2: "7.90050667",
                    H3: "13.09813219",
                    H4: "7.750638995",
                    D1: "199.5283341",
                    D2: "169.9423575",
                    D3: "266.7352927",
                    D4: "275.6874117",
                    D5: "11.10256161",
                    D6: "259.963064",
                    D7: "218.1870508",
                    D8: "5.906240776"
                },
                {
                    id: "3",
                    H1: "59.41990019",
                    H2: "7.926985202",
                    H3: "12.72392826",
                    H4: "7.957660625",
                    D1: "199.8208701",
                    D2: "170.1188399",
                    D3: "266.4136048",
                    D4: "276.0928829",
                    D5: "11.01934561",
                    D6: "259.7379068",
                    D7: "218.3038501",
                    D8: "6.239821875"
                },
                {
                    id: "4",
                    H1: "59.33573177",
                    H2: "7.788020803",
                    H3: "13.02461381",
                    H4: "7.943934411",
                    D1: "199.4419581",
                    D2: "170.0621656",
                    D3: "266.6363177",
                    D4: "276.0060595",
                    D5: "10.99780916",
                    D6: "260.1723745",
                    D7: "218.5218842",
                    D8: "6.284315248"
                },
                {
                    id: "5",
                    H1: "59.88864469",
                    H2: "8.221476547",
                    H3: "13.22338245",
                    H4: "7.548717208",
                    D1: "199.1630986",
                    D2: "170.0608226",
                    D3: "266.2374064",
                    D4: "276.1932785",
                    D5: "10.6692973",
                    D6: "260.5502721",
                    D7: "219.0047681",
                    D8: "6.293903515"
                },
                {
                    id: "6",
                    H1: "60.03729086",
                    H2: "8.218392887",
                    H3: "13.14288994",
                    H4: "7.594233783",
                    D1: "199.4940835",
                    D2: "169.698997",
                    D3: "266.6550625",
                    D4: "276.2650321",
                    D5: "11.03647983",
                    D6: "260.3981761",
                    D7: "218.6925392",
                    D8: "6.145825334"
                },
                {
                    id: "7",
                    H1: "60.97418656",
                    H2: "8.553555023",
                    H3: "13.19971181",
                    H4: "8.012547298",
                    D1: "199.1140749",
                    D2: "169.9684322",
                    D3: "266.2127004",
                    D4: "276.0661381",
                    D5: "11.01025489",
                    D6: "260.5942238",
                    D7: "218.8760605",
                    D8: "6.552731069"
                },
                {
                    id: "8",
                    H1: "60.22291282",
                    H2: "8.763612389",
                    H3: "13.21239281",
                    H4: "7.740520112",
                    D1: "199.096222",
                    D2: "170.459731",
                    D3: "266.1805266",
                    D4: "275.6962438",
                    D5: "11.24269713",
                    D6: "260.3742915",
                    D7: "219.1060727",
                    D8: "6.584256958"
                },
                {
                    id: "9",
                    H1: "60.24336228",
                    H2: "9.244980209",
                    H3: "13.03592554",
                    H4: "7.628139557",
                    D1: "199.3894354",
                    D2: "170.644605",
                    D3: "266.2099514",
                    D4: "276.0350482",
                    D5: "11.00440683",
                    D6: "260.5591285",
                    D7: "218.9478818",
                    D8: "6.583644732"
                },
                {
                    id: "10",
                    H1: "60.64062658",
                    H2: "9.444736187",
                    H3: "13.00019941",
                    H4: "7.953483862",
                    D1: "199.3442517",
                    D2: "170.24588",
                    D3: "266.284593",
                    D4: "276.3364833",
                    D5: "10.62548509",
                    D6: "260.0728189",
                    D7: "218.9864644",
                    D8: "6.628607676"
                },
                {
                    id: "11",
                    H1: "60.76742452",
                    H2: "9.056611351",
                    H3: "12.57557853",
                    H4: "7.759113824",
                    D1: "199.2140666",
                    D2: "169.8246293",
                    D3: "266.5957751",
                    D4: "276.2262898",
                    D5: "10.84612016",
                    D6: "260.2597679",
                    D7: "219.418085",
                    D8: "6.546282171"
                },
                {
                    id: "12",
                    H1: "59.33573177",
                    H2: "7.788020803",
                    H3: "13.02461381",
                    H4: "7.943934411",
                    D1: "199.4419581",
                    D2: "170.0621656",
                    D3: "266.6363177",
                    D4: "276.0060595",
                    D5: "10.99780916",
                    D6: "260.1723745",
                    D7: "218.5218842",
                    D8: "6.284315248"
                },
                {
                    id: "13",
                    H1: "59.88864469",
                    H2: "8.221476547",
                    H3: "13.22338245",
                    H4: "7.548717208",
                    D1: "199.1630986",
                    D2: "170.0608226",
                    D3: "266.2374064",
                    D4: "276.1932785",
                    D5: "10.6692973",
                    D6: "260.5502721",
                    D7: "219.0047681",
                    D8: "6.293903515"
                },
                {
                    id: "14",
                    H1: "60.03729086",
                    H2: "8.218392887",
                    H3: "13.14288994",
                    H4: "7.594233783",
                    D1: "199.4940835",
                    D2: "169.698997",
                    D3: "266.6550625",
                    D4: "276.2650321",
                    D5: "11.03647983",
                    D6: "260.3981761",
                    D7: "218.6925392",
                    D8: "6.145825334"
                },
                {
                    id: "15",
                    H1: "60.97418656",
                    H2: "8.553555023",
                    H3: "13.19971181",
                    H4: "8.012547298",
                    D1: "199.1140749",
                    D2: "169.9684322",
                    D3: "266.2127004",
                    D4: "276.0661381",
                    D5: "11.01025489",
                    D6: "260.5942238",
                    D7: "218.8760605",
                    D8: "6.552731069"
                },
                {
                    id: "16",
                    H1: "60.22291282",
                    H2: "8.763612389",
                    H3: "13.21239281",
                    H4: "7.740520112",
                    D1: "199.096222",
                    D2: "170.459731",
                    D3: "266.1805266",
                    D4: "275.6962438",
                    D5: "11.24269713",
                    D6: "260.3742915",
                    D7: "219.1060727",
                    D8: "6.584256958"
                },
                {
                    id: "17",
                    H1: "60.24336228",
                    H2: "9.244980209",
                    H3: "13.03592554",
                    H4: "7.628139557",
                    D1: "199.3894354",
                    D2: "170.644605",
                    D3: "266.2099514",
                    D4: "276.0350482",
                    D5: "11.00440683",
                    D6: "260.5591285",
                    D7: "218.9478818",
                    D8: "6.583644732"
                },
                {
                    id: "18",
                    H1: "60.64062658",
                    H2: "9.444736187",
                    H3: "13.00019941",
                    H4: "7.953483862",
                    D1: "199.3442517",
                    D2: "170.24588",
                    D3: "266.284593",
                    D4: "276.3364833",
                    D5: "10.62548509",
                    D6: "260.0728189",
                    D7: "218.9864644",
                    D8: "6.628607676"
                },
                {
                    id: "19",
                    H1: "60.76742452",
                    H2: "9.056611351",
                    H3: "12.57557853",
                    H4: "7.759113824",
                    D1: "199.2140666",
                    D2: "169.8246293",
                    D3: "266.5957751",
                    D4: "276.2262898",
                    D5: "10.84612016",
                    D6: "260.2597679",
                    D7: "219.418085",
                    D8: "6.546282171"
                },
                {
                    id: "20",
                    H1: "60.22291282",
                    H2: "8.763612389",
                    H3: "13.21239281",
                    H4: "7.740520112",
                    D1: "199.096222",
                    D2: "170.459731",
                    D3: "266.1805266",
                    D4: "275.6962438",
                    D5: "11.24269713",
                    D6: "260.3742915",
                    D7: "219.1060727",
                    D8: "6.584256958"
                }
            ];
            this1.tableData = data;
            this1.pagination.total = 25;
            // this.$axios.get("http://localhost:8080/getOriMsgByPage/" + this1.pagination.currentpage + '/' + this1.pagination.pageSize).then((res) => {
            //     this1.pagination.pageSize = res.data.size;
            //     this1.pagination.total = res.data.total;//记录总数 前端loyout中展示
            //     console.log(res);
            //     this1.pagination.currentpage = res.data.current;//重新经行赋值
            //     this1.tableData = res.data.records;//把后端返回的记录给数组
            // })
        }
    },

    created() {
        this.getpage();
    }
}
</script>

<style scoped>

</style>
