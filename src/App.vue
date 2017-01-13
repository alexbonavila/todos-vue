<template>
    <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<hello></hello>-->
    <!--</div>-->
    <div class="phone-viewport">
        <md-toolbar>
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title">TODOS</h2>
        </md-toolbar>

        <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                    <h3 class="md-title">Sidenav content</h3>
                </div>
            </md-toolbar>

            <div class="phone-viewport">
                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon> <span>Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon> <span>Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon> <span>Spam</span>

                        <md-divider class="md-inset"></md-divider>
                    </md-list-item>

                </md-list>
            </div>
        </md-sidenav>
    </div>
</template>

<script>
    import Hello from './components/Hello'

    export default{
      name: 'app',

      components: {
        Hello
      },

      methods: {
        toggleLeftSidenav () {
          this.$refs.leftSidenav.toggle()
        },
        open (ref) {
          console.log('Opened: ' + ref)
        },
        close (ref) {
          console.log('Closed: ' + ref)
        }
      }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
