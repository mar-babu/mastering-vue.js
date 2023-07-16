<script setup>
    import Menu from './Menu.vue'
</script>

<template>
    <nav class="site-nav dark js-site-navbar mb-5 site-navbar-target">
        <div class="container">
            <div class="site-navigation">
                <a href="index.html" class="logo m-0 float-left">Launch<span class="text-primary">.</span></a>
                
                <Menu />

                <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
                    data-toggle="collapse" data-target="#main-navbar">
                    <span></span>
                </a>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
