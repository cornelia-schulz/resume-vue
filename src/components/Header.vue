<template>
    <header>
        <b-row>
            <b-col cols='2' offset='1' class='img'>
                <img class='profile-img' alt='Profile picture' src='../assets/images/profile1.png'/>
            </b-col>
            <b-col class='header-right'>
                <b-row class='header-text-right'>
                    <h1>Cornelia Schulz <span class='header-title'>Developer</span></h1>
                </b-row>
                <b-row>
                    <b-col>Email: <a href="mailto:firzhugh@gmail.com">firzhugh@gmail.com</a></b-col>
                    <b-col>Github: <a href='https://github.com/cornelia-schulz' target='_blank'>cornelia-schulz</a></b-col>
                    <b-col>Location: Auckland</b-col>
                </b-row>
            </b-col>
        </b-row>
       
        
    </header>
    
</template>


<script>
    export default {
        methods: {
            openSidebar() {
            document.getElementById("menu").style.display = "block"
    },
        closeSidebar() {
            document.getElementById('menu').style.display = "none"
    }
        }    
    }
</script>

<style>
    header {
        padding-top: 20px;
        background-color: #1D2D44;
        padding-bottom: 20px;
        color: #F0EBD8;
    }
    h1 {
        text-align: left;
        margin-left: 12px;
        color: 748CAB !important;
    }

    .header-title {
        font-size: 1rem;
        color: #F0EBD8;
    }

    .img {
        text-align: center;
    }

    .profile-img {
        text-align: center;
        /* -webkit-box-shadow: 18px 18px 16px -15px rgba(116,140,171,1);
        -moz-box-shadow: 18px 18px 16px -15px rgba(116,140,171,1);
        box-shadow: 18px 18px 16px -15px rgba(116,140,171,1); */
        max-height: 150px;
        border-radius: 50%;
    }

    .header-right {
        margin-top: 70px;
    }

</style>