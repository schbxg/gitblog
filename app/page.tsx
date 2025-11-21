import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { ArrowRight, Calendar } from "lucide-react";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Sharing my journey in <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Modern Web Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
              Welcome to my digital garden. Here I write about coding, design, and everything in between.
              Built with Next.js, Tailwind CSS, and deployed on GitHub Pages.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#posts" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                Read Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="https://github.com" target="_blank" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
                View GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map(({ slug, date, title, description }) => (
              <Link key={slug} href={`/blog/${slug}`} className="group block">
                <article className="h-full p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={date}>{date}</time>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
