<template>
  <div id="app">
    <img src="./assets/HoliFrog2.png">
    <h1>{{ msg }}</h1>

    <div class="hidden">
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="name"/>
      <h1 :class="{ red: active }">{{ name }}</h1>
      <button @click="show()">affiche le texte</button>
      <h2 :class="{ red: active }">{{nameh2}}</h2>

      <button @click="shows">cachez-moi</button>
      <div v-if="img.show">
        <img src="./assets/logo.png" alt="grenouille">
      </div>
      <div>
      <button @click="color()">color is bettor</button>
      <input type="checkbox" v-model="active">
      </div>

        <my-component>
        </my-component>

      <div>
        <toggle-button :value="false"
                       :labels='{checked:"fucking machine",unchecked:"good machine"}'
                       :width="200"
                       :height="40"
                       class="gros"
        />
      </div>
      <toggle-button class="gros"
                     :value="false"
                     color="#82C7EB"
                     :sync="true"
                     :width="200"
                     :height="40"
                     :labels="true"/>
    </div>
  </div>

</template>
<style>
  #app {
    margin: 50px;
  }

  .vue-js-switch.gros {
    font-size: 20px;
  }

  .red {
    color: red;
  }

  #app2 {
    margin: 50px;
  }</style>
<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to You Olivier :-)',

        name: '',
        nameh2: '',
        active: false,
        onChangeEventHandler: false,

        img: {
          show: true
        }
      }
    },
    methods: {
      shows: function () {
        this.img.show = !this.img.show;

      },
      show: function () {
        this.nameh2 = this.name
      },
      color: function () {
        this.active = !this.active
      }
    }
  }

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
