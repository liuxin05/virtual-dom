<template>
    <div id="myId">
        {{msg}}
    </div>
</template>
<script>

export default {
    el:'#myId',
    data(){
        return{
            msg:'(≧▽≦)'
        }
    },
    mounted(){
      setTimeout(() => this.someVar = 'changed', 3000)
    }
}
</script>

  