<template>
    <b-row class="mt-5">
        <b-col class="footer">
            &copy; Blacatz {{year}}
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
              year: new Date().getFullYear()
            };
        }
    }
</script>

<style scoped>
    .footer{
        background-color: darkorange;
        text-align: center;
        color: white;
        padding: 12px 16px;
    }
</style>