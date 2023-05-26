<template>
    <AuthLayout>
        <div class="container">
            <h2> Set your password </h2>
            <form @submit.prevent="submitted()">
                <div class="bold">Password*</div>
                <input type="password" id="createpassword" placeholder="Create password" required :maxlength="max" v-model="createpassword" />
                <p>Must be at least 8 characters</p>

                <div class="bold">Confirm Password*</div>
                <input type="password" id="confirmpassword" placeholder="Confirm password" v-model="confirmpassword" :maxlength="max"/>
                <h6 v-if="!err">Passwords must match!</h6>

                <button v-if="!fieldIsFilled">Create Account</button>
                <RouterLink to="/" type="button" class="button" v-else-if="fieldIsFilled || err ">Create Account</RouterLink>
            </form>
            <div>Already have an account?<router-link class="signup" to="/"> Login </router-link></div>

        </div>
    </AuthLayout>
</template>

<script>
import AuthLayout from '../layout/AuthLayout.vue';
export default {
    components: { AuthLayout },
    name: 'Setpassword',
    data(){
        return{
            createpassword : '',
            confirmpassword: '',
            max: 8
        }
    },
    methods: {
        passwordconfirm(){
            if (this.createpassword === this.confirmpassword && this.confirmpassword === ''){
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
        fieldIsFilled(){
            return this.createpassword && this.confirmpassword
        },
        err(){
            return this.createpassword === this.confirmpassword
        }
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
.incorrect{
    outline-color: red;
}

</style>