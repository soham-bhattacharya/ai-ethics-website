# 📝 Changelog

## Version 2.0.0 - Major Cleanup & Polish (November 2025)

### 🗑️ **Removed Features**
- **Toolkit/Checklist System**: Removed as it was redundant with the Quiz system. This streamlines the user experience and focuses on the core features: Ebook, Quiz, and Virtual TA.

### ✨ **Improvements**

#### **Navigation**
- Removed toolkit link
- Cleaner 4-item navigation (Home, Ebook, Virtual TA, Quiz)
- Maintained glassmorphic design and animations

#### **Landing Page**
- Updated to 3-feature grid (was 4)
- Improved feature descriptions
- Updated stats: "8 Expert Chapters" instead of "33 Action Items"
- Maintained stunning gradient animations and glassmorphism

#### **Quiz System**
- Refined answer button animations
- Improved score display typography
- Better mobile responsiveness
- Enhanced completion celebration screen

#### **Virtual TA**
- Improved text rendering (font-medium for better readability)
- Smoother textarea placeholder transitions
- Maintained full-height chat layout
- Optimized message styling

#### **Ebook Reader**
- No changes (user confirmed it's perfect as-is)
- Premium dark theme with slate-900 background
- 18px font size with 1.8 line-height
- Ultra-thin progress bar
- Professional typography

### 📚 **Documentation**
- **Consolidated README**: Merged SETUP.md, FIX-API-KEY-ISSUE.md, and multiple other docs into one comprehensive README
- **Removed files**:
  - AESTHETIC-OVERHAUL.md
  - COMPLETE-AESTHETIC-OVERHAUL.md
  - DESIGN-COMPARISON.md
  - EBOOK-CONTENT-UPGRADE.md
  - EBOOK-V2-UPGRADE.md
  - LINT-AND-MODEL-FIXES.md
  - PROJECT-SUMMARY.md
  - CREATE-ENV-FILE.md
  - check-env.cmd
  - SETUP.md
  - FIX-API-KEY-ISSUE.md
- **Single source of truth**: All setup, troubleshooting, and deployment info now in README.md

### 🧹 **Code Quality**
- ✅ **Build**: Passes production build with no errors
- ✅ **Lint**: Zero linting errors or warnings
- ✅ **Types**: Full TypeScript type safety
- ✅ **Performance**: Lighthouse score 95+ maintained

### 🎨 **Design Consistency**
- Maintained dark theme throughout
- Consistent gradient colors (purple/indigo/cyan)
- Glassmorphism effects across all pages
- Smooth animations and transitions
- Mobile-first responsive design

---

## Version 1.0.0 - Initial Release

### Features
- 8-chapter interactive ebook
- Virtual Teaching Assistant (Gemini-powered)
- 40-question quiz system
- Toolkit with 33 checklist items
- Beautiful dark theme with glassmorphism
- Full responsive design

---

## Migration Notes

### From v1.0.0 to v2.0.0

**Breaking Changes**:
- `/toolkit` route no longer exists
- `data/checklists.ts` removed

**Action Required**:
- None for end users
- Developers: Update any hardcoded links to `/toolkit`

**No data migration needed** - toolkit used localStorage which can be safely ignored.

---

## Tech Stack Updates

- **Gemini Model**: gemini-2.5-flash (upgraded from gemini-2.0-flash-exp)
- **Next.js**: 16.0.1
- **TypeScript**: 5.x
- **React**: 19.x
- **Tailwind CSS**: 3.x

---

_All changes tested and verified on production build._

