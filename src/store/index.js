import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        drinkComponent: {
            drinks: [],
            currentPage: 1,
            totalItems: 1,
            selected: 'Ordinary_Drink'
        },
        cartComponent: {
            drinks: []
        }
    },
    mutations: {
        setDrinks(state, drinks)
        {
            state.drinkComponent.drinks = drinks;
        },
        setDrinkCurrentPage(state, page)
        {
            state.drinkComponent.currentPage = page;
        },
        setDrinkTotalItems(state, totalItems)
        {
            state.drinkComponent.totalItems = totalItems;
        },
        setDrinkSelected(state, selected)
        {
            state.drinkComponent.selected = selected;
        },
        setDrinkToCart(state, drink)
        {
            let quantity = 1;

            for(let i = 0; i < state.cartComponent.drinks.length; i++)
            {
                if(state.cartComponent.drinks[i].idDrink === drink.idDrink)
                {
                    quantity = state.cartComponent.drinks[i].quantity+1;
                    state.cartComponent.drinks.splice(i, 1);
                    break;
                }
            }

            drink.quantity = quantity;
            state.cartComponent.drinks.push(drink);
        },
        decrementDrinkCartQuantity(state, drink)
        {
            for(let i = 0; i < state.cartComponent.drinks.length; i++)
            {
                if(state.cartComponent.drinks[i].idDrink === drink.idDrink)
                {
                    if(state.cartComponent.drinks[i].quantity - 1 === 0)
                    {
                        state.cartComponent.drinks.splice(i, 1);
                    }
                    else
                    {
                        drink.quantity = state.cartComponent.drinks[i].quantity - 1;
                        state.cartComponent.drinks.splice(i, 1);

                        state.cartComponent.drinks.splice(i, 0, drink);
                    }

                    break;
                }
            }
        },
        clearCart(state)
        {
            state.cartComponent.drinks = [];
        }
    },
    getters: {
        drinks: state => state.drinkComponent.drinks,
        drinkCurrentPage: state => state.drinkComponent.currentPage,
        drinkTotalItems: state => state.drinkComponent.totalItems,
        drinkSelected: state => state.drinkComponent.selected,
        cartDrinks: state => state.cartComponent.drinks,
        cartDrinksLength: state => {
            let count = 0;
            for(let i = 0; i < state.cartComponent.drinks.length; i++)
            {
                count += state.cartComponent.drinks[i].quantity;
            }

            return count;
        }
    }
});

export default store;