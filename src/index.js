import { mount } from 'svelte';
import App from './App.svelte';

const target = document.getElementById("dc_svelte_init");

if (target) mount(App, { target });
else console.error("Bruh...")