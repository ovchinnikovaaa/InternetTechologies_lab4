<template>

    <div class="mySearch">
        <input v-model="field" id="searchLine" type="text" name="search" placeholder="Найти">
        <button @click="() => addField()" id="searchButton" name="button"></button>
        <!--id="searchList" class="searchList"-->
        <div v-for="i in fieldList" :key="i" >
            {{ i }}
        </div>
    </div>

</template>

<script>
    export default {
        name: "mySearch",
        data() {
            return {
                field: '',
                fieldList: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []

            }
        },
        methods: {
            addField() {
                this.fieldList.push(this.field) // вставляем значение поля в список
                this.field = '' // после работа очищаем поле
                localStorage.setItem('list', JSON.stringify(this.fieldList))
            }
        }
    }
</script>

<style scoped>
    /* строчка поиска */
    * {box-sizing: border-box;}

    .mySearch {
        position: relative;
        margin-top: 6px;
        width: 700px;
        margin-right: auto;
        margin-left: auto;
    }

    /* сама строчка поиска */
    .mySearch input {
        border: 1px solid #BC8F8F;
        background: #FFFFF0;
        width: 700px;
        height: 42px;
        padding-left: 15px;
    }

    /* сама кнопочка */
    .mySearch button {
        height: 26px;
        border: 1px solid #FFE4E1;
        width: 26px;
        position: absolute;
        top: 8px;
        right: 8px;
        background: #FFE4E1; /* цвет кнопочки -- MistyRose */
        cursor: pointer;
    }

    /* указатель */
    .mySearch button:before {
        content: "\f105";
        font-family: FontAwesome;
        color: #BC8F8F; /* цвет указателя -- RosyBrown */
        font-size: 20px;
        font-weight: bold;
    }

    .searchList {
        background-color: white;
        border: 1px solid #BC8F8F;
        position: relative;
        display: none;
    }

    .searchList.active {
        display: block;
    }

    .searchList_item {
        color: #BC8F8F;
        padding: 4px 10px;
        font-family: FontAwesome;
        display: flex;
        justify-content: space-between;
    }
</style>