<template>
    <div>
        <div v-for="project in projects" :key="project.id">{{ project.title }}
            <img :src="store.imgBasePath + project.cover_image" :alt="project.title">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>