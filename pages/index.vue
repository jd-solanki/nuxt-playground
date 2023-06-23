<script lang="ts" setup>
const appConfig = useAppConfig()
</script>

<template>
    <div>
        <h1>Theme: {{ appConfig.themeConfig.theme }}</h1>
    </div>
</template>
