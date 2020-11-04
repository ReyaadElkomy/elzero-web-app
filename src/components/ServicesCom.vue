<template>
    <div class="container bg-primary">
        <div class="row">
            <div class="col-md-5">
                <div class="card text-center">
                <div class="card-header">{{featured}} </div>
                <div class="card-body text-left">
                    <h5 class="card-title"> {{servicesName}}</h5>
                    <p class="card-text">
                        {{description}}
                    </p>                   
                </div>
                <div class="card-footer text-muted"> {{date}}</div>
                </div> 
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ["featured", "servicesName", "description", "date"], 
    name: "ServicesCards"
}
</script>

<style scoped>
.row{
    margin-bottom: 10px;
    padding:10px;
}
</style>