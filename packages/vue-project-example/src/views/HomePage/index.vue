<!------------------------------------------------------
 ¦ 文件名
 ¦ 文件描述
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-03-22 15:59:59
 ¦ Version: 1.0
 ¦ FilePath: src\views\Home\index.vue
 ¦----------------------------------------------------->

<template>
  <div class="w-full h-full">
    {{ example.str }}
  </div>
</template>

<script setup>
import { example } from '@df996/common-example'

/**
 * 组件选项
 */
defineOptions({
  name: 'ComponentName'
})
</script>
