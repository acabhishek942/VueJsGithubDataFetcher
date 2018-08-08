<template>

<div>
    <button @click="authenticate('github')">auth Github</button>
</div>
    
</template>

<script>
export default {
    data () {
        return {}
    },
    methods : {
        authenticate: function (provider) {
            this.$auth.authenticate(provider).then(function(){
                // execute application login here
            })
        }
    }
    
}
</script>

<style scoped>

</style>
