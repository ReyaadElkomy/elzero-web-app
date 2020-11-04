<template>
    <div class="our-team">
        <h1>{{pageName}} </h1>
       <div class="container">
           <div class="row">
               <div class="col-md-6">            
                  <OurTeamCards 
                    v-for="team in teams" 
                    :key="team.id" 
                    :memberImage="team.memberImage"
                    :memberName="team.memberName"
                    :skills01="team.skills01"
                    :skills02="team.skills02"
                    :skills03="team.skills03"
                    :contact="team.contact"
                    :description="team.description"
                  />
               </div>
           </div>
       </div>
    </div>
</template>

<script>

import OurTeamCards from "@/components/OurTeamCards.vue";
import JsonOurTeam from "../json/ourTeam.json"

export default {
    data: function(){
        return{
            pageName: "Our Team", 
            pageDesription: "Welcome to our team page with Vue.Js",
            teams: JsonOurTeam
        } 
    },
    name: "ourTeam", 
     components: {
         OurTeamCards, 
        
     }
}
</script>

<style scoped>
h1{
    padding: 20px;
    background-color: teal;
    color: #fff;
}

</style>