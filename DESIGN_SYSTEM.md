# JWC8500 Hybrid Windows - Design System Specification

## PIXEL-PERFECT REPLICATION REQUIREMENTS
This document contains EXACT values extracted from the design reference for precise implementation.

---

## Color System (EXACT HEX CODES)

### Primary Colors
- **Navy Blue**: `#1a365d` - Headers, footers, primary buttons, navigation accents
- **Pure Black**: `#000000` - Headings, body text, icons
- **Pure White**: `#ffffff` - Backgrounds, card surfaces, button text on navy

### Secondary Colors
- **Light Gray Background**: `#f5f5f5` - Subtle section backgrounds, alternating rows
- **Border Gray**: `#e0e0e0` - Card borders, dividers, table borders
- **Medium Gray Text**: `#666666` - Secondary text, captions

### Semantic Colors
- **Success Green**: `#22c55e` - Success messages, positive indicators
- **Warning Orange**: `#f59e0b` - Warning states
- **Error Red**: `#ef4444` - Error messages, destructive actions

### HSL Conversions (for CSS Variables)
- Navy: `hsl(210, 54%, 23%)` - #1a365d
- Black: `hsl(0, 0%, 0%)` - #000000
- White: `hsl(0, 0%, 100%)` - #ffffff
- Light Gray: `hsl(0, 0%, 96%)` - #f5f5f5
- Border Gray: `hsl(0, 0%, 88%)` - #e0e0e0

---

## Typography System (EXACT SPECIFICATIONS)

### Font Family
**Primary Font**: Inter (Google Fonts)
- Weights needed: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Import URL: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

**Fallback Stack**:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Typography Scale (Exact Sizes)

#### Headings
- **H1**: 48px / 3rem, line-height: 1.2, weight: 700, color: #1a365d
- **H2**: 36px / 2.25rem, line-height: 1.3, weight: 700, color: #1a365d
- **H3**: 28px / 1.75rem, line-height: 1.4, weight: 600, color: #000000
- **H4**: 24px / 1.5rem, line-height: 1.4, weight: 600, color: #000000
- **H5**: 20px / 1.25rem, line-height: 1.5, weight: 600, color: #000000
- **H6**: 16px / 1rem, line-height: 1.5, weight: 600, color: #000000

#### Body Text
- **Body Large**: 18px / 1.125rem, line-height: 1.6, weight: 400, color: #000000
- **Body Regular**: 16px / 1rem, line-height: 1.6, weight: 400, color: #000000
- **Body Small**: 14px / 0.875rem, line-height: 1.5, weight: 400, color: #666666
- **Caption**: 12px / 0.75rem, line-height: 1.5, weight: 400, color: #666666

#### Interactive Text
- **Button Text**: 16px / 1rem, line-height: 1.5, weight: 500, color: #ffffff
- **Link Text**: 16px / 1rem, line-height: 1.5, weight: 500, color: #1a365d, underline on hover

---

## Spacing System (8px Grid)

### Base Unit: 8px

#### Spacing Scale
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

#### Component-Specific Spacing
- **Button Padding**: 12px 24px (vertical horizontal)
- **Card Padding**: 24px
- **Section Padding**: 48px 0 (vertical), 32px (horizontal container)
- **Header Height**: 72px
- **Footer Padding**: 48px 32px

---

## Component Styles (EXACT SPECIFICATIONS)

### Buttons

#### Primary Button (Navy)
```css
background: #1a365d;
color: #ffffff;
padding: 12px 24px;
border-radius: 4px;
font-size: 16px;
font-weight: 500;
border: none;
cursor: pointer;
transition: all 0.2s ease;
```

**Hover State**:
```css
background: #0f1f3d; /* Darker navy */
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
```

#### Secondary Button (White/Outline)
```css
background: #ffffff;
color: #1a365d;
padding: 12px 24px;
border-radius: 4px;
border: 2px solid #1a365d;
font-size: 16px;
font-weight: 500;
cursor: pointer;
transition: all 0.2s ease;
```

**Hover State**:
```css
background: #1a365d;
color: #ffffff;
```

### Cards

#### Specification Card
```css
background: #ffffff;
border: 1px solid #e0e0e0;
border-radius: 8px;
padding: 24px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;
```

**Hover State**:
```css
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
transform: translateY(-2px);
```

### Form Elements

#### Input Fields
```css
background: #ffffff;
border: 1px solid #e0e0e0;
border-radius: 4px;
padding: 12px 16px;
font-size: 16px;
color: #000000;
transition: border-color 0.2s ease;
```

**Focus State**:
```css
border-color: #1a365d;
outline: none;
box-shadow: 0 0 0 3px rgba(26, 54, 93, 0.1);
```

### Tables

#### Comparison Table
```css
border-collapse: collapse;
width: 100%;
border: 1px solid #e0e0e0;
```

**Table Header**:
```css
background: #1a365d;
color: #ffffff;
padding: 12px 16px;
text-align: left;
font-weight: 600;
```

**Table Rows**:
```css
border-bottom: 1px solid #e0e0e0;
```

**Alternating Row Background**:
```css
background: #f5f5f5; /* Every other row */
```

---

## Visual Effects (EXACT VALUES)

### Shadows
- **Small Shadow**: `0 1px 3px rgba(0, 0, 0, 0.08)`
- **Medium Shadow**: `0 2px 8px rgba(0, 0, 0, 0.08)`
- **Large Shadow**: `0 4px 16px rgba(0, 0, 0, 0.12)`
- **Button Hover Shadow**: `0 4px 12px rgba(26, 54, 93, 0.3)`

### Border Radius
- **Small**: 4px - Buttons, inputs, small UI elements
- **Medium**: 8px - Cards, containers
- **Large**: 12px - Hero sections, large images

### Transitions
- **Standard**: `all 0.2s ease` - Buttons, links, small interactions
- **Smooth**: `all 0.3s ease` - Cards, larger components
- **Fast**: `all 0.15s ease` - Micro-interactions

---

## Layout Specifications

### Container
- **Max Width**: 1280px
- **Padding**: 32px (horizontal), responsive
- **Centered**: Yes

### Grid System
- **Columns**: 12-column grid
- **Gap**: 24px
- **Breakpoints**:
  - Mobile: 0-639px (1 column)
  - Tablet: 640px-1023px (2 columns)
  - Desktop: 1024px+ (3-4 columns)

### Header
- **Height**: 72px
- **Background**: #1a365d
- **Position**: Fixed/Sticky
- **Z-Index**: 1000

### Footer
- **Background**: #1a365d
- **Color**: #ffffff
- **Padding**: 48px 32px
- **Layout**: 3 columns on desktop, stack on mobile

---

## Interactive Elements

### Hotspot Indicators
```css
width: 32px;
height: 32px;
background: #1a365d;
border: 2px solid #ffffff;
border-radius: 50%;
color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.3s ease;
```

**Hover State**:
```css
transform: scale(1.2);
box-shadow: 0 4px 12px rgba(26, 54, 93, 0.4);
```

### Icon Specifications
- **Library**: Lucide React (already installed)
- **Size**: 24px default, 20px small, 32px large
- **Color**: #1a365d (primary), #000000 (default), #ffffff (on navy)
- **Stroke Width**: 2px

---

## Asset Style System

### Product Images
- **Aspect Ratio**: 16:9 or 4:3 for hero images
- **Border Radius**: 8px
- **Shadow**: 0 4px 16px rgba(0, 0, 0, 0.12)
- **Background**: Clean white or subtle gradient

### Diagrams/Technical Images
- **Aspect Ratio**: Varies, maintain clarity
- **Border**: 1px solid #e0e0e0
- **Padding**: 16px inside container
- **Labels**: 14px, #666666, Inter font

### Icon Treatment
- **Style**: Line icons (Lucide React)
- **Color**: #1a365d for feature icons
- **Size**: 24px standard
- **Container**: Optional 48px circle with light gray background

---

## Responsive Behavior

### Breakpoints (Exact)
- **xs**: 0px - 479px (Small phones)
- **sm**: 480px - 639px (Phones)
- **md**: 640px - 767px (Large phones, small tablets)
- **lg**: 768px - 1023px (Tablets)
- **xl**: 1024px - 1279px (Small desktops)
- **2xl**: 1280px+ (Large desktops)

### Typography Scaling
- **Mobile (< 640px)**: Scale down by 0.875x
- **Tablet (640px - 1023px)**: Scale down by 0.9375x
- **Desktop (1024px+)**: Full scale (1x)

### Component Behavior
- **Navigation**: Hamburger menu on mobile (< 768px)
- **Grid Layouts**: 1 column mobile, 2 column tablet, 3-4 column desktop
- **Spacing**: Reduce by 0.75x on mobile

---

## Animation Timing

### Standard Animations
- **Fade In**: 0.3s ease-in
- **Slide In**: 0.4s ease-out
- **Scale**: 0.2s ease
- **Color Transition**: 0.2s ease

### Page Transitions
- **Route Change**: 0.5s ease-in-out
- **Modal Open/Close**: 0.3s ease

---

## Accessibility Requirements

### Color Contrast
- Navy (#1a365d) on White (#ffffff): 9.05:1 (AAA)
- Black (#000000) on White (#ffffff): 21:1 (AAA)
- White (#ffffff) on Navy (#1a365d): 9.05:1 (AAA)

### Focus States
All interactive elements must have visible focus indicators:
```css
outline: 2px solid #1a365d;
outline-offset: 2px;
```

### Minimum Touch Targets
- **Mobile**: 44px × 44px minimum
- **Desktop**: 32px × 32px minimum

---

## Implementation Checklist

- [ ] Import Inter font family with weights 400, 500, 600, 700
- [ ] Configure CSS variables with exact hex codes
- [ ] Set up 8px spacing system
- [ ] Define button styles (primary, secondary)
- [ ] Create card component with exact shadow and border radius
- [ ] Configure typography scale for all heading levels
- [ ] Set up responsive breakpoints
- [ ] Create reusable icon component with Lucide React
- [ ] Implement hover states with exact transition timing
- [ ] Configure form element styles with focus states

---

**SUCCESS CRITERIA**: Implementation should be visually INDISTINGUISHABLE from the design reference when placed side-by-side.
