<template>
    <div class="post-box">
        <span class="post-views"> {{views}} </span>
        <h3 class="post-title"> {{title }} </h3>
        <span class="post-date"> {{date}} </span>
        <p class="post-content">{{content}} </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-auther"> {{auther}} </span>
            </div>
             <div class="col-sm-6 text-right">
                <span class="post-category"> {{ category }} </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    props: ["views", "title", "date", "content", "auther", "category"],
    name: "BlogPosts", 
    filters:{
        makeUpperCase: function(value){
            return value.toUpperCase();
        }
    }
};
</script>

<style scoped>
.post-box{
    padding: 20px;
    background-color: #fff;
    border-radius: 7px;
    position: relative;
    text-align: left;
    margin-bottom: 10px;
}
.post-views{
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgb(155, 93, 13);
    color: #fff;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    border-radius: 7px;
}
.post-title{
    color: rgb(114, 111, 111);
    font-weight: bold;
} 
.post-date{
    font-style: italic;
    color: rgb(138 106 106);  
}

.post-content{
    margin-top: 8px;
    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(117 116 116);
    font-size: 18px;
}
.post-auther{
    background-color: #9b5d0d;
    color: #fff;
    border-radius: 5px;
    padding: 8px;
}

.post-category{
    background-color: #2b3ea7;
    color: #fff;
    border-radius: 5px;
    padding: 8px;
}
</style>