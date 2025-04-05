<script setup>
import { ref } from 'vue'
import LinkButton from '../components/LinkButton.vue'

const mobileNav = ref(false)
const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}
</script>

<template>
  <div class="section relative">
    <!-- Navbar -->
    <header class="flex items-center justify-between">
      <a href="/">
        <img src="/images/logo-bookmark.svg" alt="Site Logo" class="h-8 sm:h-10" />
      </a>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-10 font-theme-heading text-sm uppercase tracking-wide">
        <a href="#features" v-smooth-scroll class="hover:text-theme-secondary fancy-underline">Features</a>
        <a href="#faq" v-smooth-scroll class="hover:text-theme-secondary fancy-underline">FAQ</a>
        <a href="#subscribe" v-smooth-scroll class="hover:text-theme-secondary fancy-underline">Subscribe</a>

        <!-- ✅ New: Use LinkButton here -->
        <LinkButton link="#download-section" variant="secondary">
          Download
        </LinkButton>
      </nav>

      <!-- Mobile Toggle Button -->
      <button @click="toggleMobileNav()" class="md:hidden focus:outline-none">
        <svg viewBox="0 0 24 24" class="h-6 w-6 text-theme-dark-blue">
          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      </button>
    </header>

    <!-- Mobile Menu (only change the Download button) -->
    <div v-show="mobileNav" class="absolute inset-0 z-30 bg-theme-dark-blue-tp backdrop-blur-sm px-6 py-12">
      <!-- ... nav items above ... -->

      <!-- ✅ New: Use LinkButton here too -->
      <div class="pt-6 text-center">
        <LinkButton
            link="#download-section"
            variant="secondary"
            customClass="w-full block text-center border-white text-white hover:text-theme-secondary"
            @click="toggleMobileNav()"
        >
          Download
        </LinkButton>
      </div>

      <!-- ... social icons stay unchanged ... -->
    </div>
  </div>
</template>
