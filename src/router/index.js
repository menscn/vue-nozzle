// 导入组件
import Vue from 'vue';
import Router from 'vue-router';
// 登录
import login from '@/views/login';
// 首页
import index from '@/views/index';
/**
 * 基础菜单
 */
// 数据管理
import PartsDatabase from '@/views/dataManagement/PartsDatabase';
import StaticData from '@/views/dataManagement/StaticData';
import DynamicData from '@/views/dataManagement/DynamicData';
import RxjtManagement from '@/views/dataManagement/rxjtManagement';
// 孪生系统
import DigitalTwinSystem from '@/views/physicalAssemblyUnit/DigitalTwinSystem';
import DeviceInformation from '@/views/physicalAssemblyUnit/DeviceInformation';
// 装配误差分析
import AssemblyErrorAnalysis from '@/views/AssemblyError/AssemblyErrorAnalysis';
// 装配质量
import Control from '@/views/assemblyQuality/Control';
// 启用路由
Vue.use(Router);

// 导出路由 
export default new Router({
    routes: [{
        path: '/',
        name: '',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
        path: '/login',
        name: '登录',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
        path: '/index',
        name: '首页',
        component: index,
        iconCls: 'el-icon-tickets',
        children: [{
            path: '/physicalAssemblyUnit/Dts',
            name: '数字孪生系统',
            component: DigitalTwinSystem,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/physicalAssemblyUnit/DeviceInformation',
            name: '设备管理信息',
            component: DeviceInformation,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/dataManagement/DynamicData',
            name: '动态数据管理',
            component: DynamicData,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/dataManagement/StaticData',
            name: '静态数据管理',
            component: StaticData,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/dataManagement/PartsDatabase',
            name: '零部件数据库管理',
            component: PartsDatabase,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/dataManagement/rxjtManagement',
            name: '柔性接头管理',
            component: RxjtManagement,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/assemblyErrorAnalysis',
            name: '装配误差管理',
            component: AssemblyErrorAnalysis,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/assemblyQuality/control',
            name: '装配误差管理',
            component: Control,
            meta: {
                requireAuth: true
            }
        }]
    }]
})