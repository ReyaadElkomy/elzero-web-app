<template>
    <div class="services">
        <h1> {{pageName}} </h1>
        <h3> {{pageDesription}}  </h3>
       
            <ServicesCards 
            v-for="service in services" 
            :key="service.id"
            :featured="service.featured"
            :servicesName="service.servicesName"
            :description="service.description"
            :date="service.date"
             />
      
        
    </div>
</template>

<script>
 
import ServicesCards from "@/components/ServicesCom.vue";
import ServicesJson from "../json/servicesPage.json";

export default {
    data: function(){
        return {
            pageName: "Services", 
            pageDesription: "Welcome to Services page with Vue.Js", 
            services: ServicesJson
        }
    },
    name: "Services", 
    components: {
        ServicesCards
    }
}
</script>

<style scoped>
h1{
    padding: 20px;
    background-color: chocolate;
}    
</style>