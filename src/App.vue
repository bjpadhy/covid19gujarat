<template>
  <!--App Bar-->
  <v-app id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Archivo&family=Maven+Pro:wght@400&display=swap"
      rel="stylesheet"
    />
    <v-navigation-drawer
      v-model="drawer"
      color="white"
      expand-on-hover
      mini-variant
      app
      permanent
      light
    >
      <v-list nav class="py-0">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <router-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 172 172"
                style=" fill:#000000;"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g>
                    <path
                      d="M5.375,28.21875h151.84375v111.53125h-151.84375z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="M153.05313,95.40625h-18.67812c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-24.1875c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125h18.67812c2.01563,0 3.7625,-1.34375 4.16563,-3.225c0.5375,-2.55312 -1.47813,-4.8375 -3.89687,-4.8375h-18.8125c-2.28438,0 -4.03125,-1.74687 -4.03125,-4.03125v-18.67813c0,-2.01562 -1.34375,-3.7625 -3.225,-4.16562c-2.6875,-0.40312 -4.97187,1.47813 -4.97187,4.03125v18.8125c0,2.28438 -1.74688,4.03125 -4.03125,4.03125h-24.1875c-2.28437,0 -4.03125,-1.74687 -4.03125,-4.03125v-18.67813c0,-2.01562 -1.34375,-3.7625 -3.225,-4.16562c-2.55312,-0.40312 -4.8375,1.47813 -4.8375,4.03125v18.8125c0,2.28438 -1.74688,4.03125 -4.03125,4.03125h-24.1875c-2.28438,0 -4.03125,-1.74687 -4.03125,-4.03125v-18.67813c0,-2.01562 -1.34375,-3.7625 -3.225,-4.16562c-2.55312,-0.40312 -4.8375,1.47813 -4.8375,4.03125v18.8125c0,2.28438 -1.74688,4.03125 -4.03125,4.03125h-32.11562c-2.01562,0 -3.7625,1.34375 -4.16563,3.225c-0.40312,2.55312 1.47813,4.8375 4.03125,4.8375h32.25c2.28437,0 4.03125,1.74688 4.03125,4.03125v24.1875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125h-32.11562c-2.01562,0 -3.7625,1.34375 -4.16563,3.225c-0.40312,2.55312 1.47813,4.8375 4.03125,4.8375h32.25c2.28437,0 4.03125,1.74688 4.03125,4.03125v32.11562c0,2.01563 1.34375,3.7625 3.225,4.16563c2.55312,0.5375 4.8375,-1.47813 4.8375,-3.89687v-32.38438c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125h24.1875c2.28437,0 4.03125,1.74688 4.03125,4.03125v32.11562c0,2.01563 1.34375,3.7625 3.225,4.16563c2.55313,0.5375 4.8375,-1.47813 4.8375,-3.89687v-32.38438c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125h24.1875c2.28437,0 4.03125,1.74688 4.03125,4.03125v32.11562c0,2.01563 1.34375,3.7625 3.225,4.16563c2.55313,0.5375 4.8375,-1.47813 4.8375,-3.89687v-32.38438c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125h18.8125c2.55312,0 4.43437,-2.28437 3.89687,-4.8375c-0.26875,-1.88125 -2.15,-3.225 -4.03125,-3.225zM49.71875,91.375v-24.1875c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125h24.1875c2.28437,0 4.03125,1.74688 4.03125,4.03125v24.1875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125h-24.1875c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125zM90.03125,91.375v-24.1875c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125h24.1875c2.28437,0 4.03125,1.74688 4.03125,4.03125v24.1875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125h-24.1875c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125z"
                      fill="#e9eef4"
                    ></path>
                    <path
                      d="M126.3125,49.71875c-2.28437,0 -4.03125,-1.74687 -4.03125,-4.03125v-13.4375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74687 4.03125,4.03125v13.4375c0,2.28438 -1.74687,4.03125 -4.03125,4.03125z"
                      fill="#71c2ff"
                    ></path>
                    <path
                      d="M86,103.46875c-1.075,0 -2.15,-0.40313 -2.82188,-1.20938l-36.41562,-36.41562l-10.88437,20.69375c-1.075,2.01563 -3.49375,2.6875 -5.50938,1.74687c-2.01562,-1.075 -2.6875,-3.49375 -1.74687,-5.50937l13.4375,-25.53125c0.5375,-1.075 1.74688,-1.88125 2.95625,-2.15c1.20937,-0.13437 2.55312,0.26875 3.49375,1.075l36.68438,36.68437l30.77188,-51.19687c-1.6125,0.13437 -3.225,-0.67187 -4.03125,-2.15c-0.94063,-2.01562 -0.13438,-4.43438 1.74687,-5.375l10.75,-5.375c1.6125,-0.80625 3.49375,-0.40312 4.70313,0.80625c1.20937,1.34375 1.47812,3.225 0.5375,4.8375l-40.3125,67.1875c-0.67187,1.075 -1.74688,1.74688 -2.95625,1.88125c-0.13438,0 -0.26875,0 -0.40313,0zM24.1875,103.46875c-0.26875,0 -0.5375,0 -0.80625,-0.13437c-0.26875,0 -0.5375,-0.13437 -0.80625,-0.26875c-0.26875,-0.13437 -0.40312,-0.26875 -0.67187,-0.40312c-0.26875,-0.13437 -0.40312,-0.26875 -0.5375,-0.5375c-0.80625,-0.5375 -1.20937,-1.6125 -1.20937,-2.6875c0,-0.26875 0,-0.5375 0.13437,-0.80625c0,-0.26875 0.13438,-0.5375 0.26875,-0.80625c0.13437,-0.26875 0.26875,-0.40313 0.40312,-0.67187c0.13438,-0.26875 0.26875,-0.40313 0.5375,-0.67187c0.26875,-0.26875 0.40312,-0.40313 0.5375,-0.5375c0.26875,-0.13437 0.40313,-0.26875 0.67188,-0.40313c0.26875,-0.13437 0.5375,-0.13437 0.80625,-0.26875c0.5375,-0.13437 1.075,-0.13437 1.6125,0c0.26875,0 0.5375,0.13437 0.80625,0.26875c0.26875,0.13437 0.5375,0.26875 0.67188,0.40313c0.26875,0.13437 0.40313,0.26875 0.5375,0.5375c0.13437,0.13437 0.40312,0.40312 0.5375,0.67188c0.13438,0.26875 0.26875,0.40312 0.40312,0.67188c0.13438,0.26875 0.13438,0.5375 0.26875,0.80625c0,0.26875 0.13438,0.5375 0.13438,0.80625c0,0.26875 0,0.5375 -0.13438,0.80625c0,0.26875 -0.13438,0.5375 -0.26875,0.80625c-0.13438,0.26875 -0.26875,0.5375 -0.40312,0.67188c-0.13438,0.26875 -0.26875,0.40313 -0.5375,0.5375c-0.80625,0.80625 -1.88125,1.20938 -2.95625,1.20938z"
                      fill="#71c2ff"
                    ></path>
                    <g fill="#007bff">
                      <path
                        d="M153.1875,143.78125h-147.8125c-2.28438,0 -4.03125,-1.74687 -4.03125,-4.03125v-107.5c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125v103.46875h143.78125c2.28438,0 4.03125,1.74687 4.03125,4.03125c0,2.28438 -1.74687,4.03125 -4.03125,4.03125z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/newsfeed">
          <v-list-item link>
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32pt"
                height="32pt"
                viewBox="0 0 64 64"
                version="1.1"
              >
                <g id="surface8650320">
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(96.862745%,96.862745%,98.431373%);fill-opacity:1;"
                    d="M 54.851562 55 L 9.101562 55 C 6.550781 55 4.5 52.949219 4.5 50.398438 L 4.5 11.300781 C 4.5 10.050781 5.550781 9 6.800781 9 L 48 9 C 49.25 9 50.300781 10.050781 50.300781 11.300781 L 50.300781 50.449219 C 50.300781 52.949219 52.351562 55 54.851562 55 C 57.398438 55 59.449219 52.949219 59.449219 50.398438 L 59.449219 25.101562 C 59.449219 23.851562 58.398438 22.800781 57.148438 22.800781 L 54.851562 22.800781 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(87.058824%,87.45098%,90.196078%);fill-opacity:1;"
                    d="M 11.5 15.949219 L 43.050781 15.949219 C 43.898438 15.949219 44.550781 16.601562 44.550781 17.449219 L 44.550781 25.898438 C 44.550781 26.75 43.898438 27.398438 43.050781 27.398438 L 11.5 27.398438 C 10.648438 27.398438 10 26.75 10 25.898438 L 10 17.449219 C 10 16.601562 10.648438 15.949219 11.5 15.949219 Z M 54.851562 55 C 57.398438 55 59.449219 52.949219 59.449219 50.398438 L 59.449219 25.101562 C 59.449219 23.851562 58.398438 22.800781 57.148438 22.800781 L 50.25 22.800781 L 50.25 50.398438 C 50.300781 52.949219 52.351562 55 54.851562 55 Z M 54.851562 55 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,48.235294%,100%);fill-opacity:1;"
                    d="M 54.851562 56.5 L 9.101562 56.5 C 5.75 56.5 3 53.75 3 50.398438 L 3 11.300781 C 3 9.199219 4.699219 7.5 6.800781 7.5 L 48 7.5 C 50.101562 7.5 51.800781 9.199219 51.800781 11.300781 L 51.800781 50.449219 C 51.800781 52.148438 53.199219 53.550781 54.898438 53.550781 C 56.601562 53.550781 58 52.148438 58 50.449219 L 58 25.101562 C 58 24.648438 57.648438 24.300781 57.199219 24.300781 L 54.898438 24.300781 C 54.050781 24.300781 53.398438 23.648438 53.398438 22.800781 C 53.398438 21.949219 54.050781 21.300781 54.898438 21.300781 L 57.199219 21.300781 C 59.300781 21.300781 61 23 61 25.101562 L 61 50.398438 C 60.949219 53.800781 58.199219 56.5 54.851562 56.5 Z M 6.800781 10.5 C 6.351562 10.5 6 10.851562 6 11.300781 L 6 50.449219 C 6 52.148438 7.398438 53.550781 9.101562 53.550781 L 49.648438 53.550781 C 49.101562 52.648438 48.800781 51.601562 48.800781 50.449219 L 48.800781 11.300781 C 48.800781 10.851562 48.449219 10.5 48 10.5 Z M 6.800781 10.5 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(87.058824%,87.45098%,90.196078%);fill-opacity:1;"
                    d="M 20.601562 36.449219 L 11.5 36.449219 C 10.648438 36.449219 10 35.800781 10 34.949219 C 10 34.101562 10.648438 33.449219 11.5 33.449219 L 20.601562 33.449219 C 21.449219 33.449219 22.101562 34.101562 22.101562 34.949219 C 22.101562 35.800781 21.449219 36.449219 20.601562 36.449219 Z M 20.601562 49.351562 L 11.5 49.351562 C 10.648438 49.351562 10 48.699219 10 47.851562 C 10 47 10.648438 46.351562 11.5 46.351562 L 20.601562 46.351562 C 21.449219 46.351562 22.101562 47 22.101562 47.851562 C 22.101562 48.699219 21.449219 49.351562 20.601562 49.351562 Z M 20.601562 42.851562 L 11.5 42.851562 C 10.648438 42.851562 10 42.199219 10 41.351562 C 10 40.5 10.648438 39.851562 11.5 39.851562 L 20.601562 39.851562 C 21.449219 39.851562 22.101562 40.5 22.101562 41.351562 C 22.101562 42.199219 21.449219 42.851562 20.601562 42.851562 Z M 20.601562 42.851562 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,48.235294%,100%);fill-opacity:1;"
                    d="M 43 49.550781 L 29 49.550781 C 28.148438 49.550781 27.5 48.898438 27.5 48.050781 L 27.5 34.300781 C 27.5 33.449219 28.148438 32.800781 29 32.800781 L 43 32.800781 C 43.851562 32.800781 44.5 33.449219 44.5 34.300781 L 44.5 48.050781 C 44.5 48.851562 43.851562 49.550781 43 49.550781 Z M 30.5 46.550781 L 41.5 46.550781 L 41.5 35.800781 L 30.5 35.800781 Z M 30.5 46.550781 "
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>News Feed</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/essentials">
          <v-list-item link>
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32pt"
                height="32pt"
                viewBox="0 0 64 64"
                version="1.1"
              >
                <g id="surface8648762">
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                    d="M 32 7 C 45.800781 7 57 18.199219 57 32 C 57 45.800781 45.800781 57 32 57 C 18.199219 57 7 45.800781 7 32 C 7 18.199219 18.199219 7 32 7 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(90.196078%,90.588235%,90.588235%);fill-opacity:1;"
                    d="M 32 7 C 31.898438 7 31.800781 7 31.699219 7 C 30.949219 7 30.148438 7.050781 29.398438 7.148438 C 29.25 7.148438 29.050781 7.199219 28.898438 7.199219 C 41.199219 8.75 50.75 19.25 50.75 32 C 50.75 44.75 41.199219 55.25 28.898438 56.800781 C 29.148438 56.851562 29.398438 56.851562 29.699219 56.898438 C 30.300781 56.949219 30.949219 57 31.550781 57 C 31.699219 57 31.851562 57 32 57 C 45.800781 57 57 45.800781 57 32 C 57 18.199219 45.800781 7 32 7 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,48.235294%,100%);fill-opacity:1;"
                    d="M 32 58.5 C 17.398438 58.5 5.5 46.601562 5.5 32 C 5.5 17.398438 17.398438 5.5 32 5.5 C 46.601562 5.5 58.5 17.398438 58.5 32 C 58.5 46.601562 46.601562 58.5 32 58.5 Z M 32 8.5 C 19.050781 8.5 8.5 19.050781 8.5 32 C 8.5 44.949219 19.050781 55.5 32 55.5 C 44.949219 55.5 55.5 44.949219 55.5 32 C 55.5 19.050781 44.949219 8.5 32 8.5 Z M 32 8.5 "
                  />
                  <path
                    style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,48.235294%,100%);fill-opacity:1;"
                    d="M 32 21.351562 C 31.148438 21.351562 30.5 22 30.5 22.851562 C 30.5 23.699219 31.148438 24.351562 32 24.351562 C 32.851562 24.351562 33.5 23.699219 33.5 22.851562 C 33.5 22 32.851562 21.351562 32 21.351562 Z M 32 46.5 C 31.148438 46.5 30.5 45.851562 30.5 45 L 30.5 31.148438 C 30.5 30.300781 31.148438 29.648438 32 29.648438 C 32.851562 29.648438 33.5 30.300781 33.5 31.148438 L 33.5 45 C 33.5 45.851562 32.851562 46.5 32 46.5 Z M 32 46.5 "
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Essentials</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <a href="https://api.covid19india.org/" target="_blank">
          <v-list-item link>
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32pt"
                height="32pt"
                viewBox="0 0 64 64"
                version="1.1"
              >
                <g id="surface8653448">
                  <path
                    style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,48.235294%,100%);fill-opacity:1;"
                    d="M 32 8 C 18.742188 8 8 18.742188 8 32 C 8 42.601562 14.875 51.601562 24.414062 54.773438 C 25.617188 54.992188 26.054688 54.257812 26.054688 53.617188 C 26.054688 53.046875 26.03125 51.539062 26.023438 49.539062 C 19.34375 50.984375 17.9375 46.320312 17.9375 46.320312 C 16.84375 43.546875 15.273438 42.804688 15.273438 42.804688 C 13.09375 41.320312 15.4375 41.351562 15.4375 41.351562 C 17.84375 41.523438 19.109375 43.820312 19.109375 43.820312 C 21.25 47.492188 24.726562 46.429688 26.09375 45.820312 C 26.3125 44.265625 26.9375 43.210938 27.617188 42.609375 C 22.289062 42.007812 16.6875 39.945312 16.6875 30.75 C 16.6875 28.125 17.625 25.984375 19.15625 24.304688 C 18.914062 23.703125 18.085938 21.257812 19.390625 17.953125 C 19.390625 17.953125 21.40625 17.3125 25.992188 20.414062 C 27.90625 19.882812 29.960938 19.617188 32 19.609375 C 34.039062 19.617188 36.09375 19.882812 38.007812 20.414062 C 42.59375 17.3125 44.601562 17.953125 44.601562 17.953125 C 45.914062 21.257812 45.09375 23.703125 44.84375 24.304688 C 46.382812 25.984375 47.304688 28.125 47.304688 30.75 C 47.304688 39.96875 41.695312 41.992188 36.351562 42.59375 C 37.210938 43.328125 37.976562 44.796875 37.976562 47.03125 C 37.976562 50.242188 37.953125 52.828125 37.953125 53.617188 C 37.953125 54.257812 38.382812 55.007812 39.601562 54.773438 C 49.132812 51.59375 56 42.601562 56 32 C 56 18.742188 45.257812 8 32 8 Z M 32 8 "
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Data Source</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar app color="#323232" dark>
      <span class="title" style="font-family: 'Archivo', sans-serif !important"
        >COVID19</span
      >
      <span
        style="font-family: 'Maven Pro', sans-serif !important; padding-left:10px;"
        >GUJARAT</span
      >
      <v-spacer></v-spacer>

      <router-link to="/newsfeed">
        <v-btn outlined text style="margin-right:15px;">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </router-link>

      <v-btn outlined href="https://api.covid19india.org/" target="_blank" text>
        <v-icon style="padding-right:10px;">mdi-github</v-icon>
        <span class="mr-2">Data Source</span>
      </v-btn>
    </v-app-bar> -->

    <v-content>
      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-dashboard" },
      { title: "News Feed", icon: "mdi-image" },
      { title: "Essentials", icon: "mdi-help-box" },
      { title: "Data Source", icon: "mdi-dark-githubx" }
    ]
  })
};
</script>
<style>
#app {
  font-family: "Archivo", sans-serif;
}
a {
  text-decoration: none;
}
</style>
