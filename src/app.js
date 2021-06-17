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

        footerLinks: [
            {
                name: 'Explore',
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
                name: 'Information',
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
    },

    methods:{
        scrollSlide(i){

            if(i > this.counter)
                document.getElementById("slide").scrollLeft+= 400 * i
            else if( i < this.counter)
                document.getElementById("slide").scrollLeft-= 400 * i
        }
    }
});

/* proj-html-vuejs/ */