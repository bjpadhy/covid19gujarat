<template>
  <!--App Bar-->
  <v-app id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Archivo&family=Maven+Pro:wght@400&display=swap"
      rel="stylesheet"
    />
    <v-app-bar app color="#323232" dark>
      <span class="title" style="font-family: 'Archivo', sans-serif !important"
        >COVID19</span
      >
      <span
        style="font-family: 'Maven Pro', sans-serif !important; padding-left:10px;"
        >GUJARAT</span
      >
      <v-spacer></v-spacer>

      <v-btn outlined href="https://api.covid19india.org/" target="_blank" text>
        <v-icon style="padding-right:10px;">mdi-github</v-icon>
        <span class="mr-2">Data Source</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <MainContent />
    </v-content>
  </v-app>
</template>

<script>
import MainContent from "./components/MainContent";

export default {
  name: "App",

  components: {
    MainContent
  },

  data: () => ({
    //
  })
};
</script>
<style>
#app {
  font-family: "Archivo", sans-serif;
}
</style>
