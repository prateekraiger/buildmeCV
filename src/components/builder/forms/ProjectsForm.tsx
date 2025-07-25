import React from 'react';
import useResumeStore from '../../../store/resumeStore';
import { Card, Input, Textarea, Button } from '../../UI';
import { PlusIcon, TrashIcon } from '../../Icons';
import { AIButton } from './AIButton';
import { motion, AnimatePresence } from 'framer-motion';


export const ProjectsForm: React.FC = () => {
    const { resume, addListItem, updateListItem, removeListItem } = useResumeStore();
    return (
        <div className="space-y-4">
            <AnimatePresence>
            {resume.projects.map((proj) => (
                <motion.div
                    key={proj.id}
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                >
                    <Card className="relative !p-4 bg-primary/30">
                        <div className="space-y-4">
                            <Input label="Project Name" value={proj.name} onChange={e => updateListItem('projects', {...proj, name: e.target.value})} />
                            <Input label="Project URL" value={proj.url} onChange={e => updateListItem('projects', {...proj, url: e.target.value})} />
                            <div className="relative">
                                <Textarea label="Description" value={proj.description} onChange={e => updateListItem('projects', {...proj, description: e.target.value})} />
                                <AIButton
                                    textToEnhance={proj.description}
                                    onSuccess={(enhancedText) => updateListItem('projects', { ...proj, description: enhancedText })}
                                />
                            </div>
                        </div>
                        <Button variant="danger" className="!absolute top-2 right-2 !p-1 h-8 w-8" onClick={() => removeListItem('projects', proj.id)}><TrashIcon className="w-4 h-4" /></Button>
                    </Card>
                </motion.div>
            ))}
            </AnimatePresence>
            <Button variant="secondary" onClick={() => addListItem('projects', {id: `proj${Date.now()}`, name: '', description: '', url: ''})}>
                <PlusIcon className="w-4 h-4" /> Add Project
            </Button>
        </div>
    );
};