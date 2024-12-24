<script setup>
import { ref } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  show: {
    type: Boolean,
    default: false,
  }
});

const mousein = ref(false);
</script>

<template>
  <div 
    @mouseenter="mousein = true"
    @mouseleave="mousein = false"
    class="absolute text-foreground transition-all bottom-[140%] bg-background min-w-40 max-w-16 shadow-xl px-3 py-2 rounded text-[12px] font-inter"
    :class="{
      'bg-card !text-background border border-border': props.variant == 'outline',
      'opacity-0 pointer-events-none': !props.show && !mousein,
    }">
    <slot />
  </div>
</template>
