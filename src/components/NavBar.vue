<template>
  <div class="navbar bg-base-100 px-4" style="flex: 0 1 auto">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl">brady volkmann</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/">home</router-link></li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li><router-link to="/projects">projects</router-link></li>
      </ul>
    </div>
    <div class="navbar-end pr-2">
      <a class="btn"
        >résumé <font-awesome-icon :icon="['fas', 'download']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
