import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)
Vue.component('my-component', {
  template: '<div>Machine 1' +
  '<toggle-button :value="false"\n' +
  ':labels=\'{checked:"fucking machine",unchecked:"good machine"}\'\n' +
  ':width="200"\n' +
  ':height="40"\n' +
  'class="gros"/>' +
  '</div>'
})

new Vue({
  el: '#app',
  render: h => h(App),


});
