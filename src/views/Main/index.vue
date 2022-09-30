<script setup lang="ts">
import SongItemCom from '../../components/song/SongItem.vue'
import { SheetItem } from '../../libs/aside'
import { SongItem  } from '../../libs/song'
import { useState } from '../../utils/store'
import { useRoute, useRouter } from 'vue-router'
import { musicData, sheetList } from '../../utils/data'
import { ref, watch } from 'vue'

const emit = defineEmits(['editBrief'])
const route = useRoute()
const router = useRouter()

const { username, userImg } = useState(['username', 'userImg'])

// 监听路由参数的变化进行重新的渲染,因为用了动态路由所以会缓存
let id: number = parseInt(route.params.id as string)
let sheet = ref(sheetList.find(val => val.id === id) as SheetItem)
let musicList = ref(musicData.find(val => val.id === id)?.data as SongItem[])
watch(() => route.params, (newParams) => {
  let id: number = parseInt(route.params.id as string)
  sheet.value = sheetList.find(val => val.id === id) as SheetItem
  musicList.value = musicData.find(val => val.id === id)?.data as SongItem[]
})

function handleAddBrief () {
  router.push({
    path: '/edit',
    query: {
      id: sheet.value.id
    }
  })
}
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
        <div class="extra">
          <div class="num">
            <span class="music">
              歌曲 : <span class="number">{{ sheet.musicNum }}</span>
            </span>
            <span class="play">
              播放 : <span class="number">{{ sheet.playNum }}</span>
            </span>
          </div>
          <div class="brief" v-if="Object.keys(sheet).includes('brief')">
            <span class="prefix">简介 : </span>
            <span class="content" v-if="sheet.brief !== ''">{{ sheet.brief }}</span>
            <a href="javascript:;" class="edit" v-else @click="handleAddBrief">添加简介</a>
          </div>
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
          v-for="(item, index) of musicList"
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
  border: 1px solid #000;

  .header {
    display: flex;
    padding-left: 51px;
    padding: 20px 0px 0px 15px;
    box-sizing: border-box;

    .left {
      margin-right: 20px;
      flex: 0 0 150px;
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

      .extra {
        font-size: 14px;

        .num {
          margin: 10px 0px;
        }

        .number,
        .content {
          color: #666;
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