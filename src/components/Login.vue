<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像-->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!--表单区域
            https://element-plus.gitee.io/zh-CN/-->
            <el-form ref='loginFormRef' :model="loginForm" class="login_form" label-width="0px">
                <!--用户-->
                <el-form-item>
                    <el-input v-model="loginForm.username" placeholder="用户名"/>
                </el-form-item>
                <!--密码-->
                <el-form-item>
                    <el-input v-model="loginForm.password" type="password" placeholder="密码"/>
                </el-form-item>
                <!--按钮-->
                <el-form-item class="button">
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { method } from 'lodash';

export default {
    data () {
        return{
            loginForm: {
                username: 'susen',
                password: '123456'
            }
        }
    },
    methods: {
        login() {
            this.$refs.loginFormRef.validate(valid => {
                if (!valid) return;
                this.$message.success('登陆成功');
                this.$router.push('/home');
            })
        }
    }
}
</script>


<style scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 5px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;

    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}
img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}
.login_form{
    position: absolute;
    bottom: 0%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.button{
    display: flex;
    justify-content: flex-end;
}
</style>
