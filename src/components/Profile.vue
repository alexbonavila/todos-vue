<template>
    <md-card md-with-hover>
        <md-card-header>
            <md-avatar>
                <img :src="avatar" alt="Avatar">
            </md-avatar>

            <div class="md-title">{{ id }} {{ name }}</div>
            <div class="md-subhead">{{ email}}</div>
        </md-card-header>

        <md-card-content>
            <md-spinner :md-size="150" md-indeterminate  class="md-accent" v-show="connecting" ></md-spinner>
            <form novalidate @submit.stop.prevent="submit">
                <md-input-container>
                    <label>Name</label>
                    <md-input v-model="name" placeholder="Put your name here"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Email</label>
                    <md-input v-model="email" placeholder="Put your email here"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Created at</label>
                    <md-input v-model="createdAt" placeholder="Date here"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Updated at</label>
                    <md-input v-model="updatedAt" placeholder="Date here"></md-input>
                </md-input-container>
            </form>
        </md-card-content>

        <md-card-actions>
            <md-button>Edit</md-button>
            <md-button>Delete</md-button>
        </md-card-actions>
        <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
            <span>Connection error. Please reconnect using connect button!.</span>
        </md-snackbar>
    </md-card>
</template>
<style>
</style>
<script>
  import todosVue from '../todosVue'
  export default{
    data () {
      return {
        avatar: 'http://www.gravatar.com/avatar/ef7becbb69d8ea5108fb1d98567ddb68',
        id: null,
        name: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        connecting: true
      }
    },
    computed: {
      avatarHash: function () {
        return 'ef7becbb69d8ea5108fb1d98567ddb68'
      }
    },
    created () {
      console.log('Component profile created')
      this.fetchUserProfile()
    },
    methods: {
      fetchUserProfile: function () {
        this.$http.get(todosVue.API_PROFILE_URL).then((response) => {
          this.connecting = false
          console.log(response.data)
          this.id = response.data.id
          this.name = response.data.name
          this.email = response.data.email
          this.createdAt = response.data.created_at
          this.updatedAt = response.data.updated_at
        }, (response) => {
          this.connecting = false
          this.showConnectionError()
        })
      },
      showConnectionError () {
        this.$refs.connectionError.open()
      }
    }
  }
</script>
