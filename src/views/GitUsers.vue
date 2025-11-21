<script>
  import axios from 'axios';
  const API = 'https://api.github.com';

  export default {
    data() {
        return {
            users: [],
            perPage: 10,
            loading: false,
            error: null
        }
      },
      async mounted() {
          await this.getUsersGit();
      },
      methods: {
          //get all users github
          async getUsersGit() {
              this.loading = true;
              this.error = null;
              try {
                const response = await axios.get(`${API}/users?per_page=${this.perPage}`);
                this.users = response.data;
              } catch (err) {
                  this.error = err.message;
                  console.error('Error fetching users:', err);
              } finally {
                  this.loading = false;
              }
          }
      }
  };
</script>

<template>
  <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="container mx-auto px-4 py-4">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div class="flex items-center space-x-3">
                
              </div>
              <div class="flex items-center space-x-4">
                      <span class="text-gray-400">Users per page:</span>
                      <select v-model="perPage" @change="getUsersGit"
                          class="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                      </select>
                  </div>
              </div>
      </div>
      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-16 space-y-4">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p class="text-gray-400 text-lg">Loading GitHub users...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error"
        class="max-w-md mx-auto bg-red-900/50 border border-red-700 rounded-xl p-6 text-center">
        <i class="fas fa-exclamation-triangle text-red-400 text-3xl mb-4"></i>
        <h3 class="text-red-200 text-xl font-semibold mb-2">
          Oops! Something went wrong
        </h3>
        <p class="text-red-300 mb-4">{{ error }}</p>
        <button @click="getUsersGit"
          class="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
          <i class="fas fa-redo mr-2"></i>
          Try Again
        </button>
      </div>

      <!-- Users Grid -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="user in users"
          :key="user.id"
          class="bg-gray-800/50 border border-gray-700 rounded-xl p-6 card-hover backdrop-blur-sm"
        >
          <div class="flex flex-col items-center text-center space-y-4">
            <img
              :src="user.avatar_url"
              :alt="user.login"
              class="w-20 h-20 rounded-full border-2 border-gray-600 shadow-lg"/>
            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-semibold text-white truncate">
                {{ user.login }}
              </h3>
              <p class="text-gray-400 text-sm mt-1">{{ user.user_view_type }}</p>
            </div>
            <router-link :to="`/users/${user.login}`" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
              <i class="fas fa-user-circle group-hover:scale-110 transition-transform"></i>
              <span>View Profile</span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="!loading && !error && users.length === 0"
        class="text-center py-16"
      >
        <i class="fas fa-users text-5xl text-gray-600 mb-4"></i>
        <h3 class="text-2xl font-semibold text-gray-400 mb-2">
          No Users Found
        </h3>
        <p class="text-gray-500">
          Try adjusting your search or filter criteria
        </p>
      </div>
    </main>
  <!-- End Main Content -->
</template>

<style>
        .github-gradient {
            background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
        }
        .card-hover {
            transition: all 0.3s ease;
        }
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        .fade-enter-active {
            transition: opacity 0.5s ease;
        }
        .fade-enter-from {
            opacity: 0;
        }
    </style>


