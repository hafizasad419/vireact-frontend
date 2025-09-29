export const USER_ROLES = {
    USER: "user",
    ADMIN: "admin",
    SUPER_ADMIN: "super_admin"
}

export const FEATURES_IDS = {
    HOOK: "hook",
    PACING_RHYTHM: "pacing_rhythm",
    AUDIO: "audio",
    VIEWS: "views",
    ADVANCED_ANALYTICS: "advanced_analytics",
    CAPTION: "caption"
}

export const AUTH_TOKEN = "auth_token"
export const AUTH_ROLE = "auth_role"
export const AUTH_IS_AUTHENTICATED = "auth_is_authenticated"


export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const VITE_FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;
export const VITE_GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;


// Regex patterns for validation
export const LETTERS_ONLY_REGEX = /^[a-zA-Z]+$/
export const LETTERS_AND_SPACES_REGEX = /^[a-zA-Z\s]+$/
export const LETTERS_AND_COMMA_REGEX = /^[a-zA-Z\s,]+$/
export const LETTERS_SPACES_DOTS_APOSTROPHES_HYPHENS_REGEX = /^[a-zA-Z\s.'-]+$/
export const ZIP_CODE_REGEX = /^\d{5}(-\d{4})?$/

export const PHONE_NUMBER_REGEX = /^\d{10}$/
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const CURRENCY_REGEX = /^\d+(\.\d{1,2})?$/
export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
export const TIME_REGEX = /^\d{2}:\d{2}$/

// Upload validation constants
export const UPLOAD_VALIDATION = {
    VIDEO: {
        MAX_SIZE: 50 * 1024 * 1024, // 50MB in bytes
        ALLOWED_FORMATS: ['mp4', 'mov', 'avi', 'mkv', 'webm'],
        MAX_DURATION: 60, // 60 seconds
        MIN_DURATION: 5, // 5 seconds
    },
    URL: {
        SUPPORTED_PLATFORMS: ['youtube', 'tiktok', 'instagram', 'twitter', 'facebook'],
        YOUTUBE_REGEX: /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/,
        TIKTOK_REGEX: /^(https?:\/\/)?(www\.)?(tiktok\.com\/@[\w.-]+\/video\/\d+)/,
        INSTAGRAM_REGEX: /^(https?:\/\/)?(www\.)?(instagram\.com\/p\/[\w-]+)/,
        TWITTER_REGEX: /^(https?:\/\/)?(www\.)?(twitter\.com\/[\w]+\/status\/\d+)/,
        FACEBOOK_REGEX: /^(https?:\/\/)?(www\.)?(facebook\.com\/[\w.-]+\/videos\/\d+)/,
    }
}