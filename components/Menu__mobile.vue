<template>
<header class='top-menu__mobile'> 
      <nav class="nav">
      <input type="checkbox" class="nav__cb" id="menu-cb"/>
      <div class="nav__content">
        <div class="nav__items">
            <nuxt-link class="nav__item" :to="`/`">
              <img src='../assets/img/homepage.svg'>
            </nuxt-link>
            <nuxt-link class="nav__item" :to="`/projects`">
              <img src='../assets/img/portfolio.svg'>
            </nuxt-link>
            <nuxt-link :to="`/papers`" class="nav__item">
              <img src='../assets/img/document.svg'>
            </nuxt-link>
        </div>
      </div>
      <label class="nav__btn" for="menu-cb"></label>
    </nav>
    </header>
</template>    

<script>
    import Vue from 'vue'
    /**
     * Компонент детализации статьи
     *
     * @property {activePage} функция для установка активности элемента меню
    */
    export default {
        props: ['activePage'],
        name: 'Menu__mobile'
    }  
</script>