<template>
<body>
  <div class="login_box">
    <div class="query_heard">
    </div>
    <div class="login_content">
      <form action="" class="loginForm">
        <div class="loginField">
          <img class="loginIcon" src="../images/user_name.png" alt="">
          <input class="loginInput" type="text" placeholder="请输入您的姓名" v-model="queryname"/>
        </div>
        <div class="loginField">
          <img class="loginIcon" src="../images/ZJ_icon.png" alt="">
          <input class="loginInput"  placeholder="请输入您的身份证号码" v-model="indentify"/>
        </div>
        <div class="loginField">
          <img class="loginIcon" src="../images/ZJ_icon.png" alt="">
          <input class="loginInput"  placeholder="请输入您的手机号码" v-model="phone"/>
        </div>
        <div class="loginButton" @click="query">
          查 询
        </div>
      </form>
    </div>
  </div>
</body>
</template>

<style scoped>

.font_size24 {
  font-size: 24px;
}
.font_size18 {
  font-size: 18px;
}
.margin_top15{
  margin-top: 15px;
}
.login_title {
  font-size: 18px;
  padding-top: 100px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
.query_heard {
  font-size: 12px;
  display: flex;
  margin: 50px 0;
  padding-bottom:50px;
  justify-content:flex-end;
  /* background: #fff;
  opacity:0.5;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px; */
}
.query_heard_left{
  line-height: 24px;
  color: #fff;
}
.sign_out {
  margin:0 15px;
  line-height: 24px;
  color:#ccc;
}
.login_content {
  background: #fff;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin:40px 20px 20px 20px;
  padding:20px;
  box-sizing: border-box;
}
.loginForm {
  width: 100%;
}
.loginField {
  display: flex;
  border-bottom: 1px solid #d7d7d7;
  align-items: center; /*垂直居中*/
  height: 43px;
  font-size: 14px;
}
.loginIcon {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
.loginInput {
  border: 0;
  font-size: 14px;
  flex: 1;
  margin-left: 15px;
  height:30px;
}

.loginButton {
  margin-top: .8rem;
  background: #358AFF;
  height: 40px;
  text-align: center;
  color: #fff;
  line-height: 40px;
  font-size: 18px;
  border-radius: 4px;
}
.modifyPassword {
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-top: 1.4rem;
}
</style>
<script>
export default {
    name: 'query',
    data(){
        return {
            queryname:'',
            indentify:'',
            phone:''
        }
    },
    methods:{
    query:function(){
        console.log('query:' + this.queryname)
        if(this.queryname == '' || this.indentify == ''){
            alert('姓名或者身份证号码不能为空')
            return
        }
        this.$router.push({ name: "Report", params: { name: this.queryname, indentify: this.indentify}});
    }
  }
}
</script>