import React from 'react';
import { motion } from 'framer-motion';

const laoderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -20],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    },
}

const Loader = () => {
    return (
        <>
            <motion.div className="loader"
                variants={laoderVariants}
                animate="animationOne"
            >
            </motion.div>
        </>

    )
}

export default Loader