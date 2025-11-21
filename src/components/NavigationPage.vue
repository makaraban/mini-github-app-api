<template>
  <!-- Navigation -->
  <nav class="glass sticky top-0 z-50 border-b border-github-600">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <i class="fab fa-github text-2xl text-white"></i>
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-github-green-400 rounded-full pulse-dot"></div>
            </div>
            <span class="text-white font-semibold text-lg hidden lg:block">Mini GitHub</span>
          </div>
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-6">
          <router-link
            to="/"
            class="text-github-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium flex items-center space-x-1"
          >
            <i class="fas fa-home text-sm"></i>
            <span>Dashboard</span>
          </router-link>
          <a
            href="#"
            class="text-github-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium flex items-center space-x-1"
          >
            <i class="fas fa-code-branch text-sm"></i>
            <span>Repositories</span>
          </a>
          <a
            href="#"
            class="text-github-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium flex items-center space-x-1"
          >
            <i class="fas fa-project-diagram text-sm"></i>
            <span>Projects</span>
          </a>
          <a
            href="#"
            class="text-github-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium flex items-center space-x-1"
          >
            <i class="fas fa-users text-sm"></i>
            <span>Organizations</span>
          </a>
        </div>

        <!-- Search & Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <div class="relative hidden md:block">
            <input
              type="text"
              placeholder="Search GitHub..."
              class="w-64 bg-github-800 border border-github-600 rounded-lg py-2 px-4 pl-10 text-sm text-white placeholder-github-gray-400 focus:outline-none focus:ring-2 focus:ring-github-blue-400 focus:border-github-blue-400 transition-all"
            />
            <i
              class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-github-gray-400"
            ></i>
          </div>

          <!-- Notifications & Profile -->
          <div class="flex items-center space-x-3">
            <button class="relative p-2 text-github-gray-300 hover:text-white transition-colors">
              <i class="fas fa-bell"></i>
              <span
                class="absolute -top-1 -right-1 w-2 h-2 bg-github-green-400 rounded-full"
              ></span>
            </button>
            <div class="flex items-center space-x-2 cursor-pointer group">
              <div
                class="w-8 h-8 bg-blue-gradient rounded-full flex items-center justify-center text-white font-semibold shadow-lg"
              >
                <i class="fas fa-user"></i>
              </div>
              <i
                class="fas fa-caret-down text-github-gray-300 group-hover:text-white transition-colors"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
