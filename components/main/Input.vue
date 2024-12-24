<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  hasButton: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Placeholder...",
  },
  buttonStyle: {
    type: String,
    default: "default",
  }
});
</script>

<template>
  <div class="flex gap-2 place-items-center relative" :class="{'!gap-0':props.hasButton}">
    <slot name="Icon" v-if="hasIcon" />
    <input
      type="text"
      :placeholder="props.placeholder"
      class="rounded-lg p-2 px-3 w-[500px] h-10 outline-none bg-background font-[500] text-[.875rem] transition-all text-foreground focus:border-borderHover"
      :class="{
        'border border-border bg-transparent !text-background': props.variant == 'outline',
        'pl-10': props.hasIcon,
        'rounded-r-none': props.hasButton,
      }"
    />
    <slot name="button" v-if="props.hasButton" class="inputbtn" :class="{'rounded-l-none h-full': props.buttonStyle == 'inset'}"/>
  </div>
</template>
