<template>
  <div id="home">
      <ul class="text-algin">
      </ul>
      <p id="p-content">
        <Button>{{someVar}}</Button>
      </p>
      <template>
    <Row>
        <Col span="8">
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">fhs</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
    </Row>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
</template>
</div>
</template>
<script>
import { Button, Table } from 'iview';
export default{
    $el:'#p-content',
    data(){
        return{
            someVar: '当前的dom节点',
            theme2:'light'
        }
    },
    mounted(){
        setTimeout(() => this.someVar = '改变的dom', 3000)
    }
}
  </script>
<style scoped>
.text-algin{
    text-align: left;
    font-size:20px;

}
</style>

