<template>
    <AuthLayout>
        <div class="container">
            <h2 class="big_text"> Set your password </h2>
            <form @submit.prevent="submitted()">
                <div class="bold">Password*</div>
                <input type="password" id="createpassword" placeholder="Create password" class="input" required :maxlength="max" v-model="this.detailsStore.createpassword" />
                <p v-if="!correctlength">Must be at least 8 characters</p>

                <div class="bold">Confirm Password*</div>
                <input type="password" id="confirmpassword" placeholder="Confirm password" class="input" v-model="confirmpassword" :maxlength="max"/>
                <h6 v-if="!err">Passwords must match!</h6>

                <button class="button" v-if="!fieldIsFilled">Create Account</button>
                <RouterLink to="/verification" type="button" class="button link" v-else-if="fieldIsFilled || err ">Create Account</RouterLink>
            </form>
            <div>Already have an account?<router-link class="signup link" to="/"> Login </router-link></div>

        </div>
    </AuthLayout>
</template>

<script>
import { mapStores } from 'pinia';
import AuthLayout from '../layout/AuthLayout.vue';
import { useDetailsStore } from '../stores/details';
export default {
    components: { AuthLayout },
    name: 'Setpassword',
    data(){
        return{
            // createpassword : '',
            // confirmpassword: '',
            max: 8
        }
    },
    methods: {
        passwordconfirm(){
            if (this.detailsStore.createpassword === this.detailsStore.confirmpassword && this.detailsStore.confirmpassword === ''){
                this.error = false;
            } else{
                this.error = true;

            }
        },
        submitted(e) {
            e.preventDefault();
        }
    },
    computed: {
        ...mapStores(useDetailsStore),
        fieldIsFilled(){
            return this.detailsStore.createpassword && this.detailsStore.confirmpassword
        },
        err(){
            return this.detailsStore.createpassword === this.detailsStore.confirmpassword
        },
        correctlength(){
            return this.detailsStore.createpassword.length === this.max
        },
    }
}
</script>
<style scoped>
h2{
    margin-bottom: 20px;
}
form{
    width: 45%;
}
#createpassword,
#confirmpassword{
    margin: unset;
}
button{
    margin-top: 25px;
}
p{
    font-size: 14px;
}
h6{

    color: red;
    font-size: 13px;
}

</style>