<template>
    <AuthLayout>
        <div class="container">
            <h2 class="big_text"> Create Account </h2>
            <p>Welcome back! Please enter your details</p>
            <form>
                <div class="form_control">

                    <div class="column">
                        <div class="bold">First Name</div>
                        <input type="text" id="fname" placeholder="Enter firstname" v-model="this.detailsStore.fname" required class="input"/>
                    </div>

                    <div class="column">
                        <div class="bold">Last Name</div>
                        <input type="text" id="lname" placeholder="Enter lastname" v-model="this.detailsStore.lname" required class="input"/>
                    </div>

                </div>

                <div class="flex">
                    <div class="bold">Email Address</div>
                    <h6 v-if="!isValidEmail && this.detailsStore.email">Invalid input!</h6>
                </div>
                <input type="email" id="email" placeholder="Enter email address" v-model="this.detailsStore.email" class="input"/>

                <div class="bold">Phone Number</div>
                <input type="text" id="pNumber" placeholder="Enter phone number" v-model="this.detailsStore.pNumber"  class="input" @input="filterNonNumeric()" :maxlength="max"/>
                

                <div class="bold">Business Name</div>
                <input type="text" id="bName" placeholder="Enter business name" v-model="this.detailsStore.bName"  class="input" required/>

                <div class="bold">Country</div>
                <select name="countries" v-model="this.detailsStore.dropdown">
                    <option value="" disabled selected hidden class="disabled"> Select a country </option>
                    <option v-for=" country in countries" :value="country" :key="country"> {{ country }}</option>
                </select>
                <h6 v-if="!fieldIsFilled && show">All fields must be filled correctly!</h6>


                <a class="button link" v-if="!fieldIsFilled" @click="display()">Create Account</a>
                <RouterLink to="/setpassword" type="button" class="button link" v-else @click="createAccount()">Create Account</RouterLink>
            </form>
            <div>Already have an account?<router-link class="signup link" to="/"> Login </router-link></div>
        </div>
    </AuthLayout>
</template>

<script>
    import axios from 'axios';
    import { mapStores } from 'pinia';
    import AuthLayout from '../layout/AuthLayout.vue';
    import { useDetailsStore } from '../stores/details';
export default {
    components :{ AuthLayout },
    name: 'SignUp',
    data(){
        return{
            countries: [
            '   Afghanistan '  ,
            '   Albania '  ,
            '   Algeria '  ,
            '   Andorra '  ,
            '   Angola '  ,
            '   Antigua and Barbuda '  ,
            '   Argentina '  ,
            '   Armenia '  ,
            '   Australia '  ,
            '   Austria '  ,
            '   Azerbaijan '  ,
            '   Bahamas '  ,
            '   Bahrain '  ,
            '   Bangladesh '  ,
            '   Barbados '  ,
            '   Belarus '  ,
            '   Belgium '  ,
            '   Belize '  ,
            '   Benin '  ,
            '   Bhutan '  ,
            '   Bolivia '  ,
            '   Bosnia and Herzegovina '  ,
            '   Botswana '  ,
            '   Brazil '  ,
            '   Brunei '  ,
            '   Bulgaria '  ,
            '   Burkina Faso '  ,
            '   Burundi '  ,
            '   Cabo Verde '  ,
            '   Cambodia '  ,
            '   Cameroon '  ,
            '   Canada '  ,
            '   Central African Republic '  ,
            '   Chad '  ,
            '   Chile '  ,
            '   China '  ,
            '   Colombia '  ,
            '   Comoros '  ,
            '   Congo (Congo-Brazzaville) '  ,
            '   Costa Rica '  ,
            '   Côte dIvoire ',
            '   Croatia '  ,
            '   Cuba '  ,
            '   Cyprus '  ,
            '   Czechia '  ,
            '   Democratic Republic of the Congo '  ,
            '   Denmark '  ,
            '   Djibouti '  ,
            '   Dominica '  ,
            '   Dominican Republic '  ,
            '   Ecuador '  ,
            '   Egypt '  ,
            '   El Salvador '  ,
            '   Equatorial Guinea '  ,
            '   Eritrea '  ,
            '   Estonia '  ,
            '   Ethiopia '  ,
            '   Fiji '  ,
            '   Finland '  ,
            '   France '  ,
            '   Gabon '  ,
            '   Gambia '  ,
            '   Georgia '  ,
            '   Germany '  ,
            '   Ghana '  ,
            '   Greece '  ,
            '   Grenada '  ,
            '   Guatemala '  ,
            '   Guinea '  ,
            '   Guinea-Bissau '  ,
            '   Guyana '  ,
            '   Haiti '  ,
            '   Holy See '  ,
            '   Honduras '  ,
            '   Hungary '  ,
            '   Iceland '  ,
            '   India '  ,
            '   Indonesia '  ,
            '   Iran '  ,
            '   Iraq '  ,
            '   Ireland '  ,
            '   Israel '  ,
            '   Italy '  ,
            '   Jamaica '  ,
            '   Japan '  ,
            '   Jordan '  ,
            '   Kazakhstan '  ,
            '   Kenya '  ,
            '   Kiribati '  ,
            '   Kuwait '  ,
            '   Kyrgyzstan '  ,
            '   Laos '  ,
            '   Latvia '  ,
            '   Lebanon '  ,
            '   Lesotho '  ,
            '   Liberia '  ,
            '   Libya '  ,
            '   Liechtenstein '  ,
            '   Lithuania '  ,
            '   Luxembourg '  ,
            '   Madagascar '  ,
            '   Malawi '  ,
            '   Malaysia '  ,
            '   Maldives '  ,
            '   Mali '  ,
            '   Malta '  ,
            '   Marshall Islands '  ,
            '   Mauritania '  ,
            '   Mauritius '  ,
            '   Mexico '  ,
            '   Micronesia '  ,
            '   Moldova '  ,
            '   Monaco '  ,
            '   Mongolia '  ,
            '   Montenegro '  ,
            '   Morocco '  ,
            '   Mozambique '  ,
            '   Myanmar (formerly Burma) '  ,
            '   Namibia '  ,
            '   Nauru '  ,
            '   Nepal '  ,
            '   Netherlands '  ,
            '   New Zealand '  ,
            '   Nicaragua '  ,
            '   Niger '  ,
            '   Nigeria '  ,
            '   North Korea '  ,
            '   North Macedonia '  ,
            '   Norway '  ,
            '   Oman '  ,
            '   Pakistan '  ,
            '   Palau '  ,
            '   Palestine State '  ,
            '   Panama '  ,
            '   Papua New Guinea '  ,
            '   Paraguay '  ,
            '   Peru '  ,
            '   Philippines '  ,
            '   Poland '  ,
            '   Portugal '  ,
            '   Qatar '  ,
            '   Romania '  ,
            '   Russia '  ,
            '   Rwanda '  ,
            '   Saint Kitts and Nevis '  ,
            '   Saint Lucia '  ,
            '   Saint Vincent and the Grenadines '  ,
            '   Samoa '  ,
            '   San Marino '  ,
            '   Sao Tome and Principe '  ,
            '   Saudi Arabia '  ,
            '   Senegal '  ,
            '   Serbia '  ,
            '   Seychelles '  ,
            '   Sierra Leone '  ,
            '   Singapore '  ,
            '   Slovakia '  ,
            '   Slovenia '  ,
            '   Solomon Islands '  ,
            '   Somalia '  ,
            '   South Africa   South Korea '  ,
            '   South Sudan '  ,
            '   Spain '  ,
            '   Sri Lanka '  ,
            '   Sudan '  ,
            '   Suriname '  ,
            '   Swaziland '  ,
            '   Sweden '  ,
            '   Switzerland '  ,
            '   Syria '  ,
            '   Tajikistan '  ,
            '   Tanzania '  ,
            '   Thailand '  ,
            '   Timor-Leste '  ,
            '   Togo '  ,
            '   Tonga '  ,
            '   Trinidad and Tobago '  ,
            '   Tunisia '  ,
            '   Turkey '  ,
            '   Turkmenistan '  ,
            '   Tuvalu '  ,
            '   Uganda '  ,
            '   Ukraine '  ,
            '   United Arab Emirates '  ,
            '   United Kingdom '  ,
            '   United States of America '  ,
            '   Uruguay '  ,
            '   Uzbekistan '  ,
            '   Vanuatu '  ,
            '   Venezuela '  ,
            '   Vietnam '  ,
            '   Yemen '  ,
            '   Zambia '  ,
            '   Zimbabwe'  ,

            ],
            show: false,
            max: 11
        }
    },
    computed: {
    ...mapStores(useDetailsStore),
    isValidEmail() {
      return /^[^@]+@\w+(\.\w+)+\w$/.test(this.detailsStore.email);
    },
    fieldIsFilled(){
            return this.detailsStore.fname && this.detailsStore.lname && this.detailsStore.pNumber && this.detailsStore.bName && this.detailsStore.email && this.detailsStore.dropdown && this.isValidEmail
        },
    display(){
        this.show = true;
    }
    },
    methods: {
        filterNonNumeric() {
			this.detailsStore.pNumber = this.detailsStore.pNumber.replace(/[^0-9]/g, "");
		},
        createAccount(){
            axios.post(
                'https://icjjfyhv6b.execute-api.us-east-1.amazonaws.com/dev/authentication/initiate-enrollment',
                {customerFirstName: this.detailsStore.fname,
                customerLastName: this.detailsStore.lname,
                customerEmail: this.detailsStore.email,
                customerPhone: this.detailsStore.pNumber,
                customerBusinessName: this.detailsStore.bName,
                customerCountry: this.detailsStore.dropdown,
                customerCountryCode: '+234',
                source: "WEB"},).then((response) =>{console.log(response)}).console.error();
        }
    }
}
</script>
<style>
.form_control{
    display: flex;
    flex-direction: row;
    gap: 25px;
}
.column{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
select{
    padding: 13px 14px;
    border-radius: 8px;
    border: 2px solid;
    border-color: #D0D5DD;
}
option, select{
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    line-height: 24px;
}
.button{
    text-align: center;
    padding: 13px 18px;
    border-radius: 8px;
    background-color: #1570EF;
    border: none;
    color: white;
    margin-bottom: 21px;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    margin-top: 1rem;
}
h6{
    color: red;
    font-size: 14px;
}
.flex{
    display: flex;
    gap: 10px;
}

/* Chrome, Safari, Edge, Opera
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
/* input[type=number] {
  -moz-appearance: textfield;
} */
    
</style>