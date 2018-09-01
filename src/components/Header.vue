<template>
    <header>
        <b-row>
            <b-col cols='2' offset='1' class='img'>
                <img class='profile-img' alt="Profile picture" src="../assets/images/profile1.png"/>
            </b-col>
            <b-col class='header-right'>
                <b-row class='header-text-right'>
                    <h1>Cornelia Schulz <span class='title'>Developer</span></h1>
                </b-row>
                <b-row>
                    <b-col>Email: <a href='#'>firzhugh@gmail.com</a></b-col>
                    <b-col>Github: <a href='#'>cornelia-schulz</a></b-col>
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
        background-color: #0D1321;
        padding-bottom: 20px;
    }
    h1 {
        text-align: left;
        margin-left: 12px;
        color: #fff;
    }

    .title {
        font-size: 1rem;
    }

    .img {
        text-align: center;
    }

    .profile-img {
        text-align: center;
        -webkit-box-shadow: 18px 18px 16px -15px rgba(116,140,171,1);
        -moz-box-shadow: 18px 18px 16px -15px rgba(116,140,171,1);
        box-shadow: 18px 18px 16px -15px rgba(116,140,171,1);
        max-height: 150px;

    }

    .header-right {
        margin-top: 70px;
    }

</style>