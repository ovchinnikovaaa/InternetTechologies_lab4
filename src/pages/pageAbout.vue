<template>

    <!-- myHeader.vue -->
    <my-header></my-header>

    <h2>Преимущества для покупателя</h2>

    <div class="blockAbout">
        <div class="picture_about1">
            <img src="../assets/about1.png" height="400" width="600" alt="about1" title="about1">
        </div>

        <div class="textRight_about1">
            <h5>Удобный сервис</h5>
            <p><b>Мы за индивидуальный подход. </b> С каждым клиентом флорист работает напрямую, Вы можете получить профессиональную консультацию от специалиста по всем интересующим вопросам, оформить заказ и доставку цветов.</p>

            <p><b>Доставка в регионы. </b> С каждым днем к нам присоединяется больше флористов в разных регионах России, поэтому Вам не составит труда заказать букет с доставкой в любую точку России. </p>

            <p><b>Система оплаты. </b> Вы можете оплатить букет банковской картой Visa, MasterCard и МИР онлайн, наличными при получении букета в выбранном салоне или на руки курьеру при доставке. </p>

            <p><b>Сопутствующие товары. </b> Всегда есть возможность подобрать товары, сувениры и открытки, которые дополнят букет. </p>
        </div>
    </div>

    <div class="blockAbout">
        <div class="textRight_about2">
            <h5>Дополнительные услуги</h5>
            <p><b>Цветы поштучно. </b> Любое количество цветов одного вида, в любом оформлении на ваше усмотрение. </p>

            <p><b>Собрать букет. </b> Если Вы не нашли букет своей мечты, или хотите принять участие в его создании, Вы можете воспользоваться функцией - "Собрать букет", сделав это совместно с флористом, добавляя любые элементы и сочетания цветка имеющегося в наличии. </p>

            <p><b>Подписка на цветы. </b> Мы можем привозить свежие букеты или композиции к вам домой, в офис, магазин, кафе, гостиницу в назначенный день и время с оговоренной периодичностью. Теперь Вам не нужно выполнять сложные операции по оформлению заказа каждый раз, мы сделаем всё за Вас. </p>

        </div>

        <div class="picture_about2">
            <img src="../assets/about2.png" height="400" width="600" alt="about2" title="about2">
        </div>
    </div>

    <!-- myFooter.vue -->
    <my-footer></my-footer>

</template>

<script>
    import myHeader from "@/components/myHeader";
    import myFooter from "@/components/myFooter";

    export default {
        name: 'myWebsite',
        components: {
            myHeader,
            myFooter
        }
    }

</script>

<style scoped>

    .picture_about1 {
        float: left;
        padding-top: 15px; /* Отступ сверху */
        padding-left: 30px;/* Отступ справа */
        padding-bottom: 15px;
        vertical-align: top;
    }
    .picture_about2 {
        float: right;
        padding-top: 15px; /* Отступ сверху */
        padding-right: 30px;/* Отступ справа */
        padding-bottom: 15px;
        vertical-align: top;
    }
    .textRight_about1 {
        float: left;
        padding-left: 15px;
        padding-top: 10px;
    }
    .textRight_about2 {
        float: right;
        padding-left: 30px;
        padding-top: 10px;
        padding-right: 10px;
    }
    .blockAbout {
        display: flex;
    }

</style>
