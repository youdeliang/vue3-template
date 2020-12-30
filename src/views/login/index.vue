<template>
  <div class="login-container flex-center">
    <div class="login-form">
      <div class="login-form__left">
        <h1>VV组织业务系统</h1>
        <h1>统一身份认证服务</h1>
      </div>
      <div class="login-form__right">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          size="small"
          autoComplete="on"
          labelPosition="left"
        >
          <el-form-item class="login-form_title">
            <h1>SSO</h1>
          </el-form-item>

          <el-form-item prop="name">
            <el-input
              ref="name"
              v-model="loginForm.name"
              placeholder="账号"
              name="name"
              type="text"
              tabindex="1"
              autoComplete="off"
            />
          </el-form-item>

          <el-form-item prop="password" class="mb-50">
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="密码"
              name="password"
              tabindex="2"
              autoComplete="on"
              @keyup.enter="handleLogin"
            />
          </el-form-item>

          <el-button
            :loading="loading"
            class="login-btn"
            type="primary"
            size="small"
            @click.prevent="handleLogin"
          >
            <span class="login-text">登&nbsp;&nbsp;录</span>
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // import { ModuleType } from '@/store/types'
  import { useStore } from '@/store'
  export default {
    name: 'Login',
    setup() {
      const store = useStore()
      store.dispatch('refreshToken', 100)
      console.log('user :>> ', store.getters.counter)
    }
    // data() {
    //   const validatePassword = (rule, value, cb) => {
    //     if (value.length < 6) {
    //       cb(new Error('密码不能少于六位'))
    //     } else {
    //       cb()
    //     }
    //   }
    //   return {
    //     loginForm: {
    //       name: '',
    //       password: ''
    //     },
    //     loginRules: {
    //       name: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
    //       password: [{ required: true, trigger: 'blur', validator: validatePassword }]
    //     },
    //     loading: false,
    //     passwordType: 'password',
    //     redirect: undefined
    //   }
    // },
    // watch: {
    //   $route: {
    //     handler: function (route) {
    //       this.redirect = route.query && route.query.redirect
    //     },
    //     immediate: true
    //   }
    // },
    // methods: {
    //   handleLogin() {
    //     this.$refs.loginForm.validate((valid) => {
    //       if (valid) {
    //         this.loading = true

    //         const { name, password } = this.loginForm
    //         const postData = {
    //           name: name.trim(),
    //           password
    //         }

    //         this.$store
    //           .dispatch('user/login', postData)
    //           .then(() => {
    //             this.loading = false
    //             this.$router.push({ path: '/' })
    //             // if (name === 'preview') {
    //             //   this.$router.push({ path: '/' })
    //             // } else {
    //             //   // this.$router.push({ path: this.redirect || '/' })
    //             //   this.$router.go()
    //             // }
    //           })
    //           .catch(() => {
    //             this.loading = false
    //           })
    //       } else {
    //         return false
    //       }
    //     })
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  $light_blue: #66b1ff;
  $font_gray: #b3b3b3;
  $font_family: pingfangsc-medium, pingfang sc;

  .login-container {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    font-family: $font_family;
    background: url('~@/assets/images/login/bg.png');
    background-color: $bg;
    background-repeat: no-repeat;
    background-size: cover;

    .login-form {
      position: relative;
      display: flex;
      width: 920px;
      height: 500px;
      background: #fff;
      border-radius: 4px;
      justify-content: flex-start;

      &__left {
        display: flex;
        height: 100%;
        // background-image: url('~@/assets/images/login/form-left.png');
        background-color: rgba(0, 0, 0, 0.745098039215686);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        flex-basis: 460px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
          margin-top: 0;
          color: #fff;
          text-align: center;
        }
      }

      &__right {
        display: flex;
        margin-top: 60px;
        flex: 1;
        justify-content: center;
        align-items: flex-start;

        ::v-deep .el-form {
          // flex: .6;
          flex-basis: 266px;
          // padding-left: 30px;
        }

        .login-form_title {
          margin-bottom: 20px;

          h1 {
            margin-top: 0;
            font-size: 30px;
            color: rgba(0, 0, 0, 0.745098039215686);
            text-align: center;

            &::before {
              display: flex;
              height: 100px;
              text-align: center;
              background-image: url('~@/assets/images/logo.png');
              background-position: center center;
              // margin-bottom: 5px;
              background-repeat: no-repeat;
              background-size: 80px 80px;
              content: '';
              justify-content: center;
            }
          }
        }

        .login-form-item_title {
          margin-bottom: 5px;
          color: $font_gray;
        }
      }
    }

    .login-btn {
      width: 100%;
      text-align: center;
      background: #395bb2;
      border: 0;

      &.is-loading {
        border: 0;
      }
    }
  }
</style>
