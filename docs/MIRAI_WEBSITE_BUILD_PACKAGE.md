# MIRAI CONSULTING — COMPLETE WEBSITE BUILD PACKAGE
# For Claude Code: read this file, then build miraiconsulting.eu step by step.

---

## 0. FIRST TASK: FIX THE LOGO

The logo file (`assets/logo/mirai-logo.png`) is currently a JPEG with a black background.
Before anything else:
1. Remove the black background to make it transparent PNG
2. The text is red (#B22234 range) — keep it, remove everything else
3. Save as `mirai-logo-transparent.png` (high-res, transparent background)
4. Also create a white version (`mirai-logo-white.png`) for use on dark/red backgrounds
5. Create an SVG version if possible by tracing the text paths

The logo text reads: **MIRAI CONSULTING** in Didot Regular, all caps, wide tracking.
- "MIRAI" is full-strength red
- "CONSULTING" is the same red at slightly reduced opacity/lighter tint
- Both words on the same baseline
- Font: Didot (or GFS Didot / Libre Bodoni as web fallback)

Logo lockups needed:
- Primary: red on white/light backgrounds
- Reversed: white on dark/red backgrounds
- Favicon: just the "M" in the same Didot style, red

---

## 1. PROJECT SETUP

**Domain:** miraiconsulting.eu
**Stack:**
```
Framework:    Next.js 14+ (App Router)
Styling:      Tailwind CSS
Language:     TypeScript
i18n:         next-intl
CMS:          MDX for blog posts
Forms:        React Hook Form + server action
Booking:      Calendly embed (placeholder)
Analytics:    Plausible (placeholder)
Deploy:       Vercel
```

**Folder structure:**
```
/app
  /[locale]
    /page.tsx                          → Home
    /for-chinese-organizations/page.tsx
    /for-professionals/page.tsx
    /for-european-firms/page.tsx
    /sectors/[slug]/page.tsx           → 6 sector pages
    /about/page.tsx
    /insights/page.tsx                 → Blog listing
    /insights/[slug]/page.tsx          → Blog post
    /community/page.tsx
    /contact/page.tsx
    /privacy/page.tsx
    /impressum/page.tsx
/messages
  /en.json
  /zh.json
  /pl.json
/components
  /layout    → Header, Footer, LanguageSwitcher
  /home      → Hero, AudienceCards, StatsBar, SectorGrid, HowWeWork, CTA
  /shared    → SectionHeading, Card, Button, ContactForm, SEO
/content
  /sectors   → MDX files
  /insights  → MDX files
/public
  /assets
    /logo    → all logo variants
    /images  → placeholder images
/lib
  /i18n.ts
  /constants.ts
```

---

## 2. DESIGN SYSTEM

### Colors
```css
/* Primary */
--mirai-red: #B22234;
--mirai-red-dark: #8B1A1A;
--mirai-red-light: #B84A5A;
--mirai-red-muted: rgba(178, 34, 52, 0.65);

/* Neutrals */
--mirai-black: #1A1A1A;
--mirai-charcoal: #2D2D2D;
--mirai-gray-dark: #4A4A4A;
--mirai-gray: #6B7080;
--mirai-gray-light: #9CA0A8;
--mirai-gray-lighter: #E8E9EC;
--mirai-off-white: #F7F7F5;
--mirai-white: #FFFFFF;

/* Accents (used sparingly) */
--mirai-gold: #C7923E;
--mirai-navy: #1B2A4A;
```

### Typography
```css
/* Display / Logo / Headings */
font-family: 'Libre Bodoni', 'GFS Didot', 'Playfair Display', Georgia, serif;

/* Body text — Latin */
font-family: 'Source Serif 4', 'EB Garamond', Georgia, serif;

/* Body text — Sans alternative for UI elements */
font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif;

/* Chinese text */
font-family: 'Noto Serif SC', 'Source Han Serif SC', 'SimSun', serif;

/* Monospace (if needed) */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

**Type scale:**
- Hero headline: 56px / 3.5rem, serif, 400 weight
- Section headline: 36px / 2.25rem, serif, 400 weight
- Subsection: 24px / 1.5rem, serif, 400 weight
- Body: 17px / 1.0625rem, line-height 1.75
- Small / captions: 14px / 0.875rem
- Chinese body needs line-height 1.9–2.0

### Spacing & Layout
- Max content width: 1200px
- Section padding: 96px vertical (desktop), 64px (mobile)
- Content padding: 24px horizontal (mobile), 48px (tablet), 0 (desktop centered)
- Card border-radius: 4px (subtle, not rounded — this is a serious firm)
- Borders: 0.5px, #E8E9EC

### Design tone
- **Editorial, refined, quiet confidence**
- Generous whitespace — let the content breathe
- Serif-forward typography (this is NOT a tech startup)
- Minimal decoration — no illustrations, no abstract blobs
- Photography direction (for future): muted, desaturated, documentary-style
- Red is used as an accent, never as a background (except the occasional CTA button)

---

## 3. TRILINGUAL SETUP

### Languages
- **English (en)** — default, bridge language
- **Chinese (zh)** — primary for Segments A & B
- **Polish (pl)** — primary for Segment C

### URL structure
```
/en/...
/zh/...
/pl/...
```

### Language switcher
Header, right side: `EN | 中文 | PL`

### Key principle
Each language version is **culturally adapted**, not machine-translated.
- Chinese version emphasizes: 可信赖 (trustworthy), 一站式 (one-stop), 本地专业 (local expertise)
- Polish version emphasizes: practical business value, compliance, opportunity
- English version: clean, international, expertise-forward

---

## 4. PAGE-BY-PAGE CONTENT

---

### 4.1 HOME PAGE (`/`)

**Hero:**
```
EN headline: "Trusted coordination for the China–Northern Europe corridor"
EN subhead: "Mirai Consulting helps organizations and professionals operate across 
the China ↔ Poland ↔ Northern Europe corridor through trilingual coordination, 
partner orchestration, and cross-border execution."

ZH headline: "中国与北欧商业走廊的可信协调伙伴"
ZH subhead: "未来咨询帮助企业和专业人士在中国↔波兰↔北欧走廊中实现市场进入、
合作伙伴对接、代表团接待和跨境执行。"

PL headline: "Zaufana koordynacja na korytarzu Chiny–Europa Północna"
PL subhead: "Mirai Consulting pomaga organizacjom i specjalistom działać na korytarzu 
Chiny ↔ Polska ↔ Europa Północna poprzez trójjęzyczną koordynację, orkiestrację 
partnerów i realizację transgraniczną."
```

**CTAs:** "Book a consultation" + "Explore our services"

**Three audience pathway cards:**

Card 1 — For Chinese organizations:
```
EN: "Entering Poland, Estonia, or the Nordics? We coordinate your market entry end-to-end."
ZH: "进入波兰、爱沙尼亚或北欧？我们为您提供端到端的市场进入协调服务。"
PL: "Chińskie organizacje wchodzące na rynki Polski, Estonii i krajów nordyckich."
```

Card 2 — For Chinese professionals:
```
EN: "Living in Northern Europe? We help you navigate integration, career, and community."
ZH: "在北欧生活和工作？我们帮助您融入当地、发展事业、连接社区。"
PL: "Chińscy specjaliści mieszkający w Polsce i Europie Północnej."
```

Card 3 — For European firms:
```
EN: "Looking toward China? We provide cultural intelligence, matchmaking, and delegation support."
ZH: "面向中国市场？我们提供文化智能、商业配对和代表团支持服务。"
PL: "Szukasz dostępu do rynku chińskiego? Zapewniamy doradztwo kulturowe, kojarzenie partnerów i wsparcie delegacji."
```

**Stats bar:**
```
$44.95bn — Bilateral trade (2024)
3,000+ — Chinese companies in Poland
6 — Corridor markets
38 — Sister-city partnerships
```

**Sector preview (6 cards):**
```
1. Logistics & rail
2. EV, batteries & green industry
3. Agri-food & market access
4. Tourism, culture & delegations
5. Education & training
6. Banking & institutional
```
Each links to its sector page.

**How we work section:**
```
EN heading: "Coordination, not just consulting"
EN body: "We own the client relationship and orchestrate vetted local specialists — 
lawyers, tax advisors, immigration experts, recruiters — so nothing gets lost in 
translation. Literally or culturally."

ZH heading: "协调，而不仅仅是咨询"
ZH body: "我们负责客户关系管理，协调经过审核的本地专业人士——律师、税务顾问、
移民专家、招聘顾问——确保在语言和文化上都不会出现任何偏差。"

PL heading: "Koordynacja, nie tylko konsulting"
PL body: "Zarządzamy relacją z klientem i koordynujemy zweryfikowanych lokalnych 
specjalistów — prawników, doradców podatkowych, ekspertów imigracyjnych — aby nic 
nie zginęło w tłumaczeniu. Dosłownie i w przenośni."
```

Visual: flow diagram → Client → Mirai (coordination + cultural bridge) → Partner specialists

**Final CTA:**
```
EN: "Ready to navigate the corridor?"
ZH: "准备好了吗？"
PL: "Gotowy na współpracę?"
```
+ "Book a consultation" button

---

### 4.2 FOR CHINESE ORGANIZATIONS (`/for-chinese-organizations`)

```
EN headline: "Market entry, coordinated end-to-end"
EN subhead: "From entity setup to your first hire, we manage the entire process 
of entering Poland, Estonia, and the Nordics — in your language."

ZH headline: "端到端的市场进入协调"
ZH subhead: "从公司注册到第一次招聘，我们用您的语言管理进入波兰、爱沙尼亚和北欧的全过程。"
```

**Pain points we solve:**
```
EN:
- Language barrier with local legal, tax, and banking systems
- Difficulty opening corporate bank accounts
- Navigating FDI screening and entity structuring without Chinese-speaking support
- Work permits and immigration for your team
- Cultural mismatch in negotiations with European counterparts

ZH:
- 与当地法律、税务和银行系统的语言障碍
- 企业银行账户开设困难
- 在没有中文支持的情况下处理外商投资审查和公司架构
- 团队的工作许可和移民事务
- 与欧洲商业伙伴谈判中的文化差异
```

**Services list:**
```
1. Market entry coordination — end-to-end project management
2. Entity setup — Sp. z o.o., branch office, representative office
3. Banking & finance — corporate account opening navigation
4. Immigration — work permits, Temporary Residence Cards, EU Blue Card
5. Soft-landing & relocation — housing, schools, healthcare, daily life
6. Ongoing advisory — operational support, retainer relationships
```

**Sector focus callout:** links to the 6 vertical pages

**Partner network visual:** "We coordinate: law firms, tax advisors, immigration specialists, recruiters, real estate agents, banking contacts"

**CTA:** "Book a consultation" (with Calendly embed)

---

### 4.3 FOR CHINESE PROFESSIONALS (`/for-professionals`)

```
EN headline: "Your partner for life and work in Northern Europe"
ZH headline: "您在北欧生活和工作的合作伙伴"
```

**Services:**
```
1. Immigration — TRC renewals, employer changes, student-to-work transition, Blue Card
2. Career development — credential recognition, networking, job placement
3. Tax & financial planning — PIT filing, double taxation treaty benefits
4. Daily life — healthcare, housing, banking, insurance, driver's license
5. Community — networking events, WeChat group, professional association
6. Business incubation — starting a company, JDG vs. Sp. z o.o. guidance
```

**Community section:**
```
EN: "Join the Mirai professional network — the premier community for Chinese 
professionals in Poland and Northern Europe."
ZH: "加入未来专业网络——波兰和北欧地区最优质的华人专业社区。"
```
- Membership info
- Events calendar (placeholder)
- WeChat QR code (placeholder)

---

### 4.4 FOR EUROPEAN FIRMS (`/for-european-firms`)

```
EN headline: "China access, locally grounded"
PL headline: "Dostęp do Chin, lokalnie zakorzeniony"
```

**Services:**
```
1. China market advisory — regulatory landscape, entity options, market sizing
2. Cultural intelligence — workshops, negotiation preparation, business culture briefings
3. Partner identification — supplier vetting, distributor matching, due diligence
4. Delegation programs — hosting Chinese delegations, B2B matchmaking, site visits
5. Export support — product registration, labeling, e-commerce (Tmall, JD, XHS)
6. Talent sourcing — bilingual recruitment, Chinese-speaking professionals
```

---

### 4.5 SECTOR PAGES (6 pages, shared template)

**Template structure:**
1. Hero with sector name + one-line positioning
2. Why this sector matters (2-3 paragraphs)
3. What Mirai offers (4-6 services)
4. Key data points
5. CTA

**Sector 1: Logistics, rail & freight** (`/sectors/logistics-rail`)
```
EN headline: "Logistics, rail & freight"
EN positioning: "Poland sits at the heart of Eurasian transport corridors"

Body: Poland functions as one of Europe's most important transit countries, with key 
intermodal nodes at Łódź, Sławków, Poznań/CLIP, and Gdańsk. The China-Europe Railway 
Express connects Chinese manufacturing to European distribution, and Poland is a 
critical gateway. The 2025 Intergovernmental Committee Joint Conclusions highlight 
railway, maritime, air transport, and logistics chain cooperation.

Services:
- Logistics ecosystem briefings
- Partner and operator discovery
- Corridor intelligence and site selection
- Delegation hosting for logistics clients
- Trilingual support across transport stakeholders
```

**Sector 2: EV, batteries & green industry** (`/sectors/ev-batteries`)
```
EN headline: "EV, batteries & green industry"
EN positioning: "Europe's largest lithium-ion battery exporter"

Body: Poland is building a full domestic electromobility value chain. The 2024–2027 
Action Plan highlights green development and EV cooperation. Major Chinese investments 
include Ronbay Technology's cathode materials plant in Konin. The 2025 Joint 
Conclusions explicitly recognize Poland's battery manufacturing ambition.

Services:
- Supplier and investor introductions
- Local ecosystem mapping
- Translation and negotiation support for industrial deals
- Public and private stakeholder coordination
- Regulatory navigation for green energy investments
```

**Sector 3: Agri-food & market access** (`/sectors/agri-food`)
```
EN headline: "Agri-food & market access"
EN positioning: "Opening China's market to European producers"

Body: The 2025 Joint Conclusions specifically address HPAI zoning implementation, 
lifting animal epidemic bans, and promoting Polish agricultural products' entry into 
China. Bilateral efforts aim to reduce trade imbalance by expanding two-way agri-food 
trade.

Services:
- Agri-food export coordination (Europe → China)
- China market partner search for European producers
- Trade compliance and labeling support
- Delegation hosting for food industry clients
```

**Sector 4: Tourism, culture & delegations** (`/sectors/tourism-delegations`)
```
EN headline: "Tourism, culture & delegations"
EN positioning: "People-to-people exchange is a bilateral priority"

Body: People-to-people exchange is one of four headline pillars in the 2024–2027 
Action Plan. Visa-free access for Polish citizens, 38 sister-city pairs, and growing 
tourism cooperation create a foundation for cultural and business exchange. 

Services:
- Inbound Chinese delegation programs
- Outbound European delegations to China
- Protocol, itinerary design, and stakeholder mapping
- City-to-city and chamber-to-chamber visit facilitation
- Cultural interpretation and event production
```

**Sector 5: Education & training** (`/sectors/education-training`)
```
EN headline: "Education & training"
EN positioning: "Bridging educational systems across the corridor"

Body: Poland has over 2,000 vocational schools with 800,000+ students. China–Poland 
VET cooperation includes teacher exchange, joint programs, and school-enterprise links. 
Chinese language education in Poland exists but remains structurally limited, indicating 
real demand for intercultural and language services.

Services:
- Intercultural and business training delivery
- Education delegation programs
- University and school partnership facilitation
- Onboarding workshops for Chinese professionals
- Chinese language program advisory
```

**Sector 6: Banking & institutional** (`/sectors/banking-institutional`)
```
EN headline: "Banking & institutional"
EN positioning: "Warsaw's corridor-aware financial infrastructure"

Body: Bank of China and ICBC maintain branches in Warsaw. EXIM Bank presence supports 
project financing. This institutional banking infrastructure gives Chinese investors 
confidence that Warsaw is corridor-ready, but navigating it requires local knowledge.

Services:
- Banking introductions for Chinese investors
- Treasury and payments ecosystem guidance
- Institutional soft-landing
- Financial infrastructure orientation
```

---

### 4.6 ABOUT (`/about`)

```
EN headline: "Built from both sides of the corridor"

About section:
"Mirai Consulting was founded by Mateusz Więckowski and Zekai Xu — a Polish-Chinese 
partnership with lived experience on both sides of the corridor. Matt studied at Fudan 
University and worked in Shanghai before returning to Warsaw. Zekai built businesses 
across China and Estonia before recognizing the same gap: organizations crossing between 
China and Northern Europe need more than advice. They need someone who coordinates, 
translates — not just words, but systems and cultures — and makes things actually happen."

Mission:
"We believe cross-border business works best when both sides truly understand each 
other — not just the words, but the systems, cultures, and unspoken expectations."
```

**Team cards:**
```
Mateusz Więckowski (Matt)
Co-founder
Polish national | Warsaw-based
Fudan University, Shanghai
[Photo placeholder — use initials "MW" avatar]

Zekai Xu
Co-founder  
Chinese national | Estonia & China
Cross-border business development
[Photo placeholder — use initials "ZX" avatar]
```

**Corridor map:** visual showing China ↔ Poland, Estonia, Finland, Sweden, Denmark, Norway

**Operating principles:**
```
1. Commercially useful, compliance-oriented
2. Trilingual in everything we do
3. Local depth, corridor-wide perspective
4. Trusted coordination — we make things work, not just advise
```

---

### 4.7 INSIGHTS / BLOG (`/insights`)

Blog listing with category filters:
- Market entry
- Immigration & visas  
- Tax & compliance
- Culture & communication
- Sector updates
- Community

**5 placeholder posts (title + excerpt only):**

```
1. "10 things Chinese companies need to know about opening a bank account in Poland"
   Excerpt: "Corporate banking in Poland is notoriously difficult for Chinese-owned 
   entities. Here's what you need to prepare."
   Category: Market entry

2. "Poland's 2025 immigration reform: what changed for Chinese professionals"
   Excerpt: "The new MOS digital platform, updated work permit rules, and what 
   they mean for your residence status."
   Category: Immigration & visas

3. "The EU Blue Card in Poland: a practical guide"
   Excerpt: "Salary thresholds, application process, and the new right to register 
   a business — everything you need to know."
   Category: Immigration & visas

4. "Understanding Polish business culture: a guide for Chinese managers"
   Excerpt: "Formality, contractual precision, and established procedures — how 
   Polish business norms differ from Chinese relationship-first approaches."
   Category: Culture & communication

5. "EV supply chain in Poland: opportunities for Chinese manufacturers"
   Excerpt: "Poland is Europe's largest lithium-ion battery exporter. Here's where 
   Chinese suppliers fit in the value chain."
   Category: Sector updates
```

---

### 4.8 COMMUNITY (`/community`)

```
EN headline: "The Mirai professional network"
ZH headline: "未来专业网络"

EN body: "The premier community for Chinese professionals and businesses operating 
in Poland and Northern Europe. Connect, learn, and grow with peers who understand 
the corridor."
```

**Membership tiers:**
```
Individual (€200/year):
- Quarterly networking events
- WeChat group access
- Job board access
- Newsletter (Chinese + English)
- Priority consultation booking

Corporate (€1,000–€3,000/year):
- All individual benefits
- Priority introductions
- Brand visibility at events
- Event sponsorship opportunities
- Dedicated account coordination
```

**Events section:** placeholder calendar with "Coming soon" events
**WeChat:** QR code placeholder
**Newsletter signup:** Chinese + English options

---

### 4.9 CONTACT (`/contact`)

```
EN headline: "Start the conversation"
ZH headline: "开始对话"
PL headline: "Rozpocznij rozmowę"
```

**Contact form fields:**
- Name
- Email
- Company (optional)
- "I am a..." dropdown: Chinese organization / Chinese professional / European firm / Other
- Message
- Submit button

**Other contact info:**
- Email: hello@miraiconsulting.eu
- WeChat: [QR code placeholder]
- LinkedIn: [placeholder link]
- Location: Warsaw, Poland
- Calendly embed: placeholder for consultation booking

---

### 4.10 LEGAL PAGES

**Privacy Policy** (`/privacy`) — GDPR-compliant, trilingual, standard template
**Impressum** (`/impressum`) — required for .eu:
```
MiraiWorks OÜ
Registry code: [placeholder]
Registered address: [Estonian address placeholder]
Operating address: Warsaw, Poland
Email: hello@miraiconsulting.eu
Managing director: Mateusz Więckowski
```

---

## 5. SEO

### Meta titles (per page, per language)
```
Home EN: "Mirai Consulting — China–Northern Europe corridor advisory"
Home ZH: "未来咨询 — 中国-北欧商业走廊咨询服务"
Home PL: "Mirai Consulting — Doradztwo na korytarzu Chiny–Europa Północna"
```

### Target keywords
```
EN: "China Poland consulting", "Chinese business services Warsaw", 
"China market entry Northern Europe", "China Europe advisory"

ZH: "波兰公司注册", "波兰签证", "波兰华人服务", "中国企业进入波兰", 
"波兰华人社区", "欧洲市场进入"

PL: "doradztwo chińskie Warszawa", "chiński rynek doradztwo", 
"inwestycje chińskie w Polsce", "tłumacz chiński Warszawa"
```

### OpenGraph + WeChat sharing
- og:title, og:description, og:image per page per language
- WeChat-compatible sharing meta tags

### Structured data
- Organization schema
- LocalBusiness schema
- BreadcrumbList per page

---

## 6. TECHNICAL NOTES

### China accessibility
- Host Chinese webfonts locally (Noto Serif SC) — do NOT rely on Google Fonts CDN (blocked in China)
- Minimize external dependencies that are blocked behind the Great Firewall
- WeChat in-app browser compatibility: test responsive layout

### GDPR
- Cookie consent banner (trilingual)
- Privacy policy (trilingual)
- Contact form: consent checkbox

### Performance
- Lazy-load images
- Optimize fonts (subset Latin + Chinese characters separately)
- Target: <3s LCP on mobile

---

## 7. BUILD ORDER

1. Project scaffold (Next.js + Tailwind + i18n + folder structure)
2. Design system (colors, typography, spacing as Tailwind config)
3. Layout components (Header with logo + language switcher, Footer)
4. Home page (all sections, EN first, then ZH + PL)
5. Contact page (form + Calendly placeholder)
6. 3 segment landing pages
7. About page
8. 6 sector pages (shared template)
9. Insights listing + post template + 5 placeholder posts
10. Community page
11. Legal pages (privacy, impressum)
12. SEO (meta tags, structured data, sitemap)
13. Final review + responsive testing

---

## 8. CONTENT TONE REMINDERS

**NEVER:**
- Use Belt and Road Initiative (BRI) branding or imagery
- Use political language, flag imagery, or nationalist framing
- Use "strategic partnership" carelessly (political connotations)
- Frame Mirai as representing Chinese government interests
- Use clichéd "bridge between East and West" language
- Use red + gold Chinese stereotypes in design

**ALWAYS:**
- Frame as commercial value for both sides
- Mention compliance and transparency naturally
- Use "corridor" (neutral, geographic) over "bridge" (overused)
- Keep Polish-facing content focused on business opportunity
- Keep Chinese-facing content focused on practical support and trust
- Maintain editorial, refined tone across all languages
