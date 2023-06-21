<template>
      <div class="row" ref="otpCont">
            <input @keydown="handleKeyDown($event, ind)"
            type="text"
            class="otp"
            v-for="(el, ind) in digits"
            :key="el+ind"
            v-model="digits[ind]"
            :autofocus="ind === 0"
            placeholder="0"
            maxlength="1"
            >
        </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'
    const props = defineProps({
            default: String,

            digitCount: {
            type: Number,
            required: true
            }
    });

    const digits = reactive([])

    if (props.default && props.default.length === props.digitCount) {
        for (let i =0; i < props.digitCount; i++) {
        digits[i] = props.default.charAt(i)
        }
    } else {
        for (let i =0; i < props.digitCount; i++) {
        digits[i] = null;
        }
    }

    const otpCont = ref(null)
    const emit = defineEmits(['update:otp']);

    const isDigitsFull = function () {
        for (const elem of digits) {
            if (elem == null || elem == undefined) {
            return false;
            }
        }

        return true;
    }

    const handleKeyDown = function (event, index){
        if (event.key !== "Tab" && 
            event.key !== "ArrowRight" &&
            event.key !== "ArrowLeft"
        ) {
        event.preventDefault();
        }
        
        if (event.key === "Backspace") {
        digits[index] = null;
        
        if (index != 0) {
            (otpCont.value.children)[index-1].focus();
        } 

        return;
        }

        if ((new RegExp('^([0-9])$')).test(event.key)) {
        digits[index] = event.key;

        if (index != props.digitCount - 1) {
            (otpCont.value.children)[index+1].focus();
        }
        if (isDigitsFull()) {
            emit('update:otp', digits.join(''))
        }
        }
    }
</script>

<style>
.row{
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}
.otp{
    width: 60px;
    /* height: 21px; */
    text-align: center;
    font-weight: bold;
    font-size: 21px;
    padding: 10px 7px;
    border:1px solid #D0D5DD;
    border-radius: 8px ;
}
.otp::placeholder{
    font-weight: 500;
    font-size: 27px;
    text-align: center;
    color:#D0D5DD;
}
    
</style>