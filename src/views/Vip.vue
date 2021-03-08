<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    const memberArr = reactive([
      {
        name: "普通",
        task: 3,
        price: 10,
        img: require("../assets/image/normalMember.png"),
        date: "2020.08.11",
        medtal: require("../assets/image/goldenMed.svg"),
      },
      {
        name: "白銀",
        task: 10,
        price: 330,
        img: require("../assets/image/sliverMember.png"),
        date: "2020.08.11",
        medtal: require("../assets/image/goldenMed.svg"),
      },
      {
        name: "黃金",
        task: 19,
        price: 660,
        img: require("../assets/image/platMember.png"),
        date: "2020.08.11",
        medtal: require("../assets/image/platMed.svg"),
      },
      {
        name: "鉑金",
        task: 28,
        price: 990,
        img: require("../assets/image/goldenMember.png"),
        date: "2020.08.11",
        medtal: require("../assets/image/goldenMed.svg"),
      },
      {
        name: "鑽石",
        task: 99,
        price: 2990,
        img: require("../assets/image/diamondMember.png"),
        date: "2020.08.11",
        medtal: require("../assets/image/diamondMed.svg"),
      },
      {
        name: "榮耀",
        task: 228,
        price: 5940,
        img: require("../assets/image/honor.png"),
        date: "2020.08.11",
        medtal: require("../assets/image/goldenMed.svg"),
      },
      {
        name: "尊榮",
        task: 338,
        price: 9899,
        img: require("../assets/image/bestHonor.png"),
        date: "2020.08.11",
        medtal: require("../assets/image/bestMed.svg"),
      },
    ]);
    const currentMember = reactive({
      name: "普通",
      task: 3,
      price: 10,
      img: require("../assets/image/normalMember.png"),
      date: "2020.08.11",
      medtal: require("../assets/image/goldenMed.svg"),
    });
    const isOpen = ref(99);
    const isAlert = ref(false);
    const tempMember = reactive([]);
    const tempPrice = ref(0);
    const tempName = ref("");
    const handSubmit = () => {
      isAlert.value = false;
    };
    const handCancle = () => {
      isAlert.value = false;
    };
    const handClick = (idx) => {
      isAlert.value = !isAlert.value;
      tempMember[0] = memberArr[idx];
      tempPrice.value = tempMember[0].price;
      tempName.value = tempMember[0].name;
    };
    const handOpen = (idx) => {
      if (idx === isOpen.value) {
        //   重複點擊時要收回
        isOpen.value = 999999;
      } else {
        //   點擊的index
        isOpen.value = idx;
      }
    };
    return {
      memberArr,
      isOpen,
      handClick,
      handOpen,
      isAlert,
      tempMember,
      tempPrice,
      tempName,
      currentMember,
      handSubmit,
      handCancle,
    };
  },
};
</script>
<template>
  <div id="current" v-for="item in memberArr" :key="item.name" v-show="!isAlert">
    <img class="MemberBgc" :src="currentMember.img" alt="" />
    <img class="medtal" :src="currentMember.medtal" alt="" />
    <table>
      <tr>
        <td>
          <img class="memberHead" src="@/assets/image/headerIco.svg" alt="" />
        </td>
      </tr>
      <tr>
        <td>
          <h1 class="level">{{ currentMember.name }}會員</h1>
        </td>
      </tr>
      <tr>
        <td class="task">每日可領取{{ currentMember.task }}次任務</td>
      </tr>
      <tr>
        <td class="date">{{ currentMember.date }}止</td>
      </tr>
    </table>
  </div>
  <div id="list" v-show="!isAlert">
    <div
      :class="[
        'memberBox',
        { even: (index & 1) === 0 },
        { odd: (index & 1) != 0 },
        { active: isOpen === index },
      ]"
      v-for="(item, index) in memberArr"
      :key="item.name"
      @click="handOpen(index)"
      :style="{ zIndex: 10 - index }"
    >
      <img class="listBgi" :src="item.img" alt="" />
      <img class="medtal" :src="item.medtal" alt="" />
      <div class="smBox" :class="{ active: isOpen === index }">
        <p class="level">{{ item.name }}會員</p>
        <p class="task">每日可領取{{ item.task }}次任務</p>
      </div>
      <div class="smBox" :class="{ active: isOpen === index }">
        <p class="price">¥{{ item.price }}</p>
        <a class="submit" v-if="index === isOpen" @click="handClick(index)"
          >立即加值</a
        >
      </div>
    </div>
  </div>
  <div id="alert" v-show="isAlert">
    <div class="alertBox">
      <h1>提示</h1>
      <p>
        確定花費{{ tempPrice }}元<br />
        成為12個月的{{ tempName }}會員嗎？
      </p>
      <a class="submit btm" @click="handSubmit">確定</a>
      <a class="cancle btm" @click="handCancle">取消</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#current {
  width: 100%;
  height: 183px;
  background-color: #8a56ac;
  border-radius: 0px 0px 0px 64px;
  position: relative;
  z-index: 10000;
  .medtal {
    position: absolute;
    // top: 115px;
    bottom: 32px;
    left: 24px;
  }
  > .MemberBgc {
    height: 183px;
    opacity: 0.6;
    position: absolute;
    right: 0px;
    // z-index: 10000;
  }
  > table {
    // border: 1px solid #000;
    > tr {
      //   border: 1px solid #000;
      > td {
        &.date {
          text-align: center;
          font-family: "微軟正黑體";
          font-size: 16px;
          color: #fff;
          opacity: 0.72;
        }
      }
      & .memberHead {
        height: 60px;
        width: 60px;
        margin-top: 12px;
        margin-left: 158px;
        margin-right: 157px;
        float: left;
      }
    }
  }
}
#list {
  width: 100%;
  margin-bottom: 64px;
  > .odd {
    background-color: #352641;
  }
  > .even {
    background-color: #241332;
  }
  .memberBox {
    width: 100%;
    height: 183px;
    position: relative;
    border-radius: 0px 0px 0px 64px;
    margin-top: -64px;
    &.active {
      // margin-top: 0px;
      padding-top: 64px;
      height: 147px;
    }
    > .smBox {
      width: 50%;
      float: left;
      margin-top: 64px;
      min-height: 42px;
      &.active {
        margin-top: 32px;
      }
      //   position: absolute;
      //   bottom: 0;
      .price {
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 57px;
      }
      > a {
        &.submit {
          position: absolute;
          right: 30px;
          display: block;
          height: 40px;
          width: 100px;
          border-radius: 40px;
          background-color: #fff;
          color: #8a56ac;
          font-size: 16px;
          line-height: 40px;
          text-align: center;
        }
      }
    }
    > table {
      width: 80%;
      margin-left: 56px;
      padding-top: 33px;
      > tr {
        td {
          width: 50%;
          &.price {
            font-size: 20px;
            color: #ffffff;
            text-align: center;
          }
          > a {
            &.submit {
              position: absolute;
              right: 30px;
              display: block;
              height: 40px;
              width: 100px;
              border-radius: 40px;
              background-color: #fff;
              color: #8a56ac;
              font-size: 16px;
              line-height: 40px;
              text-align: center;
            }
          }
        }
      }
    }
    > .listBgi {
      position: absolute;
      width: 100%;
      right: 0;
      opacity: 0.2;
    }
    > .medtal {
      position: absolute;
      left: 24px;
      bottom: 37px;
    }
  }
}
.level {
  text-align: center;
  font-family: "微軟正黑體";
  font-size: 26px;
  color: #fff;
}
.task {
  text-align: center;
  font-family: "微軟正黑體";
  font-size: 14px;
  color: #fff;
  opacity: 0.72;
}
#alert {
  width: 100%;
  min-height: 734px;
  position: fixed;
  top: 0px;
  background-color: #323232;
  > .alertBox {
    margin-top: 200px;
    margin-left: 24px;
    height: 205px;
    width: 327px;
    background-color: #fff;
    border-radius: 10px 10px 0px 100px;
    > h1 {
      font-family: "微軟正黑體";
      padding: 30px 0px 5px 50px;
      font-size: 26px;
    }
    > p {
      font-family: "微軟正黑體";
      padding: 0px 0px 0px 50px;
      font-size: 14px;
      color: #998fa2;
    }
    > .btm {
      height: 44px;
      width: 94px;
      float: right;
      border-radius: 22px;
      margin-right: 12px;
      margin-top: 30px;
    }
    > a {
      font-family: "微軟正黑體";
      font-size: 16px;
      text-align: center;
      line-height: 44px;
      color: #ffffff;
    }
    .cancle {
      background-color: #9599b3;
    }
    .submit {
      background-color: #8a56ac;
    }
  }
}
</style>
