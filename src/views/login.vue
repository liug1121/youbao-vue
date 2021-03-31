<template>

  <div class="login_box">
    <div >
      <p class="font_size24">合规宝</p>
      <p class="margin_top15">保险从业人员诚信合规系统</p>
    </div>
    <div class="login_content">
      <form action="" class="loginForm">
        <div class="loginField">
          <img class="loginIcon" src="../images/user_name.png" alt="">
          <input class="loginInput" type="text" placeholder="请输入您的手机号或者用户名" />
        </div>
        <div class="loginField">
          <img class="loginIcon" src="../images/password.png" alt="">
          <input class="loginInput" type="password" placeholder="请输入您的密码" />
        </div>
        <div class="loginButton" @click="login">
          登 录
        </div>
      </form>
    </div>
    <div class="modifyPassword">修改密码</div>
  </div>

</template>

<style scoped>

html {
  font-size: 50px;
  height: 100%;
}
.font_size24 {
  font-size: 24px;
}
.font_size18 {
  font-size: 18px;
}
.margin_top15{
  margin-top: 15px;
}
.login_box{
  width: 100%;
  
  height: 500px;
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
  name: 'HelloWorld',
  methods:{
    login:function(){
      console.log('login')
      this.$router.push({ name: "Query"});
    }
  }
  
}
</script>

<style scoped>
h1 {
  font: 1.5em sans-serif;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
