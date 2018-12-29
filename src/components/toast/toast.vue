<template>
    <transition name="fade">
        <div class="toast" v-show="show">
            {{message}}
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return {
            show:false,
            message: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.toast{
    position: fixed;
    top:40%;
    left:50%;
    margin-left: -8vw;
}
</style>
