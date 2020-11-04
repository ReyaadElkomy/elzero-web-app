<template>
    <div class="contacts">
        <h1>{{pageName}} </h1>
        <h3>{{pageDesription}} </h3>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            pageName: "Contacts", 
            pageDesription: "Welcome to Contacts page with Vue.Js"
        }
    },

    name: "Contacts"
};
</script>

<style scoped>
h1 {
    margin-top: 10;
    background-color: #ccc;
    padding: 20px;
}
</style>
