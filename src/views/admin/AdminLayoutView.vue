<script setup>
    import {RouterLink} from 'vue-router'
    import {ref} from 'vue'

    const isOpenMenu = ref(false);

    const openMenu = () => {
        isOpenMenu.value = true;
    }
    const closeMenu = () => {
        isOpenMenu.value = false;
    }
</script>

<template>
  <header class="bg-red-500 text-white">
        <div class="container mx-auto w-11/12 md:w-full flex justify-between items-center py-4">
            <div class="">
                <a href="/" class="flex items-center gap-1">
                    <p class="text-lg uppercase font-semibold">Panel de administración</p>
                </a>
            </div>
            <nav class="hidden md:block">
                <ul class="flex gap-10">
                    <li class="text-sm font-semibold hover:bg-black rounded p-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <RouterLink :to="{name: 'home'}">Volver al inicio</RouterLink>
                    </li>
                    <li class="text-sm font-semibold hover:bg-black rounded p-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <RouterLink :to="{name: 'menu'}">Carta actual</RouterLink>
                    </li>
                    <li class="text-sm font-semibold hover:bg-black rounded p-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <RouterLink :to="{name: 'menu'}">Agregar</RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="flex flex-grow justify-end basis-0 md:hidden">
                <button type="button" class="open-menu md:hidden" @click="openMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <!--BURGUER -->
            <div
                v-if="isOpenMenu"
                class="burguer-menu bg-white p-12 absolute right-0 top-0 h-screen z-40 shadow-2xl text-black"
                :class="isOpenMenu ? 'animate-fade-left animate-duration-300' : ''"
            >
                <button class="close-menu" @click="closeMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                </button>
                <nav>
                    <div class="flex items-center gap-2 mt-4">
                        <p class=" font-bold text-xl">Panel de administración</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </div>
                    <ul class="flex flex-col text-right mt-8 space-y-4">
                        <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1 flex items-center justify-end gap-1" @click="isOpenMenu = false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <RouterLink :to="{name: 'home'}">Volver al inicio</RouterLink>
                        </li>
                        <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1 flex items-center justify-end gap-1" @click="isOpenMenu = false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            <RouterLink :to="{name: 'menu'}">Carta actual</RouterLink>
                        </li>
                        <li class="text-sm font-semibold hover:bg-gray-200 rounded p-1 flex items-center justify-end gap-1" @click="isOpenMenu = false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <RouterLink :to="{name: 'menu'}">Agregar</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>