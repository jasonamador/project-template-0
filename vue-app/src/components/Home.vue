<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <el-table :data=users>
      <el-table-column
          prop="name"
          label="Name">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      msg: String
    },
    components: {},
    data () {
      return {
        users: []
      }
    },
    methods: {
      async fetchUsers () {
        try {
          let response = await this.$http.get('')
          this.users = response.data
          console.log('thing', this.users)
        } catch (err) {
          console.error('GET USERS', err)
          return err
        }
      }
    },
    created () {
      this.fetchUsers()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
