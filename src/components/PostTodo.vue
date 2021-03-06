<template>
  <div id="outer">
    <div class="card1">
      <h1 class="title">Todo List</h1>
      <div class="contents">
       <input type="text" placeholder="What should your do?"  v-model="todo"/>
       <button id="add" @click="add">add</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    getTodo() {
      axios.get("https://radiant-cove-15822.herokuapp.com/api/todo")
        .then((res) =>{
          this.rodo = res.data;
        });
    },
    add() {
      if (this.todo === "") {
        alert("Please enter the contents");
      } else {
        axios.post("https://radiant-cove-15822.herokuapp.com/api/todo", {
          todo: this.todo,
        })
        .then((res) => {
          console.log(res);
          alert("Posting successfully");
          this.todo = "";
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
      }
    },
  },
};
</script>

<style scoped>


.card1 {
  background-color:  #1d3781 ;
  padding: 20px;
}

.title {
  color: aliceblue;
}

.contents {
  display: flex;
  justify-content: flex-start;
}

.card1 input {
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #081535;
  background: whitesmoke;
}

#add {
  width: 50px;
  text-align: center;
  padding: 10px 0;
  color: #081535;
  background-color: whitesmoke;
  border-radius: 5px;
  border: 1px solid #081535;
  margin: 0 60px;
}

</style>