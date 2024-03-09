<template>
  <header ref="header" class="header">
    <div class="container">
      <div class="header_wrapper">
        <div :class="{ 'menu_active': isShow }" class="menu">
          <a href="#" class="menu_link lang">
            КАЗ
          </a>
          <a @click="$emit('addEvent')" href="#" class="menu_link menu_btn">
            <img v-if="isTrue" src="/public/i/loader.svg" alt="">
            {{ text }}
          </a>
          <a href="#" class="menu_link">
            правила
          </a>
          <a href="#" class="menu_link">
            победители
          </a>
          <a href="#" class="menu_link">
            faq
          </a>
          <a href="#" class="menu_link">
            личный кабинет
          </a>


        </div>
        
        <a href="/" class="header_logo">
          <img src="/public/i/logo.png" alt="">
        </a>
        <div
            @click="handleBurger"
            :class="{ burger_active: isShow }"
            class="burger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name:"Header",
    props: {
      text: String,
      isTrue: Boolean,

    },
    data() {
      return {
        isShow: false,
      }
    },
    mounted() {
      // this.scrollHeader();
    },
    methods: {
      handleBurger() {
          if(this.isShow) {
            this.isShow = false;
          } else {
            this.isShow = true;
          }
      }
    },
  }
</script>