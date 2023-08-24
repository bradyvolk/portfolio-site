<template>
  <div id="home">
    <h1 class="text-center text-xl mt-4">My Projects</h1>
    <main
      class="container px-8 pt-24 mx-auto lg:px-4 grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <div>
        <article class="px-8 py-6 rounded-md bg-white shadow">
          <figure>
            <img
              class="object-cover object-center w-full h-40 mb-6 rounded"
              src="../assets/images/dig-ag-site.PNG"
              alt="EWB Digital Agriculture Website"
            />
          </figure>
          <h2 class="mb-3 text-lg lg:text-2xl">EWB Digital Agriculture Site</h2>
          <p class="mb-4 leading-relaxed">
            EWB Digital Agriculture website built with React.js,
            StyledComponents, and Firebase
          </p>
          <a
            href="https://ewb-dig-ag.org/"
            target="_blank"
            class="inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-400"
          >
            Check out the site
          </a>
        </article>
      </div>
      <div>
        <article class="px-8 py-6 rounded-md bg-white shadow">
          <figure>
            <img
              class="object-cover object-center w-full h-40 mb-6 rounded"
              src="../assets/images/dig-ag-desktop-app.PNG"
              alt="EWB Digital Agriculture Desktop App"
            />
          </figure>
          <h2 class="mb-3 text-lg lg:text-2xl">
            EWB Digital Agriculture Desktop App
          </h2>
          <p class="mb-4 leading-relaxed">
            EWB Digital Agriculture Desktop App built with Python Kivy
          </p>
          <a
            href="https://github.com/bradyvolk/ewb-gui"
            target="_blank"
            class="inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-400"
          >
            Check out the code
          </a>
        </article>
      </div>
      <div>
        <article class="px-8 py-6 rounded-md bg-white shadow">
          <figure>
            <img
              class="object-cover object-center w-full h-40 mb-6 rounded"
              src="http://via.placeholder.com/250x250"
              alt=""
            />
          </figure>
          <h2 class="mb-3 text-lg lg:text-2xl">Titles are hard to think of.</h2>
          <p class="mb-4 leading-relaxed">
            Just like naming variables, naming title are hard.
          </p>
          <a
            href="#"
            class="inline-flex items-center md:mb-2 lg:mb-0 hover:text-blue-400"
          >
            Read More
          </a>
        </article>
      </div>
    </main>
  </div>
</template>
