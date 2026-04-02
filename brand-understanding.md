# Discount Clear Pack — Brand Understanding

## Company Overview
- **Legal name:** Discount Clear Pack (DCP)
- **Location:** 519 Vista Blvd, Sparks NV 89434
- **Phone:** (775) 737-4090 ← USE THIS. The 1-800 number is no longer active.
- **Email placeholder:** info@discountclearpack.com (confirm with client)
- **Website goal:** B2B lead generation, catalog display, credibility signal
- **Revenue scale:** 8-figure annual revenue
- **In business:** 10+ years
- **Slogan:** "Build Your Brand with Custom Packaging!"
- **Industry:** B2B custom clear packaging / food-grade containers

## Target Customer
- Food service operators: sushi restaurants, delis, bakeries, dispensaries/herb retailers
- Private label brands needing custom-printed containers
- Regional distributors and wholesalers
- Grocery / prepared food sections
- Decision-makers: purchasing managers, ops directors, small business owners

## Products (7 Categories)
1. **Sushi Containers** — trays, dome lids, 2-tier boxes, platter inserts
2. **Herb Containers** — round 4oz/8oz, square variants
3. **Round Clamshells** — 5", 7", 9"
4. **Rectangle Clamshells** — small, medium, large, XL
5. **Deli Tubs & Lids** — 8oz, 16oz, 32oz
6. **Bakery Containers** — quarter-sheet, half-sheet, cupcake clamshell
7. **Trays** — produce, flat display, deep compartment

## Services
- **Custom Branding / Private Label** — client logo + colors printed on every container
- **Wholesale / Bulk Pricing** — direct factory pricing, case and pallet quantities
- **Samples Program** — physical samples available before bulk order commitment
- **Full Catalog Availability** — 7 categories, 100s of SKUs from one supplier
- **Direct Shipping** — ships to facility, warehouse, or distribution center
- **B2B Account Support** — recurring buyer pricing tiers, reorder management

## Brand Voice
- Professional, direct, B2B-confident
- Not salesy — authoritative supplier tone
- "Partner" framing, not vendor
- Proof through scale: 8-figure, decade+ in business
- Tiger Packaging reference: "We're not just in the packaging business, we're in the experience business."
- Evo-Pak reference: anti-corporate-machine, lean, trusted relationships

## Visual Identity
- **Logo:** Corporate navy rectangular border, bold DCP initials, "DISCOUNT CLEAR PACK" below
- **Color feel:** Clear/glass, premium, trustworthy
- **Primary:** Navy #0D1E3D (anchored by logo)
- **Secondary:** Ice blue #D4E8F7 / #5B9EC9 (evokes clarity/transparency of product)
- **Accent:** Gold #E8922A (CTAs, section dividers — warm contrast)
- **Typography:** Barlow Condensed (headings) + Inter (body)
- No stock photo clichés, no default Tailwind colors

## Design References
- **Tiger Packaging** (tigerpackaging.com): generous whitespace, founder story on About, section label → H2 → subtext pattern, white-dominant backgrounds, multiple contact methods
- **Evo-Pak** (evo-pak.com): modern animation system, Evo-Pak-style About (short, story-driven), sophisticated component architecture, accessibility-forward

## Page List
1. `index.html` — Home
2. `services.html` — Services
3. `products.html` — Products (with JS category filter, 22 SKUs)
4. `blog.html` — Blog index + 3 posts
5. `about.html` — About (Tiger/Evo-Pak style + sustainability section)
6. `contact.html` — Contact (short, direct form)

## Content Notes
- **1-800 line is dead** — note on contact page: "Looking for the 1-800 number? That line is no longer active. Please call our direct line above."
- **Sustainability** — covered as a section in About page, not a standalone page. Focus on recyclability of clear plastics, responsible sourcing, food-safe materials.
- **Contact form** — n8n webhook (POST, same pattern as absolute-drain). Placeholder URL until client provides.
- **Blog topics** (pre-written, DCP editorial tone):
  1. "How to Choose the Right Clamshell Container for Your Food Product"
  2. "Clear Packaging Is Winning the Shelf War: 2026 Food Trend Report"
  3. "The ROI of Custom-Branded Packaging for Small Food Businesses"

## Serve & Test
```bash
node serve.mjs clients/Discount-Clear-Pack
# → http://localhost:3000
node screenshot.mjs http://localhost:3000 [label]
# → saves to ./temporary screenshots/screenshot-N.png
```
