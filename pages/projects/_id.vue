<template>
  <div :id='this.item._id' 
        class='projects__detail detail'
        >
    <img class='detail-img' :src="'http://alexweber.ru/img/'+ this.item.imageFull">    
    <div class='loader'></div> 
    <h1>
      <a 
        :href="this.item.link"
      >
        {{ this.item.name }}
      </a>
    </h1>   
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'

/**
  * Детализация проекта
  *
  * @property {item} - данные по выбранному проекту
  * @property {featuredProjects} - функция запроса к проектам
*/
export default {
  data() {
      return {
        item: ''
      }
    },
  computed: {
    ...mapGetters([
      'featuredProjects',
    ])
  },
  mounted: function () {
      let component = this;
      let id = window.location.href.split('/')[4];
   
      this.$store.getters.featuredProjects.filter(function(el){
          if(el._id == id) component.item = el;
      })
  },
  head() {
    return {
        title: this.item.name,
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.item.name
          },
          {
            hid: 'og:type',
            name: 'og:type',
            content: 'website'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: window.location.origin + '/projects/'+this.item._id
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: 'http://www.alexweber.ru/img/'+this.item.image
          }
        ]
    }
  }
};
</script>

<style>
    @import '../../assets/styles/body/projects/item.scss';
</style>
