<script setup lang="ts">
import SongItemCom from '../../components/song/SongItem.vue'

import { SheetItem } from '../../libs/aside'
import { SongItem  } from '../../libs/song'
import { useState } from '../../utils/store'
import instance from '../../network/index'

import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()

const { username, userImg, sheetList } = useState(['username', 'userImg', 'sheetList'])

let sheet = ref<SheetItem | any>({})
let musicList = ref<SongItem[]>([])

// 监听路由参数的变化进行重新的渲染,因为用了动态路由所以会缓存
function getInfo () {
  let id: number = parseInt(route.params.id as string)
  sheet.value = sheetList.value.find((val: any) => val.id === id)
  instance.get(`/songs?id=${id}`).then(res => {
    musicList.value = res.data.songList
  })
}

getInfo()

watch(() => route.params, getInfo)

function switchMusic (song: SongItem) {
  store.commit('switchSong', song)
  store.commit('switchSheet', musicList.value)
}

console.log(store.state)


// 跳转到编辑简历页面
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
        <img :src="musicList[0] ? musicList[0].img : ''" class="show" />
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
              <span class="prefix">歌曲 : </span>
              <span class="number">{{ sheet.musicNum }}</span>
            </span>
            <span class="play">
              <span class="prefix">播放 : </span>
              <span class="number">{{ sheet.playNum }}</span>
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
        <span class="title" style="width: 40.2%">标题</span>
        <span class="title" style="width: 19.5%;">歌手</span>
        <span class="album" style="width: 26%">专辑</span>
        <span class="time" style="width: 9%;">时间</span>
      </div>
      <div class="list">
        <SongItemCom
          :song="item"
          :key="index"
          v-for="(item, index) of musicList"
          :style="index % 2 ? {} : { 'background': '#9999994d' }"
          @dblclick.native="switchMusic(item  )"
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
@import '/@assets/scss/_handle.scss';
.main {
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  @include background_color("background_middle");

  .header {
    display: flex;
    padding-left: 51px;
    padding: 20px 0px 0px 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #888;
    margin-bottom: 10px;

    .left {
      margin-right: 20px;
      flex: 0 0 150px;
      .show{
        border-radius: 5px;
      }
    }

    .right {
      .base {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .user {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-right: 10px;
          font-size: 12px;
          color: #23a9f2;
          .img {
            width: 20px;
            border-radius: 50%;
            margin-right: 8px;
          }
        }
        .time {
          font-size: 12px;
          color: #666;
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
        .title {
          font-size: 20px;
          font-weight: bold;
          color: #373737;
          @include font_color("font_some")
        }
      }

      .extra {
        font-size: 14px;

        .prefix {
          @include font_color("font_some")
        }

        .music {
          margin-right: 15px;
        }

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