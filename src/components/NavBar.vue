<template>
  <header class="p-6 bg-white shadow-md">
    <nav>
      <ul class="flex justify-end text-lg">
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/">Home</router-link>
        </li>
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/about">About</router-link>
        </li>
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li class="hover:text-blue-500 cursor-pointer px-4">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
