<template>
    <div>
        <!--面包屑-->
        <el-breadcrumb :separator-icon="ArrowRight" class="el-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/documents' }">文件管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!--卡片视图-->
        <el-card>
        <el-row>
            <!--卡片搜索-->
            <el-col :span="10">
            <el-input
            v-model="input3"
            placeholder="搜索"
            class="input-with-select">
            <template #prepend>
                <el-select v-model="select" placeholder="格式" style="width: 115px">
                <el-option label=".word" value="1" />
                <el-option label=".PDF" value="2" />
                <el-option label=".什么格式" value="3" />
                </el-select>
            </template>
            <template #append>
                <el-button :icon="Search" />
            </template>
            </el-input>
            </el-col>
            <!--添加按钮-->
            <el-col :span="2">
                <el-button type="primary">添加</el-button>
            </el-col>
        </el-row>
            <!--表格-->
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180" />
                <el-table-column prop="name" label="文件名" width="600" />
                <el-table-column prop="address" label="操作">
                    <el-button link type="primary" size="small" @click="handleClick">
                        浏览
                    </el-button>
                    <el-button link type="danger" size="small">
                        删除
                    </el-button>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
   data () {
    return {
        tableData: [{
            date: '2077-13-32',
            name: '《2077年选课通知》',
            },
        ]
    }
   }
}
</script>

<style scoped>

</style>