import Link from 'next/link';
import React from 'react';

const BlogDetails = async ({ params }) => {
    const blogs = [
        {
            "id": 1,
            "title": "Getting Started with Web Development",
            "description": "Learn the basics of HTML, CSS, and JavaScript.\nPerfect guide for beginners to start coding.",
            "author": "Moynul Islam",
            "date": "2026-04-01",
            "category": "Web Development",
            "image": "https://source.unsplash.com/600x400/?coding"
        },
        {
            "id": 2,
            "title": "Understanding JavaScript Closures",
            "description": "Deep dive into closures with simple examples.\nImprove your JS problem-solving skills.",
            "author": "Moynul Islam",
            "date": "2026-04-02",
            "category": "JavaScript",
            "image": "https://source.unsplash.com/600x400/?javascript"
        },
        {
            "id": 3,
            "title": "React Basics for Beginners",
            "description": "Learn components, props, and state in React.\nBuild your first React app step by step.",
            "author": "Moynul Islam",
            "date": "2026-04-03",
            "category": "React",
            "image": "https://source.unsplash.com/600x400/?reactjs"
        },
        {
            "id": 4,
            "title": "Mastering Tailwind CSS",
            "description": "Utility-first CSS framework explained simply.\nCreate modern UI faster with Tailwind.",
            "author": "Moynul Islam",
            "date": "2026-04-04",
            "category": "CSS",
            "image": "https://source.unsplash.com/600x400/?css"
        },
        {
            "id": 5,
            "title": "Git & GitHub for Beginners",
            "description": "Learn version control step by step.\nPush, pull, and manage your code easily.",
            "author": "Moynul Islam",
            "date": "2026-04-05",
            "category": "Tools",
            "image": "https://source.unsplash.com/600x400/?git"
        },
        {
            "id": 6,
            "title": "How APIs Work",
            "description": "Understand APIs in simple terms.\nLearn how frontend connects with backend.",
            "author": "Moynul Islam",
            "date": "2026-04-06",
            "category": "Backend",
            "image": "https://source.unsplash.com/600x400/?api"
        },
        {
            "id": 7,
            "title": "Responsive Design Guide",
            "description": "Make your website mobile-friendly.\nLearn media queries and flexible layouts.",
            "author": "Moynul Islam",
            "date": "2026-04-07",
            "category": "Design",
            "image": "https://source.unsplash.com/600x400/?responsive"
        },
        {
            "id": 8,
            "title": "Next.js Introduction",
            "description": "Learn server-side rendering and routing.\nBuild fast and SEO-friendly apps.",
            "author": "Moynul Islam",
            "date": "2026-04-08",
            "category": "Next.js",
            "image": "https://source.unsplash.com/600x400/?nextjs"
        },
        {
            "id": 9,
            "title": "Debugging JavaScript Errors",
            "description": "Find and fix bugs effectively.\nUse console and dev tools like a pro.",
            "author": "Moynul Islam",
            "date": "2026-04-09",
            "category": "JavaScript",
            "image": "https://source.unsplash.com/600x400/?debugging"
        },
        {
            "id": 10,
            "title": "Career Roadmap for Developers",
            "description": "Step-by-step guide to becoming a developer.\nSkills, tools, and resources you need.",
            "author": "Moynul Islam",
            "date": "2026-04-10",
            "category": "Career",
            "image": "https://source.unsplash.com/600x400/?career"
        }
    ]
    const { blogdetails } = await params;
    console.log(blogdetails);
    const targetedBlog = blogs.find(blog => blog.id === parseInt(blogdetails))
    console.log(targetedBlog);


    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card w-110 bg-base-100 card-xl shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{targetedBlog.category}</h2>
                    <p>{targetedBlog.description}</p>
                    <p>{targetedBlog.author}</p>
                    <div className="justify-end card-actions">
                        <Link href="/blogs" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;