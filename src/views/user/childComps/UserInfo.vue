<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <!-- <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg> -->
        <img class="user" src="~assets/img/user/user.png" alt="">
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span class="phoneimg" >
            <!-- <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg> -->
            <img src="~assets/img/user/phone.png" alt="">
          </span>
          <slot class="phone" name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <!-- <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg> -->
    </a>
  </div>
</template>

<script>
	export default {
		name: "UserInfo"
	}
</script>

<style scoped>
  #user-info {
    background-color: #ff8198;
    padding: 20px 15px;
    margin-top: -5px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    /* float: right;
    margin-right: 50px; */
    display: inline-block;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    position: relative;
    left: 20px;
    top: -10px;
  }

  #user-info  .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    font-weight: 300;
  }

  #user-info  .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }

  .user {
    width: 60px;
    height: 60px;
  }
  .login-info {
    margin-top: -30px;
  }
  .phoneimg img{
    width: 20px;
    height: 18px;
  }
  .phone {
    vertical-align:middle
  }
  .phoneimg {
    vertical-align:middle
  }
</style>
