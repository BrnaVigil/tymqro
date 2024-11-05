import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import grupoCafe from "../assets/images/grupoCafe.jpg";

const pricingData = [
  "Plaza Sendero",
  "Pueblito",
  "Plaza Puerta la Victoria",
  "Colonia Fundadores",
  "Paseos de San Miguel",
  "Ciudad del Sol",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Reuniones entre semana</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Grupos cafes de amistas
              </h2>
              <p className="mb-6 text-secondaryText">
                Unete a un grupo cafe de amistad, tenemos grupos enfocados en Jovenes, Matrimonios, Familiares, Profesionistas y empresarios.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">

              <div className="w-[350px] sm:w-[380px] lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-12 text-xl font-bold font-heading text-primaryText text-left">
                    Algunos lugares donde puedes reunirte.
                  </h3>
                  <ul className="mb-2 mt-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16" href="https://wa.me/4421566012?text=Me%20gustaría%20unirme%20a%20un%20grupo%20café">Me interesa</a>
                </div>
              </div>

              <div className="w-[350px] sm:w-[380px] lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                    Conoce amigos que te acerquen mas a Jesus
                  </h3>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Unlock more features and elevate your data analysis.
                  </p>
                  <img className="rounded-xl" src={grupoCafe.src} alt="" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
