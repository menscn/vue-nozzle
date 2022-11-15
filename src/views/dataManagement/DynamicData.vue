<template>
    <div>
        <el-row>
            <el-col :span="12">
                <el-row>
                    <div class="grid-content bg-purple">
                        <el-container style="height: 400px;padding-right: 10px;">
                            <el-aside width="100px" style="border: 4px solid #909399;">
                                <div style="writing-mode: vertical-lr;font-size: 30px;
                                padding-left:21px;padding-top: 100px;">
                                    装配批次数据</div>
                            </el-aside>
                            <el-container style="border: 2px solid #909399;">
                                <el-header style="height:30px">
                                    <el-form :inline="true" :model="formInline" class="user-search">
                                        <el-form-item label="搜索：">
                                            <el-input size="small" v-model="formInline.machineNo" placeholder="输入终端号">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button size="small" type="primary" icon="el-icon-search"
                                                @click="search">搜索
                                            </el-button>
                                        </el-form-item>
                                    </el-form>
                                </el-header>
                                <el-main>
                                    <el-table :data="tableData" border style="width: 100%;max-height: 270px;">
                                        <el-table-column fixed prop="id" label="编号-动态数据" width="100">
                                        </el-table-column>
                                        <el-table-column prop="xmlStr" label="装配批次" width="160">
                                        </el-table-column>
                                        <el-table-column prop="sjoint2" label="关节1" width="160">
                                        </el-table-column>
                                        <el-table-column prop="sjoint2" label="关节2" width="168">
                                        </el-table-column>
                                        <el-table-column prop="sjoint3" label="关节3" width="168">
                                        </el-table-column>
                                        <el-table-column prop="sjoint4" label="关节4" width="168">
                                        </el-table-column>
                                        <el-table-column prop="sjoint5" label="关节5" width="163">
                                        </el-table-column>
                                        <el-table-column prop="sjoint6" label="关节6" width="165">
                                        </el-table-column>
                                        <el-table-column prop="createTime" label="创建时间" width="170">
                                        </el-table-column>
                                        <el-table-column label="操作" width="200">
                                            <template slot-scope="scope">
                                                <el-button @click="del(scope.row)" type="danger" size="small">删除
                                                </el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-main>
                                <el-footer>
                                    <el-pagination class="pagination" background layout="prev, pager, next,jumper,total"
                                        @current-change="handlepagechange" :total="pagination.total"
                                        :page-size="pagination.pageSize" :current-page="pagination.currentpage">
                                        <!--分别是前一页，当前页面,下一个,跳转布局 总数 页面大小 当前也-->
                                    </el-pagination>
                                </el-footer>
                            </el-container>
                        </el-container>
                    </div>
                </el-row>
                <el-row style="margin-top:20px">
                    <div class="grid-content bg-purple">
                        <el-container style="height: 400px;padding-right: 10px;">
                            <el-aside width="100px" style="border: 4px solid #909399;">
                                <div style="writing-mode: vertical-lr;font-size: 30px;
                                padding-left: 21px;padding-top: 120px;">
                                    扭矩数据</div>
                            </el-aside>
                            <el-container style="border: 2px solid #909399;">
                                <el-header>
                                    <el-form :inline="true" :model="formInline" class="user-search">
                                        <el-form-item label="搜索：">
                                            <el-input size="small" v-model="formInline.machineNo" placeholder="输入终端号">
                                            </el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button size="small" type="primary" icon="el-icon-search"
                                                @click="search">搜索
                                            </el-button>
                                        </el-form-item>
                                    </el-form>
                                </el-header>
                                <el-main>
                                    <el-table :data="tableData" border style="width: 100%;max-height: 270px;">
                                        <el-table-column fixed prop="id" label="编号-动态数据" width="100">
                                        </el-table-column>
                                        <el-table-column prop="xmlStr" label="装配批次" width="160">
                                        </el-table-column>
                                        <el-table-column prop="sjoint2" label="关节1" width="160">
                                        </el-table-column>
                                        <el-table-column prop="sjoint2" label="关节2" width="168">
                                        </el-table-column>
                                        <el-table-column prop="sjoint3" label="关节3" width="168">
                                        </el-table-column>
                                        <el-table-column prop="sjoint4" label="关节4" width="168">
                                        </el-table-column>
                                        <el-table-column prop="sjoint5" label="关节5" width="163">
                                        </el-table-column>
                                        <el-table-column prop="sjoint6" label="关节6" width="165">
                                        </el-table-column>
                                        <el-table-column prop="createTime" label="创建时间" width="170">
                                        </el-table-column>
                                        <el-table-column label="操作" width="200">
                                            <template slot-scope="scope">
                                                <el-button @click="del(scope.row)" type="danger" size="small">删除
                                                </el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-main>
                                <el-footer>
                                    <el-pagination class="pagination" background layout="prev, pager, next,jumper,total"
                                        @current-change="handlepagechange" :total="pagination.total"
                                        :page-size="pagination.pageSize" :current-page="pagination.currentpage">
                                        <!--分别是前一页，当前页面,下一个,跳转布局 总数 页面大小 当前也-->
                                    </el-pagination>
                                </el-footer>
                            </el-container>
                        </el-container>

                    </div>
                </el-row>
                <el-row style="margin-top:20px;padding-left: 10px;">
                    <el-button type="primary" round>摄像头数据</el-button>
                    <el-button type="primary" round>扭矩数据</el-button>
                    <el-button type="primary" round>夹取力数据</el-button>
                    <el-button type="warning" round>搬运机械人数据</el-button>
                    <el-button type="warning" round>拧紧机械人数据</el-button>
                </el-row>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-container style="height: 880px;padding-right: 10px;">
                        <el-aside width="100px" style="border: 4px solid #909399;">
                            <div style="writing-mode: vertical-lr;font-size: 30px;
                                padding-left: 21px;padding-top: 270px;">
                                搬运机器人数据</div>
                        </el-aside>
                        <el-container style="border: 2px solid #909399;">
                            <el-header>
                                <el-form :inline="true" :model="formInline" class="user-search">
                                    <el-form-item label="搜索：">
                                        <el-input size="small" v-model="formInline.machineNo" placeholder="输入终端号">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索
                                        </el-button>
                                    </el-form-item>
                                </el-form>
                            </el-header>
                            <el-main>
                                <el-table :data="tableData" border style="width: 100%;max-height: 720px;">
                                    <el-table-column fixed prop="id" label="编号-动态数据" width="100">
                                    </el-table-column>
                                    <el-table-column prop="xmlStr" label="装配批次" width="160">
                                    </el-table-column>
                                    <el-table-column prop="sjoint2" label="关节1" width="160">
                                    </el-table-column>
                                    <el-table-column prop="sjoint2" label="关节2" width="168">
                                    </el-table-column>
                                    <el-table-column prop="sjoint3" label="关节3" width="168">
                                    </el-table-column>
                                    <el-table-column prop="sjoint4" label="关节4" width="168">
                                    </el-table-column>
                                    <el-table-column prop="sjoint5" label="关节5" width="163">
                                    </el-table-column>
                                    <el-table-column prop="sjoint6" label="关节6" width="165">
                                    </el-table-column>
                                    <el-table-column prop="createTime" label="创建时间" width="170">
                                    </el-table-column>
                                    <el-table-column label="操作" width="200">
                                        <template slot-scope="scope">
                                            <el-button @click="del(scope.row)" type="danger" size="small">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-main>
                            <el-footer>
                                <el-pagination class="pagination" background layout="prev, pager, next,jumper,total"
                                    @current-change="handlepagechange" :total="pagination.total"
                                    :page-size="pagination.pageSize" :current-page="pagination.currentpage">
                                    <!--分别是前一页，当前页面,下一个,跳转布局 总数 页面大小 当前也-->
                                </el-pagination>
                            </el-footer>
                        </el-container>
                    </el-container>

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
            tableData: [],
            total: 0, // 总记录数
            current: 1, // 页码
            limit: 10, // 每页记录数
            pages: '0', //总页码数
            formInline: {
                page: 1,
                limit: 10,
                varLable: '',
                varName: '',
                token: localStorage.getItem('logintoken')
            },
            pagination: {
                currentpage: 1,
                pageSize: 10,
                total: 0,
            }
        }
    },
    methods: {
        handlepagechange(currentPage) {
            this.pagination.currentpage = currentPage;//传入参数变成当前页面 在调取查询操作
            this.getpage();
        },
        del(row) {
            let _this = this;
            this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$axios.post("http://localhost:8080/deleteById/" + row.id).then(function (response) {
                    console.log(response)
                    if (response.data == 1) {
                        location.reload();
                    } else {
                        _this.$message({
                            showClose: true,
                            message: '删除信息失败!',
                            type: 'danger'
                        });
                    }
                })
            })
        },
        edit(row) {
            this.$router.push("/edit?id=" + row.id);
        },
        getData() {
            let _this = this;
            this.$axios.get("http://localhost:8080/oriMsg").then(function (response) {
                _this.tableData = response.data;
            });
        },
        getpage() {
            let this1 = this;
            /**
             * 组织参数然后传递url
             */
            this.$axios.get("http://localhost:8080/getOriMsgByPage/" + this1.pagination.currentpage + '/' + this1.pagination.pageSize).then((res) => {
                this1.pagination.pageSize = res.data.size;
                this1.pagination.total = res.data.total;//记录总数 前端loyout中展示
                console.log(res);
                this1.pagination.currentpage = res.data.current;//重新经行赋值
                this1.tableData = res.data.records;//把后端返回的记录给数组
            })
        }
    },

    created() {
        this.getpage();
        // this.getData();
    }
}
</script>

<style scoped>

</style>
