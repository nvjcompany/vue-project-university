<template>
    <div>
        <b-row class="mt-3">
            <b-col cols="8">
                <b-form-select v-model="selected" :options="options" class="mb-3" />
            </b-col>
            <b-col cols="4">
                <b-button v-on:click="search" class="btn btn-warning btn-block">
                    Search
                </b-button>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="6" v-for="drink in drinksToShow">
               <b-row class="mt-3">
                   <b-col cols="4">
                       <img :src=drink.strDrinkThumb class="img-fluid" />
                   </b-col>
                   <b-col cols="8">
                       <div class="fw700">{{drink.strDrink}}</div>
                       <b-button @click="preview(drink.idDrink)">
                           Preview
                       </b-button>
                   </b-col>
               </b-row>
            </b-col>
        </b-row>

        <b-row class="mt-5">
            <b-col>
                <b-pagination align="center" :total-rows="totalItems" v-model="currentPage" :per-page="9">
                </b-pagination>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        watch:{
            currentPage: function (oldPage) {
                this.changePage(oldPage);
            }
        },
        methods:{
            search(isInit = false){
                let url = `filter.php?c=${this.$data.selected}`;

                if(isInit === true)
                {
                    url = 'filter.php?c=Ordinary_Drink';
                }
                else
                {
                    this.$store.commit('setDrinkSelected', this.$data.selected);
                }

                this.$http.get(url)
                    .then((response)=>{
                        let drinks = response.body.drinks;
                        this.$store.commit('setDrinkTotalItems', drinks.length);
                        this.$store.commit('setDrinks', drinks);
                        this.totalItems = drinks.length;
                        this.changePage(1);
                },() => {});
            },
            changePage(i){
                this.$store.commit('setDrinkCurrentPage', i);
                this.$data.drinksToShow = this.$store
                    .getters
                    .drinks
                    .slice((i-1) * 9, (i-1) * 9 + 9);
            },
            preview(id)
            {
                this.$router.push({path:`/coctail/${id}`});
            }
        },
        created(){
            let drinks = this.$store
                .getters
                .drinks;

            if(drinks.length > 0)
            {
                if(!this.$store.getters.drinkCurrentPage)
                {
                    this.$store.commit('setDrinkCurrentPage', 1);
                }

                this.currentPage = this.$store.getters.drinkCurrentPage;
                this.totalItems = this.$store.getters.drinkTotalItems;
                this.selected = this.$store.getters.drinkSelected;
                this.changePage(this.currentPage);

                return;
            }

            this.search(true);
        },
        data(){
            return {
                selected: 'Ordinary_Drink',
                options: [
                    { value: 'Ordinary_Drink', text: 'Ordinary Drink' },
                    { value: 'Cocktail', text: 'Cocktail' }
                ],
                totalItems: 0,
                currentPage: 1,
                drinksToShow: [],
            }
        }
    }
</script>

<style scoped>
    .fw700
    {
        font-weight: 700;
    }
</style>