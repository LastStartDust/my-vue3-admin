<template>
  <div style="padding: 30px">
    <router-view v-slot="{ Component }">
      <transition>
        <el-alert :closable="false" title="menu 1">
          <component :is="Component" />
        </el-alert>
      </transition>
    </router-view>
  </div>
</template>
