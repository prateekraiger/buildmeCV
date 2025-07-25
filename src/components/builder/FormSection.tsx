import React, { useState } from 'react';
import { Card } from '../UI';
import { ChevronDownIcon, ArrowUpIcon, ArrowDownIcon } from '../Icons';
import { motion, AnimatePresence } from 'framer-motion';

interface FormSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, icon, children, onMoveUp, onMoveDown, isFirst, isLast }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    const reorderable = onMoveUp && onMoveDown;

    return (
        <Card className="mb-6 relative">
            <motion.div layout="position">
                <div className="flex justify-between items-center">
                    <button className="flex-grow flex items-center gap-3 text-left" onClick={() => setIsOpen(!isOpen)}>
                        {icon}
                        <h3 className="text-xl font-semibold text-accent">{title}</h3>
                    </button>
                    <div className="flex items-center gap-2">
                        {reorderable && (
                             <div className="flex items-center border border-secondary/30 rounded-md">
                                <button
                                    onClick={(e) => { e.stopPropagation(); onMoveUp(); }}
                                    disabled={isFirst}
                                    className="p-1.5 text-secondary hover:text-text-light disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Move section up"
                                >
                                    <ArrowUpIcon className="w-4 h-4" />
                                </button>
                                <div className="w-px h-4 bg-secondary/30"></div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onMoveDown(); }}
                                    disabled={isLast}
                                    className="p-1.5 text-secondary hover:text-text-light disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Move section down"
                                >
                                    <ArrowDownIcon className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                        <button onClick={() => setIsOpen(!isOpen)} className="p-1.5">
                            <ChevronDownIcon className={`w-6 h-6 text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    layout
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className="overflow-hidden border-t border-secondary/20">
                        <div className="pt-4">
                            {children}
                        </div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </Card>
    );
};