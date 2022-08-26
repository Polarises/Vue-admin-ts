<template>
  <div class="common-layout">
    <TopNavBar/>

    <div class="main-container">
      <LeftSideBar/>
<!--      <div style="flex: 1;">-->
<!--        11-->
<!--        <router-view></router-view>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopNavBar from "@/components/TopNavBar.vue";
import LeftSideBar from "@/components/LeftSideBar.vue";

</script>

<style lang="scss">
.main-container{
  display: flex;
}
.el-menu{
  border-bottom: 0 !important;
}
</style>
