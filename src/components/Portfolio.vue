<template>
    <div>
      <h1>Portfolio</h1>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <div v-for="repo in repositories" :key="repo.id" class="repo">
          <h2><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></h2>
          <p>{{ repo.description }}</p>
          <p><strong>Language:</strong> {{ repo.language }}</p>
          <p><strong>Last Updated:</strong> {{ new Date(repo.updated_at).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repositories: [],
        loading: true,
        error: null
      };
    },
    created() {
      this.fetchRepositories();
    },
    methods: {
      async fetchRepositories() {
        try {
          const response = await axios.get('https://api.github.com/users/po860m/repos');
          this.repositories = response.data;
        } catch (error) {
          this.error = 'Failed to load repositories.';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style>
  .repo {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  