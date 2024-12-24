<script setup>
import { ref } from 'vue';
import Tooltip from '../Tooltip/tooltip.vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  sizing: {
    type: String,
    default: "default",
  },
  variant: {
    type: String,
    default: "default",
  },
  tooltipdelay: {
    type: Number,
    default: 1000,
  }
});

const tooltipVisibility = ref(false);

function hoverForTime() {
  setTimeout(() => {
    tooltipVisibility.value = true;
  }, props.tooltipdelay);
}

function hideTooltip(time) {
  setTimeout(() => {
    tooltipVisibility.value = false;
  }, time);
}
</script>

<template>
  <div
    @mouseenter="hoverForTime"
    @mouseleave="hideTooltip(300)"
    :class="[
      'px-5 text-sm relative font-semibold py-2 bg-background transition-all rounded-md flex gap-3 place-items-center justify-center cursor-pointer hover:bg-backgroundHover hover:text-foregroundHover',
      {
        'opacity-50 hover:bg-background hover:text-foreground !cursor-not-allowed': props.disabled,
        'px-2 py-2': props.sizing == 'icon',
        'border border-border bg-transparent !text-background hover:bg-foregroundHover hover:!text-backgroundHover': props.variant == 'outline',
        'text-foreground': props.variant == 'default',
      }
    ]">
    <slot class="font-inter"></slot>
    <Tooltip :show="tooltipVisibility" :variant="props.variant">
      <slot name="tooltip"></slot>
    </Tooltip>
  </div>
</template>

<style scoped></style>
