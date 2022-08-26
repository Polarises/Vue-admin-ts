<template>
  <el-row class="tac">
  <el-col :span="12">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#ffffff"
        style="width: 220px;height: calc(100vh - 59px)"
        router>
      <el-menu-item :index="item.path"  v-for="item in list" :key="item.path">
        <i class="el-icon-menu"></i>
        <span>{{item.meta.title}}</span>
      </el-menu-item>

    </el-menu>
  </el-col>
  </el-row>


</template>

<script lang="ts" setup>
  import {useRouter} from "vue-router";

  const router = useRouter()
  const list = router.getRoutes().filter((item) => {
    return item.meta.isShow
  })


</script>

<style scoped>

</style>
