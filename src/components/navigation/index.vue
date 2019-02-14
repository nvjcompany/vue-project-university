<template>
    <b-row>
        <b-col>
            <b-navbar toggleable="md" type="light" variant="secondary">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <router-link tag="b-navbar-brand" to="/">
                        <a>Coctalino</a>
                </router-link>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <router-link tag="b-nav-item" to="/">
                            <a>Home</a>
                        </router-link>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <cart></cart>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>
    import Cart from '../cart';
    export default {
        name: "index",
        components:{
            Cart
        }
    }
</script>

<style scoped>

    .navbar
    {
        background-color:darkorange !important;
    }

    .navbar a
    {
        color: white !important;
    }
</style>