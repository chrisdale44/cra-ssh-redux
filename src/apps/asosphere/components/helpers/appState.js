import { tracks } from "../../constants";

export const emptyState = (): AsoSphereAppState => {
  return {
    name: "",
    title: "",
    milestoneByTrack: {
      PAGE_COMPOSITION: 0,
      VISUAL_AND_RESPONSIVE_DESIGN: 0,
      USER_INTERACTIONS: 0,
      SOFTWARE_DESIGN_AND_ARCHITECTURAL_PATTERNS: 0,
      ARCHITECTURE: 0,
      MESSAGING_AND_INTEGRATION: 0,
      PERFORMANCE: 0,
      SCALABILITY: 0,
      DATA: 0,
      TOOLS_AND_TECHNOLOGIES: 0,
      BROWSER_SUPPORT: 0,
      DEVELOPMENT_LIFECYCLE: 0,
      CODE_QUALITY: 0,
      CODE_CRAFTSMANSHIP: 0,
      CODE_REVIEW: 0
    },
    focusedTrackId: "PAGE_COMPOSITION",
    focusedMilestoneId: 0,
    milestoneCheckboxes: createMilestoneCheckboxState(tracks)
  };
};

export const defaultState = (): AsoSphereAppState => {
  return {
    name: "Andy Mills",
    title: "Staff Engineer",
    milestoneByTrack: {
      PAGE_COMPOSITION: 4,
      VISUAL_AND_RESPONSIVE_DESIGN: 0,
      USER_INTERACTIONS: 0,
      SOFTWARE_DESIGN_AND_ARCHITECTURAL_PATTERNS: 0,
      ARCHITECTURE: 0,
      MESSAGING_AND_INTEGRATION: 0,
      PERFORMANCE: 3,
      SCALABILITY: 0,
      DATA: 0,
      TOOLS_AND_TECHNOLOGIES: 0,
      BROWSER_SUPPORT: 0,
      DEVELOPMENT_LIFECYCLE: 0,
      CODE_QUALITY: 2,
      CODE_CRAFTSMANSHIP: 0,
      CODE_REVIEW: 0
    },
    focusedTrackId: "PAGE_COMPOSITION",
    focusedMilestoneId: 0,
    milestoneCheckboxes: createMilestoneCheckboxState(tracks)
  };
};

const createMilestoneCheckboxState = tracks => {
  const result = {};
  Object.keys(tracks).forEach(trackId => {
    const trackObj = {};
    tracks[trackId].milestones.forEach((milestone, i) => {
      const milestoneObj = {};
      milestone.signals.forEach((signal, j) => {
        if (i < 4) {
          milestoneObj[j] = true;
        } else {
          milestoneObj[j] = false;
        }
      });
      trackObj[i] = milestoneObj;
    });
    result[trackId] = trackObj;
  });
  return result;
};
