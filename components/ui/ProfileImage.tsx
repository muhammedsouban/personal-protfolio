/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";

const RotatingBorder = () => {
    return (
        <div className="md:flex items-center justify-center mt-6 md:mt-0 hidden">
            <div className="relative md:w-96 md:h-96 w-64 h-64">
                <motion.div
                    className="absolute inset-[-7px] rounded-full border-8 border-blue-400 bg-gradient-to-l from-blue-900 to-purple-500 border-dashed "
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>

                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-300 border-dotted"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>
                <motion.div
                    className="absolute inset-2 rounded-full border-4 border-blue-400 border-dashed"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>
                <motion.div
                    className="absolute inset-2 rounded-full border-2 border-blue-300 border-dotted"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>

                <motion.div
                    className="absolute inset-4 rounded-full border-2 border-blue-300 border-dotted"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>

                <div className="absolute inset-3 rounded-full overflow-hidden ">
                    <img
                        src="/souban_image.png"
                        alt="Image"
                        className="w-full h-full object-cover filter saturate-50"
                    />
                </div>
            </div>
        </div>
    );
};

export default RotatingBorder;
