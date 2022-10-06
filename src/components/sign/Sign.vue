<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import instance from '../../network/index'

const emit = defineEmits(['closeSign'])
const store = useStore()

const phone = ref<string>('')
const ident = ref<string>('')
const disabled = ref<boolean>(false)
const num = ref<number>(59)
const identNum = ref<number>()

// 验证手机号格式
function checkTelephone(telephone: string) {
  var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if (!reg.test(telephone)) {
    return false
  } else {
    return true
  }
}

// 定时
function timing () {
  let timer = setInterval(() => {
    num.value--
  }, 1000)
  setTimeout(() => {
    disabled.value = false
    num.value = 59
    clearInterval(timer)
  }, 60 * 1000)
}

// 发送验证码
function getIdentNum () {
  let flag = checkTelephone(phone.value)
  if (flag) {
    disabled.value = true
    timing()
    instance.post('/smcode', {
      phone: phone.value
    }).then(res => {
      console.log('验证码: ' + res.data)
      identNum.value = res.data
    })
  } else {
    alert('手机号格式错误')
  }
}

// 登录
async function handleLogin () {
  if (!identNum.value) {
    alert('请输入验证码')
    return
  }
  if (parseInt(ident.value) == identNum.value) {
    const { data } = await instance.post('/user', { phone: phone.value })
    store.commit('changeLoginStatus', true)
    store.commit('updateSheetList', data.sheetList)
    emit('closeSign')
  } else {
    alert('验证码错误')
  }
}


</script>

<template>
  <div class="register">
    <i class="iconfont icon-zanting close" @click="emit('closeSign')"></i>
    <div class="wrap">
      <input type="text" class="phone" placeholder="请输入手机号" v-model="phone" />
      <div class="ident">
        <input type="text" class="input" placeholder="请输入验证码" v-model="ident" />
        <button class="btn" @click="getIdentNum" :disabled="disabled">
          <span v-if="!disabled">获取验证码</span>
          <span v-else>{{ `等待${num}秒` }}</span>
        </button>
      </div>
    </div>
    <div class="footer">
      <button class="btn" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.register {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 20px;
  padding-top: 30px;
  width: 220px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9999;

  .close {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 16px;
    color: #000;
  }

  .wrap {
    margin-bottom: 10px;
    .phone {
      width: 100%;
      height: 32px;
      margin-bottom: 10px;
      border: 1px solid #cdcdcd;
      box-sizing: border-box;
    }
    .ident {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .input {
        width: 130px;
        height: 32px;
        border: 1px solid #cdcdcd;
        box-sizing: border-box;
      }
      .btn {
        border: 1px solid #cdcdcd;
      }
    }
  }

  .footer {
    .btn {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background-color: #3187cb;
      color: #fff;
      border-radius: 4px;
    }
  }
}
</style>