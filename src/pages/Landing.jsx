import {useState} from "react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";


function Landing(){
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [nickname, setnickname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctName = "ansh";
  const correctNickname = "ansh";

  const handleStepOne = () => {
    if (name.toLowerCase() === correctName.toLocaleLowerCase()) {
      setError("");
      setStep(2);
    }
    else {
      setError("Hmm... the stars disagree");
     }
  };


  const handleStepTwo = () => {
    if (nickname.toLocaleLowerCase() === correctNickname.toLocaleLowerCase()) {
      setError("");
      navigate("/myLove");
    }
    else { 
      setError("That doesn't sound familiar...");
    }
  };
  





  return (


    <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.8 }}
   >


    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-6 overflow-hidden relative">

      <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <motion.div 
        initial={{ opacity: 0, y:40 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration:1 }}
        className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 w-full max-w-md shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500">
      
      <h1 className="text-5xl font-bold text-center mb-4">
        Welcome 
      </h1>




      {step === 1 && (
      <>
      
      <p className="text-center text-gray-300 mb-8 leading-relaxed">
        This place stores pieces of someone.
        <br/>
        Only one person should enter
      </p>


      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleStepOne()}
        className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 outline-none mb-5"
      />


      <button
       onClick={handleStepOne}
       className="w-full p-4 rounded-2xl bg-pink-300 text-black font-semibold hover:scale-105 transition duration-300">
        Continue
      </button>
      </>
  )}

      {step === 2 && (
        <>
        <p className="text-center text-gray-300 mb-8 leading-relaxed">
          One last thing... 
          <br/>
          What does he call you?
        </p>


        <input
          type="text"
          placeholder="Your Special name..."
          value={nickname}
          onChange={(e) => setnickname(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleStepTwo()}
          className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 outline-none mb-5"/>

        <button
          onClick={handleStepTwo}
          className="w-full p-4 rounded-2xl bg-pink-300 text-black font-semibold hover:scale-105 transition duration-300">
            Unlock 
        </button>
        </>
      )}


      {error && (
        <p className="text-red-300 text-center mt-5">
          {error}
        </p>
      )}

     </motion.div>
    </div>
  </motion.div>
  );
}
export default Landing;