<script setup>
import { defineProps } from 'vue'

defineProps({
  link: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary' // 'primary' | 'secondary' | 'muted'
  },
  customClass: {
    type: String,
    default: ''
  }
})

const baseClasses =
    'font-theme-heading font-medium px-6 py-2 rounded shadow transition duration-200 inline-block text-center'
const variantClasses = {
  primary:
      'bg-theme-primary text-white hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary',
  secondary:
      'bg-theme-secondary text-white hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary',
  muted:
      'bg-gray-100 text-gray-500 hover:bg-white border-2 border-transparent hover:border-theme-grayish-blue hover:text-theme-grayish-blue'
}
</script>

<template>
  <a
      :href="link"
      v-smooth-scroll
      :class="`${baseClasses} ${variantClasses[variant]} ${customClass}`"
  >
    <slot />
  </a>
</template>
