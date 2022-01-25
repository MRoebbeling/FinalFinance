<template>
    <div class="account">
        {{ $store.state.AccountInfo }}
    </div>
</template>
<script>

export default {
name: 'AccountView',
  components: {

  },
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>
    .account{
        background: linear-gradient(90deg, #E5E5E5 0%, rgba(229, 229, 229, 0.31) 100%);
        opacity: 0.3;
        text-align: left;
        padding: 15px;
    }
</style>