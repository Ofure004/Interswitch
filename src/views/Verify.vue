<template>
    <AuthLayout>
        <div class="container">
            <h3 style="margin-bottom: 0;"> Verify your email address </h3>
            <p> Enter OTP sent to {{ this.detailsStore.email }} </p>
            <form>
              <OtpComponent :digit-count="6" @update:otp="otpValue = $event"></OtpComponent>
              <p>The current OTP value is: {{ otpValue }} </p>
                <!-- <div class="row">
                    <input type="text" id="otp" placeholder="0" v-model="otp" :maxlength="max" @input ="filterNonNumeric()"/>
                    <input type="text" id="otp" placeholder="0" v-model="otp1" :maxlength="max" @input ="filterNonNumeric()"/>
                    <input type="text" id="otp" placeholder="0" v-model="otp2" :maxlength="max" @input ="filterNonNumeric()"/>
                    <input type="text" id="otp" placeholder="0" v-model="otp3" :maxlength="max" @input ="filterNonNumeric()"/>
                </div> -->
                <a class="button link" v-if="!fieldIsFilled">Verify email</a>
                <RouterLink to="/dashboard" type="button" class="button link" v-else>Verify email</RouterLink>
            </form>
            <div>Didn't get a code?<a class="signup link">Resend OTP</a></div>

        </div>
    </AuthLayout>
</template>

<script>
import { mapStores } from 'pinia';
import AuthLayout from '../layout/AuthLayout.vue';
import { useDetailsStore } from '../stores/details';
import OtpComponent from '../components/OtpComponent.vue';
export default { 
    // setup(){
    //     otpValue = ref('');
    // },
    data(){
        return{
            otpValue : ''
        }
    },
    computed: {
    ...mapStores(useDetailsStore),
    fieldIsFilled(){
        return this.otpValue;
    }
    },
    // methods: {
    //     filterNonNumeric() {
	// 		this.otp = this.otp.replace(/[^0-9]/g, "");
	// 		this.otp1 = this.otp1.replace(/[^0-9]/g, "");
	// 		this.otp2 = this.otp2.replace(/[^0-9]/g, "");
	// 		this.otp3 = this.otp3.replace(/[^0-9]/g, "");
	// 	}
    // },
    components: { AuthLayout, OtpComponent },
    name: 'Verify'
}
</script>
<style scoped>
form{
    width: 40%;
}
body{
    padding-top: 50px;
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