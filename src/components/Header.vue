<template>
  <header ref="header" class="header">
    <div class="container">
      <div class="header_wrapper">
        <div class="menu">
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
    mounted() {
      // this.scrollHeader();
    },
    methods: {
      scrollHeader() {
        const scrollFunc = () => {
          const header = this.$refs.header;
          const headerH = header.clientHeight;

          document.onscroll = () => {
            let scroll = window.scrollY;

            if (scroll > headerH) {
              header.classList.add("header_active");
            } else {
              header.classList.remove("header_active");
            }
          };
        };
        return scrollFunc();
      },
    },
  }
</script>