<template>
  <div class='main'>
    <div id="main-page">
		<div class="content">
           <h2 class='content__sub-title'>WEB-DEVELOPER</h2>
					 <h1 class='content__title'> 
            <span class='content__name anim-name'>
              АЛЕКСАНДР
            </span> 
            РУМЯНЦЕВ
          </h1>
           <div class='content__skill-box'>
                <a rel="nofollow" target="_blank" href='https://ru.vuejs.org/'>
                  <div>
                    VUE
                  </div>
                </a>
                <a rel="nofollow" target="_blank" href='https://reactjs.org/'>
                <div>
                  REACT
                </div>
                 </a>
                <a rel="nofollow" target="_blank" href='https://nodejs.org/'>
                <div>
                  NODE
                </div>
                 </a>
                <a rel="nofollow" target="_blank" href='https://developer.mozilla.org/'>
                <div>
                  Native JS
                </div>
                 </a>
                <a rel="nofollow" target="_blank" href='https://www.mongodb.com/'>
                <div>
                  MONGO
                </div>
                 </a>
           </div>
		</div>
	</div>
  </div>
</template>

<style scoped>
@import '../assets/styles/body/index.scss';
</style>

<script>
export default {
  head() {
    return {
        title: 'Александр Румянцев - web developer',
        meta: [
          {
            property: 'og:title',
            content: 'Александр Румянцев - web developer'
          },
          {
            property: 'description',
            content: 'Персональный сайт веб разработчика - Александра Румянцева'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:url',
            content: 'http://alexweber.ru/'
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

