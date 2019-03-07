<template>
  <div id="app">
   <resume />
  </div>
</template>

<script>
  import Resume from './components/Resume' 
  

  export default {
    name: 'app',
    components: {
      Resume
    }
  }
</script>

<style>
  body {
    margin: 0;
    color: #3E5C76;
    background: url(https://i.imgur.com/MJAkxbh.png);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    margin: 0 auto;
  }

  a, a:visited {
        color: #748CAB !important; 
    }

    a:hover {
        color: #3E5C76 !important;
    }

</style>
