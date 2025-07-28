import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye } from "lucide-react";

const TimelineItem = ({ event, isLeft }: { event: any; isLeft: boolean }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref} className="flex justify-between items-center w-full mb-8">
      {isLeft && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-5/12"
        >
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-dark mb-2">
              {event.title}
            </h3>
            <p className="text-gray-700">{event.description}</p>
          </div>
        </motion.div>
      )}

      <div className="w-1/12 flex justify-center">
        <div className="w-px h-full bg-gray-300 absolute"></div>
        <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center z-10 text-sm">
          {event.year}
        </div>
      </div>

      {!isLeft && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-5/12"
        >
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-dark mb-2">
              {event.title}
            </h3>
            <p className="text-gray-700">{event.description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

interface MissionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  icon,
}) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-center items-center"
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-primary mb-4 text-4xl">{icon}</div>
    <h3 className="text-2xl font-semibold text-dark mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

interface AboutStoryProps {
  content: {
    title: string;
    timelineEvents: {
      year: string;
      title: string;
      description: string;
    }[];
  };
  missionVision: {
    title: string;
    mission: { title: string; description: string; icon: string };
    vision: { title: string; description: string; icon: string };
  };
}

const IconMap = {
  Target: <Target className="w-12 h-12" />,
  Eye: <Eye className="w-12 h-12" />,
};

export function AboutStory({ content, missionVision }: AboutStoryProps) {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-16">
      <h1 className="text-4xl font-bold text-center text-dark mb-8">
        {content.title}
      </h1>

      <div className="relative" role="timeline">
        {content.timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} isLeft={index % 2 === 0} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-dark mb-8">
        {missionVision.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MissionCard
          title={missionVision.mission.title}
          description={missionVision.mission.description}
          icon={IconMap[missionVision.mission.icon as keyof typeof IconMap]}
        />
        <MissionCard
          title={missionVision.vision.title}
          description={missionVision.vision.description}
          icon={IconMap[missionVision.vision.icon as keyof typeof IconMap]}
        />
      </div>
    </section>
  );
}
