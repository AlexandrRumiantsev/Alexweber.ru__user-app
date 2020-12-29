//https://medium.com/js-dojo/how-i-generated-dynamic-routes-for-different-nuxt-js-pages-ce2ee6972743

/*
import data from './static/storedata.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `product/${el.id}`))
  })
}
*/
import axios from 'axios'

const dynamicRoutes = async () => {

    const url = 'http://alexweber.ru:5000/';

    const resForProjects = await axios.get(
      url + 'data'
    )

    const resForPapers = await axios.get(
      url + 'data_papers'
    )

    //console.log(resForProjects.data)
    const routesForProject = resForProjects.data.map((project)=>{
      console.log(project)
 
      return {
        route: `/projects/${project._id}`,
        payload: project
      }
    })

    const routesForPaper = resForPapers.data.map((paper)=>{

      return {
        route: `/papers/${paper._id}`,
        payload: paper
      }
    })

    const routes = routesForProject.concat(routesForPaper);

    return routes;

}



export default {
  mode: 'universal',
  /*
  router: {
     base: './'
  },
  server: {
    port: 80, // default: 3000
    host: 'alexweber.ru' // default: localhost
  },
  */
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    script: [{ src: 'https://js.stripe.com/v3/' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap'
      }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css', { src: '~/assets/main.scss', lang: 'sass' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {} 
  }
}
