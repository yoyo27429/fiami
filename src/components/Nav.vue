<script>
export default {};
</script>

<template>
  <div id="nav">
    <router-link to="/">
      <img src="@/assets/image/homeIco.svg" alt="" />
      <p>首頁</p>
    </router-link>
    <router-link to="/task"
      ><img src="@/assets/image/taskIco.svg" alt="" />
      <p>任務</p>
    </router-link>
    <router-link to="/vip" class="active"
      ><img src="@/assets/image/fame.svg" alt="" />
      <p>VIP</p>
    </router-link>
    <router-link to="/member"
      ><img src="@/assets/image/homeIco.svg" alt="" />
      <p>我的</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 64px;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  z-index: 999999;
  > a {
    display: block;
    width: 25%;
    height: 64px;
    float: left;
    text-decoration: none;
    font-family: Arial;
    font-size: 12px;
    color:#717171;
    text-align: center;
    line-height: 32px;
    margin-top: 16px;
    >img{
        line-height: 0px;
    }
    >p{
        margin: 0px;
        line-height: 0px;
    }
    &.active{
        color:#8A56AC;
    }
  }
}
</style>
