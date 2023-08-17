<script setup>
    import { ref } from 'vue'
    import ChildComponent from './ChildComponent.vue'
    
    const message = ref('Hello, from parentComponent!')

    const messageEmitted = (_message) => {
        message.value = _message
    }
</script>

<template>
    <div class="border border-dashed rounded-lg p-11">
        <h6 class="font-semibold mb-4">Parent Component</h6>
        <p class="text-sm text-gray-500">{{ message }}</p>

        <ChildComponent @message-emitted="messageEmitted" :message="message" />
    </div>
</template>

<style scoped>

</style>
