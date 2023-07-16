<script setup>
let ctaBtn1 = 'cta-button-outline';
let ctaBtn2 = 'cta-primary';

const menus = [
    {
        float: 'float-left',
        menuItems: [
            {
                text: 'Home',
                link: '#home-section',
                children: [],

            },
            {
                text: 'Dropdown',
                link: '#',
                children: [
                    {
                        text: 'Testimonials',
                        link: '#testimonials-section',
                        children: [],
                    },
                    {
                        text: 'Menu Two',
                        link: '#testimonials-section',
                        children: [
                            {
                                text: 'Sub Menu One',
                                link: '#',
                                children: [],
                            },
                            {
                                text: 'Sub Menu Two',
                                link: '#',
                                children: [],
                            },
                            {
                                text: 'Sub Menu Three',
                                link: '#',
                                children: [],
                            }
                        ],
                    },
                    {
                        text: 'Menu Three',
                        link: '#',
                        children: [],
                    },
                ],

            },
            {
                text: 'Features',
                link: '#features-section',
                children: [],

            },            
            {
                text: 'Pricing',
                link: '#pricing-section',
                children: [],

            },            {
                text: 'About',
                link: '#about-section',
                children: [],

            },            {
                text: 'Contact',
                link: '#contact-section',
                children: [],

            },
        ]
    },
    {
        float: 'mt-1 float-right',
        menuItems: [
            {
                text: 'Sign in',
                link: '#',
                children: [],

            },
            {
                text: 'Register',
                link: '#',
                children: [],

            }
        ]
    }

]
</script>

<template>
    <ul v-for="(menu, index) in menus" class="js-clone-nav d-none d-lg-inline-block site-menu" :class="menu.float" :key="index">
        <li v-for="(menuItem, index) in menu.menuItems" :class="[menuItem.children.length > 0 ? 'has-children' : '', 0 == index ? 'active' : '', 'Sign in' == menuItem.text ? ctaBtn1  : '', 'Register' == menuItem.text ? ctaBtn2  : '']" :key="menuItem.link">
            <a :href="menuItem.link" class="nav-link">{{ menuItem.text }}</a>

            <ul v-if="menuItem.children.length > 0" class="dropdown">
                <li v-for="childMenuItem in menuItem.children" :key="childMenuItem.link" :class="childMenuItem.children.length > 0 ? 'has-children' : ''">
                    <a :href="childMenuItem.link" class="nav-link">{{ childMenuItem.text }}</a>

                    <ul v-if="childMenuItem.children.length > 0" class="dropdown">
                        <li v-for="child in childMenuItem.children" :key="child.children.link">
                            <a :href="child.link" class="nav-link">{{  child.text }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>

    </ul>

</template>

<style scoped>

</style>