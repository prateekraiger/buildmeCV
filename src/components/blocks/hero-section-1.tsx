
import { Link } from 'react-router-dom'
import { AnimatedGroup } from '@/components/ui/animated-group';



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
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          delayChildren: 1,
                        },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.3,
                          duration: 2,
                        },
                      },
                    },
                  }}
                >
                  <h1 className="max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                    Build Your Standout Resume Effortlessly
                  </h1>
                  <p className="mx-auto mt-8 max-2xl text-balance text-lg">
                    buildmeCV is your AI-powered resume builder. Create
                    beautiful, professional resumes in minutes and showcase your
                    skills to land your dream job.
                  </p>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="https://ik.imagekit.io/mtk2a0sx6/image.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
</main>
    );
}
