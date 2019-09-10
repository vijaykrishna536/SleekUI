<template>
    <div>
        <div class="main">
            <h1>Loan Calculator</h1>
            <h5>Calculate Loans in minutes...</h5>
            <div class="input">
                Total Loan Amount 
                <input v-model="principal" type="number">
            </div>
            <div class="input">
                Years
                <input v-model="Years" type="number">
            </div>
            <div class="bankname">
                Choose Bank:
                <span @click="Calculate('SBI')"> SBI </span>  
                <span @click="Calculate('HDFC')"> HDFC </span>  
                <span @click="Calculate('ICICI')"> ICICI </span>  
                <span @click="Calculate('Axis Bank')"> Axis Bank </span>  
            </div>
            <div>
                Total Amount Payble
                <input v-model="TotalAmount" readonly>
            </div>
            <button @click="clean()">Clear </button>
        </div>
    </div>
</template>


<script src="./Loan.js"></script>


<style type="text/css" scoped>
.main {
    margin: auto; 
    border: 3px solid #73AD21;
    padding: 10px;
    width: 50%
}
.main button {
    margin-top: 10px;
}
.navigation button {
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}
.input {
    margin-bottom: 5px;
}
.main h1 {
    margin-bottom: 2px;
}
.main h5 {
    margin-top: 1px;
    margin-bottom: 20px;
}
.bankname {
    margin: 20px;
}
.bankname span {
    background-color: gray;
    color: white;
    margin: 1px,1px,5px,5px;
    border: 2px solid gray;
    padding: 2px;
}
</style>