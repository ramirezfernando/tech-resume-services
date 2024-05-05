//Parent of this component is a div with "fixed" className

'use client'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

const ScrollFloatingAnimation = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.5,
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

  const y = useTransform(smoothProgress, (value) => {
    return (value - scrollYProgress.get()) * 100
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      style={{ y }}
      className="flex-center w-full">
      {children}
    </motion.div>
  )
}

export default ScrollFloatingAnimation