<script setup>
import Button from '../Button/Button.vue';

const props = defineProps({
    variant: {
        type: String,
        default: "default",
    },
    buttonStyle: {
        type: String,
        default: "default",
    }
})
</script>

<template #button>
    <Button :variant="props.variant" class="h-10 border-l-0 rounded-l-none">
        <slot />
    </Button>
</template>
