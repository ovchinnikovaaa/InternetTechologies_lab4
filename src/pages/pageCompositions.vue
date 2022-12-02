<template>
    <!-- myHeader.vue -->
    <my-header></my-header>

    <h2>Доставка цветов в Воронеже</h2>

    <h3>Возможные композиции: </h3>

    <!-- MyCategoryList.vue -->
    <my-category-list :list="getDaisiesList"></my-category-list>

    <!-- myFooter.vue -->
    <my-footer></my-footer>

</template>

<script>

    import MyFooter from "@/components/myFooter";
    import myHeader from "@/components/myHeader";
    import {mapGetters} from "vuex";
    import MyCategoryList from "@/components/myCategoryList";

    export default {
        name: "pageCompositions",
        components: {
            MyCategoryList,
            MyFooter,
            myHeader
        },
        computed: {
            ...mapGetters(['getDaisyList']),
            getDaisiesList () {
                return this.getDaisyList
            }
        }
    }
</script>

<style scoped>

</style>