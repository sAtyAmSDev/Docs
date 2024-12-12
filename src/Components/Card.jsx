import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data ,reference}) => {
  return (
    <motion.div drag dragConstraints={reference}  dragTransition={{ bounceStiffness: 100, bounceDamping: 60 }} dragElastic={0.1} whileDrag={{scale:1.3}} className="relative w-60 h-72 flex-shrink-0 rounded-3xl px-8 py-10 bg-zinc-900/90 text-white overflow-hidden shadow-lg">
      <FaRegFileAlt size="1.5em" />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full h-20 left-0">
        <div className="flex items-center justify-between px-8 py-2">
          <h5 className="font-semibold">{data.fileSize}</h5>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-600 cursor-pointer bg-zinc-800"
            aria-label="Download"
          >
            {data.close ? (
              <IoIosClose />
            ) : (
              <LuDownload size="1.2em" color="#FFF" />
            )}
          </button>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} w-full py-2  rounded-b-3xl flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
