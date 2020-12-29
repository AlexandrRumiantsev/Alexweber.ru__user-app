<template>
  <div class="projects-list">
      <div class='project-box' v-for="n in this.projects" v-bind:key='n._id'>
        <nuxt-link :text="n.name + ' ' + n.discription" :to="`/projects/${n._id}`"  class='project-container'
        :style="'background: url(http://alexweber.ru/img/'+ n.image + ');'"">
        </nuxt-link>  
      </div>    
  </div>


</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'

/**
  * Список проектов
  *
  * @property {projects} - массив проектов
  * @property {featuredProjects} - функция запроса к проектам
*/
export default {
  data() {
      return {
        projects: ''
      }
    },
  computed: {
    ...mapGetters([
      'featuredProjects',
    ])
  },
  mounted: function () {
      let component = this;
      let store = this.$store;
      this.projects = store.getters.featuredProjects;
  },
  head() {
    return {
        title: 'Александр Румянцев - Проекты',
        meta: [
          {
            hid: 'og:title', 
            name: 'og:title',
            content: 'Александр Румянцев - Проекты'
          },
          {
            hid: 'description' ,
            name: 'description',
            content: 'Список реализованных проектов'
          },
          {
            hid: 'og:type',
            name: 'og:type',
            content: 'website'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'http://alexweber.ru/projects'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: 'http://www.alexweber.ru/img/prev.jpeg'
          }
        ]
    }
    }
};
</script>

<style>
    @import '../../assets/styles/body/projects/list.scss';
</style>
