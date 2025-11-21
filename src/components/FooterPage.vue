<template>

<!-- Footer -->
<footer class="border-t border-github-600 bg-github-900 mt-16">
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <router-link to="/" class="flex items-center space-x-3 mb-4 md:mb-0">
                <i class="fab fa-github text-2xl text-white"></i>
                <span class="text-white font-semibold">Mni GitHub App</span>
            </router-link>
            <div class="flex items-center space-x-6 text-github-gray-400">
                <a href="#" class="hover:text-white transition-colors">Terms</a>
                <a href="#" class="hover:text-white transition-colors">Privacy</a>
                <a href="#" class="hover:text-white transition-colors">Security</a>
                <a href="#" class="hover:text-white transition-colors">Status</a>
                <a href="#" class="hover:text-white transition-colors">Docs</a>
            </div>
            <div class="flex items-center space-x-4 mt-4 md:mt-0">
                <a href="#" class="text-github-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-github-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="text-github-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
        <div class="text-center text-github-gray-500 mt-8 text-sm">
            &copy; {{ new Date().getFullYear() }} BAN MAKARA. Built with ❤️ and Tailwind CSS.
        </div>
    </div>
</footer>
<!-- End Footer -->
</template>
