<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { sheetList } from '../../utils/data'

const route = useRoute()

let sheetName = ref<string>('')
let brief = ref<string>('')

let id = parseInt(route.query.id as string)
sheetName.value = sheetList.find(val => val.id === id)?.title as string
brief.value = sheetList.find(val => val.id === id)?.brief as string

function handleConfirm () {
  handleCancel()
}

function handleCancel () {
  history.back()
}
</script>

<template>
  <div class="edit">
    <p class="header">编辑歌单信息</p>
    <div class="form">
      <div class="name">
        <span class="prefix">歌单名：</span>
        <input type="text" class="input" v-model="sheetName" />
      </div>
      <div class="brief">
        <span class="prefix">简介：</span>
        <textarea id="textarea" v-model="brief"></textarea>
      </div>
    </div>
    <div class="footer">
      <button class="confirm" @click="handleConfirm">保存</button>
      <button class="cancel"  @click="handleCancel">取消</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.edit {
  padding: 20px;

  .header {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .form {

    .name {
      margin-bottom: 20px;
      .input {
        border: 1px solid #666;
      }
    }

    .prefix {
      display: inline-block;
      width: 59px;
      text-align: right;
      font-size: 14px;
    }

  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    margin-left: 60px;
    margin-top: 20px;

    .confirm {
      padding: 5px 20px;
      border-radius: 28px;
      background-color: #a52a2a;
      color: #fff;
    }

    .cancel {
      padding: 5px 20px;
      border-radius: 28px;
    }
  }
}
</style>