<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore, mapState } from 'vuex'

const store = useStore();
const storeStateFns = mapState(['userImg', 'username'])
const storeState = {} as any
Object.keys(storeStateFns).forEach(Fnkey => {
  const fn = storeStateFns[Fnkey].bind({ $store: store })
  storeState[Fnkey] = computed(fn)
})
const { userImg, username } = storeState

const count = ref<number>(1)
const double = computed(() => count.value * 2)
</script>

<template>
  <div class="header">
    <div class="logo">
      <i class="iconfont icon-yinle"></i>
      <span>网易云音乐</span>
    </div>
    <div class="search">
      <input type="text" class="input" />
    </div>
    <div class="user">
      <span class="user-img">
        <img :src="userImg" alt="" class="img" />
      </span>
      <span class="user-name">{{ username }}</span>
    </div>
    <div class="size">
      <span class="small" title="最小化">
        <i class="iconfont icon-zuixiaohua"></i>
      </span>
      <span class="switch">
        <i class="iconfont icon-24gl-minimize"></i>
      </span>
      <span class="close" title="关闭">
        <i class="iconfont icon-guanbi"></i>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #000;

  .search {
    margin-left: 40px;

    .input {
      border: 1px solid #333;
      height: 30px;
      padding: 6px 4px;
      box-sizing: border-box;
    }

  }

  .user {
    position: absolute;
    right: 180px;
    display: flex;
    align-items: center;

    .user-img {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .size {
    position: absolute;
    right: 20px;
    display: flex;
    justify-content: space-between;
    width: 80px;
  }
}
</style>