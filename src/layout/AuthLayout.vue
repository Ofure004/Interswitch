<template>
    <div class="authentication">
        <img src="src/assets/image 2.png" alt="logo" style="margin-bottom: 20px;"/>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout'
}
</script>
<style>
.authentication{
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img{
    margin-bottom: 20px;
}
/* .container{
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
p{
    font-weight: 300;
    color: #667085;
    font-size: 16px;
    margin-bottom: 20px;
}
h2{
    font-size: 30px;
} */


</style>