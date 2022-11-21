import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
	initial: {
		opacity: 0,
		x: '100vw',
	},
	final: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			mass: 0.4, // this is the mass of the object, the heaver the object, the slower it moves
			damping: 8, // this is the resistance, or friction, of the object
			when: 'beforeChildren', // this will delay the children animations until the parent animation is complete
			staggerChildren: 0.5, // this will delay the children animations by 0.4 seconds. Each child will be delayed by 0.4 seconds relative to the previous child
		},
	}
}

const childVariants = {
	initial: {
		opacity: 0,
	},
	final: {
		opacity: 1,
	}
}

const Order = ({ pizza }) => {
	return (
		<motion.div className="container order"
			variants={containerVariants}
			initial="initial"
			animate="final"
		>
			<h2>Thank you for your order :)</h2>
			<motion.p
				variants={childVariants}
			>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div className=""
				variants={childVariants}
			>
				{pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
			</motion.div>
		</motion.div>
	)
}

export default Order;