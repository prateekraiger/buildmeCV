import React from 'react';
import { Input } from '../../UI';
import useResumeStore from '../../../store/resumeStore';

export const PersonalInfoForm: React.FC = () => {
    const { resume, updateField } = useResumeStore();
    const data = resume.personal;
    const onChange = updateField;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" value={data.name} onChange={e => onChange('personal.name', e.target.value)} />
            <Input label="Job Title" value={data.title} onChange={e => onChange('personal.title', e.target.value)} />
            <Input label="Email" type="email" value={data.email} onChange={e => onChange('personal.email', e.target.value)} />
            <Input label="Phone" type="tel" value={data.phone} onChange={e => onChange('personal.phone', e.target.value)} />
            <Input label="Location" value={data.location} onChange={e => onChange('personal.location', e.target.value)} />
            <Input label="LinkedIn Profile" value={data.linkedin} onChange={e => onChange('personal.linkedin', e.target.value)} />
            <Input label="Portfolio/GitHub URL" value={data.portfolio} onChange={e => onChange('personal.portfolio', e.target.value)} />
        </div>
    )
};