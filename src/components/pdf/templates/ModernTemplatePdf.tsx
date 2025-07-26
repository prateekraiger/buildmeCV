import React from 'react';
import { Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import type { ResumeData, SectionKey } from '../../../types';

export const ModernTemplatePdf: React.FC<{ resume: ResumeData }> = ({ resume }) => {
    const { personal, summary, sectionOrder, accentColor } = resume;
    const mainSections: SectionKey[] = ['experience', 'education', 'projects'];
    const sidebarSections: SectionKey[] = ['skills', 'achievements'];

    const styles = StyleSheet.create({
        page: { flexDirection: 'row', fontFamily: 'Inter', backgroundColor: '#ffffff', color: '#003049', fontSize: 10, lineHeight: 1.4 },
        sidebar: { width: '33%', padding: '0.4in 0.3in', backgroundColor: accentColor + '1A' },
        mainContent: { width: '67%', padding: '0.4in' },

        // Sidebar Styles
        name: { fontSize: 24, fontWeight: 'bold', color: accentColor, marginBottom: 4 },
        title: { fontSize: 12, fontWeight: 'normal', color: '#003049', marginBottom: 20 },
        contactBlock: { marginBottom: 12 },
        contactLabel: { fontSize: 10, fontWeight: 'bold', color: accentColor, marginBottom: 2 },
        contactText: { fontSize: 9, color: '#003049' },
        contactLink: { fontSize: 9, color: accentColor, textDecoration: 'none' },
        sidebarSection: { marginBottom: 16 },
        sidebarSectionTitle: { fontSize: 14, fontWeight: 'bold', color: accentColor, borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6 },
        skillsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
        skill: { backgroundColor: accentColor + '33', color: '#003049', padding: '3px 6px', borderRadius: 4, fontSize: 9 },
        achievement: { fontSize: 9, marginBottom: 3 },
        
        // Main Content Styles
        mainSection: { marginBottom: 16 },
        mainSectionTitle: { fontSize: 16, fontWeight: 'bold', color: accentColor, borderBottom: `2px solid ${accentColor}`, paddingBottom: 4, marginBottom: 8 },
        summaryText: { fontSize: 10, fontStyle: 'italic' },
        entry: { marginBottom: 12 },
        entryHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
        entryTitle: { fontSize: 11, fontWeight: 'bold', color: '#003049' },
        entryDate: { fontSize: 10, fontStyle: 'italic', color: '#669bbc' },
        entrySubtitle: { fontSize: 10, color: '#669bbc', marginBottom: 2 },
        entryLink: { fontSize: 10, color: accentColor, textDecoration: 'none' },
        description: { marginTop: 4, whiteSpace: 'pre-wrap' },
    });

    const SectionRenderer: React.FC<{ sectionKey: SectionKey, view: 'main' | 'sidebar' }> = ({ sectionKey, view }) => {
        const sectionStyle = view === 'main' ? styles.mainSection : styles.sidebarSection;
        const titleStyle = view === 'main' ? styles.mainSectionTitle : styles.sidebarSectionTitle;

        switch (sectionKey) {
            case 'experience':
                return resume.experience.length > 0 ? (
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Experience</Text>
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
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Education</Text>
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
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Projects</Text>
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
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Skills</Text>
                        <View style={styles.skillsContainer}>
                            {resume.skills.map(skill => <Text key={skill.id} style={styles.skill}>{skill.name}</Text>)}
                        </View>
                    </View>
                ) : null;
            case 'achievements':
                return resume.achievements.length > 0 ? (
                    <View style={sectionStyle}>
                        <Text style={titleStyle}>Achievements</Text>
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
            <View style={styles.sidebar}>
                <Text style={styles.name}>{personal.name}</Text>
                <Text style={styles.title}>{personal.title}</Text>
                
                <View style={styles.contactBlock}><Text style={styles.contactLabel}>Email</Text><Text style={styles.contactText}>{personal.email}</Text></View>
                <View style={styles.contactBlock}><Text style={styles.contactLabel}>Phone</Text><Text style={styles.contactText}>{personal.phone}</Text></View>
                <View style={styles.contactBlock}><Text style={styles.contactLabel}>Location</Text><Text style={styles.contactText}>{personal.location}</Text></View>
                <View style={styles.contactBlock}><Text style={styles.contactLabel}>LinkedIn</Text><Link src={personal.linkedin} style={styles.contactLink}>{personal.linkedin}</Link></View>
                {personal.githubSection?.url && (<View style={styles.contactBlock}><Text style={styles.contactLabel}>GitHub</Text><Link src={personal.githubSection.url} style={styles.contactLink}>{personal.githubSection.url}</Link></View>)}
                {personal.portfolioSection?.url && (<View style={styles.contactBlock}><Text style={styles.contactLabel}>Portfolio</Text><Link src={personal.portfolioSection.url} style={styles.contactLink}>{personal.portfolioSection.url}</Link></View>)}

                {sectionOrder.map(key => sidebarSections.includes(key) && <SectionRenderer key={key} sectionKey={key} view="sidebar" />)}
            </View>
            <View style={styles.mainContent}>
                {summary && (
                    <View style={styles.mainSection}>
                        <Text style={styles.mainSectionTitle}>Summary</Text>
                        <Text style={styles.summaryText}>{summary}</Text>
                    </View>
                )}
                {sectionOrder.map(key => mainSections.includes(key) && <SectionRenderer key={key} sectionKey={key} view="main" />)}
            </View>
        </Page>
    );
};