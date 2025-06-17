// ExampleComponent.tsx
import { motion } from 'framer-motion'

export default function ExampleComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-blue-500 text-white rounded"
    >
      Hello, I'm animated!
    </motion.div>
  )
}