import { motion } from "framer-motion";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";

const blogData = [
  {
    title: "AI and Machine Learning",
    subtitle:
      "Discover insights and trends in the world of data analytics. Delve into how AI and machine learning are revolutionizing industries",
    image: "https://instagram.fpbc1-1.fna.fbcdn.net/v/t39.30808-6/455244840_904961394994484_7436038029642527864_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjB4OTYwLnNkci5mMzA4MDguZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fpbc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=aG_5GvPzAqIQ7kNvgFL3rw3&edm=AIcyvokAAAAA&ccb=7-5&ig_cache_key=MzQzNjA5ODE3MTc2MTQ5NTQwMA%3D%3D.2-ccb7-5&oh=00_AYAuzgQuiU6hQlhq0BTYMYp3zgJ_IoZ9RXBBt0ahzMpDJQ&oe=66CC1ABA&_nc_sid=715119",
  },
  {
    title: "The Future of Technology",
    subtitle:
      "Explore how emerging technologies are shaping the future of work, life, and industry.",
    image: "https://instagram.fpbc1-2.fna.fbcdn.net/v/t39.30808-6/455023105_904964298327527_1446537091587922507_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjB4OTYwLnNkci5mMzA4MDguZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fpbc1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=wtQLaexhP2cQ7kNvgGEaUtT&edm=AIcyvokAAAAA&ccb=7-5&ig_cache_key=MzQzNjgyMzA5NDcxMzE0OTQwMg%3D%3D.2-ccb7-5&oh=00_AYD2IS0mSh036wm_7wzA9HIr467vmRiY0GXOwAqGW6hhPA&oe=66CBF1A3&_nc_sid=715119",
  },
  {
    title: "Sustainable Innovation",
    subtitle:
      "Learn about the latest innovations driving sustainability across the globe.",
    image: "https://scontent.cdninstagram.com/v/t39.30808-6/455794179_908839984606625_1657791405222015998_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45NjB4OTYwLnNkci5mMzA4MDguZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=0sZOF0O060oQ7kNvgFC5sEK&_nc_gid=ce9eb9cf0fd24b4e8f8a1b1dd4c469ba&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzODIzMzc2MDI0NjA3NjM3Mg%3D%3D.2-ccb7-5&oh=00_AYAIeKCR-9aaKDEBx_v6tZ2BzWxX3Lqv5HyQBbPX1mQOrw&oe=66CC1913&_nc_sid=10d13b",
  },
];
export const Blog = () => (
  <section className="w-screen flex justify-center bg-bgDark2 relative" >
    <div className="absolute -top-16" id="eventos" />
    <div className="pb-0 pt-4 bg-bgDark2 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mb-20">
          <div className="max-w-2xl text-center lg:text-left mb-16 mx-auto lg:ml-0 lg:mr-0">
            <span className="block-subtitle">Eventos</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Proximos eventos
            </h2>
            <p className="mb-6 text-secondaryText">
              Stay updated with the latest trends and insights in our industry.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 items-start">
            {blogData.map((blog, index) => (
              <div key={index} className="w-full sm:w-1/2 px-4 mb-8">
                <a href="/blog/article">
                  <div className="p-6 sm:p-10 bg-bgDark3 rounded-3xl h-full hover:bg-bgDark3Hover transition cursor-pointer flex flex-col">
                    <div className="h-full w-full object-cover overflow-hidden rounded-3xl mb-6">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="object-cover w-full h-full"
                        aria-label={blog.title}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold font-heading text-primaryText">
                        {blog.title}
                      </h3>
                      <p className="text-secondaryText leading-loose overflow-hidden overflow-ellipsis">
                        {blog.subtitle}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
