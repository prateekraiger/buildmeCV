import React from "react";
import useResumeStore from "../../../store/resumeStore";
import { Card, Input, Button } from "../../UI";
import { PlusIcon, TrashIcon } from "../../Icons";
import { motion, AnimatePresence } from "framer-motion";

export const EducationForm: React.FC = () => {
  const { resume, addListItem, updateListItem, removeListItem } =
    useResumeStore();
  return (
    <div className="space-y-4">
      <AnimatePresence>
        {resume.education.map((edu) => (
          <motion.div
            key={edu.id}
            layout
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          >
            <Card className="relative !p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Degree"
                  value={edu.degree}
                  onChange={(e) =>
                    updateListItem("education", {
                      ...edu,
                      degree: e.target.value,
                    })
                  }
                />
                <Input
                  label="University"
                  value={edu.university}
                  onChange={(e) =>
                    updateListItem("education", {
                      ...edu,
                      university: e.target.value,
                    })
                  }
                />
                <Input
                  label="Location"
                  value={edu.location}
                  onChange={(e) =>
                    updateListItem("education", {
                      ...edu,
                      location: e.target.value,
                    })
                  }
                />
                <Input
                  label="GPA"
                  value={edu.gpa}
                  onChange={(e) =>
                    updateListItem("education", { ...edu, gpa: e.target.value })
                  }
                />
                <div className="grid grid-cols-2 gap-4 md:col-span-2">
                  <Input
                    label="Start Date"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateListItem("education", {
                        ...edu,
                        startDate: e.target.value,
                      })
                    }
                  />
                  <Input
                    label="End Date"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateListItem("education", {
                        ...edu,
                        endDate: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <Button
                variant="danger"
                className="!absolute top-2 right-2 !p-1 h-8 w-8"
                onClick={() => removeListItem("education", edu.id)}
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
          addListItem("education", {
            id: `edu${Date.now()}`,
            degree: "",
            university: "",
            location: "",
            gpa: "",
            startDate: "",
            endDate: "",
          })
        }
      >
        <PlusIcon className="w-4 h-4" /> Add Education
      </Button>
    </div>
  );
};
