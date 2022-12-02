<template>
            <div class="allPage">

                <!-- myHeader.vue -->
                <my-header></my-header>

                <!-- mySearch.vue -->
                <my-search></my-search>

                <h2>Доставка цветов в Воронеже</h2>

                <h3>Наши работы: </h3>

                <!-- popularProducts.vue -->
                <popular-products></popular-products>

                <!-- createBouquetButton.vue -->
                <create-bouquet-button></create-bouquet-button>

                <!-- myFooter.vue -->
                <my-footer></my-footer>

            </div>
    </template>

<script>

    import createBouquetButton from "@/components/createBouquetButton";
    import mySearch from "@/components/mySearch";
    import PopularProducts from "@/components/popularProducts";
    import myHeader from "@/components/myHeader";
    import MyFooter from "@/components/myFooter";

export default {
  name: 'myWebsite',
    components: {
        MyFooter,
        myHeader,
        PopularProducts,
        createBouquetButton,
        mySearch
  }
}
</script>


