<template>
    <div class="header">
       
    <div class="container">
         <div class="logo text-right">
            ReyaadElkomy
        </div>
              <ul>            
            <router-link to="/" tag="li">
                <a> Home </a>
            </router-link> 
            <router-link to="/about" tag="li">
                <a> About </a>
            </router-link> 
            <router-link to="/help" tag="li">
                <a> Help </a>
            </router-link>
             <router-link to="/OurTeam" tag="li">
                <a> Our Team </a>
            </router-link>
             <router-link to="/Contacts" tag="li">
                <a> Contacts </a>
            </router-link>

             <router-link to="/Services" tag="li">
                <a> Services </a>
            </router-link>
             <router-link to="/Blog" tag="li">
                <a> Blog </a>
            </router-link>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: "appHeader"
}
</script>

<style  scoped>
.header{
    background-color:#333;
    color: #fff;
    overflow:hidden;
    }
    .logo{
        font-size: 24px;
         padding: 20px;
         float: left;
         width: 200px;
 }     
 ul{
     float:left;
     width: calc(100% - 200px);
     padding-top: 20px;
     margin: 0;
     }
     li{
         padding: 20px;
         display: inline-block;
         font-size: 18px;
         color:#fff;
         
         }
         a{
             color: #fff ;
             text-decoration: none;
             margin-right: 20px;
            
        }

        a:hover{
              color: rgb(211, 138, 4);  
       }     
    

</style>
