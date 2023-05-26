<template>
    <AuthLayout>
        <div class="container">
            <h2> Log in to your account </h2>
            <p>Welcome back! Please enter your details</p>
            <form>
                <div class="bold">Email</div>
                <input type="email" id="email" placeholder="Enter your email" v-model="email" required/>

                <div class="bold">Password</div>
                <input type="password" id="password" placeholder="........" v-model="password" required :maxlength="max"/>

                <div class="password-control">
                    <input type="checkbox" id="rememberpassword" v-model="rememberpassword"/>
                    <label for="rememberpassword"> Remember for 30 days</label>
                    <a href="#"> Forgot Password</a>
                </div>
                <button id="submit">Sign in</button>
            </form>
            <div>Don't have an account?<router-link to="/signup" class="signup">Signup</router-link></div>
        </div>
    </AuthLayout>
</template>

<script>
import AuthLayout from '../layout/AuthLayout.vue';

export default {
    components :{ AuthLayout },
    name : 'LogInView',
    data(){
        return{
            email : '',
            password: '',
            rememberpassword: false,
            max: 8
        }

    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
.container{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
    justify-content: center;
}
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
label{
    margin-right: 5rem;
    font-weight: bold;
    font-size: 14px;
}
.bold{
    font-size: 14px;
    font-weight: bold;
}
input{
    margin-bottom: 1rem;
    padding: 13px 14px;
    border-radius: 8px;
    border: 2px solid;
    border-color: #D0D5DD;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color:#344054;
}
input:focus{
    outline-color: #33536F;
}
a{
    text-decoration: none;
    color: #33536F;
    font-weight: bold;
    font-size: 16px;
}
button{
    text-align: center;
    padding: 13px 18px;
    border-radius: 8px;
    background-color: #1570EF;
    border: none;
    color: white;
    margin-bottom: 21px;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
}
*::placeholder {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    line-height: 24px;
}
#password::placeholder{
    font-size: 20px;
}
.signup{
    margin-left: 9px;
}
h2{
    font-size: 30px;
}
span{
    font-weight: 300;
    color: #667085;
}
p{
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 300;
    color: #667085;
}
span{
    font-size: 14px;
}
.bold
label{
    color:#344054;
}
</style>