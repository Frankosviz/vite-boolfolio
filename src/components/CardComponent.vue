<template>
    <div>
        <div class="card">
            <img :src="store.imgBasePath + store.projects[0].cover_image" class="card-img-top" :alt="store.projects[0].title">
            <div class="card-body">
                <h5 class="card-title">{{ store.projects[0].title }}</h5>
                <p class="card-text">{{ store.projects[0].description }}</p>
                 <RouterLink class="btn btn-primary" :to="{ name: 'single-project', params: { slug: project.slug } }">Guarda il progetto</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'CardComponent',

    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>