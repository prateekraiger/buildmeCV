import React from "react";
import { Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import type { ResumeData, SectionKey } from "../../../types";

export const ModernTemplatePdf: React.FC<{ resume: ResumeData }> = ({
  resume,
}) => {
  const { personal, summary, sectionOrder, accentColor } = resume;
  const mainSections: SectionKey[] = ["experience", "education", "projects"];
  const sidebarSections: SectionKey[] = ["skills", "achievements"];

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      fontFamily: "Helvetica",
      backgroundColor: "#ffffff",
      color: "#003049",
      fontSize: 9,
      lineHeight: 1.2,
    },
    sidebar: {
      width: "33%",
      padding: "0.2in 0.15in",
      backgroundColor: `${accentColor}15`,
    },
    mainContent: { width: "67%", padding: "0.2in" },

    // Sidebar Styles - Compact for one page
    name: {
      fontSize: 18,
      fontWeight: "bold",
      color: accentColor,
      marginBottom: 2,
      textAlign: "center",
    },
    title: {
      fontSize: 11,
      fontWeight: "normal",
      color: "#003049",
      marginBottom: 8,
      textAlign: "center",
    },
    contactBlock: { marginBottom: 3, textAlign: "center" },
    contactLabel: {
      fontSize: 8,
      fontWeight: "bold",
      color: accentColor,
      marginBottom: 0.5,
    },
    contactText: { fontSize: 8, color: "#003049" },
    contactLink: { fontSize: 8, color: accentColor, textDecoration: "none" },
    sidebarSection: { marginBottom: 8 },
    sidebarSectionTitle: {
      fontSize: 12,
      fontWeight: "bold",
      color: accentColor,
      borderBottom: `1px solid ${accentColor}`,
      paddingBottom: 2,
      marginBottom: 4,
    },
    skillsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 2 },
    skill: {
      backgroundColor: `${accentColor}33`,
      color: "#003049",
      padding: "1px 4px",
      borderRadius: 3,
      fontSize: 7,
    },
    achievement: { fontSize: 8, marginBottom: 2 },

    // Main Content Styles - Compact for one page
    mainSection: { marginBottom: 8 },
    mainSectionTitle: {
      fontSize: 13,
      fontWeight: "bold",
      color: accentColor,
      borderBottom: `1px solid ${accentColor}`,
      paddingBottom: 2,
      marginBottom: 4,
    },
    summaryText: { fontSize: 9, fontStyle: "italic" },
    entry: { marginBottom: 6 },
    entryHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 1,
    },
    entryTitle: { fontSize: 10, fontWeight: "bold", color: "#003049" },
    entryDate: { fontSize: 8, fontStyle: "italic", color: "#669bbc" },
    entrySubtitle: { fontSize: 9, color: "#669bbc", marginBottom: 2 },
    entryLink: { fontSize: 8, color: accentColor, textDecoration: "none" },
    description: { marginTop: 2, fontSize: 8, lineHeight: 1.1 },
  });

  const SectionRenderer: React.FC<{
    sectionKey: SectionKey;
    view: "main" | "sidebar";
  }> = ({ sectionKey, view }) => {
    const sectionStyle =
      view === "main" ? styles.mainSection : styles.sidebarSection;
    const titleStyle =
      view === "main" ? styles.mainSectionTitle : styles.sidebarSectionTitle;

    switch (sectionKey) {
      case "experience":
        return resume.experience.length > 0 ? (
          <View style={sectionStyle}>
            <Text style={titleStyle}>Experience</Text>
            {resume.experience.map((exp) => (
              <View key={exp.id} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{exp.role}</Text>
                  <Text style={styles.entryDate}>
                    {exp.startDate} - {exp.endDate}
                  </Text>
                </View>
                <Text style={styles.entrySubtitle}>
                  {exp.company} | {exp.location}
                </Text>
                <Text style={styles.description}>
                  {Array.isArray(exp.description)
                    ? exp.description.join("\n")
                    : exp.description}
                </Text>
              </View>
            ))}
          </View>
        ) : null;
      case "education":
        return resume.education.length > 0 ? (
          <View style={sectionStyle}>
            <Text style={titleStyle}>Education</Text>
            {resume.education.map((edu) => (
              <View key={edu.id} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{edu.degree}</Text>
                  <Text style={styles.entryDate}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
                <Text style={styles.entrySubtitle}>
                  {edu.university} | {edu.location}
                </Text>
                {edu.gpa && (
                  <Text style={styles.entrySubtitle}>GPA: {edu.gpa}</Text>
                )}
              </View>
            ))}
          </View>
        ) : null;
      case "projects":
        return resume.projects.length > 0 ? (
          <View style={sectionStyle}>
            <Text style={titleStyle}>Projects</Text>
            {resume.projects.map((proj) => (
              <View key={proj.id} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{proj.name}</Text>
                  {proj.url && (
                    <Link
                      src={
                        proj.url.startsWith("http")
                          ? proj.url
                          : `https://${proj.url}`
                      }
                      style={styles.entryLink}
                    >
                      {proj.url}
                    </Link>
                  )}
                </View>
                <Text style={styles.description}>
                  {Array.isArray(proj.description)
                    ? proj.description.join("\n")
                    : proj.description}
                </Text>
              </View>
            ))}
          </View>
        ) : null;
      case "skills":
        return resume.skills.length > 0 ? (
          <View style={sectionStyle}>
            <Text style={titleStyle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {resume.skills.map((skill) => (
                <Text key={skill.id} style={styles.skill}>
                  {skill.name}
                </Text>
              ))}
            </View>
          </View>
        ) : null;
      case "achievements":
        return resume.achievements.length > 0 ? (
          <View style={sectionStyle}>
            <Text style={titleStyle}>Achievements</Text>
            {resume.achievements.map((ach) => (
              <Text key={ach.id} style={styles.achievement}>
                • {ach.name}
              </Text>
            ))}
          </View>
        ) : null;
      default:
        return null;
    }
  };

  return (
    <Page size="LETTER" style={styles.page}>
      <View style={styles.sidebar}>
        <Text style={styles.name}>{personal.name}</Text>
        <Text style={styles.title}>{personal.title}</Text>

        <View style={styles.contactBlock}>
          <Text style={styles.contactLabel}>Email</Text>
          <Text style={styles.contactText}>{personal.email}</Text>
        </View>
        <View style={styles.contactBlock}>
          <Text style={styles.contactLabel}>Phone</Text>
          <Text style={styles.contactText}>{personal.phone}</Text>
        </View>
        <View style={styles.contactBlock}>
          <Text style={styles.contactLabel}>Location</Text>
          <Text style={styles.contactText}>{personal.location}</Text>
        </View>
        {personal.linkedin && (
          <View style={styles.contactBlock}>
            <Text style={styles.contactLabel}>LinkedIn</Text>
            <Link
              src={
                personal.linkedin.startsWith("http")
                  ? personal.linkedin
                  : `https://${personal.linkedin}`
              }
              style={styles.contactLink}
            >
              {personal.linkedin}
            </Link>
          </View>
        )}
        {personal.githubSection?.url && (
          <View style={styles.contactBlock}>
            <Text style={styles.contactLabel}>GitHub</Text>
            <Link
              src={
                personal.githubSection.url.startsWith("http")
                  ? personal.githubSection.url
                  : `https://${personal.githubSection.url}`
              }
              style={styles.contactLink}
            >
              {personal.githubSection.url}
            </Link>
          </View>
        )}
        {personal.portfolioSection?.url && (
          <View style={styles.contactBlock}>
            <Text style={styles.contactLabel}>Portfolio</Text>
            <Link
              src={
                personal.portfolioSection.url.startsWith("http")
                  ? personal.portfolioSection.url
                  : `https://${personal.portfolioSection.url}`
              }
              style={styles.contactLink}
            >
              {personal.portfolioSection.url}
            </Link>
          </View>
        )}

        {sectionOrder.map(
          (key) =>
            sidebarSections.includes(key) && (
              <SectionRenderer key={key} sectionKey={key} view="sidebar" />
            )
        )}
      </View>
      <View style={styles.mainContent}>
        {summary && (
          <View style={styles.mainSection}>
            <Text style={styles.mainSectionTitle}>Objective</Text>
            <Text style={styles.summaryText}>{summary}</Text>
          </View>
        )}
        {/* Custom section order for Modern: Education → Experience → Projects */}
        <SectionRenderer sectionKey="education" view="main" />
        <SectionRenderer sectionKey="experience" view="main" />
        <SectionRenderer sectionKey="projects" view="main" />
      </View>
    </Page>
  );
};
