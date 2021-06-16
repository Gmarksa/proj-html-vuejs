const app = new Vue({

    el: '#app',

    data:{
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
        counter: 0,
        slideImgs: [
            {
                title: 'Learning to Write as a Professional Author',
                imgSource: '../dist/img/course-01.jpg',
                price: 40.00,
                lessons: '20',
                students: 688,
                url: '/learning-to-write'
            },

            {
                title: 'Customer-centric Info-Tech Strategies',
                imgSource: '../dist/img/course-02.jpg',
                price: 0.00,
                lessons: '20',
                students: 603,
                url: '/customer-centric-strategies'
            },

            {
                title: 'Open Programming Courses for Everyone: Python',
                imgSource: '../dist/img/course-03.jpg',
                price: 19.00,
                lessons: '20',
                students: 397,
                url: '/python-programming'
            }
        ],
        blogPosts: [
            {
                title: 'Brush Strokes Energize Trees in Paintings',
                imgSource: '../dist/img/artist-blog-01.jpg',
                date: '10/10/20',
                views: 688,
                url: '#'
            },

            {
                title: 'Pocket-Sized Notebooks hold Miniature Paintings',
                imgSource: '../dist/img/artist-blog-02.jpg',
                date: '10/10/20',
                views: 603,
                url: '/pages'
            },

            {
                title: 'Connection Between Self-Portraits and Identity',
                imgSource: '../dist/img/artist-blog-03.jpeg',
                date: '10/10/20',
                views: 397,
                url: '/courses'
            }
        ],

        footerLinks: [
            {
                section: 'Explore',
                data: [
                    {
                        pgName: 'Start here',
                        url: '#'
                    },
        
                    {
                        pgName: 'Blog',
                        url: '/pages'
                    },
        
                    {
                        pgName: 'About us',
                        url: '/courses'
                    },
        
                    {
                        pgName: 'Success story',
                        url: '/features'
                    },
        
                    {
                        pgName: 'Courses',
                        url: '/blog'
                    },
        
                    {
                        pgName: 'Contact us',
                        url: '/shop'
                    }
                ]
            },

            {
                section: 'Information',
                data: [
                    {
                        pgName: 'Membership',
                        url: '#'
                    },
        
                    {
                        pgName: 'Purchase guide',
                        url: '/pages'
                    },
        
                    {
                        pgName: 'Privacy policy',
                        url: '/courses'
                    },
        
                    {
                        pgName: 'Terms of service',
                        url: '/features'
                    }
                ]
            }
        ]
    }
});

/* proj-html-vuejs/ */