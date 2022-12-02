<template>
    <div class="home">
        <my-website/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import MyWebsite from "@/components/myWebsite";

    export default {
        name: 'pageHome',
        components: {
            MyWebsite
        }
    }
</script>
