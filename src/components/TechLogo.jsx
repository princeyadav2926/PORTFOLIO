import React from 'react';

/**
 * TechLogo: Renders crisp vector brand SVGs for all technical skills & tools.
 * Styled to fit the premium Matte Black & Champagne Gold aesthetic.
 */
export default function TechLogo({ name, className = "w-5 h-5", size = 20 }) {
  const normalized = (name || '').toLowerCase().trim();

  switch (normalized) {
    case 'c++':
    case 'cpp':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M117.5 64c0 29.5-24 53.5-53.5 53.5S10.5 93.5 10.5 64 34.5 10.5 64 10.5s53.5 24 53.5 53.5z" stroke="#D6AD60" strokeWidth="6"/>
          <path d="M72 44.5c-4.5-4-10-6-16.5-6-14 0-25 11-25 25.5s11 25.5 25 25.5c6.5 0 12-2 16.5-6l-5.5-7c-3 2.5-6.5 4-11 4-9 0-16-7-16-16.5s7-16.5 16-16.5c4.5 0 8 1.5 11 4l5.5-7z" fill="#F5F5F0"/>
          <path d="M85 58h4v-4h3v4h4v3h-4v4h-3v-4h-4v-3zm18 0h4v-4h3v4h4v3h-4v4h-3v-4h-4v-3z" fill="#D6AD60"/>
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M49 96c21 2 40-2 49-6-14-1-29-1-49 6z" fill="#D6AD60"/>
          <path d="M42 84c26 2 51-1 63-8-18-2-38-1-63 8z" fill="#F5E6C8"/>
          <path d="M72 61c5-6 10-12 5-21-4-8-12-12-8-22-11 6-13 16-9 24 4 8 11 11 12 19z" fill="#D6AD60"/>
          <path d="M57 66c3-4 6-9 3-15-3-6-9-9-6-16-8 4-9 11-7 17 3 5 8 8 10 14z" fill="#F5F5F0"/>
          <path d="M88 77c10-5 8-11-2-12-1 0-2 0-3 1 1 2 2 4 1 6 3 0 5 2 4 5z" fill="#D6AD60"/>
          <path d="M37 108c32 3 67 1 82-9-17 0-35 5-82 9z" fill="#D6AD60"/>
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M63.5 10.5c-28 0-26 12-26 12l.02 12.5h26.5v3.8H25.5s-17-2-17 26.2c0 28.2 14.8 27.2 14.8 27.2h8.8v-12.3s-.5-14.8 14.5-14.8h25v-25s1.8-17.6-25.1-17.6zm-14.2 8.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" fill="#D6AD60"/>
          <path d="M64.5 117.5c28 0 26-12 26-12l-.02-12.5H64v-3.8h38.5s17 2 17-26.2c0-28.2-14.8-27.2-14.8-27.2h-8.8v12.3s.5 14.8-14.5 14.8h-25v25s-1.8 17.6 25.1 17.6zm14.2-8.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" fill="#F5F5F0"/>
        </svg>
      );

    case 'javascript':
    case 'javascript (es6+)':
    case 'js':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="20" fill="#15191B" stroke="#D6AD60" strokeWidth="6"/>
          <path d="M67 89c2 4 6 7 11 7 6 0 10-3 10-8 0-6-4-8-12-12-11-5-16-10-16-20 0-11 9-19 23-19 8 0 14 3 18 10l-9 6c-2-3-4-5-9-5-4 0-7 2-7 5 0 4 3 6 10 9 12 5 18 10 18 21 0 12-10 20-25 20-11 0-19-5-23-13l14-10z" fill="#D6AD60"/>
          <path d="M35 38h16v50c0 10-5 15-14 15-3 0-7-1-9-2l2-11c2 1 4 1 6 1 4 0 6-2 6-7V38z" fill="#F5F5F0"/>
        </svg>
      );

    case 'react':
    case 'react.js':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <ellipse cx="64" cy="64" rx="52" ry="20" stroke="#D6AD60" strokeWidth="5"/>
          <ellipse cx="64" cy="64" rx="52" ry="20" stroke="#D6AD60" strokeWidth="5" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="52" ry="20" stroke="#D6AD60" strokeWidth="5" transform="rotate(120 64 64)"/>
          <circle cx="64" cy="64" r="9" fill="#F5E6C8"/>
        </svg>
      );

    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M32 52c4-16 16-24 36-24 24 0 32 16 36 24-4 16-16 24-36 24-24 0-32-16-36-24zm32 36c4-16 16-24 36-24 24 0 32 16 36 24-4 16-16 24-36 24-24 0-32-16-36-24z" stroke="#D6AD60" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'node.js':
    case 'node':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M64 12l48 27.7v55.4L64 122.8 16 95.1V39.7L64 12z" stroke="#D6AD60" strokeWidth="7" strokeLinejoin="round"/>
          <path d="M64 42v44M42 54l22 13 22-13" stroke="#F5F5F0" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      );

    case 'express.js':
    case 'express':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <rect width="128" height="128" rx="20" fill="#15191B" stroke="#D6AD60" strokeWidth="6"/>
          <text x="64" y="74" fill="#F5F5F0" fontSize="36" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">ex</text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M64 10s26 26 26 58c0 24-18 42-26 48-8-6-26-24-26-48 0-32 26-58 26-58z" stroke="#D6AD60" strokeWidth="6" fill="#15191B"/>
          <path d="M64 16v96" stroke="#F5E6C8" strokeWidth="4"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M20 72c8-26 36-44 64-36 18 5 28 20 28 36-12-6-28-6-40 2-12 8-28 12-52-2z" stroke="#D6AD60" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="86" cy="46" r="4" fill="#F5F5F0"/>
        </svg>
      );

    case 'sqlite':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M28 34c0-11 16-20 36-20s36 9 36 20v60c0 11-16 20-36 20s-36-9-36-20V34z" stroke="#D6AD60" strokeWidth="6"/>
          <path d="M28 54c10 8 38 8 72 0M28 74c10 8 38 8 72 0" stroke="#D6AD60" strokeWidth="5"/>
        </svg>
      );

    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M20 16l9 90 35 10 35-10 9-90H20z" stroke="#D6AD60" strokeWidth="6" strokeLinejoin="round"/>
          <path d="M64 36H40l3 32h21m0 0H45l2 22 17 5m0-59v59" stroke="#F5F5F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M20 16l9 90 35 10 35-10 9-90H20z" stroke="#D6AD60" strokeWidth="6" strokeLinejoin="round"/>
          <path d="M64 36H40l2 20h22m0 0H44l2 24 18 5m0-49v49" stroke="#F5E6C8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <rect x="18" y="18" width="92" height="92" rx="16" transform="rotate(45 64 64)" stroke="#D6AD60" strokeWidth="6"/>
          <circle cx="48" cy="80" r="7" fill="#F5F5F0"/>
          <circle cx="80" cy="48" r="7" fill="#F5F5F0"/>
          <circle cx="48" cy="48" r="7" fill="#D6AD60"/>
          <path d="M48 55v18M80 55v12l-24 13" stroke="#F5F5F0" strokeWidth="5"/>
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M64 14C36.4 14 14 36.4 14 64c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4 0-1.2-.1-5.2-.1-9.5-13.9 3-16.8-5.9-16.8-5.9-2.3-5.8-5.6-7.3-5.6-7.3-4.5-3.1.3-3 .3-3 5 .4 7.6 5.1 7.6 5.1 4.5 7.6 11.7 5.4 14.6 4.1.5-3.3 1.8-5.4 3.2-6.7-11.1-1.3-22.8-5.6-22.8-24.8 0-5.5 2-9.9 5.2-13.4-.5-1.3-2.3-6.4.5-13.3 0 0 4.2-1.3 13.8 5.1 4-1.1 8.3-1.7 12.6-1.7s8.6.6 12.6 1.7c9.6-6.5 13.8-5.1 13.8-5.1 2.8 6.8 1 12 .5 13.3 3.3 3.5 5.2 8 5.2 13.4 0 19.3-11.7 23.5-22.9 24.7 1.8 1.6 3.4 4.6 3.4 9.3 0 6.7-.1 12.1-.1 13.8 0 1.3.9 3 3.5 2.4C99.7 104.8 114 86.1 114 64c0-27.6-22.4-50-50-50z" fill="#D6AD60"/>
        </svg>
      );

    case 'vs code':
    case 'vscode':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M96 16l-50 40-24-18-12 7v66l12 7 24-18 50 40 18-9V25L96 16z" stroke="#D6AD60" strokeWidth="6" strokeLinejoin="round"/>
          <path d="M96 36L46 75M96 92L46 53" stroke="#F5F5F0" strokeWidth="5"/>
        </svg>
      );

    case 'vercel':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <path d="M64 22l48 84H16L64 22z" fill="#D6AD60"/>
        </svg>
      );

    case 'google antigravity':
    case 'antigravity':
    case 'ai tools':
    case 'generative ai':
    case 'prompt engineering':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <circle cx="64" cy="64" r="48" stroke="#D6AD60" strokeWidth="6"/>
          <path d="M64 26l7 27 27 7-27 7-7 27-7-27-27-7 27-7 7-27z" fill="#F5E6C8"/>
        </svg>
      );

    case 'rest apis':
    case 'rest api':
    case 'rest':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <rect x="20" y="36" width="30" height="24" rx="6" stroke="#D6AD60" strokeWidth="4"/>
          <rect x="78" y="36" width="30" height="24" rx="6" stroke="#D6AD60" strokeWidth="4"/>
          <rect x="49" y="78" width="30" height="24" rx="6" stroke="#F5F5F0" strokeWidth="4"/>
          <path d="M50 48h28M35 60v12h24M93 60v12H69" stroke="#D6AD60" strokeWidth="3"/>
        </svg>
      );

    default:
      // Generic elegant code/tag icon
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="none">
          <rect width="128" height="128" rx="20" fill="#15191B" stroke="#D6AD60" strokeWidth="6"/>
          <path d="M48 44L28 64l20 20M80 44l20 20-20 20M70 38l-12 52" stroke="#D6AD60" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
}
