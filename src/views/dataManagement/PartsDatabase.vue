<template>
    <div>
        <el-row style="margin-bottom: 50px;margin-top: 10px;">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card :body-style="{ padding: '10px' }" style="padding-top: 100px;">
                        <img src="../../../static/rxjt.png" class="image">
                        <div style="padding: 14px;">
                            <span>柔性接头</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <router-link to="/dataManagement/rxjtManagement">
                                    <el-button type="text" class="button">查看零部件</el-button>
                                </router-link>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <el-card :body-style="{ padding: '10px' }" style="padding-top: 87px;">
                        <img src="../../../static/gdt.png" class="image">
                        <div style="padding: 14px;">
                            <span>固定体</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">查看零部件</el-button>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card :body-style="{ padding: '10px' }">
                        <img src="../../../static/kzd.png" class="image"
                            style="width:250px;height: 262px;padding-left: 150px;">
                        <div style="padding: 14px;">
                            <span>扩张段</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">查看零部件</el-button>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card :body-style="{ padding: '10px' }">
                        <img src="../../../static/bhgd.png" class="image">
                        <div style="padding: 14px;">
                            <span>保护工段</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">查看零部件</el-button>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <el-card :body-style="{ padding: '10px' }">
                        <img src="../../../static/jtfrh.png" class="image" style="height: 330px;">
                        <div style="padding: 14px;">
                            <span>接头防热环</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">查看零部件</el-button>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card :body-style="{ padding: '10px' }" style="padding-top: 146px;">
                        <img src="../../../static/hc.png" class="image" style="height: 182px;">
                        <div style="padding: 14px;">
                            <span>HC组件</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">查看零部件</el-button>
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
            tableData: [],
            total: 0, // 总记录数
            current: 1, // 页码
            limit: 10, // 每页记录数
            pages: '0', //总页码数
            formInline: {
                page: 1,
                limit: 10,
                varLable: '',
                varName: ''
            }
        }
    },
    methods: {
    },

    created() {

    }
}
</script>

<style>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>