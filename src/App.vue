<template>
  <div id="app">
     <leftNav></leftNav>

  <div class='main'>
    <transition name="fade" mode="out-in">  
     <router-view></router-view> 
    </transition> 
  </div>  
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav';
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
#app {
  font-family:  'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity:1;
}
.fade-center-active{
  transition: opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s
}
.main{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;

}
</style>

