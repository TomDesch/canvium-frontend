<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary", // 'primary' | 'secondary' | 'muted'
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
      :type="type"
      :class="[
      'font-theme-heading font-medium px-6 py-2 rounded shadow transition duration-200',
      variant === 'primary' && 'bg-theme-primary text-white hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary',
      variant === 'secondary' && 'bg-theme-secondary text-white hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary',
      variant === 'muted' && 'bg-gray-100 text-gray-500 hover:bg-white border-2 border-transparent hover:border-theme-grayish-blue hover:text-theme-grayish-blue',
      customClass
    ]"
  >
    <slot />
  </button>
</template>
