<script setup>

</script>

<template>
  <div class="wrapper">
    <!-- <LogInView></LogInView>
    <SignUp></SignUp> -->
    <RouterView></RouterView>
  
  </div>

</template>

<style scoped>
  *{
    /* background-color: aqua; */
    height: 100%;
    width: 100%;
    font-family: 'Outfit', sans-serif;
    color: #344054;

  }
  .wrapper{
    /* padding-top: 2rem;
    padding-bottom: 2rem; */
    margin: 0 auto;
    display: flex;
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
    gap: 24px;
  }


</style>