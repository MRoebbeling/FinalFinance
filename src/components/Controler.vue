<template>
  <AssHeader />
  <AccountView />
  <div class="viewer" v-for="item in $store.state.AccountInfo" v-bind:key="item.id">
     <AssViewer :item="item"/> 
  </div>
</template>

<script>
import AssViewer from './AssetView.vue'
import AssHeader from './AssHeader.vue'
import AccountView from './AccountView.vue'

export default {
  name: 'Controler',
  components: {
    AssViewer,
    AssHeader,
    AccountView
  },
  data () {
    return {
      apikey: '0MXRKWSOH7904EQL',
      apiUrl: 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=',
    }
  },
  methods: {
    sortstock: function()
    {
      //mistfink = myjson.assets;
      console.log('Fuck1:',this.$store.state.AccountInfo);
      //console.log();
      //setTimeout(function(){ console.log('Fuck3:',$store.state.AccountInfo); }, 3000);
      for (var i in this.$store.state.AccountInfo) {

        // Hier kommt das laden und befüllen der Objecte AccountPosition: []
        // Mit den Daten von Alphavantage
        var tmpapiUrl = this.apiUrl+this.$store.state.AccountInfo[i].symbol+'&apikey='+this.apikey;
        console.log(tmpapiUrl);
        fetch(tmpapiUrl)
        .then(response => response.json())
        .then(data => this.$store.commit('addAccounPosition', data));
        //.then(data => console.log(data['Global Quote']['01. symbol'],data['Global Quote']['05. price'] ));
        //this.$store.commit('addAccounPosition', this.$store.state.AccountInfo[i] )

        //var obj = this.$store.state.AccountInfo[i];

        //console.log(this.$store.state.AccountInfo[i].symbol);
      }

      //console.log(myjson)
    }
  },
  //
  // Data Population
  //
  mounted() {
    fetch('http://bloodyfeet.eu/FinalFinanace/assets/portfolio.json', {cache: "reload"})
    .then(response => response.json())
    .then(data =>  this.$store.commit('setTheState', data.assets))
    .then(notset => this.sortstock(notset))
    //.then( setTimeout(function(){ console.log('Fuck3:',this.$store.state.AccountInfo); }, 3000) )
    //.then(console.log('Fuck2:',this.$store.state.AccountInfo))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
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
