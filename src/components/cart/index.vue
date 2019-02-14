<template>
    <div>
        <b-nav-item class="color-white" >
            <a @click="toggleCart">
                <i  class="fa fa-shopping-cart"></i> (<span>{{cartItemsLength}}</span>)
            </a>

            <div class="box" v-bind:class="{ active: isActive }">
                <div class="container p-3">
                    <div class="row cart-item" v-for="cartItem in cartItems">
                        <div class="col-8">
                            <h3>
                                {{cartItem.strDrink}}
                                <a class="float-right" @click="removeDrink(cartItem)">
                                    <i class="fa fa-times"></i>
                                </a>
                            </h3>
                            <div class="price">
                                {{cartItem.quantity}} x $2.00
                            </div>

                        </div>
                        <div class="col-4">
                            <img :src="cartItem.strDrinkThumb" class="img-fluid" />
                        </div>
                    </div>

                    <div class="row mt-1 text-right">
                        <div class="col-12">
                            <h4>Total: ${{(cartItemsLength * 2).toFixed(2)}}</h4>
                        </div>
                    </div>

                    <div class="row text-right">
                        <div class="col-12">
                            <button class="btn btn-warning" @click="order">
                                Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </b-nav-item>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            toggleCart()
            {
                if(this.cartItemsLength === 0)
                {
                    this.$swal('Error!','Please order items first!','warning');
                }
                else
                {
                    this.$data.isActive = !this.$data.isActive;
                }

            },
            removeDrink(drink)
            {
                this.$store.commit('decrementDrinkCartQuantity', drink);
                if(this.cartItemsLength === 0)
                {
                    this.$data.isActive = false;
                }
            },
            order()
            {
                this.$store.commit('clearCart');
                this.$data.isActive = false;
                this.$swal('Success!','Your order has been sent!','success');
            }
        },
        data()
        {
            return {
                isActive: false
            }
        },
        computed: {
            cartItems(){
                return this.$store.getters.cartDrinks;
            },
            cartItemsLength(){
                return this.$store.getters.cartDrinksLength;
            }
        }
    }
</script>

<style scoped>
    .color-white > *
    {
        color: white !important;
    }

    .active
    {
        display: block !important;
    }

    h3
    {
        color: silver;
        font-size: 16px;
        padding:0;
        margin:0;
    }

    .cart-item
    {
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid silver;
    }

    .price
    {
        font-size: 12px;
    }

    .fa-times
    {
        color: red;
    }

    .box
    {
        overflow-y: scroll;
        width:350px;
        height:300px;
        border: 1px solid silver;
        position: absolute;
        right: 0px;
        background-color: white;
        z-index: 9999;
        display:none;
        color: black !important;
    }

</style>