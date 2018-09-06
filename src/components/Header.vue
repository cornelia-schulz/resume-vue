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
                <b-row id='info-row'>
                    <b-col class='info'>Email: <a href="mailto:firzhugh@gmail.com">firzhugh@gmail.com</a></b-col>
                    <b-col class='info'>Github: <a href='https://github.com/cornelia-schulz' target='_blank'>cornelia-schulz</a></b-col>
                    <b-col class='info'>Location: Auckland</b-col>
                </b-row>
            </b-col>
        </b-row>
       
        
    </header>
    
</template>


<script>
export default {
  methods: {
    openSidebar() {
      document.getElementById('menu').style.display = 'block';
    },
    closeSidebar() {
      document.getElementById('menu').style.display = 'none';
    },
  },
};
</script>

<style>
header {
  padding-top: 20px;
  background-color: #1d2d44;
  padding-bottom: 20px;
  color: #f0ebd8;
}
h1 {
  text-align: left;
  margin-left: 12px;
  color: 748cab !important;
}

.header-title {
  font-size: 1rem;
  color: #f0ebd8;
}

.img {
  text-align: center;
  width: 100%;
}

.profile-img {
  text-align: center;
  max-height: 150px;
  border-radius: 50%;
}

.header-right {
  margin-top: 70px;
}

@media only screen and (max-width: 920px) {
  .img {
    display: none;
  }
  .header-right {
    margin-top: 0;
    padding-left: 50px;
  }
}

@media only screen and (max-width: 759px) {
  .img {
    display: none;
  }
  .info {
    display: block;
    width: 100%;
  }
  .header-right {
    margin-top: 0;
    padding-left: 30px;
    padding-right: 40px;
  }
  #info-row {
    display: block;
  }
}
</style>