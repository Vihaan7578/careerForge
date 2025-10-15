// Text formatting utilities

/**
 * Converts text to title case (First Letter Of Each Word Capitalized)
 * Handles special cases like McDonald, O'Brien, etc.
 */
export const toTitleCase = (str) => {
  if (!str) return '';
  
  // Words that should stay lowercase (unless at start)
  const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of', 'in'];
  
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      // Always capitalize first word
      if (index === 0) {
        return capitalizeWord(word);
      }
      
      // Don't capitalize minor words (unless first word)
      if (minorWords.includes(word)) {
        return word;
      }
      
      return capitalizeWord(word);
    })
    .join(' ');
};

/**
 * Capitalizes a single word, handling special cases
 */
const capitalizeWord = (word) => {
  if (!word) return '';
  
  // Handle hyphenated words (e.g., "vice-president" -> "Vice-President")
  if (word.includes('-')) {
    return word.split('-').map(part => capitalizeWord(part)).join('-');
  }
  
  // Handle apostrophes (e.g., "o'brien" -> "O'Brien")
  if (word.includes("'")) {
    const parts = word.split("'");
    return parts.map((part, i) => {
      if (i === 0) return part.charAt(0).toUpperCase() + part.slice(1);
      // After apostrophe, capitalize if it's a letter
      return part.length > 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part;
    }).join("'");
  }
  
  // Handle "Mc" and "Mac" prefixes
  if (word.toLowerCase().startsWith('mc') && word.length > 2) {
    return 'Mc' + word.charAt(2).toUpperCase() + word.slice(3);
  }
  if (word.toLowerCase().startsWith('mac') && word.length > 3) {
    return 'Mac' + word.charAt(3).toUpperCase() + word.slice(4);
  }
  
  // Standard capitalization
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Format a person's full name properly
 */
export const formatName = (name) => {
  if (!name) return '';
  
  // Split by spaces and capitalize each part
  return name
    .trim()
    .split(' ')
    .map(part => capitalizeWord(part))
    .join(' ');
};

/**
 * Format location (city, state)
 */
export const formatLocation = (location) => {
  if (!location) return '';
  
  // Handle "city, state" format
  if (location.includes(',')) {
    const parts = location.split(',').map(part => part.trim());
    return parts.map(part => toTitleCase(part)).join(', ');
  }
  
  return toTitleCase(location);
};

/**
 * Format company/organization name
 */
export const formatCompanyName = (company) => {
  if (!company) return '';
  
  // Common company suffixes that should be uppercase
  const uppercaseSuffixes = ['LLC', 'Inc', 'Corp', 'Ltd', 'LLP', 'PC'];
  
  let formatted = toTitleCase(company);
  
  // Fix common abbreviations
  uppercaseSuffixes.forEach(suffix => {
    const regex = new RegExp(`\\b${suffix}\\b`, 'gi');
    formatted = formatted.replace(regex, suffix.toUpperCase());
  });
  
  return formatted;
};

/**
 * Format university/school name
 */
export const formatSchoolName = (school) => {
  if (!school) return '';
  
  // Words that should be capitalized even if they're "minor words" in school names
  const alwaysCapitalize = ['University', 'College', 'Institute', 'School', 'Academy'];
  
  let formatted = school
    .toLowerCase()
    .split(' ')
    .map(word => {
      // Always capitalize these words
      if (alwaysCapitalize.some(cap => cap.toLowerCase() === word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      // Check for "of" - keep it lowercase unless at start
      if (word === 'of' || word === 'the') {
        return word;
      }
      return capitalizeWord(word);
    })
    .join(' ');
  
  // Capitalize first word always
  if (formatted.length > 0) {
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
  
  return formatted;
};

/**
 * Format job title
 */
export const formatJobTitle = (title) => {
  if (!title) return '';
  return toTitleCase(title);
};

/**
 * Format degree name
 */
export const formatDegree = (degree) => {
  if (!degree) return '';
  
  // Common degree abbreviations
  const degrees = {
    "bachelor's degree": "Bachelor's Degree",
    "master's degree": "Master's Degree",
    "associate's degree": "Associate's Degree",
    "phd": "Ph.D.",
    "ph.d.": "Ph.D.",
    "mba": "MBA",
    "md": "MD",
    "jd": "JD",
  };
  
  const lower = degree.toLowerCase().trim();
  if (degrees[lower]) {
    return degrees[lower];
  }
  
  return toTitleCase(degree);
};

