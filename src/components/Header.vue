<script>
import { watch } from "vue";
import { ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const headArr = ["", "task", "vip", "member"];
    const showArr = ["Home", "Task", "VIP", "Member"];
    const headName = ref("");
    const idx = ref(0);
    watch(
      () => route.path,
      () => {
        headArr.forEach((item, index) => {
          const rp = route.path.substr(1);
          //   console.log("routeName:", rp);
          if (rp === item) {
            idx.value = index;
            // console.log("ID:", headArr[idx.value]);
          }
        });
      }
    );
    headName.value = showArr[idx.value];
    return { headName };
  },
};
</script>
<template>
  <div id="header">
      <h1> VIP </h1>
  </div>
</template>

<style lang="scss" scoped>
#header{
    width: 100%;
    height: 44px;
    > h1{
        line-height: 44px;
        text-align: center;
        font-family: arial;
        font-size: 16px;
        font-weight: normal;
        color:#241332;
    }
}
</style>
