<template>
  <div class="login-box">
    <el-form
        ref="ruleFormRef"
        :model="data"
        status-icon
        :rules="rules"
        label-width="80px"
        class="login-area"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="data.username" type="username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="data.password"
            type="password"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item >
        <el-button type="primary" class="loginBtn" @click="submitForm(ruleFormRef)"
        >登录</el-button>
        <el-button class="loginBtn" @click="resetForm()" >密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {LoginData} from "@/type/login";
import {reactive,ref} from "vue";
import {login} from '@/request/api'
import {useRouter} from "vue-router";
import type { FormInstance } from 'element-plus'

const router = useRouter()
const data = reactive(new LoginData)
// 表单输入规则
const rules = {
  username: [
    {
      required: true,  //是否必须字段
      message: "请输入用户名",   // 触发的提示信息
      trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
    },
    {
      min: 3,   // 最小字符书
      max: 5,   // 最大字符数
      message: "用户名长度需要在3-5个字符之间",  // 触发的提示信息
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,  //是否必须字段
      message: "请输入密码",   // 触发的提示信息
      trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
    },
    {
      min: 3,   // 最小字符书
      max: 6,   // 最大字符数
      message: "密码长度需要在3-5个字符之间",  // 触发的提示信息
      trigger: "blur"
    }
  ]
}
const ruleFormRef = ref<FormInstance>()
const submitForm = (formEl: FormInstance | undefined) => {
  // 对表单内容进行验证
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      login(data.ruleForm).then((res) => {
        console.log(res)
        // 将token进行保存
        localStorage.setItem("token", res.data.token)
        // 跳转页面
        router.push('/')
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const resetForm = () => {
  data.ruleForm.username = ""
  data.ruleForm.password = ""
}

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
