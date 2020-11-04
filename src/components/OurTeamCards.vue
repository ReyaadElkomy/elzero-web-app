<template>
    <div class="card">
        <img class="card-img-top" src=" {{memberImage}}" alt=" memeber image " />
        <div class="card-body">
            <h5 class="card-title"> {{memberName}}</h5>
            <p class="card-text">
               {{description}}
            </p>
            <span>{{skills01}} </span>
            <span>{{skills02}}</span>
            <span>{{skills03}} </span>
            <a href="#" class="btn btn-primary">{{contact}}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ["memberImage", "memberName", "skills01", "skills02", "skills03", "contact", "description"],
    name: "OurTeamCards", 
};
</script>
