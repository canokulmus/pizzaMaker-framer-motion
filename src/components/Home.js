import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {

    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity, // this will repeat the animation forever
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.5, duration: 1.5 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}


const Home = () => {
    return (
        <motion.div className="home container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <h2>
                Welcome to Pizza Home
            </h2>
            <Link to="/base">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Create Your Pizza
                </motion.button>
            </Link>
            <Loader />

            <div className='dragContainer'>
                <motion.img
                    src="pizza.png"
                    className="draggable"
                    drag
                    dragConstraints={{ left: -50, top: -50, right: 50, bottom: 50 }}
                    dragElastic={1}
                >

                </motion.img>
            </div>


        </motion.div >
    )
}

export default Home;