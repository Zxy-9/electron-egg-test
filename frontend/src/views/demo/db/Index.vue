<template>
  <div id="app-demo-db">
    <div class="one-block-1">
      <span>
        1. 本地数据库
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="8">
          • LowDB本地JSON数据库
        </a-col>
        <a-col :span="8">
          • 可使用lodash语法
        </a-col>
        <a-col :span="8">
          • 数据文件db.json在日志同级目录
        </a-col>
      </a-row>
    </div>
    <div class="one-block-1">
      <span>
        2. 测试数据
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="24">
          {{ all_list }}
        </a-col>
      </a-row>
    </div>    
    <div class="one-block-1">
      <span>
        3. 添加数据
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="6">
          <a-input v-model="name" :value="name" addon-before="姓名" />
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
          <a-input v-model="age" :value="age" addon-before="年龄" />
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
          <a-button @click="dbOperation('add')">
            添加
          </a-button>
        </a-col>
      </a-row>
    </div>
    <div class="one-block-1">
      <span>
        4. 获取数据
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="6">
          <a-input v-model="search_age" :value="search_age" addon-before="年龄" />
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
          <a-button @click="dbOperation('get')">
            查找
          </a-button>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          {{ userList }}
        </a-col>
      </a-row>
    </div>
    <div class="one-block-1">
      <span>
        5. 修改数据
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="6">
          <a-input v-model="update_name" :value="update_name" addon-before="姓名" />
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
          <a-input v-model="update_age" :value="update_age" addon-before="年龄" />
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
          <a-button @click="dbOperation('update')">
            更新
          </a-button>
        </a-col>
      </a-row>
    </div>
    <div class="one-block-1">
      <span>
        6. 删除数据
      </span>
    </div>  
    <div class="one-block-2">
      <a-row>
        <a-col :span="6">
          <a-input v-model="delete_name" :value="delete_name" addon-before="姓名" />
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
        </a-col>
        <a-col :span="3">
        </a-col>
        <a-col :span="6">
          <a-button @click="dbOperation('del')">
            删除
          </a-button>
        </a-col>
      </a-row>
    </div>       
  </div>
</template>
<script>
import { localApi } from '@/api/main'

export default {
  data() {
    return {
      name: '张三',
      age: 10,
      userList: ['空'],
      search_age: 10,
      update_name: '张三',
      update_age: 21,
      delete_name: '张三',
      all_list: ['空']
    };
  },
  
 
  
};
</script>
<style lang="less" scoped>
#app-demo-db {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
