<template>
    <div>
        Contact Us
        <div class="row">
            <div class="col-12">
                <div class="alert alert-success" v-if="success">
                    Messaggio inviato con successo!
                </div>
            </div>
        </div>
        <div v-if="errors">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
        <div class="row">
            <form @submit.prevent="sendForm()" class="col-12 text-start">
                <div class="mb-3">
                    <input type="text" class="form-control border-0 border-bottom" placeholder="Name" v-model="name">
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control border-0 border-bottom" placeholder="Email" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="message">Your message</label>
                    <textarea id="message" cols="30" rows="10" class="form-control border-0 border-bottom" placeholder="Message" v-model="message">{{ message }}</textarea>
                </div>
                <button type="submit" :disabled="loading" class="btn btn-primary">{{ loading ? 'Sending...' : 'Send' }}</button>
            </form>
        </div>
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
            const data ={
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