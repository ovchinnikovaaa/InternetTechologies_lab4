<template>

    <div class="forBtn">
    <button class="createBouquetButton">Создать букет!</button>
    </div>

</template>

<script>
    export default {
        name: "createBouquetButton"
    }
</script>

<style>

    .forBtn {
        text-align: center;
        margin-bottom: 50px;

    }

    .createBouquetButton {
        font-family: Georgia, serif; /* Указание типа шрифта */
        color: #F5F5F5; /* цвет текста на кнопке: WhiteSmoke */
        text-decoration: none; /* убирать подчёркивание у ссылок */
        user-select: none; /* убирать выделение текста */
        background: rgb(154, 205, 50); /* фон кнопки -- YellowGreen */
        padding: 10px 23px; /* отступ от текста */
        outline: #9ACD32; /* убирать контур в Mozilla */
        height: 60px;
        width: 300px;
        text-align: center;
        border: none;
    }

    .createBouquetButton:hover {
        background: rgb(46, 139, 87); /* при наведении курсора мышки -- SeaGreen */
        box-shadow: 10px 6px 6px rgba(0,0,0,0.2);
    }

    .createBouquetButton:active { background: rgb(0, 100, 0); } /* при нажатии DarkGreen */

</style>