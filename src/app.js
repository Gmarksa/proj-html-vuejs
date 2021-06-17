const app = new Vue({

    el: '#app',

    data:{
        /* Navbar */

        navLinks: [
            {
                pgName: 'Home',
                url: '#'
            },

            {
                pgName: 'Pages',
                url: '/pages'
            },

            {
                pgName: 'Courses',
                url: '/courses'
            },

            {
                pgName: 'Features',
                url: '/features'
            },

            {
                pgName: 'Blog',
                url: '/blog'
            },

            {
                pgName: 'Shop',
                url: '/shop'
            },
        ],

        /* Slide */

        counter: 0,
        courseList: [
            {
                title: 'Learning to Write as a Professional Author',
                imgSource: './dist/img/course-01.jpg',
                price: 40.00,
                lessons: '20',
                students: 50,
                url: '/learning-to-write'
            },

            {
                title: 'Customer-centric Info-Tech Strategies',
                imgSource: './dist/img/course-02.jpg',
                price: 0.00,
                lessons: '20',
                students: 769,
                url: '/customer-centric-strategies'
            },

            {
                title: 'Open Programming Courses for Everyone: Python',
                imgSource: './dist/img/course-03.jpg',
                price: 19.00,
                lessons: '20',
                students: 62,
                url: '/python-programming'
            },

            {
                title: 'Open Programming Courses for Everyone: Python',
                imgSource: './dist/img/course-03.jpg',
                price: 19.00,
                lessons: '20',
                students: 62,
                url: '/python-programming'
            },

            {
                title: 'Open Programming Courses for Everyone: Python',
                imgSource: './dist/img/course-03.jpg',
                price: 19.00,
                lessons: '20',
                students: 62,
                url: '/python-programming'
            }
        ],

        /* Blog */

        blogPosts: [
            {
                title: 'Connection Between Self-Portraits and Identity',
                imgSource: './dist/img/artist-blog-02.jpg',
                date: '05-15-2020',
                get formattedDate() {return dayjs(this.date).format("MMM DD, YYYY")},
                views: 397,
                url: '/pages'
            },

            {
                title: 'Pocket-Sized Notebooks hold Miniature Paintings',
                imgSource: './dist/img/artist-blog-01.jpg',
                date: '05-15-2020',
                get formattedDate() {return dayjs(this.date).format("MMM DD, YYYY")},
                views: 603,
                url: '#'
            },

            {
                title: 'Brush Strokes Energize Trees in Paintings',
                imgSource: './dist/img/artist-blog-03.jpeg',
                date: '05-15-2020',
                get formattedDate() {return dayjs(this.date).format("MMM DD, YYYY")},
                views: 688,
                url: '/courses'
            }
        ],

        /* Footer */

        footerExplore: [
            {
                pgName: "Start here",
                url: "/start-here",
            },

            {
                pgName: "Success story",
                url: "/success-story",
            },

            {
                pgName: "Blog",
                url: "/blog",
            },
            
            {
                pgName: "Courses",
                url: "/courses",
            },
            
            {
                pgName: "About us",
                url: "/about-us",
            },

            {
                pgName: "Contact us",
                url: "/contact-us",
            }
        ],

        footerInformation: [
            {
                pgName: "Membership",
                url: "/membership",
            },
            
            {
                pgName: "Purchase guide",
                url: "/purchase-guide",
            },
            
            {
                pgName: "Privacy policy",
                url: "/privacy-policy",
            },
            
            {
                pgName: "Terms of service",
                url: "/terms-of-service",
            }
        ]
    },

    methods:{
        scrollSlide(i){

        }
    }
});