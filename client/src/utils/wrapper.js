import { motion } from "framer-motion";

export const pageWrapper = (contents) => {
  return (
    <motion.div
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
      transition = {{duration: 0.4}}
    >
      {contents}
    </motion.div>
  )
}