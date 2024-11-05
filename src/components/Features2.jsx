import { motion } from "framer-motion";

import feature5 from "../assets/images/img_1.jpg";
import feature6 from "../assets/images/img_2.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { FBIcon } from "../assets/icons/FBIcon";
import { IGIcon } from "../assets/icons/IGIcon";
import { WhatsAppIcon } from "../assets/icons/WhatsAppIcon";
import { YTIcon } from "../assets/icons/YTIcon";

export const Features2 = () => (
  <section id="acompañanos" className="w-full bg-bgDark2 pt-24 sm:mt-24 mb-12 lg:my-20 lg:mb-24">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <span className="block-subtitle">Acompáñanos en alguna de nuestras reuniones:</span>
          <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
            Ven y experimenta el avivamiento.
          </h2>
          <div className="text-xl text-center">
            <p className="mb-10 text-secondaryText leading-loose">
              Acompáñanos en alguna de nuestras reuniones:
            </p>
            <p className="mb-2 text-secondaryText leading-loose">
              Domingos Horarios: 8:45 am, 10:45 am y 12:45 pm.
            </p>
            <p className="text-secondaryText leading-loose">
              Viernes de sanidades y milagros: 8:00 pm.
            </p>
          </div>
      </div>


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:px-16 p-4">
      {/* Columna 1: Imágenes */}
      <div className="w-full">
        <div className="">
          <ul className="text-primaryText my-10" >
          <li className="mb-4 flex text-xl">
              <CheckArrowIcon />
              <span>12 de Diciembre #1, Villas de Guadalupe, Santiago, Mexico</span>
            </li>
          </ul>
        </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.7126697088115!2d-100.4582451!3d20.6405654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34599fee2b5ef%3A0xf7e79b9aceee172c!2sTrigo%20y%20Miel%20Quer%C3%A9taro!5e0!3m2!1ses-419!2smx!4v1729202343452!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            title="Ubicación"
            className="border-none rounded-lg w-full md:h-[500px] h-[350px]"
          ></iframe>
      </div>

      {/* Columna 2: Texto y mapa */}
      <div className="w-full">
        <div className="mb-8">
          <ul className="mb-6 text-primaryText text-xl">
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Siguenos en nuestras redes sociales:</span>
            </li>
            <li className="mb-4 mt-10 flex">
              <div className="flex mx-auto">
                <a className="" href="https://www.facebook.com/tymqro"><FBIcon/></a>        
                <a className="ml-14" href="https://www.instagram.com/tymqro/"><IGIcon/></a>        
                <a className="ml-14" href=""><WhatsAppIcon/></a>        
                <a className="ml-14" href="https://www.youtube.com/c/TrigoyMielQuer%C3%A9tarooficial/streams"><YTIcon/></a>        
              </div>
            </li>
          </ul>
        </div>

        {/* Mapa */}
        <div className="w-full flex flex-col justify-center">
        <div className="mb-8 lg:mb-0 w-full">
          <img
            src={feature5.src}
            alt="Feature image 5"
            className="rounded-xl main-border-gray"
          />
        </div>
        
      </div>
      </div>
    </div>

    </motion.div>
  </section>
);
