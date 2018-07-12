<template>
  <div class="hello">
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <p>{{dataFromVuex.all[0].count + '1'}}</p>
  </div>
</template>
<script>
import {commonApi} from '../api'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData: function () {
      commonApi.getDataSuccess({}).then((result) => {
        console.log(result)
      })
    },
    ...mapActions({
      getDataFromVuex: 'test/getTestData',
      add: 'test/add'
    })
  },
  computed: {
    ...mapState({
      dataFromVuex: 'test'
    })
  },
  created () {
    this.getDataFromVuex()
  },
  mounted () {
    let _this = this
    _this.add({id: 1})
    // setInterval(function(){
    //   _this.add({id: 1})
    // },1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
