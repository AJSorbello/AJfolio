// Helper function for smooth scrolling
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 70, // Offset for header
      behavior: 'smooth'
    });
  }
};
