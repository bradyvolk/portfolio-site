<template>
  <div class="navbar bg-base-100 px-4" style="flex: 0 1 auto">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><router-link to="/" @click="closeDropdown">home</router-link></li>
          <li><router-link to="/about" @click="closeDropdown">about</router-link></li>
          <li><router-link to="/projects" @click="closeDropdown">projects</router-link></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">
        <router-link to="/">brady volkmann</router-link>
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about">about</router-link></li>
        <li><router-link to="/projects">projects</router-link></li>
      </ul>
    </div>
    <div class="navbar-end pr-2">
      <a class="btn btn-sm lg:btn-md" href="brady-volkmann-resume.pdf" target="_blank">
        <span class="hidden sm:inline">résumé</span>
        <span class="sm:hidden">CV</span>
        <font-awesome-icon :icon="['fas', 'download']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    closeDropdown() {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }
  }
};
</script>
