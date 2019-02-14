<template>
  <div id="app">
    <b-container>
      <navigation></navigation>
      <div class="min-height">
      <router-view></router-view>
      </div>
      <Footer></Footer>
    </b-container>

  </div>
</template>

<script>
  import Navigation from './components/navigation';
  import Footer from './components/footer';

export default {
  name: 'app',
  components:{
    Navigation,
    Footer
  }
}
</script>

<style>
  @import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

  .btn-warning
  {
    background-color:darkorange !important;
    color: white !important;;
  }
</style>
