<template>
    <header>
        <b-row>
            <b-col cols='2' class='img'>
                <img class='profile-img' alt="Profile picture" src="../assets/images/profile.png"/>
            </b-col>
            <b-col>
                <b-row>
                    <b-col><h1>Cornelia Schulz</h1></b-col>
                    <b-col><p>Developer</p></b-col>
                </b-row>
                <b-row>
                    <b-col>email <a href='#'>firzhugh@gmail.com</a></b-col>
                    <b-col>github <a href='#'>cornelia-schulz</a></b-col>
                    <b-col>location Auckland</b-col>
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
        padding: 10px;
        background-color: #E4F132;
    }
    h1 {
        text-align: left;
    }

    .img {
        text-align: center;
    }

    .profile-img {
        max-height: 200px;

    }
</style>