<template>
<v-app>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>code</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" v-on="on">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="mdi-account" name="login" label="Login" type="text" v-model="name"></v-text-field>
                  <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="to_dashboard">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</v-app>
</template>

<script>
import http from '../http'
  export default {
    data: () => ({
      drawer: null,
      name:'name',
      password:'password',
      snackbar:false,
      text:'账号密码错误'
    }),
    props: {
      source: String
    },
    methods:{
        to_dashboard:function(){
          this.$router.push('dashboard')
          http.post('/login',{
            username:this.name,
            password:this.password
          }).then(res=>{
            if(res.data.msg==='login fail'){
              console.log("err")
              this.snackbar = true
            }else{
              this.snackbar = true
              this.text = '登录成功'
              localStorage.setItem('token',res.data.access_token)
              this.$router.push('dashboard')
            }
            this.$router.push('dashboard')
          }).catch(err=>{
            console.log(err)
          })
        }
    }
  }
</script>