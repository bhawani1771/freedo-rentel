import React, { useState } from "react";
import "./page.css";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      tag: "Maintenance",
      title: "Top 5 Tips for Smooth Two-Wheeler Riding in Traffic",
      desc: "City commute can be brutal on bikes. Here are easy ways to keep your engine healthy and ride safely during peak hours.",
      author: "Freedo Team",
      date: "Sep 02, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 2,
      tag: "Finance",
      title: "Renting vs Buying: Which Saves More in 2026?",
      desc: "Compare depreciation, EMIs, insurance, and routine servicing costs against monthly bike subscriptions with actual numbers.",
      author: "Aman Sharma",
      date: "Aug 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 3,
      tag: "Travel",
      title: "Weekend Road Trips You Can Take on a 150cc Bike",
      desc: "Looking for a quick getaway? Explore scenic highway stretches, pitstops, and fuel-friendly routes within 150 km of the city.",
      author: "Pooja Verma",
      date: "Aug 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 4,
      tag: "EV",
      title: "The Rise of Electric Scooters for Daily Delivery",
      desc: "How delivery riders are cutting operational fuel costs by up to 70% using swappable battery EV rentals.",
      author: "Freedo Tech",
      date: "Aug 10, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=700&q=80"
    },{
      id: 3,
      tag: "Travel",
      title: "Weekend Road Trips You Can Take on a 150cc Bike",
      desc: "Looking for a quick getaway? Explore scenic highway stretches, pitstops, and fuel-friendly routes within 150 km of the city.",
      author: "Pooja Verma",
      date: "Aug 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 4,
      tag: "EV",
      title: "The Rise of Electric Scooters for Daily Delivery",
      desc: "How delivery riders are cutting operational fuel costs by up to 70% using swappable battery EV rentals.",
      author: "Freedo Tech",
      date: "Aug 10, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=700&q=80"
    }
  ];

  const categories = ["All", "Maintenance", "Finance", "Travel", "EV"];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((item) => item.tag === selectedCategory);

  return (
    <div className="blog-wrapper">
      {/* 1. Blog Header */}
      <section className="blog-hero">
        <span className="badge">FREEDO INSIGHTS</span>
        <h1>Latest News & Riding Guides</h1>
        <p className="hero-desc">
          Tips, route guides, and mobility insights to make every single ride safe, affordable, and enjoyable.
        </p>

        {/* 2. Category Filter Pills */}
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Blog Cards Grid */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="card-thumb">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="card-tag">{post.tag}</span>
              </div>

              <div className="card-body">
                <div className="card-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.desc}</p>

                <div className="card-footer">
                  <span className="author-name">By {post.author}</span>
                  <span className="read-more">Read Article →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export { Blog };