<template>
  <div id="outer">
    <div id="cards">
      <div class="card1">
        <h1 class="title">Todo List</h1>
        <div class="contents">
         <input type="text" placeholder="What should your do?" />
         <button id="add">add</button>
        </div>
      </div>
      <div class="card2">
        <div v-for="(value, index) in todo" :key="index">
          <div class="todo-list">
            <h3>Your Todo Lists!</h3>
            <div class="flex">
               <p class="id">{{value.id}}.</p>
               <input type="text" :value="todo">
               <button id="update">Update</button>
               <button id="del">Delete</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  del(index) {
    axios
    .delete(
      "https://radiant-cove-15822.herokuapp.com/api/todo/" +
        this.todo[index].item.id
    )
    .then((response) => {
      console.log(response);
      this.$router.go({
        path: this.$router.currentRoutepath,
        force: true,
      });
    });
  },
  getTodo() {
    let data = [];
    const todo = axios.get(
      "https://radiant-cove-15822.herokuapp.com/api/todo"
    );
    for (let i = 0; i < todo.data.data.length; i++) {
      axios
      .get(
        "https://radiant-cove-15822.herokuapp.com/api/to/" +
        todo.data.data[i].id
      )
      .then((response) => {
        data.push(response.data);
      });
    }
    this.todo =data;
    console.log(this.todo);
  },
  created() {
    this.getTodo();
  }
};
</script>

<style scoped>

#outer {
  width: 100%;
  height: 100%;
}

#cards {
  width: 65%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card1 {
  background-color: whitesmoke;
  padding: 20px;
}

.title {

}

.contents {
  display: flex;
  justify-content: flex-start;
}

.card1 input {
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  background: whitesmoke;
}

#add {
  width: 50px;
  text-align: center;
  padding: 10px 0;
  color: black;
  background-color: whitesmoke;
  border-radius: 5px;
  border: 1px solid black;
  margin: 0 60px;
}

.card2 {
  background-color: gray;
  padding: 20px;
}

.flex {
  display: flex;
  margin: 10px;
}

.id {
  padding: 0 10px;
}

.flex input {
  padding: 0 5px;
  width: 45%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  background: whitesmoke;
}

#update {
  margin: 0 5px;
  border-radius: 5px;
  border: 2px solid blue;
  background: whitesmoke;
  color: blue;
}

#del {
  border-radius: 5px;
  border: 2px solid red;
  background: whitesmoke;
  color: red;
}
</style>