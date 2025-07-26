import React from 'react';
import { Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import type { ResumeData, SectionKey } from '../../../types';

export const ClassicTemplatePdf: React.FC<{ resume: ResumeData }> = ({ resume }) => {
    const { personal, summary, sectionOrder, accentColor } = resume;
    
    const styles = StyleSheet.create({
        page: { fontFamily: 'Inter', padding: '0.5in', backgroundColor: '#ffffff', color: '#003049', fontSize: 10, lineHeight: 1.4, },
        header: { textAlign: 'center', marginBottom: 20 },
        name: { fontSize: 28, fontWeight: 'bold', marginBottom: 4, color: accentColor },
        title: { fontSize: 14, fontWeight: 'normal', color: '#003049' },
        contactInfo: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 12, fontSize: 9, color: '#669bbc' },
        contactItem: { marginHorizontal: 8 },
        summarySection: { marginVertical: 10, textAlign: 'center', fontSize: 10, fontStyle: 'italic', paddingHorizontal: '0.25in' },
        section: { marginBottom: 16 },
        sectionTitle: { fontSize: 16, fontWeight: 'bold', color: accentColor, borderBottom: `2px solid ${accentColor}`, paddingBottom: 4, marginBottom: 8 },
        entry: { marginBottom: 12 },
        entryHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
        entryTitle: { fontSize: 11, fontWeight: 'bold', color: '#003049' },
        entryDate: { fontSize: 10, fontStyle: 'italic', color: '#669bbc' },
        entrySubtitle: { fontSize: 10, color: '#669bbc', marginBottom: 2 },
        entryLink: { fontSize: 10, color: accentColor, textDecoration: 'none' },
        description: { marginTop: 4, whiteSpace: 'pre-wrap' },
        skillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
        skill: { backgroundColor: accentColor + '20', color: '#003049', padding: '4px 8px', borderRadius: 12, margin: 2, fontSize: 9 },
        achievement: { marginBottom: 4 },
    });
    
    const SectionRenderer: React.FC<{ sectionKey: SectionKey }> = ({ sectionKey }) => {
        switch (sectionKey) {
            case 'experience':
                return resume.experience.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experience</Text>
                        {resume.experience.map(exp => (
                            <View key={exp.id} style={styles.entry}>
                                <View style={styles.entryHeader}><Text style={styles.entryTitle}>{exp.role}</Text><Text style={styles.entryDate}>{exp.startDate} - {exp.endDate}</Text></View>
                                <Text style={styles.entrySubtitle}>{exp.company} | {exp.location}</Text>
                                <Text style={styles.description}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>
                ) : null;
            case 'education':
                return resume.education.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Education</Text>
                        {resume.education.map(edu => (
                            <View key={edu.id} style={styles.entry}>
                                <View style={styles.entryHeader}><Text style={styles.entryTitle}>{edu.degree}</Text><Text style={styles.entryDate}>{edu.startDate} - {edu.endDate}</Text></View>
                                <Text style={styles.entrySubtitle}>{edu.university} | {edu.location}</Text>
                                {edu.gpa && <Text style={styles.entrySubtitle}>GPA: {edu.gpa}</Text>}
                            </View>
                        ))}
                    </View>
                ) : null;
            case 'projects':
                return resume.projects.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Projects</Text>
                        {resume.projects.map(proj => (
                            <View key={proj.id} style={styles.entry}>
                                <View style={styles.entryHeader}>
                                    <Text style={styles.entryTitle}>{proj.name}</Text>
                                    {proj.url && <Link src={proj.url} style={styles.entryLink}>{proj.url}</Link>}
                                </View>
                                <Text style={styles.description}>{proj.description}</Text>
                            </View>
                        ))}
                    </View>
                ) : null;
            case 'skills':
                return resume.skills.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <View style={styles.skillsContainer}>
                            {resume.skills.map(skill => <Text key={skill.id} style={styles.skill}>{skill.name}</Text>)}
                        </View>
                    </View>
                ) : null;
            case 'achievements':
                return resume.achievements.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Achievements</Text>
                        {resume.achievements.map(ach => (
                            <Text key={ach.id} style={styles.achievement}>• {ach.name}</Text>
                        ))}
                    </View>
                ) : null;
            default: return null;
        }
    }

    return (
         <Page size="LETTER" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>{personal.name}</Text>
                <Text style={styles.title}>{personal.title}</Text>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactItem}>{personal.email}</Text>
                    <Text style={styles.contactItem}> | </Text>
                    <Text style={styles.contactItem}>{personal.phone}</Text>
                    <Text style={styles.contactItem}> | </Text>
                    <Text style={styles.contactItem}>{personal.location}</Text>
                </View>
                 <View style={styles.contactInfo}>
                    <Link src={personal.linkedin} style={styles.contactItem}>{personal.linkedin}</Link>
                    {personal.githubSection?.url && (<><Text style={styles.contactItem}> | </Text><Link src={personal.githubSection.url} style={styles.contactItem}>{personal.githubSection.url}</Link></>)}
                    <Text style={styles.contactItem}> | </Text>
                    {personal.portfolioSection?.url && <Link src={personal.portfolioSection.url} style={styles.contactItem}>{personal.portfolioSection.url}</Link>}
                </View>
            </View>

            {summary && (
                <View style={styles.summarySection}>
                    <Text>{summary}</Text>
                </View>
            )}

            {sectionOrder.map(key => <SectionRenderer key={key} sectionKey={key} />)}
            
        </Page>
    )
};