<template>
    <div class="dashboard">
        <div class="flex-wrapper">
            <div class="sidebar">
                <div class="logo">
                    <img src="src/assets/sidebar-icons/afropayslogo.png" class="bag"/>
                    <img src="src/assets/sidebar-icons/Afropays.png" class="writing"/>
                </div>
                <div class="menu">
                    <div class="menu-items active">
                        <img src="src/assets/sidebar-icons/Icon.png"/>
                        <div>Dashboard</div>
                    </div>
                    <div class="menu-items">
                        <img src="src/assets/sidebar-icons/walletactiv.png"/>
                        <div>Wallet Activities</div>
                    </div>
                    <div class="menu-items">
                        <img src="src/assets/sidebar-icons/transactions.png"/>
                        <div>Transactions</div>
                    </div>
                    <div class="menu-items">
                        <img src="src/assets/sidebar-icons/virtaccounts.png"/>
                        <div>Virtual Accounts</div>
                    </div>
                    <div class="menu-items">
                        <img src="src/assets/sidebar-icons/walletmgt.png"/>
                        <div>Wallet Management</div>
                    </div>
                    <div class="menu-items">
                        <img src="src/assets/sidebar-icons/transfer.png"/>
                        <div>Funds Transfer</div>
                    </div>
                    <div class="menu-items">
                        <img src="src/assets/sidebar-icons/settings.png"/>
                        <div>Settings</div>
                    </div>
                </div>
            </div>
            <div class="second-flex">
                <div class="navigation">
                    <div class=navbar-icons>
                        <img src="src/assets/navbar-icons/Notification.png"/>
                        <hr class="vertical_line">
                        <div class="details">
                            <img src="src/assets/navbar-icons/Ellipse 4.png"/>
                            Blessing Adegboye
                        </div>
                    </div>
                </div>
                <slot></slot>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'DashboardLayout'
}
</script>
<style>
*, img{
    margin: 0;
    padding: 0;
}
.flex-wrapper{
    display: flex;
    width: 100%;
}
.sidebar{
    padding: 24px 16px 0 5px;
    height: 100vh;
    /* width: 240px; */
    width: 19%;
    background-color: #00132D;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    position: fixed;
}
.menu-items{
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 45px 8px 10px; 
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 500;
}
.menu{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.bag{
    margin-right: 12px;
}
.active{
    background-color: #FFFFFF;
    color: #175CD3;
    border-radius: 8px;
    font-weight: 500;
}
.writing{
    width: 100px;
    height: 24px;
}
.navigation{
    background-color: #FFFFFF;
    /* height: 9%; */
}
.navbar-icons{
    /* padding: 10px 0 10px 0; */
    display: flex;
    width: 25%;
    gap: 24px;
    margin-left: auto;
    align-items: center;
}
hr{
    border: none;
    border-top: none;
    opacity: 1;
}
.vertical_line{
    height: 37px;
    border-color:#E7E8F0;
    border-width: 1px;
    border-style: solid;
    color: inherit;
    margin: .7rem 0;
    opacity: 1;
}
.details{
    display: flex;
    align-items: center;
    gap: 13px;
    font-weight: 500;
}
.navbar-icons > img{
    height: 24px;
    width: 18px;
}
.second-flex{
    height: 100%;
    /* width: 1092px; */
    width: 81%;
    background-color: #f1f3f7;
    position: relative;
    left: 19%;
}

    
</style>