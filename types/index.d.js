// Legacy Type information converted to JSDoc for use in a plain-JS project.
// Original TypeScript types (kept as comments for reference):
// type User = { name: string; email: string; image?: string; accountId: string };

export const Subject = Object.freeze({
  maths: "maths",
  language: "language",
  science: "science",
  history: "history",
  coding: "coding",
  geography: "geography",
  economics: "economics",
  finance: "finance",
  business: "business",
});

/**
 * @typedef {Object} Companion
 * @property {string} $id
 * @property {string} name
 * @property {string} subject
 * @property {string} topic
 * @property {number} duration
 * @property {boolean} bookmarked
 */

/**
 * @typedef {Object} CreateCompanion
 * @property {string} name
 * @property {string} subject
 * @property {string} topic
 * @property {string} voice
 * @property {string} style
 * @property {number} duration
 */

/**
 * @typedef {Object} GetAllCompanions
 * @property {number} [limit]
 * @property {number} [page]
 * @property {string|string[]} [subject]
 * @property {string|string[]} [topic]
 */

/**
 * @typedef {Object} BuildClient
 * @property {string} [key]
 * @property {string} [sessionToken]
 */

/**
 * @typedef {Object} CreateUser
 * @property {string} email
 * @property {string} name
 * @property {string} [image]
 * @property {string} accountId
 */

/**
 * @typedef {Object} SearchParams
 * @property {Promise<Object.<string, string|string[]|undefined>>} searchParams
 */

/**
 * @typedef {Object} Avatar
 * @property {string} userName
 * @property {number} width
 * @property {number} height
 * @property {string} [className]
 */

/**
 * @typedef {Object} SavedMessage
 * @property {"user"|"system"|"assistant"} role
 * @property {string} content
 */

/**
 * @typedef {Object} CompanionComponentProps
 * @property {string} companionId
 * @property {string} subject
 * @property {string} topic
 * @property {string} name
 * @property {string} userName
 * @property {string} userImage
 * @property {string} voice
 * @property {string} style
 */