import {motion} from "framer-motion";
import videoBg from "../assets/videos/Demo.mp4";
import {memories} from "../data/memories";
import { useNavigate } from "react-router-dom";

function MyLove() {

    const navigate = useNavigate();
    return (
        <div className="bg-transparent text-white overflow-x-hidden relative z-10">

            {/* Hero Section */}

            <section className="relative min-h-screen w-full overflow-hidden">

                <video 
                   autoPlay
                   muted
                   loop
                   playsInline
                   className="absolute w-full h-full object-cover">
                    <source src={videoBg} type="video/mp4" />
                </video>

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/50"></div>

                {/* Hero Text */}

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

                    <motion.h1
                       initial={{ opacity: 0, y: 80 }}
                       animate={{ opacity:1, y: 0 }}
                       transition={{ duration: 1.5 }}
                       className="text-6xl md:text-8xl font-bold mb-6">
                        myLove 🌙
                    </motion.h1>

                    <motion.p 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 1 }}
                       className="text-gray-200 text-lg md:text-2xl max-w-2xl leading-relaxed">
                        Some memories deserve their own universe.
                    </motion.p>

                </div>

            </section>

            {/* Scroll Section */}

            <section className="min-h-screen px-6 py-24">
                <motion.div
                   initial={{ opacity: 0, y: 100}}
                   whileInView={{ opacity: 1, y: 0}}
                   transition={{ duration: 1}}
                   viewport={{ once: true}}
                   className="max-w-4xl mx-auto">

                    <h2 className="text-5xl font-bold mb-10">
                        Fragments of Us ✨
                    </h2>

                    <p className="text-gray-300 text-xl leading-loose">
                        Some moments never really leave.
                        <br /><br />

                        They stay hidden in train windows, 
                        unfinished conversations,
                        blurry photographs,
                        and skies that accidentally looked like love.
                    </p>

                   </motion.div>

            </section>


            <section className="px-6 pb-32">

                <div className="max-w-6xl mx-auto">

                    <motion.h2
                       initial={{ opacity: 0, y: 60 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1 }}
                       viewport={{ once: true }}
                       className="text-5xl font-bold mb-16">
                        Memories 📷
                       </motion.h2>

                       <div className="grid md:grid-cols-3 gap-10">

                        {memories.map((memory) => (

                            <motion.div
                               key={memory.id}
                               initial={{ opacity: 0, y: 80 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.8 }}
                               viewport={{ once: true }}
                               whileHover={{ scale: 1.05 }}
                               onClick={() => navigate(`/letter/${memory.id}`)}
                               className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md cursor-pointer">

                                <img
                                   src={memory.image}
                                   alt={memory.title}
                                   className="w-full h-80 object-cover"/>

                                <div className="p-6">

                                 <h3 className="text-2xl font-semibold">
                                   {memory.title}
                                 </h3>

                                </div>

                            </motion.div>
                            
                        ))}

                       </div>

                </div>

            </section>

        </div>
    );
}

export default MyLove;