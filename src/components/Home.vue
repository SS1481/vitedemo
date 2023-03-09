<template>
    <el-container class="home_container">
        <!--头部-->
      <el-header>
        <div>
            <img id="logo" src="../assets/logo.png" alt="">
            <span margin-left="15px">教育信息归档</span>
        </div>
        <el-button type="info" @click="logout">
            退出
        </el-button>
    </el-header>
      <!--页面主体-->
      <el-container>
        <!--侧边栏-->
        <el-aside width="200px">
            <!--菜单栏-->
            <el-menu
            active-text-color="#ffd04b"
            background-color="#333744"
            text-color="#fff"
            :router="true">
            <el-menu-item index="documents">
                <el-icon><icon-menu /></el-icon>
                <span>文件管理</span>
            </el-menu-item>
            <el-menu-item index="2" disabled>
                <el-icon><document /></el-icon>
                <span>以后可能有用</span>
                </el-menu-item>
            <el-menu-item index="3">
                <el-icon><setting /></el-icon>
                <span>用户管理</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <!--左侧主体-->
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
    methods: {
        logout () {
            //window.sessionStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.home_container{
    height: 100%;
}
.el-header{
    color: #EAEDF1;
    background-color: #373d41;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-aside{
    background-color: #333744;
}
.el-main{
    background-color: #EAEDF1;
}
#logo{
    height: 50px;
    width: 50px;
}
</style>
