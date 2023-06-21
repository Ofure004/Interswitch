<template>
    <Dashboardlayout>
        <div class="dash-wrapper">
            <div class="flex-container">
                <div class="flex-row">
                    <h2>Dashboard</h2>
                    <div class="flex-row wallet_activities">
                        <div class="fund flex-row blue" @click="fund()">
                            <img src="src/assets/add.png">
                            Fund Wallet
                        </div>
                        <div class="withdraw flex-row white" @click="withdraw()">
                            <img src="src/assets/withdraw.png">
                            Withdraw
                        </div>
                    </div>
                </div>
                <div class= "flex-row wallet">
                    <div class="flex-row section">
                        <div class="flex-col subsection">
                            <div>Wallet Balance</div>
                            <div class="zero">0</div>
                        </div>
                        <img src="src/assets/walletbalance.png"/>
                    </div>
                    <hr class="vertical vertical_line">
                    <div class="flex-row section">
                        <div class="flex-col subsection">
                            <div>Number of Wallets</div>
                            <div class="zero">0</div>
                        </div>
                        <img src="src/assets/wallet.png"/>
                    </div>
                    <hr class="vertical vertical_line">
                    <div class="flex-row section">
                        <div class="flex-col subsection">
                            <div>Number of Accounts</div>
                            <div class="zero">0</div>
                        </div>
                        <img src="src/assets/wallet.png"/>
                    </div>
                </div>
                <div class="flex-col transactions">
                    <div class="big"> Transactions {{ this.items[0].status }}</div>
                    <div class="flex-row searchbar">
                        <input type="text" id="search" name="search" placeholder="Search transactions">
                        <div class="filter">
                            Filter
                        </div>
                    </div>
                </div>
            </div>
                <div class="big_table">
                    <b-table striped hover :items="items" :fields="fields" class="mini_table" :per-page="perPage" :current-page="currentPage">
                        
                        <template #cell(photo) class="image">
                            <div class="image"></div>
                        </template>
                        <template #cell(status)="data">
                            <div v-if="data.value === 'SUCCESSFUL'" class="success"> SUCCESSFUL</div>
                            <div v-else class="fail"> FAILED</div>
                        </template>
                        <template #table-caption> 20 results </template>
                    </b-table>
                    <div class="pagin">
                        <div class="show">
                            Show
                            <select v-model="perPage" class="select">
                                <option value="1" selected> 1 </option>
                                <option value="2" selected> 2 </option>
                                <option value="3" selected> 3 </option>
                                <option value="4" selected> 4 </option>
                                <option value="5" selected> 5 </option>
                                <option value="6" selected> 6 </option>
                                <option value="7" selected> 7 </option>
                                <option value="8" selected> 8 </option>
                                <option value="9" selected> 9 </option>
                                <option value="10" selected> 10 </option>
                            </select>
                        </div>
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            first-number
                            :last-number= "perPage"
                        ></b-pagination>
                </div>

                </div>
        </div>
            <!-- <table>
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Amount</th>
                        <th>Transaction Reference</th>
                        <th>Payment Reference</th>                      
                        <th>Transaction Date</th>                        
                        <th>Status</th>
                        <th> </th>                        

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items">
                        <td :key= "item.id">{{ item.sender }}</td>
                        <td :key="item.id">{{ item.receiver }}</td>
                        <td :key="item.id">{{ item.amount }}</td>
                        <td :key="item.id">{{ item.trans_reference }}</td>
                        <td :key="item.id" class="bigger">{{ item.payment_reference }}</td>
                        <td :key="item.id">{{ item.date }}</td>
                        <td v-if="isSuccessful" class="success" > {{ item.status }}</td>
                        <td v-else class="fail"> {{ item.status }}</td>
                        <td :key="item.id" class="image">{{ item.photo }}</td>
                    </tr>
                </tbody>
            </table> -->
            <div class="backdrop" v-if="isDisplayed">
                <div class="center" v-if="isFunded">
                    <div class="top left">
                        <img src="src/assets/fund-icon.png">
                        <div>Fund your wallet</div>
                    </div>
                    <div class="inside">
                        <div>How to fund your wallet:</div>
                        <div>Transfer desired amount to the desired account details below and have your balance funded</div>
                        <div class="grey">Bank Name: Firstbank Ltd</div>
                        <div class="grey">Account Name: Afropay </div>
                        <div class="grey">Account Number: 2085478939</div>
                    </div>
                    <a class="submit_button" @click="fund()"> Copy </a>
                </div>
                <div class="center form" v-if="isWithdrawn">
                    <div class="top smaller left">
                        <img src="src/assets/send.png">
                        <div>Withdraw</div>
                    </div>
                    <div class="sending">
                        <div class="cols">
                            <div class="bold"> Recipient's Bank Name </div>
                            <input type="text" class="deets"/>
                        </div>

                        <div class="cols">
                            <div class="bold"> Recipient's Account Number </div>
                            <input type="text" class="deets"/>
                        </div>
                        <div class="cols">
                            <div class="bold"> Recipient's Account Name </div>
                            <input type="text" class="deets"/>
                        </div>
                    </div>
                    <a class="submit_button" @click="proceed()"> Proceed </a>
                </div>

                <div class="center form" v-if="isProceeded">
                    <div class="top smaller left">
                        <img src="src/assets/send.png">
                        <div>Withdraw</div>
                    </div>
                    <div class="sending">
                        <div class="cols">
                            <div class="bold"> Amount </div>
                            <input type="text" class="deets"/>
                        </div>

                        <div class="cols">
                            <div class="bold"> Narration </div>
                            <input type="text" class="deets"/>
                        </div>
                        <div class="cols">
                            <div class="bold"> Pin </div>
                            <input type="text" class="deets"/>
                        </div>
                    </div>
                    <div class="submitters">
                        <a class="submit white" @click="proceed()"> Back </a>
                        <a class="submit blue" @click="fail()"> Proceed </a>
                    </div>
                </div>

                <div class="center final" v-if="isSuccess">
                    <div class="top smaller">
                        <img src="src/assets/successful.png">
                        <div>Successful</div>
                    </div>
                    You have successfully withdrawn your money
                    <a class="submit_button" @click ="hide()"> Done </a>
                </div>
                <div class="center final" v-if="isFail">
                    <div class="top smaller">
                        <img src="src/assets/failed.png">
                        <div>Failed</div>
                    </div>
                    An error occurred, please try again
                    <a class="submit_button" style="padding: 10px 105px;" @click ="hide()"> Try again </a>
                </div>
            </div>
    </Dashboardlayout>
</template>

<script>
import Dashboardlayout from '../layout/Dashboardlayout.vue';
export default {
    components: { Dashboardlayout },
    name: 'Dashboard',
    data(){
        return{
            fields: [
                { key: "sender", label: "Sender"},
                { key: "receiver", label: "Receiver" },
                { key: "amount", label: "Amount" },
                { key: "trans_reference", label: "Transaction Reference" },
                { key: "payment_reference", label: "Payment Reference" },
                { key: "date", label: "Transaction Date" },
                { key: "status", label: "Status" },
                { key: "photo", label: " " },
            ],
            items : [{
                id: 1,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Idan no dey dull',
                date: '10 Jan 2023',
                status: 'SUCCESSFUL',
                photo: ''
            },
            {
                id: 2,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'I just want to have fun',
                date: '10 Jan 2023',
                status: 'SUCCESSFUL',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Chop life make life no chop you',
                date: '10 Jan 2023',
                status: 'FAILED',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Thank you',
                date: '10 Jan 2023',
                status: 'FAILED',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Debt',
                date: '10 Jan 2023',
                status: 'SUCCESSFUL',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Payment for Apple Music for May',
                date: '10 Jan 2023',
                status: 'SUCCESSFUL',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'YOLO',
                date: '10 Jan 2023',
                status: 'FAILED',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'For Melissa',
                date: '10 Jan 2023',
                status: 'FAILED',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Fish and Chips',
                date: '10 Jan 2023',
                status: 'FAILED',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Uber payment',
                date: '10 Jan 2023',
                status: 'SUCCESSFUL',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Manage this one for now',
                date: '10 Jan 2023',
                status: 'SUCCESSFUL',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Netflix',
                date: '10 Jan 2023',
                status: 'SUCCESSFUL',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Uber',
                date: '10 Jan 2023',
                status: 'FAILED',
                photo: ''
            },
            {
                id: 3,
                sender: 'Adebowale Johnson', 
                receiver: 'Divine Ikubor', 
                amount: '#200,000', 
                trans_reference: '40993LKYME',
                payment_reference: 'Uber',
                date: '10 Jan 2023',
                status: 'FAILED',
                photo: ''
            },
            ],
            isFunded: false,
            isWithdrawn: false,
            isProceeded: false,
            isSuccess : false,
            isFail: false,
            compatConfig: { MODE: 3 },
            rows: 10,
            perPage: 3,
            currentPage: 2
         
        }
    },
    computed: {
        isDisplayed(){
            return this.isFunded || this.isWithdrawn || this.isProceeded || this.isSuccess || this.isFail;
        }

    },
    methods:{
        color(){
            for(var item of this.items){
                if(item.status === 'SUCCESSFUL'){
                    this.isSuccessful = true;
                }
            }
        },
        fund(){
            this.isFunded = !this.isFunded;
            console.log(this.isSuccessful);
        },
        withdraw(){
            this.isWithdrawn = !this.isWithdrawn;
        },
        proceed(){
            this.isProceeded = !this.isProceeded;
            this.isWithdrawn = !this.isWithdrawn
        },
        success(){
            this.isSuccess = !this.isSuccess;
            this.isProceeded = !this.isProceeded;
        },
        fail(){
            this.isFail = !this.isFail;
            this.isProceeded = !this.isProceeded;
        },
        hide(){
            this.isFunded = false;
            this.isWithdrawn = false; 
            this.isProceeded = false;
            this.isSuccess = false;
            this.isFail = false;
        }
    },
    beforeMount(){
        this.color()
    }

}
</script>
<style>
*{
    font-size: 14px;
}
input{
    margin: 0;
    padding: 0;
}
.dash-wrapper{
    background-color: #f1f3f7;
    height: 89%;
    padding: 37px 32px 0 32px;
}
.flex-container{
    display: flex;
    gap: 16px;
    flex-direction: column;
}
.flex-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.flex-col{
    display: flex;
    flex-direction: column;
}
.fund, .withdraw{
    gap: 10px;
    padding: 9px 14px;
    border-radius: 8px;
    font-size: 16px;
}
.wallet_activities{
    gap: 24px;
}
.blue{
    background-color: #1570EF;
    color: #ffffff;
}
.white{
    background-color: #FFFFFF;
    border: 1px solid #D0D5DD;
}
.h2{
    font-size: 20px;
    color: #101828;
}
.wallet{
    background-color: #FFFFFF;
    padding: 20px 35px;
    border: 1px solid #F2F4F7;
    border-radius: 8px;
    gap: 30px;
}
.subsection{
    gap: 6px;
}
.zero{
    color: #1570EF;
    font-size: 22px;
    font-weight: 600;
}
.section{
    padding:0 5px;
    width: 100%;

}
.section + .section{
    margin-left: 20px;
}
.vertical{
    height: 71px;
}
.filter{
    background-color: #FFFFFF;
    border: 1px solid #D0D5DD;
    padding:  8px 14px;
    border-radius: 8px;
    font-weight: 500;
}
.transactions{
    gap: 16px;
}
#search{
    padding: 9px;
    padding-left: 36px;
    padding-right: 40px;
    background-image: url("src/assets/search.png") ;
    background-position:left 10px center;   
    background-repeat:no-repeat;
    outline: #E8E8E8;
    border: 1px solid #E8E8E8;
    margin-bottom: 16px;
}
.searchbar{
    align-items: center;
}
.big{
    font-weight: 700;
    font-size: 20px;
    color:#353542;
}
input::placeholder{
    font-size: 14px;
}
.mini_table{
    width: 100%;
    background-color: #FFFFFF;
    border: 1px solid #EAECF0; 
    padding: unset  !important;
    margin-bottom: 0;
}
/* .table> :not(caption) > * > *{
    padding: unset;
} */
.table > tbody > tr > td{
    padding: 18px 10px;
    color: #475467;
    /* padding-right: 10px; */
}
.table > thead > tr > th{
    padding-top: 16px;
    padding-bottom: 20px;
    padding-left: 16px;
    text-align: left;
    margin-right: 36px;
    border-bottom: 1pt solid #EAECF0;
    color: #475467;
}
.bigger{
    padding-right: 20px;
}
tr {
  border-bottom: 1pt solid #EAECF0;
}
.image{
    background-image: url('src/assets/info.png');
    background-repeat:no-repeat;
    background-position:top 0px center;
    width: 44px;
    height: 22px;
}
td:last-child{
    padding-right: 20px;
}
.success{
    color: greenyellow;
}
.fail{
    color: red;
    font-size: 12px;
}
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    padding-bottom: 100px;
    background-size: cover;
}
.center{
    background-color: #FFFFFF;
    width: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 24px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 32px;
    padding-top: 0px;
    border-radius: 8px;
}
.inside{
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
}

.top{
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    align-items: center;
    /* justify-content: center; */
}
.top > div{
    font-size: 20px;
    font-weight: 600;
}
/* .top > .img{
    width: 100px;
    height: 80px;
    margin-top: 50px;
} */
.grey{
    color: #667085;
}
a{
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
.submit_button{
    padding: 10px 125px;
    background-color: #1570EF;
    border-radius: 8px;
    color: #FFFFFF;
    margin-top: 12px;
    text-decoration: none;
}
.top > img{
    margin-top: 25px;
}
.sending{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
}
.cols{
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.deets{
    width: 280px;
    height: 35px;
    border: 1px solid #E8E8E8;
    outline: #E8E8E8 ;
    padding: 0 10px;
    border-radius: 8px;
}
.submit{
    padding: 8px 50px;
    border-radius: 8px;
    text-decoration: none;
}
.submitters{
    display: flex;
    gap: 16px;
}
.final{
    margin-top: 160px;
    text-align: center;
}
.left{
    align-items: flex-start;
}
.pagin, .show{
    display: flex;
    align-items: center;
}
.show{
    gap: 5px;

}
ul.pagination.b-pagination {
    /* margin-top: 10px; */
    margin-top: 0;
    margin-bottom: 0;
}
.pagin{
    width: 100%;
    /* background-color: #667085; */
    justify-content: end;
    padding-right: 10px;
    gap: 10px;
    margin: 20px 0;
}
.select{
    padding: 4px 4px;
    outline: #D0D5DD;
}
.big_table{
    background-color: #FFFFFF;
    border: 1px solid #EAECF0;
    border-radius: 8px; 
}
</style>