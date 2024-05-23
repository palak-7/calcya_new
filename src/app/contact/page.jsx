import SectionTitle from "../../components/Common/SectionTitle";
import Contact from "../../components/Contact/Contact";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Contact Page | Calcya",
  description: "This is Contact Page for Calcya",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="lg:mt-[200px] overflow-x-clip">
      <div className="mx-3 transform w-[111.11%] scale-90 origin-top-left">
        <SectionTitle
          title={"Get In Touch With Calcya"}
          paragraph={
            "We are delighted to welcome your inquiries, feedback, and opportunities for collaboration at Calcya. Your questions are important, and we are here to help."
          }
          center
        />
      </div>

      <div className="mt-[100px]">
        <Contact />
        {/* address, phone */}
        <div className=" lg:flex justify-center rounded-md p-9 bg-white border-2 shadow-xl m-4 mx-10">
          <div className=" transform w-[111.11%] scale-90 grid lg:grid-cols-2 grid-cols-1">
            {/* address */}
            <div className="mb-12 w-full md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="flex">
                  <FaLocationDot className="text-primary w-[20px] h-[20px]" />
                  <div className="ml-3">
                    <p className="mb-2 font-bold dark:text-white">
                      Company Location
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      8/43, Lower Ground Floor, South Patel Nagar,
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Baljit Nagar (West), New Delhi - 110008
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* phone */}
            <div className="mb-12 w-full md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="flex">
                  <FaPhoneAlt className="text-primary w-[20px] h-[20px]" />
                  <div className="ml-3">
                    <p className="mb-2 font-bold dark:text-white">
                      Phone Number
                    </p>
                    <Link
                      href="tel:9870423754"
                      className="text-neutral-500 dark:text-neutral-200 hover:text-primary"
                    >
                      9870423754
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* email */}
            <div className="mb-12 w-full md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="flex">
                  <IoMdMail className="text-primary w-[20px] h-[20px]" />
                  <div className="ml-3">
                    <p className="mb-2 font-bold dark:text-white">
                      Our Email Address
                    </p>
                    <Link
                      href="mailto: lexforiindia@gmail.com"
                      className="text-neutral-500 dark:text-neutral-200 hover:text-primary"
                    >
                      lexforiindia@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Office Hours */}
            <div className="mb-12 w-full md:px-3 lg:px-6">
              <div className="flex items-start">
                <div className="flex">
                  <FaClock className="text-primary w-[20px] h-[20px]" />
                  <div className="ml-3">
                    <p className="mb-2 font-bold dark:text-white">
                      Office Hours
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      9 A.M. to 5 P.M
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="transform w-[133.33%] scale-75">
            <SectionTitle
              title={"Visit Our Office"}
              paragraph={
                "If you prefer face-to-face interactions, we encourage you to visit our office during regular business hours. Our dedicated team is ready to assist you in person."
              }
            />
          </div>
        </div>
        {/* last message */}
        <div className="my-16 mx-3 transform w-[111.11%] scale-90 origin-left">
          <SectionTitle
            title={"Your Message Counts"}
            paragraph={
              "At Calcya, we value your questions, comments, and feedback. We aim to provide timely and insightful responses to all your inquiries. Whether you seek legal advice, explore our services, or have general questions, we are here to assist."
            }
            center
          />
        </div>
        {/* google map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5055642989846!2d77.16402012314279!3d28.64457727975661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02ebaaa6d219%3A0x4f5d77e546cf1493!2sSouth%20Patel%20Nagar%2C%20Block%208%2C%20Patel%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110008!5e0!3m2!1sen!2sin!4v1711389021402!5m2!1sen!2sin"
            width="1800"
            height="350"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
