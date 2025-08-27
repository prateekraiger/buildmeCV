
import { Link } from 'react-router-dom'
import { AnimatedGroup } from '@/components/ui/animated-group';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0.001px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export function HeroSection() {
    return (
      <main>
        <section>
          <div className="relative">
            <div className="absolute inset-0 -z-20" />
            <div className="mx-auto max-w-7xl px-6">
              <nav className="flex items-center justify-between py-4">
                <Link to="/"></Link>
              </nav>
              <motion.div 
                className="text-center sm:mx-auto lg:mr-auto lg:mt-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  AI-Powered Resume Builder
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-8 xl:text-[5.25rem] font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
                >
                  Build Your Standout Resume Effortlessly
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="mx-auto mt-8 max-w-2xl text-balance text-xl text-muted-foreground"
                >
                  buildmeCV is your AI-powered resume builder. Create
                  beautiful, professional resumes in minutes and showcase your
                  skills to land your dream job.
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
                >
                  <Link to="/builder">
                    <motion.button
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Building Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  
                  <Link to="/templates">
                    <motion.button
                      className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary rounded-xl font-semibold text-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-5 h-5" />
                      View Templates
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative mt-16 mx-auto max-w-6xl"
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <motion.div 
                  className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-2xl bg-white/50 backdrop-blur-sm"
                  whileHover={{ 
                    y: -10,
                    shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                >
                  <motion.div
                    className="aspect-15/8 relative rounded-xl border border-gray-200/50 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <div className="text-center space-y-4 p-8">
                      <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clipRule="evenodd" />
                          <path d="M8 6h4v1H8V6zM8 8h4v1H8V8zM8 10h2v1H8v-1z" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-800">Resume Builder Interface</h3>
                        <p className="text-gray-600">Create professional resumes with our intuitive builder</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-2xl">✨</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <span className="text-xl">🚀</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
</main>
    );
}
