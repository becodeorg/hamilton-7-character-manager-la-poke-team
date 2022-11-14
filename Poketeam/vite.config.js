const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        new: "./character-creation.html",
        view: "./single-character.html",
        edit: "./character-editor.html",
      },
    },
    target: 'esnext'
  },
});