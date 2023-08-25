<template>
  <div id="app" class="h-full flex flex-col">
    <NavBar />
    <router-view style="flex: 1 1 auto" />
  </div>
</template>

<script type="text/javascript">
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar, // register component
  },
};
</script>
