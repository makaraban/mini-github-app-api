<script>
  import GitUsers from './GitUsers.vue';

  export default {
    components:{
      GitUsers,
    }
  };
</script>

<template>
  <!-- Main Content -->
    <GitUsers />
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


