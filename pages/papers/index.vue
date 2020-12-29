<template>
  <div id="paper-page">
    <nuxt-link 
      v-for="n in this.papers"
     class='papers-container'
      :to="`/papers/${n._id}`"
      v-bind:key='n._id' 
      :style="`color:${n.link}`">
      <div 
        class='fon-paper'
        :style="
                'background: url(http://www.alexweber.ru/img/papers/'+n.link+'.jpg ) no-repeat;'
                "
      >
        <div class='fon-paper__container'>        
          <h2 class='fon-paper__title'>{{ n.title }} </h2>
          <h3 class='fon-paper__discr'>{{ n.discription }}</h3>
        </div> 
         
        <div :id="n.link"  class='paper-item'>
          <span id='close-btn'>
                <img src='http://localhost:8080/img/close-icon.png'>
          </span>
       </div>
      </div>
      <div class='paper-item__btn item-btn'>
          <i class="fa fa-comment" aria-hidden="true"></i> 
              <span class='item-btn__title'>
               {{ 
                 count
                }}
              </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'

/**
  * Страница статей
  *
  * @property {papers} - элементы статей
  * @property {allComments} - элементы комментариев
  * @property {featuredPapers} - функция запроса к статьям
  * @property {featuredComments} - функция запроса к комментариям
  * @property {setCount} - вычисление кол-ва комментариев статьи
*/

export default {
  data() {
      return {
        papers: '',
        allComments: '',
        count: 0
      }
    },
  computed: {
    ...mapGetters([
      'featuredPapers',
      'featuredComments'
    ])
  },
  methods: {
    setCount(paper){
      let counter = '0';
      console.log(this);
      for(let i = 0 ; i <  component.allComments.length ; i++){
            if(
              this.$store.state.comments.comments[i].paper == paper
            ) counter++;
      }
      return counter;
    }
  },  
  mounted: function () {

      let component = this;
      let store = this.$store;

     
      store.getters.featuredPapers(function(data){
      
       component.papers = data;
  
       let targetTitle = data[0].title;
  
            store.getters.feathComments( (data) => {
                component.allComments = data;
  
                let counter = 0;
                for(let i = 0 ; i < data['length'] ; i++){

                    if(targetTitle == data[i].paper){
                        component.count++
                    }
                }
            
            }); 
         
      });   
      
  },
  head() {
    return {
        title: 'Александр Румянцев - Статьи',
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'Александр Румянцев - Статьи'
          },
          {
            hid: 'description',
            name: 'description',
            content: 'Блог разраблотчика'
          },
          {
            hid: 'og:type',
            name: 'og:type',
            content: 'website'
          },
          { 
            hid: 'og:url',
            name: 'og:url',
            content: 'http://alexweber.ru/papers'
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

<style lang="scss" scoped>
  @import '../../assets/styles/body/papers/list.scss';
</style>
