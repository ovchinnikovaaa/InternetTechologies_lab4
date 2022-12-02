<template>
    <div class="popularProducts" align="center">

        <div><img src="../assets/1.jpg" height="275" width="275" alt="1pic"></div>
        <div><img src="../assets/2.jpg" height="275" width="275" alt="2pic"></div>
        <div><img src="../assets/3.jpg" height="275" width="275" alt="3pic"></div>
        <div><img src="../assets/4.jpg" height="275" width="275" alt="4pic"></div>

        <div><img src="../assets/5.jpg" height="275" width="275" alt="5pic"></div>
        <div><img src="../assets/6.jpg" height="275" width="275" alt="6pic"></div>
        <div><img src="../assets/7.jpg" height="275" width="275" alt="7pic"></div>
        <div><img src="../assets/8.jpg" height="275" width="275" alt="8pic"></div>

        <div><img src="../assets/9.jpg" height="275" width="275" alt="9pic"></div>
        <div><img src="../assets/10.jpg" height="275" width="275" alt="10pic"></div>
        <div><img src="../assets/11.jpg" height="275" width="275" alt="11pic"></div>
        <div><img src="../assets/12.jpg" height="275" width="275" alt="12pic"></div>

        <div><img src="../assets/13.jpg" height="275" width="275" alt="13pic"></div>
        <div><img src="../assets/14.jpg" height="275" width="275" alt="14pic"></div>
        <div><img src="../assets/15.jpg" height="275" width="275" alt="15pic"></div>
        <div><img src="../assets/11.jpg" height="275" width="275" alt="16pic"></div>

    </div>
</template>

<script>
    export default {
        name: "popularProducts"
    }
</script>

<style scoped>
    /* сама таблица */
    .popularProducts {
        margin-bottom: 30px;
        display: grid;
        justify-content: center; /* чтобы элементы внутри сетки были по центру */
        grid-template-columns: repeat(4, 300px);
        grid-auto-rows: 300px;

    }

    .popularProducts > * {
        border-radius: 5px;
        margin: 5px;
        gap: 10px;
    }

    img {
        border-radius: 15px;
        object-fit: cover;
        padding: 5px;
    }
</style>