const blogPosts = [
    {
        id: 1,
        title: 'Blog Post 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt nunc sit amet tellus tincidunt, at tincidunt mauris interdum. Duis dictum, velit id tincidunt laoreet, neque neque aliquam sem, et lacinia eros tellus at ligula. Quisque eleifend, mi sit amet luctus congue, nibh enim viverra felis, non finibus erat nisl in justo',
        authorName: 'John Doe',
        topic: 'Technology',
        backgroundImage: "https://blogs.idc.com/wp-content/uploads/2023/05/eim-blog-header-image.png",
    },
    {
        id: 2,
        title: 'Blog Post 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt nunc sit amet tellus tincidunt, at tincidunt mauris interdum. Duis dictum, velit id tincidunt laoreet, neque neque aliquam sem, et lacinia eros tellus at ligula. Quisque eleifend, mi sit amet luctus congue, nibh enim viverra felis, non finibus erat nisl in justo.',
        authorName: 'Jane Smith',
        topic: 'Travel',
        backgroundImage: "https://www.indiatravelblog.com/images/IndiaTravelBlog.jpg",
    },
    {
        id: 3,
        title: 'Blog Post 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt nunc sit amet tellus tincidunt, at tincidunt mauris interdum. Duis dictum, velit id tincidunt laoreet, neque neque aliquam sem, et lacinia eros tellus at ligula. Quisque eleifend, mi sit amet luctus con',

        authorName: 'Michael Johnson',
        topic: 'Science',
        backgroundImage: "https://www.atascientific.com.au/wp-content/uploads/2018/11/final1.jpg",
    },
    {
        id: 4,
        title: 'Blog Post 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt nunc sit amet tellus tincidunt, at tincidunt mauris interdum. Duis dictum, velit id tincidunt laoreet, neque neque aliquam sem, et lacinia eros tellus at ligula. Quisque eleifend, mi sit amet luctus congue, nibh enim viverra felis, non finibus erat nisl in justo.',
        authorName: 'Emily Wilson',
        topic: 'Food',
        backgroundImage: "https://img.freepik.com/free-photo/close-up-food-lover-taking-pictures-meal_23-2149286412.jpg",
    },
    {
        id: 5,
        title: 'Blog Post 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt nunc sit amet tellus tincidunt, at tincidunt mauris interdum. Duis dictum, velit id tincidunt laoreet, neque neque aliquam sem, et lacinia eros tellus at ligula. Quisque eleifend, mi sit amet luctus congue, nibh enim viverra felis, non finibus erat nisl in justo.',
        authorName: 'David Thompson',
        topic: 'Health',
        backgroundImage: "https://www.metropolisindia.com/blog/wp-content/uploads/2021/08/assess_heart_health.jpg",
    },
    {
        id: 6,
        title: 'Blog Post 6',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt ntfy tfju t6fuy 57rtyg 6tgyuk tgyujg i8kuyg uygjhb tugjgyku ftjgy yuguyg tgyujg frt esrrtf tukyg uighjm drthfg uigyh kuyguh sdfg iujhg edfgh uhj dfgh ujhg',

        authorName: 'Sarah Adams',
        topic: 'Fashion',
        backgroundImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGJsb2d8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
        id: 7,
        title: 'Blog Post 7',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt nunc sit amet tellus tincidunt, at tincidunt mauris interdum. Duis dictum, velit id tincidunt laoreet, neque neque aliquam sem, et lacinia eros tellus at ligula. Quisque eleifend, mi sit amet luctus congue, nibh enim viverra felis, non finibus erat nisl in justo.',
        authorName: 'Mark Davis',
        topic: 'Sports',
        backgroundImage: "https://www.vuelio.com/uk/wp-content/uploads/2016/07/SportRanking.jpg",
    },
    {
        id: 8,
        title: 'Blog Post 8',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus lobortis, lobortis purus sit amet, dictum risus. Aenean interdum, leo nec aliquet viverra, lectus justo fermentum purus, at laoreet odio lacus sed augue. Donec maximus sollicitudin arcu, id consectetur est aliquam ac. Fusce eget justo a sem rhoncus venenatis. In sed tortor nec risus lacinia consectetur. Sed viverra felis ac erat volutpat tincidunt. Curabitur tincidunt nunc sit amet tellus tincidunt, at tincidunt mauris interdum. Duis dictum, velit id tincidunt laoreet, neque neque aliquam sem, et lacinia eros tellus at ligula. Quisque eleifend, mi sit amet luctus congue, nibh enim viverra felis, non finibus erat nisl in justo.',
        authorName: 'Jennifer Lee',
        topic: 'Art',
        backgroundImage: "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1574743059-art-blogs.jpg",
    },
];

export default blogPosts;