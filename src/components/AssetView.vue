<template>
    <div class="viewer">
        <h1>{{ item.symbol }}</h1>
        {{ stockinfo.stockname }} - {{ stockinfo.stocksymbol }} - {{ stockinfo.stockprice }}
    </div>
</template>
<script>
//import AssViewer from './AssetView.vue'

export default {
    name: 'AssetView.vue',
    props: ['item'],
    data () {
        return {
            apikey: '0MXRKWSOH7904EQL',
            apiUrl: 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=',
            stockinfo: { stockname: '', stocksmybol: '', stockprice: '' }
        }
    },

    mounted() {

        // Abfrage ob es sich um ein Aktie, Krypto oder Comoditeis handelt

        //this.apiUrl = this.apiUrl+this.item.symbol+'&apikey='+this.apikey;
        //console.log(this.apiUrl);
        //fetch(this.apiUrl)
        //.then(response => response.json())
        //.then(data => console.log(data['Global Quote']['01. symbol'],data['Global Quote']['05. price'] ));
        //.then(horst => console.log(horst));
    }
}

</script>
<style scoped>
    .viewer {
        background: linear-gradient(180deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 0.3) 100%);
        opacity: 0.3;
        border: 2px solid #00EDFF;
        box-sizing: border-box;
        border-radius: 15px;
        margin: 15px;
    }
</style>
