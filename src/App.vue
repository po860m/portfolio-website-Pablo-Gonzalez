<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
              </li>
          </ul>
      </div>
    </nav>
    <div class="container">
      <header class="header my-4 text-center">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <img :src="image" alt="Professional Image" class="img-fluid rounded-circle mx-auto d-block image">
        </header>
      </div>
    <router-view></router-view>
    </div>
 </template>

 <script>
export default {
  data() {
    return {
      title: "Pablo Gonzalez",
      description: " I'm a Information Technology student at CCC, currently I am learning skills in Vue.js, and I am extited to learn about the endless possibilites that web development offers. and in the future, I hope to work on project so that i could leran more about it",
      image: require('./assets/myself image.jpg')
    };
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  text-align: center;
}

.image{
  width: 800px;
  height: 500px;
}
</style>
