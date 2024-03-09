<template>
  <Header @addEvent="getJsonDate" :text="inGame" :is-true="loader"></Header>
  <div class="hero" id="hero" ref="hero">
    <div class="container">
      <div class="hero_wrapper">
        <div class="hero_family">
          <div class="hero_pack">
            <img src="/public/i/packing.png" alt="">
          </div>
          <div class="hero_family_img">
            <img src="/public/i/family.png" alt="">
          </div>
          <div class="hero_family_img_mobile">
            <img src="/public/i/mobile_family.png" alt="">
          </div>
        </div>
        <div class="hero_info">
          <div class="hero_title">
            <img src="/public/i/hero_blue_title.png" alt="">

          </div>
          <div class="hero_btn">
            <a href="/#/" @click="getJsonDate" class="btn">
              <img v-if="loader" src="/public/i/loader.svg" alt="">
              {{ inGame }}
            </a>
          </div>
          <div class="hero_money_mobile">
            <img src="/public/i/mobile_money.png" alt="">
          </div>
          <div class="hero_subtitle">
            <img src="/public/i/hero_red_title.png" alt="">
          </div>
          <a href="#" class="hero_link">
            Список городов
          </a>
        </div>
      </div>
      <div class="hero_dividers">
        <div class="hero_date">
          Период акции: с 1 сентября по 30 ноября 2023 г.
        </div>
        <div class="hero_message">
          <img src="/public/i/bubble.png" alt="">
          <div class="hero_phone">
            <p>
              Телефон горячей линии:

            </p>

            <a href="tel:88000000000">8 800 000 00 00</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="promo">
    <div class="container">
      <div class="title">
        Как принять участие в акции:
      </div>
      <div class="promo_wrapper">
        <div class="promo_item">
          <div class="promo_img">
            <img src="/public/i/mech1.png" alt="">
          </div>
          <div class="promo_text">
            <span>Купи</span> любой БИО-С <br> в промоупаковке <br> и <span>найди код</span> под крышкой
          </div>
        </div>
        <div class="promo_item">
          <div class="promo_img">
            <img src="/public/i/mech2.png" alt="">
          </div>
          <div class="promo_text">
            <span>Регистрируй код</span> на сайте
          </div>
          <div class="promo_btn">
            <a @click="getJsonDate" href="/#/" class="btn">
              <img v-if="loader" src="/public/i/loader.svg" alt="">
              {{ inGame }}
            </a>
          </div>
          <div class="promo_text">
            или в <a href="#">telegram-bot</a>
          </div>
        </div>

        <div class="promo_item">
          <div class="promo_img">
            <img src="/public/i/mech3.png" alt="">
          </div>
          <div class="promo_text">
            <span>Получи гарантированный<br> приз 50 ТЕНГЕ</span> с каждой <br> упаковки
            <b>
              Минимальная сумма вывода - 300 т
            </b>
          </div>
        </div>
        <a href="#" class="rules">
          Правила акции
        </a>
      </div>

    </div>
  </div>
  <div class="map">
    <div class="promo_divider">

      <div class="promo_divider_title">
        Расскажи другу <br> об Акции и получи 100 тенге на счет!
      </div>
      <a href="#" class="promo_divider_link">
        подробнее
      </a>
    </div>
    <div class="container">
      <div class="map_wrapper">
        <div class="map_info">
          <div class="map_title">
            Каждый код – это шанс
          </div>
          <div class="map_subtitle">
            выиграть еженедельный приз
          </div>
          <div class="map_money">
            <img src="/public/i/money.png" alt="">
          </div>
          <div class="map_subtitle">
            в твоем городе!
          </div>
          <div class="map_btn">
            <a @click="getJsonDate" href="/#/" class="btn">
              <img v-if="loader" src="/public/i/loader.svg" alt="">
              {{ inGame }}
            </a>
          </div>
          <a href="#" class="map_link">
            Список городов
          </a>
        </div>
        <div class="map_city">
          <img src="/public/i/map.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios';
export default {
  name: "App",
  components: {Footer, Header},
  data() {
    return {
      data: [],
      inGame: 'ВВЕСТИ КОД',
      loader: false,
    }
  },
  mounted() {

  },
  methods: {
    async getJsonDate() {
         try {
           this.inGame = '';
           this.loader = true;
           const response  = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
           this.data = response.data;
           if (response.status === 200) {
             setTimeout(() => {
               this.loader = false;
               this.inGame = 'В ИГРЕ';
             }, 1000);
           }
           console.log(this.data);
         } catch (e) {
           this.loader = false;
           this.inGame = 'ВВЕСТИ КОД';
           console.log(e);
         }
      }
  }
}

</script>