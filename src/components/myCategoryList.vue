<template>
    <!-- вот тут печатаем по категориям все v-bind:style="{ 'background-image': 'url(' + require('../assets/' + item.img) + ')' }" -->
    <div>
        <div class="categoryTable">
            <div v-for="(item, index) in list" :key="index" >
                <div class="categoryTableElement">
                    <div class="miniStyle">{{ item.name }} </div>
                        <div class="miniStyle"><img v-bind:src="item.img" height="200" width="200"></div>
                        <div class="miniStyle">{{ item.price }} p.</div>
                        <div class="miniStyle"><button class="categoryButton" v-if="!marketMode" @click="addToMarket(item.id)">Добавить</button></div>
                        <div class="miniStyle"><button class="categoryButton" v-if="marketMode" @click="removeFromMarket(index)">Удалить</button></div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "myCategoryList",
        props: {
            list: {
                default: () => ([]),
                type: Array
            },
            marketMode: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            ...mapActions(['addMarket', 'removeMarket']),
            addToMarket(id) {
                this.addMarket(id)
            },
            removeFromMarket(index) {
                this.removeMarket(index)
            }
        }
    }
</script>

<style scoped>

    .categoryTable {
        display: grid;
        justify-content: center; /* чтобы элементы внутри сетки были по центру */
        grid-template-columns: repeat(4, 200px);
        grid-auto-rows: 300px;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }

    .categoryButton {
        font-family: Georgia, serif; /* Указание типа шрифта */
        color: #F5F5F5; /* цвет текста на кнопке: WhiteSmoke */
        text-decoration: none; /* убирать подчёркивание у ссылок */
        user-select: none; /* убирать выделение текста */
        background: rgb(154, 205, 50); /* фон кнопки -- YellowGreen */
        padding: 10px 23px; /* отступ от текста */
        outline: #9ACD32; /* убирать контур в Mozilla */
        text-align: center;
        border: none;
        margin-top: 7px;
    }

    .categoryButton:hover {
        background: rgb(46, 139, 87); /* при наведении курсора мышки -- SeaGreen */
        box-shadow: 10px 6px 6px rgba(0,0,0,0.2);
    }

    .categoryButton:active { background: rgb(0, 100, 0); } /* при нажатии DarkGreen */

    .miniStyle {
        text-align: center;
    }

    img {
        border-radius: 15px;
        object-fit: cover;
        padding: 5px;
    }

</style>