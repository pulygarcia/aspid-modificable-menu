<script setup>
    import {RouterLink} from 'vue-router';
    import {ref} from 'vue';

    const isOpenMenu = ref(false);

    const openMenu = () => {
        isOpenMenu.value = true;
    }
    const closeMenu = () => {
        isOpenMenu.value = false;
    }
</script>

<template>
  <header class="container mx-auto w-11/12 md:w-full flex justify-between items-center py-4">
        <div class="">
            <a href="/">
                <p class="text-lg uppercase font-semibold">Aspid <span class="text-red-400">sushi & Cuisine</span></p>
            </a>
        </div>
    
        <nav class="hidden md:block">
            <ul class="flex gap-10">
                <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1">
                    <RouterLink :to="{name: 'home'}">Local</RouterLink>
                </li>
                <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1">
                    <RouterLink :to="{name: 'menu'}">Menú</RouterLink>
                </li>
                <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1">
                    <RouterLink :to="{name: 'home'}">Nosotros</RouterLink>
                </li>
            </ul>
        </nav>

        <nav class="hidden md:flex gap-2">
            <a href="#" class="px-5 py-1 rounded-lg font-semibold text-white bg-black hover:bg-gray-800">Rerservar</a>
            <a href="#" class="px-5 py-1 rounded-lg font-semibold border border-gray-300 hover:border-gray-400">Contacto</a>
        </nav>
    
        <div class="flex flex-grow justify-end basis-0 md:hidden">
            <button type="button" class="open-menu md:hidden" @click="openMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    
        <!--BURGUER -->
    
        <div v-if="isOpenMenu" class="burguer-menu bg-white p-12 absolute right-0 top-0 h-screen z-40 shadow-2xl">
            <button class="close-menu" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
            </button>
            <nav>
                <p class=" font-bold text-xl mt-2">Aspid sushi & Cuisine &copy;</p>
                <ul class="flex flex-col text-right mt-8 space-y-4"> 
                    <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1">
                        <a href="#local">Local</a>
                    </li>
                    <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1">
                        <RouterLink :to="{name: 'menu'}">Menú</RouterLink>
                    </li>
                    <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1">
                        <a href="#us">Nosotros</a>
                    </li>
                </ul>
    
                <div class="flex gap-4 items-center justify-end mt-8">
                    <a href="https://wa.me/3865549184?text=👋Hola. Vengo desde el sitio web de Aspid">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                          </svg>
                    </a>
    
                    <a href="https://www.instagram.com/aspidsushi/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                    </a>
                </div>
            </nav>

            <img src="/sushi.png" alt="sushi" class="mt-10 w-56 object-cover mx-auto">
        </div>
    </header>
</template>