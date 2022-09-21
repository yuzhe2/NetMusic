<script setup lang="ts">
import SongItemCom from '../../components/song/SongItem.vue'
import { SheetItem } from '../../libs/aside'
import { SongItem  } from '../../libs/song'
import { useState } from '../../utils/store'

defineProps<{
  sheet: SheetItem,
  musicData: SongItem[]
}>()

const { username, userImg } = useState(['username', 'userImg'])
</script>

<template>
  <div class="main">
    <div class="header">
      <div class="left">
        <img :src="userImg" class="show" />
      </div>
      <div class="right">
        <div class="name">
          <span class="symbol">歌单</span>
          <span class="title">{{ sheet.title }}</span>
        </div>
        <div class="base">
          <div class="user">
            <img :src="userImg" class="img" />
            <span class="name">{{ username }}</span>
          </div>
          <span class="time">{{ sheet.createTime }}创建</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <span class="operate" style="width: 44px;">操作</span>
        <span class="title" style="width: 300px;">标题</span>
        <span class="title" style="width: 150px;">歌手</span>
        <span class="album" style="width: 200px;">专辑</span>
        <span class="time" style="width: 100px;">时间</span>
      </div>
      <div class="list">
        <SongItemCom
          :song="item"
          :key="index"
          v-for="(item, index) of musicData"
        >
          <template v-slot:prefix>
            <span style="width: 40px;">{{ index }}</span>
          </template>
        </SongItemCom>
      </div>
    </div>  
  </div>
</template>

<style scoped lang="scss">
.main {
  margin-left: 200px;
  border: 1px solid #000;

  .header {
    display: flex;
    padding-left: 51px;
    padding: 20px 0px 0px 15px;
    box-sizing: border-box;

    .left {
      width: 150px;
      margin-right: 20px;
    }

    .right {
      .base {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .user {
          display: flex;
          width: 90px;
          align-items: center;
          justify-content: space-between;
          margin-right: 10px;
          font-size: 12px;
          color: #076161;
          .img {
            width: 20px;
            border-radius: 50%;
          }
        }
        .time {
          font-size: 12px;
          color: #333;
        }
      }
      .name {
        display: flex;
        align-items: center;
        .symbol {
          border: 1px solid #f00;
          border-radius: 4px;
          color: #f00;
          font-size: 12px;
          padding: 0px 4px;
          margin-right: 8px;
        }
      }

    }
  }

  .container {
    .header {
      padding-left: 51px;
    }
  }
}
</style>