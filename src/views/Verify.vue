<template>
    <AuthLayout>
        <div class="container">
            <h3> Verify your email address </h3>
            <p> Enter OTP sent to {{ this.emailStore.email }} </p>
            <form>
                <div class="row">
                    <input type="text" id="otp" placeholder="0" v-model="otp" :maxlength="max" @input ="filterNonNumeric()"/>
                    <input type="text" id="otp" placeholder="0" v-model="otp1" :maxlength="max" @input ="filterNonNumeric()"/>
                    <input type="text" id="otp" placeholder="0" v-model="otp2" :maxlength="max" @input ="filterNonNumeric()"/>
                    <input type="text" id="otp" placeholder="0" v-model="otp3" :maxlength="max" @input ="filterNonNumeric()"/>
                </div>
                <a class="button" v-if="!fieldIsFilled">Verify email</a>
                <RouterLink to="/setpassword" type="button" class="button" v-else>Verify email</RouterLink>
            </form>
            <div>Didn't get a code?<a class="signup">Resend OTP</a></div>

        </div>
    </AuthLayout>
</template>

<script>
import { mapStores } from 'pinia';
import AuthLayout from '../layout/AuthLayout.vue';
import { useEmailStore } from '../stores/email';
export default {
    data(){
        return{
            otp: '',
            otp1: '',
            otp2: '',
            otp3: '',
            max: 1
        }
    },
    computed: {
    ...mapStores(useEmailStore),
    fieldIsFilled(){
        return this.otp && this.otp1 && this.otp2 && this.otp3
    }
    },
    methods: {
        filterNonNumeric() {
			this.otp = this.otp.replace(/[^0-9]/g, "");
			this.otp1 = this.otp1.replace(/[^0-9]/g, "");
			this.otp2 = this.otp2.replace(/[^0-9]/g, "");
			this.otp3 = this.otp3.replace(/[^0-9]/g, "");
		}
    },
    components: { AuthLayout },
    name: 'Verify'
}
</script>
<style scoped>
form{
    width: 40%;
}
.row{
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
#otp{
    width: 30px;
    height: 21px;
    text-align: center;
    font-weight: bold;
    font-size: 21px;
}
body{
    padding-top: 50px;
}
#otp::placeholder{
    font-weight: bold;
    font-size: 21px;
    text-align: center;
}
p{
    margin-bottom: 20px;
}
.button{
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
}

    
</style>