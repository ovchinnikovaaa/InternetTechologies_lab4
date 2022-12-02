<template>

    <div class="top_string">
        <div class="menuUp">
            <li><router-link to="/about">О компании</router-link></li>
            <li><router-link to="/shops">Магазины</router-link></li>
            <li><router-link to="/reviews">Отзывы</router-link></li>
            <li><router-link to="/delivery">Доставка</router-link></li>
            <li><router-link to="/contacts">Контакты</router-link></li>
        </div>
    </div>

    <div class="header">
        <div class="logo">
            <img src="../assets/logo.png" height="72" width="180" alt="logo" title="logo">
        </div>
    </div>

    <div class="menuLine">
        <ul class="menu">
            <li><a href="../../public/notfound.html">Цветы</a></li>
            <li><a href="../../public/notfound.html">Букеты</a></li>
            <li><router-link to="/roses">Розы</router-link></li>
            <li><router-link to="/compositions">Композиции</router-link></li>
            <li><a href="../../public/notfound.html">Цвета</a></li>
            <li><a href="../../public/notfound.html">Повод</a></li>
            <li><a href="../../public/notfound.html">Цена</a></li>
            <li><router-link to="/market">Корзина <span v-if="getMarketCounter">({{getMarketCounter}})</span></router-link></li>
        </ul>
    </div>



</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "myHeader",
        computed: {
            ...mapGetters(['getMarketCounter', 'getMarketSum'])
        }
    }
</script>

<style scoped>

    /* верхняя строчка */
    .top_string{
        background: #696969;
        padding-top: 1px;
        overflow: hidden;
        margin-bottom: 0;
    }

    /* менюшка наверху */
    .menuUp {
        float: left;
        padding-top: 0;
        padding-right: 85px;
        list-style: none; /* откл. маркеров */
        display: block;
    }

    .menuUp li {
        position: relative;
        float: left; /* Выстраивание элементов списка в один ряд */
        margin-right: 0; /* создание отступов для того, чтобы не сливались пункты меню */
        font-family: Georgia, serif; /* Указание типа шрифта */
        font-size: 10px; /* Размер текста в ссылках */
    }

    /*стиль для ссылок*/
    .menuUp li a {
        display: block; /* Изменение отображения на блочное для того чтобы иметь возможность задать внутренние отступы. */
        padding: 8px 12px;  /* Внутри блочные отступы */
        background: #696969; /* Цвет блоков меню -- DimGray */
        color: #FFFFFF; /* Цвет текста в блоках меню -- White */
        text-decoration: none; /* Устранение подчёркивания ссылок. */
        position: relative; /* Это необходимо при использовании Internet Explorer 6 для того, чтобы ссылка по всей своей площади была «кликабельной». */
    }

    /* Изменяем цвет текста на #006400 (DarkGray) при наведении */
    .menuUp li a:hover {
        background: #696969; /* Цвет блока при наведении курсора. -- DimGray */
        color: #006400;  /* Цвет текста при наведении курсора (DarkGray) */
    }

    .header {
        background: #FFFFF0; /*цвет хедера -- Ivory */
        overflow: hidden;
        padding-top: 0;
    }

    .logo {
        float: left;
        padding-top: 15px; /* Отступ сверху */
        padding-left: 120px;/* Отступ справа */
        padding-bottom: 15px;
        vertical-align: top;
    }

    /* линия под header */
    .menuLine {
        background: #9ACD32; /* цвет хедера -- YellowGreen */
        padding-top: 0;
        margin-top: 0;
        overflow: hidden;
    }

    .menu {
        float: left;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 0;
        list-style: none; /* откл. маркеров */
        display: flex;

    }

    .menu li {
        position: relative;
        float: left; /* Выстраивание элементов списка в один ряд */
        margin-right: 0; /* создание отступов для того, чтобы не сливались пункты меню */
        font-family: Georgia, serif; /* Указание типа шрифта */
        font-size: 14px; /* Размер текста в ссылках */
    }

    /*стиль для ссылок*/
    .menu li a {
        display: block; /* Изменение отображения на блочное для того чтобы иметь возможность задать внутренние отступы. */
        padding: 10px 15px;  /* Внутри блочные отступы */
        background: #9ACD32; /* Цвет блоков меню -- YellowGreen */
        color: #FFFFFF; /* Цвет текста в блоках меню -- White */
        text-decoration: none; /* Устранение подчёркивания ссылок. */
        position: relative; /* чтобы ссылка по всей своей площади была «кликабельной». */
    }

    /* Изменяем цвет ссылки на #FFFFF0 (Ivory) при наведении */
    .menu li a:hover {
        background: #FFFFF0; /* Цвет блока при наведении курсора. -- Ivory */
        color: #696969;  /* Цвет текста при наведении курсора */
    }

</style>