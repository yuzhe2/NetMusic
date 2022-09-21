<script setup lang="ts">
import { useState } from '../../utils/store'

const { song } = useState(['song'])

const emit = defineEmits(['closeDetail'])
function closeDetail () {
  emit('closeDetail')
}
</script>

<template>
  <div class="detail">
    1111111
    <button @click="closeDetail">关闭</button>
  </div>
</template>

<style scoped lang="scss">
.detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  color: #fff;
}
</style>