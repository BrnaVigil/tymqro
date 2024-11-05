import { motion } from "framer-motion";

import blog1 from "../assets/images/redes_juveniles.jpg";
import blog2 from "../assets/images/blog2.png";
// import blog3 from "../assets/images/blog2.png";
// import blog4 from "../assets/images/blog2.png";

const blogData = [
  {
    title: "Congreso redes juveniles",
    subtitle:
      "Se parte del avivamiento que estamos viviendo, inscripciones abiertas.",
    image: blog1.src,
  },
  {
    title: "Entrenamientos Fire para jovenes",
    subtitle:
      "Durante 7 dias vive un encuentro con el Espiritu Santo, tu vida no sera la misma despues de esta increible experiencia.",
    image: blog2.src,
  },
  // {
  //   title: "Grupos cafes de amistad",
  //   subtitle:
  //     "Reunete con amigos que te acerquen mas a Jesus en nuestros grupos en casa.",
  //   image: blog3.src,
  // },
  // {
  //   title: "Viernes de Sanidades y Milagros",
  //   subtitle:
  //     "Ven por tu milagro, ",
  //   image: blog4.src,
  // },
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
              Ve y sumate a los proximos eventos que seran de bendicion para tu vida.
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
