<template>
    <div class="our-help">
        <h1> {{pageName}} </h1>
        <h3> {{pageDesription}} </h3>
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            pageName: "Help", 
            pageDesription: "This is Help Page!"
        }
    },
    name: "help"
}
</script>