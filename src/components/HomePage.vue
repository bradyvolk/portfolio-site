<template>
  <div class="flex h-full">
    <div class="grid flex-grow w-1/2 place-items-center bg-base-200">
      <img
        src="../assets/images/portrait-brady.png"
        alt="Brady at Lake Cazenovia"
        class="p-8 w-3/5"
      />
    </div>
    <div class="grid flex-grow w-1/2 place-items-center">
      <div>
        <h1 class="text-5xl font-bold">brady volkmann</h1>
        <p class="py-6">cloud data engineer at IBM</p>
        <button class="btn btn-primary">
          <router-link to="/about">about me</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
