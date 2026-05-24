import { TypeAnimation } from "react-type-animation";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { memories } from "../data/memories";

function LetterPage() {

    const { id } = useParams();

    const memory = memories.find(
        (m) => m.id === Number(id)
    );

    if (!memory) {
        return ( 
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Memory not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050816] text-white px-6 py-20">

            <motion.div
               initial={{ opacity: 0, y: 80}}
               animate={{ opacity:1, y: 0}}
               transition={{ duration: 1 }}
               className="max-w-4xl mx-auto">

                  <img
                     src={memory.image}
                     alt={memory.title}
                     className="w-fill h-[1000px] object-cover rounded-3xl mb-12"/>

                    <h1 className="text-5xl md:text-7xl elegant mb-10">
                        {memory.title}
                    </h1>

                    <TypeAnimation
                       sequence={[memory.letter]}
                       wrapper="p"
                       speed={15}
                       cursor={true}
                       className="handwritten italic text-gray-300 leading-loose text-[42px] md:text-[64px]"/>

            </motion.div>
        </div>
    );

}

export default LetterPage;