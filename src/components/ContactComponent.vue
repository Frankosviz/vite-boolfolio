<template>
    <div class="alert alert-success" v-if="success">
        Messaggio inviato con successo!
    </div>

    <div v-if="errors">
        <p v-for="error in errors">{{ error }}</p>
    </div>
    <div class="h-100">
        <form @submit.prevent="sendForm()" class="f-d-editform-container f-d-transparent-layer-edit">
            <div class="mb-3">
                <label class="form-label lightbrown fw-bold" for="name">Name</label>
                <input type="text" class="form-control f-d-bg-form" placeholder="Name" v-model="name">
            </div>
            <div class="mb-3">
                <label class="form-label lightbrown fw-bold" for="name">Email</label>
                <input type="email" class="form-control f-d-bg-form" placeholder="Email" v-model="email">
            </div>
            <div class="mb-3">
                <label class="form-label lightbrown fw-bold" for="message">Your message</label>
                <textarea id="message" cols="30" rows="10" class="form-control f-d-bg-form" placeholder="Message"
                    v-model="message">{{ message }}</textarea>
            </div>
            <button type="submit" :disabled="loading" class="f-d-button-form">{{ loading ? 'Sending...' : 'Send'
                }}</button>
        </form>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'ContactComponent',
    data() {
        return {
            store,
            name: '',
            address: '',
            message: '',
            errors: {},
            loading: false,
            success: false
        }
    },
    methods: {
        sendForm() {
            this.success = false;
            this.loading = true;
            const data = {
                name: this.name,
                address: this.email,
                message: this.message
            }
            // console.log(data)
            axios.post(this.store.apiBaseUrl + '/contacts', data).then((res) => {
                // console.log(res.data)
                this.success = true;
                this.name = '';
                this.address = '';
                this.message = '';
            }).catch((error) => {
                this.errors = error.response.data.errors;
            }).finally(() => {
                // Nella finally svuotiamo i campi dopo che l'utente ha inviato il form, solo se tutto è andato bene
                this.name = '';
                this.address = '';
                this.message = '';
                this.loading = false;
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>