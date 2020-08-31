<template>
  <div class='paper-page'>
    <iframe :src="'http://alexweber.ru/papers/' + this.item.link + '.html'"></iframe>
    <section class='comments-box'>
      <h3 class='comments-box__title'>
        Комментарии к статье: {{ this.item.title }}
      </h3>
      <div class='comments-box__item comment' v-for="n in this.$store.state.comments.comments">
        <div class='comment__user'>
          <img :alt='n.user' src='../../assets/img/user.svg'/>    
          {{ n.user }}
        </div>
        <div class='comment__conent'>
          {{ n.title }}
        </div>
      </div>
      <div class='container-comment__form'>
              <form  id='comment_add'>
                <div class='container-comment__input'>
                    <input 
                      ref="name_form" 
                      placeholder="Ваше имя?" 
                      id='name_form' 
                      name='name_form' 
                      type='text'
                      :class="{ error: name_form === 0 }"
                    >
                    <button @click="comment_add">Написать</button>
                    <textarea 
                      ref="comment_form" 
                      name='comment_form'
                      :class="{ error: comment_form === 0  }"
                    >
                    </textarea>
                </div>
              </form>
            </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

/**
  * Страница детализация статьи
  *
  * @property {featuredPapers} - Запрос к АПИ, получение массива статей
  * @property {featuredComments} - Запрос к АПИ, получение массива комментариев
  * @property {addComments} - Функция для добавления комментария
  * @property {comment_add} - Функция для добавления комментария
  * @property {item} - Элемент компонента статьи
  * @property {name_form} -  ref - связка с формой
  * @property {comment_form} - ref - связка с формой
*/

export default {
  data() {
      return {
        item: '',
        url: '',
        comments: '',
        name_form: 1,
        comment_form: 1
      }
    },
  computed: {
    ...mapGetters([
      'featuredPapers',
      'featuredComments'
    ])
  },
  methods: {
    ...mapActions(['addComments','feathComments']),
    valid_form(el){
      if(el.value == ''){
          this.$data[el.name] = 0;
      }else this.$data[el.name] = 1;
    },
    comment_add(e){
       e.preventDefault();
       let component = this;
       e.preventDefault();
       this.valid_form(this.$refs.comment_form);
       this.valid_form(this.$refs.name_form);
       if(this.$data.name_form == 1 && 
          this.$data.comment_form == 1){
          let data = {
            'user' : this.$refs.name_form.value ,
            'title' : this.$refs.comment_form.value,
            'paper': component.item.title,
            'callbak': function(data){
              component.$store.state.comments.comments.push(data);
            }
          }
          this.addComments(
            data
         );
        }   
      }
  },
  mounted: function () {
      let component = this;
      let store = this.$store;
      let id = window.location.href.split('/')[4];
      component.featuredPapers(function(data){
         component.item = data[0];
           component.feathComments( { function(){
              console.log( 'x' ); 
           } 
         });
      });
  },
  head() {
    return {
        title: this.item.title,
        meta: [
          {
            property: 'og:title',
            content: this.item.title
          },
          {
            property: 'og:type',
            content: this.item.discription
          },
          {
            property: 'og:url',
            content: this.url
          },
          {
            property: 'og:image',
            content: 'http://www.alexweber.ru/img/papers/'+this.item.link+'.jpg'
          }
        ]
  }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/body/papers/item.scss';
</style>
