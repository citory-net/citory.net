import { svelte } from '@sveltejs/vite-plugin-svelte'

import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	plugins: [svelte()],
	build: {
    	outDir: 'build',
    	sourcemap: true
  	},
	server: {
		host: "0.0.0.0",
		port: 1663
	},
	resolve: {
    	alias: {
        	"$root": 		path.resolve(__dirname, "./src"),
        	"$assets": 		path.resolve(__dirname, "./assets"),
        	"$layout": 		path.resolve(__dirname, "./src/layout"),
        	"$image": 		path.resolve(__dirname, "./assets/image"),
        	"$styles": 		path.resolve(__dirname, "./assets/styles"),
        	"$components": 	path.resolve(__dirname, "./src/components")
		}
	},
	css: {
    	preprocessorOptions: {
      		scss: {
				additionalData: `@use "$styles/variables.scss" as *;`
      		}
		}
	}
});