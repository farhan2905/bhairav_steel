# Bhairav Steel Website Enhancement Guide

## Comprehensive Data Structure & Presentation Standards

---

## 1. Website Analysis Summary

### 1.1 Reference Websites Analyzed

| Website | Focus | Key Strengths |
|---------|-------|---------------|
| **RSFA Metaliks** (rsfametalik.in) | Bulk & Noble Ferro Alloys, Ores, Steel Products | Detailed chemical compositions, multiple grade tables, comprehensive specifications |
| **Shree Bhagwati Group** (shreebhagwatigroup.co.in) | Steel Products, Structural Steel | Clean grade categorization, organized steel grades by type |
| **Bhairav Steel** (bhairav-steel.vercel.app) | Current site under development | Modern design, certification badges, service offerings |

### 1.2 Bhairav Steel Current Structure

**Strengths:**
- Clean, modern hero section with CTAs
- Professional company overview
- Quality certifications displayed
- Service offerings well-presented
- Responsive design foundation

**Gaps Identified:**
- Product pages lack detailed specifications
- No chemical composition tables
- No grade-specific data
- Missing material grades and dimensions
- No comparison tables
- Limited product detail information

---

## 2. Recommended Product Data Structure

### 2.1 Master Data Schema

Each product should contain these standardized fields:

```json
{
  "id": "unique-slug-id",
  "name": "Product Display Name",
  "aliases": ["Alternative Names", "Acronyms"],
  "category": "category-id",
  "description": "Comprehensive product description (2-3 sentences)",
  "shortDescription": "Brief summary for cards/lists (1 sentence)",
  "chemicalComposition": [...],
  "physicalSpecifications": {...},
  "applications": [...],
  "manufacturingProcess": "...",
  "safetyInformation": [...],
  "grades": [...],
  "certifications": [...],
  "packagingOptions": [...],
  "minimumOrderQuantity": "...",
  "leadTime": "...",
  "relatedProducts": [...]
}
```

### 2.2 Chemical Composition Table Standards

**For Ferro Alloys:**

| Element | Symbol | Display Format | Unit |
|---------|--------|---------------|------|
| Manganese | Mn | XX-XX% or XX% max | Percentage |
| Silicon | Si | XX-XX% or XX% max | Percentage |
| Carbon | C | XX% or XX% max | Percentage |
| Chromium | Cr | XX% min or XX% max | Percentage |
| Phosphorus | P | XX% max | Percentage |
| Sulfur | S | XX% max | Percentage |
| Iron | Fe | Balance | Percentage |

**For Ores:**

| Parameter | Display | Notes |
|-----------|---------|-------|
| Grade | XX% Fe/Mn | Primary content |
| Size | XX-XX mm | Dimensions |
| Impurities | XX% max | P, S, SiO2 |

### 2.3 Steel Grades Database

**Low Carbon Steel:**
- SAE 1008, C20, CLII, AI05

**Plain Carbon Steel:**
- EN8D, EN42, C30, C40, C45, C50

**Carbon Manganese Steel:**
- EN 15, 37C15, SAE 1541

**Free Cutting Steel:**
- EN 1A, SAE 1118, SAE 1140

**Ni, Cr, Mo Steel:**
- SAE8620, SAE8622, EN353, EN24, 637H 17

**Chrome Manganese Steel:**
- 16MnCr5, 20MnCr5, EN 18

**Chrome Moly Steel:**
- EN 19, SAE 4140, SCM 415

**Ball Bearing Steel:**
- SAE 52100

**Chrome Vanadium Steel:**
- 31 CrV3

**Spring Steel:**
- EN 45A, 65Si7, SUP 11A, SUP 9, 55Si7, EN47, EN48

---

## 3. Product Page Layout Recommendations

### 3.1 Page Structure Hierarchy

```
1. Breadcrumb Navigation
   └── Home > Products > Category > Product Name

2. Product Hero Section
   ├── Product Images (Gallery)
   ├── Product Title & Aliases
   ├── Category Badge
   ├── Short Description
   ├── Quick Specs Summary
   └── CTA Buttons (Request Quote, Contact)

3. Chemical Specifications Section
   ├── Section Title
   ├── Grade Selector Tabs
   └── Full Composition Table

4. Physical Properties Section (if applicable)
   ├── Property Cards Grid
   └── Technical Specifications

5. Key Properties/Benefits Section
   └── Icon + Text List

6. Applications Section
   └── Industry Use Cases

7. Manufacturing Process Section
   └── Process Timeline

8. Safety & Handling Section
   └── Warning Cards

9. Download Resources Section
   ├── Technical Datasheet
   ├── MSDS
   └── Product Brochure

10. Related Products Section
    └── Similar Product Cards
```

### 3.2 Section Design Guidelines

**Chemical Composition Table:**
- Sticky header on scroll
- Alternating row colors
- Hover highlight
- Mobile-responsive with horizontal scroll
- Export to PDF/CSV option

**Grade Selector:**
- Tab-style buttons
- "All Grades" default view
- Active state highlighting
- Instant table filtering

**Applications Grid:**
- 3-column on desktop
- Icon + text format
- Industry-appropriate imagery

---

## 4. Product Categories Mapping

### 4.1 Bulk Ferro Alloys (15 Products)

| Product ID | Name | Grades Count | Key Elements |
|------------|------|--------------|--------------|
| high-carbon-silico-manganese | High-Carbon Silico Manganese | 8 | Mn, Si, C |
| high-carbon-ferro-manganese | High Carbon Ferro Manganese | 3 | Mn, C |
| high-carbon-ferro-chrome | High Carbon Ferro Chrome | 9 | Cr, C, Si |
| low-carbon-ferro-chrome | Low Carbon Ferro Chrome | 6 | Cr, C |
| ferro-silicon | Ferro Silicon | 6 | Si, Al, C |
| low-carbon-silico-manganese | Low Carbon Silico Manganese | 1 | Mn, Si, C |
| medium-carbon-silico-manganese | Medium Carbon Silico Manganese | 1 | Mn, Si, C |
| medium-carbon-ferro-manganese | Medium Carbon Ferro Manganese | 1 | Mn, C |
| low-carbon-ferro-manganese | Low Carbon Ferro Manganese | 1 | Mn, C |
| silico-chrome | Silico Chrome | 1 | Cr, Si |

### 4.2 Noble Ferro Alloys (5 Products)

| Product ID | Name | Grades Count | Key Elements |
|------------|------|--------------|--------------|
| ferro-molybdenum | Ferro Molybdenum | 1 | Mo, C |
| ferro-vanadium | Ferro Vanadium | 2 | V, Al, C |
| ferro-titanium | Ferro Titanium | 1 | Ti, Al, C |
| ferro-nickel | Ferro Nickel | 1 | Ni, Fe |
| ferro-niobium | Ferro Niobium | 1 | Nb, C |

### 4.3 ORE & Metals (4 Products)

| Product ID | Name | Variants |
|------------|------|----------|
| iron-ore | Iron Ore | 10 (lumps + fines) |
| manganese-ore | Manganese Ore | 3 grades |
| sponge-iron | Sponge Iron | 1 grade |
| pig-iron | Pig Iron | 3 types |

### 4.4 Steel Products

**Billet/Bloom Dimensions:**
- 100×100 sq.mm
- 125×125 sq.mm
- 160×160 sq.mm
- 160×200 mm
- 160×250 mm

**Carbon/Low Alloy Steel Forms:**
- Round: 20-125 mm
- RCS: 40-125 mm
- Flat: 70×8 - 360×20 mm

**Structural Products:** 23 types

---

## 5. SEO & Metadata Recommendations

### 5.1 Product Page SEO

**Title Format:**
`{Product Name} | Chemical Composition, Grades & Specifications - Bhairav Steel`

**Meta Description:**
`Discover {Product Name} specifications, chemical composition, and grades. Bhairav Steel offers premium quality ferro alloys for industrial steelmaking. Request a quote today.`

**URL Structure:**
`/products/{category}/{product-slug}`

**Example:**
`/products/bulk-ferro-alloys/high-carbon-ferro-manganese`

### 5.2 Structured Data Markup

Implement JSON-LD for products:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "High Carbon Ferro Manganese",
  "description": "...",
  "brand": {
    "@type": "Brand",
    "name": "Bhairav Steel"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Bhairav Steel"
  }
}
```

---

## 6. Technical Implementation Notes

### 6.1 Data Management

**Recommended Approach:**
- Store all product data in JSON files or CMS
- Use template system for consistent rendering
- Implement client-side grade filtering
- Provide CSV/PDF export capabilities

### 6.2 Performance Considerations

- Lazy load product images
- Inline critical CSS
- Preload main product images
- Implement virtual scrolling for large tables
- Use CDN for static assets

### 6.3 Accessibility Requirements

- ARIA labels on tables
- Keyboard navigation for grade selector
- Alt text for all images
- Screen reader friendly data tables
- High contrast mode support

---

## 7. Content Standards

### 7.1 Chemical Composition Display Rules

1. **Precision:** Use consistent decimal places (e.g., 0.05% not .05%)
2. **Format:** Use "%" symbol, not "percent"
3. **Min/Max:** Clearly indicate with "min" or "max"
4. **Ranges:** Use hyphen (e.g., 65-70%)
5. **Elements:** Use standard symbols (Mn, Si, C, not Manganese)

### 7.2 Description Writing Guidelines

**Product Description Structure:**
1. What it is (definition)
2. How it's made (optional)
3. Key characteristics
4. Primary applications

**Length:** 150-300 words for main description

### 7.3 Safety Information Display

- Use yellow/amber background
- Warning icon mandatory
- Bulleted list format
- Prominent placement
- Link to full MSDS

---

## 8. Quality Assurance Checklist

Before publishing each product page:

- [ ] All chemical compositions verified
- [ ] Grade selector functional
- [ ] Tables responsive on mobile
- [ ] All images have alt text
- [ ] Related products linked
- [ ] Download buttons functional
- [ ] Breadcrumb navigation correct
- [ ] Meta title and description set
- [ ] Internal links working
- [ ] No placeholder text remaining
- [ ] Safety information complete
- [ ] Applications list accurate

---

## 9. File Deliverables

| File | Purpose |
|------|---------|
| `bhairav-steel-product-data.json` | Complete product database |
| `bhairav-steel-product-detail-template.html` | Product page template |
| `BHAIRAV-STEEL-WEBSITE-GUIDE.md` | This documentation |
| `steel-grades-reference.json` | Steel grades database |
| `chemical-elements-reference.json` | Element specifications |

---

## 10. Next Steps

1. **Review** this guide with your development team
2. **Select** CMS or static site generator approach
3. **Import** product data from JSON
4. **Customize** template styling to match brand
5. **Create** product pages for each item
6. **Implement** grade selector functionality
7. **Add** quality assurance content
8. **Test** on all devices
9. **Launch** with initial product catalog
10. **Iterate** based on user feedback

---

*Document Version: 1.0*
*Last Updated: March 2026*
*Prepared for: Bhairav Steel*
