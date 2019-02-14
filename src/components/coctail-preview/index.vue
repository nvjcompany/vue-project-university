<template>
    <div>
        <b-row align-h="center">
            <b-col cols="4">
                <h1 class="title">{{drink.strDrink}}</h1>
                <img :src="drink.strDrinkThumb"
                     class="img-fluid"
                />

            </b-col>
            <b-col cols="4">
                <h3>Category: <span>{{drink.strCategory}}</span></h3>
                <h3>Glass: <span>{{drink.strGlass}}</span></h3>
                <h3>Ingredients</h3>
                <ul>
                    <li v-for="i in drink.strIngredients">
                        {{i}}
                    </li>
                </ul>
                <h3>How to do it?</h3>
                <p>{{drink.strInstructions}}</p>
                <button @click="OrderDrink" class="btn btn-warning btn-block">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> Order it now!
                </button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                drink : {
                    strDrink : '',
                    idDrink: '',
                    strCategory: '',
                    strAlcoholic: '',
                    strGlass: '',
                    strInstructions: '',
                    strDrinkThumb: '',
                }
            }
        },
        methods:{
            OrderDrink(){
                this.$store.commit('setDrinkToCart', this.$data.drink);
            }
        },
        beforeMount() {
            let coctailId = this.$route.params['id'];
            this.$http.get(`lookup.php?i=${coctailId}`)
                .then(response => {
                    if(response.body.drinks === null)
                    {
                        this.$router.push('/');
                    }
                    else
                    {
                        let drink = response.body.drinks[0];
                        let ingredients = [];

                        for (let i = 1; i <= 15; i++)
                        {
                            if(drink[`strIngredient${i}`] !== "")
                            {
                                ingredients.push(drink[`strIngredient${i}`]);
                            }
                        }

                        this.$data.drink = {
                            strDrink : drink.strDrink,
                            idDrink: drink.idDrink,
                            strCategory: drink.strCategory,
                            strAlcoholic: drink.strAlcoholic,
                            strGlass: drink.strGlass,
                            strInstructions: drink.strInstructions,
                            strDrinkThumb: drink.strDrinkThumb,
                            strIngredients: ingredients
                        }
                    }
                });
        }
    }
</script>

<style scoped>
    .title
    {
        display: block;
        font-weight: 700;
    }
    .img-width
    {
        max-width: 250px !important;
    }

    h3 span
    {
        color: darkorange;
    }

</style>