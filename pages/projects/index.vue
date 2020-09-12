<template>
  <div class="projects-list">
      <div class='project-box' v-for="n in this.projects" v-bind:key='n._id'>
        <nuxt-link :text="n.name + ' ' + n.discription" :to="`/projects/${n._id}`"  class='project-container'
        :style="'background: url(http://www.alexweber.ru/img/'+ n.image + ');'"">
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
      store.getters.featuredProjects();
      this.projects = store.state.projects.projects;
  },
  head() {
    return {
        title: 'Александр Румянцев - Проекты',
        meta: [
          {
            property: 'og:title',
            content: 'Александр Румянцев - Проекты'
          },
          {
            property: 'description',
            content: 'Список реализованных проектов'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:url',
            content: 'http://alexweber.ru/projects'
          },
          {
            property: 'og:image',
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
