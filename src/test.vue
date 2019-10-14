<template>
    <div class="tab_manage_wrap bg-fff">
        <div class="tab_add">
            <router-link to="/fans/tabadd" class="tab_title plr">
                <i></i><span>新建标签</span>
            </router-link>
        </div>
        <ul class="tab_manage bg-fff pl clearfix">
            <li v-for="(todo, index) in todos">
                <div :class="[{swipeleft: isSwipe[index]},'tab_manage_list left']" @touchstart.stop="created()" ref="child" :key="index">
                    <p class="tab">{{ todo.title }}(<span>{{todo.num}}</span>)</p>
                    <p class="tab_content text_hide">{{ todo.text }}</p>
                </div>
                <p class="tab_delete left" @click.stop="removeTodo(index)">删除</p>
            </li>
        </ul>
    </div>

</template>

<script>
  export default {
    name: "demo",
    data(){
      return {
        isSwipe: [false, false, false],
        todos: [
          { 'text': '范冰冰,范冰冰1,范冰冰2,范冰冰2','num':'3','title':'5月份收房'},
          { 'text': '邓超,邓超1,邓超2,邓超2','num':'3','title':'6月份收房'},
          { 'text': '赵丽颖,赵丽颖1,赵丽颖2,赵丽颖2,赵丽颖,赵丽颖1,赵丽颖2,赵丽颖2','num':'6','title':'7月份收房'},
          { 'text': '范冰冰,范冰冰1,范冰冰2,范冰冰2','num':'3','title':'8月份收房'}
        ]
      }
    },
    methods: {
      removeTodo: function (index) {
        this.todos.splice(index, 1);
        this.isSwipe = [false, false, false]
      },
      created:function() {
        setTimeout(() => {
          // 判断是否存在信息列表
          if (this.$refs.child) {
            this.$refs.child.forEach((element, index) => {
              let x, y, X, Y, swipeX, swipeY
              // 监听touchstart
              element.addEventListener('touchstart',function(e) {
                x = e.changedTouches[0].pageX
                y = e.changedTouches[0].pageY
                swipeX = true
                swipeY = true
                this.isSwipe = [false, false, false]
              })
              element.addEventListener('touchmove', e => {
                X = event.changedTouches[0].pageX
                Y = event.changedTouches[0].pageY
                if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
                  // 阻止默认事件
                  e.stopPropagation()
                  // 右滑
                  if (X - x > 10) {  //滑动间距
                    e.preventDefault()
                    this.isSwipe.splice(index, 1, false)
                  }
                  if (x - X > 10) {  //滑动间距
                    e.preventDefault()
                    this.isSwipe.splice(index, 1, true)
                  }
                  swipeY = false
                }
                if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
                  swipeX = false
                }
              })
            })
          }
        }, 500)
      }
    }
  }
</script>

<style scoped>
    .tab_manage_wrap{
        width: 100%;
        height: 100%;
    }
    .tab_title{
        display: block;
        width: 100%;
        height: 2.56rem;
        border-bottom: 0.05rem solid #dedede;
        line-height: 2.56rem;
        position: relative;
    }
    .tab_title i{
        position: absolute;
        width: 0.64rem;
        height: 0.64rem;
        left: 0.426667rem;
        top: 0.96rem;
        /*background:url(add.png);*/
        background-size: 100% 100%;
    }
    .tab_title span{
        display: block;
        padding-left: 1.493333rem;
        font-size: 0.597333rem;
        color: #fe4d57;
    }
    .tab_manage{
        width: 16rem;
        margin: 0 auto;
        overflow-x: hidden;
        position: relative;
    }
    .tab_manage li{
        position: relative;
        width:18.56rem;
        height: 2.56rem;
        border-bottom: 0.05rem solid #dedede;
    }
    .tab_manage_list{
        height: 2.56rem;
        width: 15.573333rem;
    }
    .swipeleft.tab_manage_list{
        margin-left: -3rem;
    }
    .tab_manage li .tab{
        font-size: 0.64rem;
        color: #555;
        padding-top: 0.426667rem;
        padding-bottom: 0.213333rem;
    }
    .tab_manage li .tab_content{
        font-size: 0.554667rem;
        color: #999;
        width: 15.36rem;
    }
    .tab_manage li .tab_delete{
        height: 2.56rem;
        width: 2.986667rem;
        line-height: 2.56rem;
        text-align: center;
        font-size: 0.725333rem;
        color: #fff;
        background-color: #fe4d57;
    }

</style>