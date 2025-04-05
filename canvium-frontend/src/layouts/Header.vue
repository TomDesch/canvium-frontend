<script setup>
import { ref } from 'vue'

const mobileNav = ref(false)
const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}
</script>

<template>
  <div class="section relative">
    <!-- Navbar -->
    <header class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/">
        <img src="/images/logo-bookmark.svg" alt="Site Logo" class="h-8 sm:h-10" />
      </a>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-10 font-theme-heading text-sm uppercase tracking-wide">
        <a href="#features" v-smooth-scroll class="hover:text-theme-secondary fancy-underline">Features</a>
        <a href="#faq" v-smooth-scroll class="hover:text-theme-secondary fancy-underline">FAQ</a>
        <a href="#subscribe" v-smooth-scroll class="hover:text-theme-secondary fancy-underline">Subscribe</a>
        <a href="#download-section" v-smooth-scroll class="btn-secondary">Download</a>
      </nav>

      <!-- Mobile Toggle -->
      <button @click="toggleMobileNav()" class="md:hidden focus:outline-none">
        <svg viewBox="0 0 24 24" class="h-6 w-6 text-theme-dark-blue">
          <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </header>

    <!-- Mobile Menu -->
    <div v-show="mobileNav" class="absolute inset-0 z-30 bg-theme-dark-blue-tp backdrop-blur-sm px-6 py-12">
      <div class="flex justify-between items-center">
        <img src="/images/logo-bookmark-white.svg" alt="Logo" class="h-8" />
        <button @click="toggleMobileNav()" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>

      <ul class="mt-12 flex flex-col text-white uppercase tracking-wider font-theme-heading text-lg divide-y divide-theme-grayish-blue">
        <li class="py-4 text-center hover:text-theme-secondary">
          <a href="#features" @click="toggleMobileNav()">Features</a>
        </li>
        <li class="py-4 text-center hover:text-theme-secondary">
          <a href="#faq" @click="toggleMobileNav()">FAQ</a>
        </li>
        <li class="py-4 text-center hover:text-theme-secondary">
          <a href="#subscribe" @click="toggleMobileNav()">Subscribe</a>
        </li>
        <li class="pt-6">
          <a
              href="#download-section"
              @click="toggleMobileNav()"
              class="block text-center border-2 border-white rounded px-6 py-2 hover:text-theme-secondary transition duration-200"
          >
            Download
          </a>
        </li>
      </ul>

      <div class="mt-10 flex justify-center space-x-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook text-white hover:text-theme-secondary transition" viewBox="0 0 16 16">
          <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter text-white hover:text-theme-secondary transition" viewBox="0 0 16 16">
          <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
