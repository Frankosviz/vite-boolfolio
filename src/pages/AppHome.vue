<template>
    <div>
        <h1>Homepage (App.home)</h1>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppHome',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
</style>