<template>
  <!-- Error State -->
   <div class="container mx-auto px-4 py-8">
    <div class="max-w-md mx-auto bg-red-900/50 border border-red-700 rounded-xl p-6 text-center">
        <i class="fas fa-exclamation-triangle text-red-400 text-3xl mb-4"></i>
        <h3 class="text-red-200 text-xl font-semibold mb-2">Profile Not Found</h3>
        <p class="text-red-300 mb-4">No username provided in URL parameters</p>
        <router-link to="/" class="inline-block bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Users
        </router-link>
    </div>
  </div>
</template>
