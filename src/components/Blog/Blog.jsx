import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { blogData } from "../../data/blogData";
import SingleBlog from "./SingleBlog/SingleBlog";

function Blog() {
  if (!blogData.length) return null;

  return (
    <section id="blog" className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-purple-500">
          Blog
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogData.slice(0, 3).reverse().map((blog) => (
            <SingleBlog key={blog.id} {...blog} />
          ))}
        </div>

        {blogData.length > 3 && (
          <div className="mt-12 text-center">
            <Link to="/blog">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl flex items-center gap-2 mx-auto transition">
                View All
                <HiArrowRight />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;