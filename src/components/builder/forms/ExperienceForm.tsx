import React from "react";
import useResumeStore from "../../../store/resumeStore";
import { Card, Input, Textarea, Button } from "../../UI";
import { PlusIcon, TrashIcon } from "../../Icons";
import { AIButton } from "./AIButton";
import { motion, AnimatePresence } from "framer-motion";

export const ExperienceForm: React.FC = () => {
  const { resume, addListItem, updateListItem, removeListItem } =
    useResumeStore();
  return (
    <div className="space-y-4">
      <AnimatePresence>
        {resume.experience.map((exp) => (
          <motion.div
            key={exp.id}
            layout
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          >
            <Card className="relative !p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Role"
                  value={exp.role}
                  onChange={(e) =>
                    updateListItem("experience", {
                      ...exp,
                      role: e.target.value,
                    })
                  }
                />
                <Input
                  label="Company"
                  value={exp.company}
                  onChange={(e) =>
                    updateListItem("experience", {
                      ...exp,
                      company: e.target.value,
                    })
                  }
                />
                <Input
                  label="Location"
                  value={exp.location}
                  onChange={(e) =>
                    updateListItem("experience", {
                      ...exp,
                      location: e.target.value,
                    })
                  }
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Start Date"
                    value={exp.startDate}
                    onChange={(e) =>
                      updateListItem("experience", {
                        ...exp,
                        startDate: e.target.value,
                      })
                    }
                  />
                  <Input
                    label="End Date"
                    value={exp.endDate}
                    onChange={(e) =>
                      updateListItem("experience", {
                        ...exp,
                        endDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="md:col-span-2 relative">
                  <Textarea
                    label="Description"
                    value={exp.description}
                    onChange={(e) =>
                      updateListItem("experience", {
                        ...exp,
                        description: e.target.value,
                      })
                    }
                  />
                  <AIButton
                    textToEnhance={exp.description}
                    onSuccess={(enhancedText) =>
                      updateListItem("experience", {
                        ...exp,
                        description: enhancedText,
                      })
                    }
                  />
                </div>
              </div>
              <Button
                variant="danger"
                className="!absolute top-2 right-2 !p-1 h-8 w-8"
                onClick={() => removeListItem("experience", exp.id)}
              >
                <TrashIcon className="w-4 h-4" />
              </Button>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
      <Button
        variant="add"
        onClick={() =>
          addListItem("experience", {
            id: `exp${Date.now()}`,
            role: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
          })
        }
      >
        <PlusIcon className="w-4 h-4" /> Add Experience
      </Button>
    </div>
  );
};
