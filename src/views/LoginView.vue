<template>
  <div class="login-box">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
        class="login-area"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item >
        <el-button type="primary" class="loginBtn"
        >登录</el-button>
        <el-button class="loginBtn" >密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {Login} from "@/type/login";

export default defineComponent ({
  name: "LoginView",
  setup(){
    const data = reactive(
       new Login()
    )
    const rules={
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 6, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
          password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    }
    return {
      ...toRefs(data),rules
    }
  },
});
</script>

<style lang="scss" scoped>
.login-box{
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpg") no-repeat ;
  background-size:1920px;
  text-align: center;
  overflow: hidden;
  .login-area{
    width: 500px;
    margin: 200px auto;
    background-color: white;
    padding: 40px;
    border-radius: 20px;
  }
  .loginBtn{
   width: 48%;
  }
}



</style>
