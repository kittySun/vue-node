<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Center></Center>
        <Footer></Footer>
    </div>
</template>


<script>
import Header from './king/header.vue'
import Footer from './king/footer.jsx'
import Center from './king/center.vue'

export default {
    components: {
        Header,
        Footer,
        Center
    }
}
</script>

<style lang="stylus" scoped>
#app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0    
}
#cover{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .5
    z-index -1
}
</style>
