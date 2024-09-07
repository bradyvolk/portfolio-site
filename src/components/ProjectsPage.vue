<template>
  <div id="home">
    <h1 class="text-center text-xl mt-4 py-8">my projects</h1>
    <main
      class="container px-8 pt-8 mx-auto lg:px-4 grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="../assets/images/dig-ag-site.png"
            alt="EWB Digital Agriculture Website"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">EWB Digital Agriculture Site</h2>
          <p>
            EWB Digital Agriculture website built with React.js,
            StyledComponents, and Firebase
          </p>
          <div class="card-actions justify-end">
            <a
              href="https://ewb-dig-ag.org/"
              target="_blank"
              class="btn btn-primary"
            >
              visit site
            </a>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="../assets/images/dig-ag-desktop-app.png"
            alt="EWB Digital Agriculture Desktop App"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">EWB Digital Agriculture Desktop App</h2>
          <p>EWB Digital Agriculture Desktop App built with Python Kivy</p>
          <div class="card-actions justify-end">
            <a
              href="https://github.com/bradyvolk/ewb-gui"
              target="_blank"
              class="btn btn-primary"
            >
              see code
            </a>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="../assets/images/portfolio-site.png"
            alt="Portfolio Website"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Portfolio Website</h2>
          <p>This site, right here, built with Vue.js and Tailwind CSS</p>
          <div class="card-actions justify-end">
            <a
              href="https://github.com/bradyvolk/portfolio-site"
              target="_blank"
              class="btn btn-primary"
            >
              see code
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
