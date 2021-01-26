<template>
  <div class="container">
    <div class="row">
      <div class="col-5 offset-7 col-sm-7 offset-sm-5 col-md-6 offset-md-6 mx-auto">
        <div class="card  my-5 shadow-lg rounded-3">
            <div class="card-header">
                <h5 class="card-title text-center">Aufiero Leads</h5>
            </div>
          <form class="card-body" @submit.prevent="login">
            <div class="mt-2">
              <label for="user" class="form-label">Usuario</label>
              <input
                type="text"
                class="form-control"
                id="user"
                placeholder="Nombre de usuario"
                v-model="user.nickname"
              />
            </div>
            <div class="my-3">
              <label for="pass" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="pass"
                placeholder="Password"
                v-model="user.password"
              />
            </div>
            <div class="text-center">
                <input class="btn btn-success" type="submit" value="Ingresar">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
export default {
    data(){
        return{
            user: {
                nickname: '',
                password: '',
            }
        }
    },
    methods:{
      login(e){
          const URI = 'http://localhost:5000/auth/users'
            axios.post(URI, this.user).then(res => {
              const {data} = res;
              localStorage.setItem('isAuth','true');
              this.$router.push('/main/dashboard')
            }).catch(err => console.warn(err))
            console.log()
        }
    }
};
</script>