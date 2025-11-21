<script>
  import axios from 'axios'
  const API = 'https://api.github.com'
  export default {
    data() {
      return {
        users: [],
        repositories: [],
        loadingRepos: false,
        errorRepos: null,
        perPage: 10,
        loading: false,
        error: null,
      }
    },
    async mounted() {
      await this.viewProfile()
    },
    methods: {

      // View user profile
      async viewProfile() {
        const username = this.$route.params.username;
        this.loading = true
        this.error = null
        try {
          const response = await axios.get(`${API}/users/${username}`)
          this.users = response.data

        } catch (err) {
          this.error = err.message
          console.error('Error fetching user profile:', err)
        } finally {
          this.loading = false
        }

        // Fetch user repositories
        this.loadingRepos = true
          try {
            const response = await axios.get(`${API}/users/${username}/repos?sort=updated&per_page=100`)

            this.repositories = response.data
          } catch (err) {
            console.error('Error fetching repositories:', err)
          } finally {
            this.loadingRepos = false
          }
      },

      formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
      },
    },
  }
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Back Button -->
    <div class="container mx-auto px-4 py-4">
      <router-link to="/"
        class="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group">
        <i class="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
        <span>Back to Users</span>
      </router-link>
    </div>
    <main class="container mx-auto px-4 py-8">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>

      <!-- Error State -->
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{{ error }}</p>
      </div>

      <!-- User Profile -->
      <div class="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white rounded-lg shadow-md overflow-hidden mb-8">
          <div class="p-6">
              <div class="flex flex-col md:flex-row items-center md:items-start">
                  <img
                      :src="users.avatar_url"
                      :alt="users.login"
                      class="w-32 h-32 rounded-full border-4 border-gray-200 mb-4 md:mb-0 md:mr-6"
                  >
                  <div class="flex-1 text-center md:text-left">
                      <h2 class="text-2xl font-bold text-white">{{ users.name || users.login }}</h2>
                      <p class="text-white-400 mb-2">@{{ users.login }}</p>
                      <p v-if="users.bio" class="text-white-400 mb-4">{{ users.bio }}</p>

                      <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                          <div class="flex items-center text-white-400">
                              <i class="fas fa-users mr-2 text-blue-500"></i>
                              <span><strong>{{ users.followers }}</strong> followers</span>
                          </div>
                          <div class="flex items-center text-white-400">
                              <i class="fas fa-user-friends mr-2 text-green-500"></i>
                              <span><strong>{{ users.following }}</strong> following</span>
                          </div>
                          <div class="flex items-center text-white-400">
                              <i class="fas fa-code-branch mr-2 text-purple-500"></i>
                              <span><strong>{{ users.public_repos }}</strong> repositories</span>
                          </div>
                      </div>

                      <div v-if="users.location" class="flex items-center justify-center md:justify-start text-white-700 mb-2">
                          <i class="fas fa-map-marker-alt mr-2 text-red-500"></i>
                          <span>{{ users.location }}</span>
                      </div>

                      <div v-if="users.blog" class="flex items-center justify-center md:justify-start text-gray-700">
                          <i class="fas fa-link mr-2 text-indigo-500"></i>
                          <a :href="users.blog" target="_blank" class="text-blue-500 hover:underline">{{ users.blog }}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Repositories Section -->
      <div v-if="!loading && !error" class="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-700">
              <h3 class="text-xl font-semibold text-white">Repositories</h3>
          </div>

          <!-- Loading Repositories -->
          <div v-if="loadingRepos" class="flex justify-center py-8">
              <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>

          <!-- Repositories List -->
          <div class="divide-y divide-white-700">
              <div v-for="repo in repositories" :key="repo.id"
                  class="p-6 card-hover backdrop-blur-sm transition-colors duration-300">
                  <div class="flex justify-between items-start mb-2">
                      <h4 class="text-lg font-medium text-blue-600 hover:underline">
                          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                      </h4>
                      <div class="flex items-center text-white-700">
                          <i class="fas fa-star text-yellow-500 mr-1"></i>
                          <span>{{ repo.stargazers_count }}</span>
                      </div>
                  </div>

                  <p v-if="repo.description" class="text-white-700 mb-3">{{ repo.description }}</p>

                  <div class="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span v-if="repo.language" class="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {{ repo.language }}
                      </span>
                      <span v-if="repo.license" class="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {{ repo.license.name }}
                      </span>
                      <span class="bg-green-100 text-green-800 px-2 py-1 rounded">
                          Updated: {{ formatDate(repo.updated_at) }}
                      </span>
                  </div>
              </div>
          </div>

          <!-- No Repositories -->
          <div v-if="!loadingRepos && repositories.length === 0" class="p-8 text-center text-gray-500">
              <i class="fas fa-inbox text-4xl mb-3"></i>
              <p>No repositories found</p>
          </div>
      </div>

    </main>
  </div>
<!-- Repositories Section -->

</template>
