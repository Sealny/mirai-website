# MIRAI CONSULTING — MULTILINGUAL CONTENT ADDENDUM
# Add this file alongside MIRAI_WEBSITE_BUILD_PACKAGE.md
# This overrides section 3 (Trilingual Setup) and extends all content to 9 languages.

---

## LANGUAGE CONFIGURATION

### Full list (9 languages)
```
Code  | Language    | Primary audience              | URL prefix
------|-------------|-------------------------------|----------
en    | English     | International / bridge        | /en/
zh    | Chinese     | Chinese orgs + professionals  | /zh/
pl    | Polish      | Polish firms + institutions   | /pl/
de    | German      | German/Austrian/Swiss firms    | /de/
no    | Norwegian   | Norwegian firms               | /no/
sv    | Swedish     | Swedish firms                 | /sv/
fi    | Finnish     | Finnish firms                 | /fi/
da    | Danish      | Danish firms                  | /da/
et    | Estonian    | Estonian firms + local ops     | /et/
```

### Default: English
### Language switcher: `EN | 中文 | PL | DE | NO | SV | FI | DA | ET`

### i18n architecture note for Claude Code:
- Use next-intl with 9 locale JSON files in /messages/
- Nordic languages (NO, SV, FI, DA) share the same page structure but culturally adapted copy
- German gets its own register (formal, precise)
- Estonian gets its own register (as our legal home jurisdiction)
- All languages get full content on: Home, About, Contact, Sector pages
- Segment pages: "For Chinese organizations" and "For professionals" are primarily EN + ZH (other languages get a shorter version pointing to the EN/ZH detail)
- "For European firms" is the main page for all European languages

---

## HOMEPAGE CONTENT — ALL 9 LANGUAGES

### Hero headline
```
en: "Trusted coordination for the China–Northern Europe corridor"
zh: "中国与北欧商业走廊的可信协调伙伴"
pl: "Zaufana koordynacja na korytarzu Chiny–Europa Północna"
de: "Vertrauenswürdige Koordination für den Korridor China–Nordeuropa"
no: "Pålitelig koordinering for korridoren Kina–Nord-Europa"
sv: "Pålitlig koordinering för korridoren Kina–Nordeuropa"
fi: "Luotettavaa koordinointia Kiina–Pohjois-Eurooppa-käytävälle"
da: "Pålidelig koordinering for korridoren Kina–Nordeuropa"
et: "Usaldusväärne koordineerimine Hiina–Põhja-Euroopa koridoris"
```

### Hero subhead
```
en: "Mirai Consulting helps organizations and professionals operate across the China ↔ Poland ↔ Northern Europe corridor through trilingual coordination, partner orchestration, and cross-border execution."

zh: "未来咨询帮助企业和专业人士在中国↔波兰↔北欧走廊中实现市场进入、合作伙伴对接、代表团接待和跨境执行。"

pl: "Mirai Consulting pomaga organizacjom i specjalistom działać na korytarzu Chiny ↔ Polska ↔ Europa Północna poprzez wielojęzyczną koordynację, orkiestrację partnerów i realizację transgraniczną."

de: "Mirai Consulting unterstützt Unternehmen und Fachkräfte im Korridor China ↔ Polen ↔ Nordeuropa durch mehrsprachige Koordination, Partnervermittlung und grenzüberschreitende Umsetzung."

no: "Mirai Consulting hjelper organisasjoner og fagfolk med å operere på tvers av korridoren Kina ↔ Polen ↔ Nord-Europa gjennom flerspråklig koordinering, partnerorkestrering og grenseoverskridende gjennomføring."

sv: "Mirai Consulting hjälper organisationer och yrkesverksamma att verka längs korridoren Kina ↔ Polen ↔ Nordeuropa genom flerspråkig koordinering, partnerorkestrering och gränsöverskridande genomförande."

fi: "Mirai Consulting auttaa organisaatioita ja ammattilaisia toimimaan Kiina ↔ Puola ↔ Pohjois-Eurooppa-käytävällä monikielisen koordinoinnin, kumppaniverkoston ja rajat ylittävän toteutuksen kautta."

da: "Mirai Consulting hjælper organisationer og fagfolk med at operere på tværs af korridoren Kina ↔ Polen ↔ Nordeuropa gennem flersproget koordinering, partnerorkestrering og grænseoverskridende eksekvering."

et: "Mirai Consulting aitab organisatsioonidel ja spetsialistidel tegutseda Hiina ↔ Poola ↔ Põhja-Euroopa koridoris mitmekeelse koordineerimise, partnerite orkestreerimise ja piiriülese teostamise kaudu."
```

### Audience pathway cards

**Card 1 — For Chinese organizations:**
```
en: "Entering Poland, Estonia, or the Nordics? We coordinate your market entry end-to-end."
zh: "进入波兰、爱沙尼亚或北欧？我们为您提供端到端的市场进入协调服务。"
pl: "Chińskie organizacje wchodzące na rynki Polski, Estonii i krajów nordyckich."
de: "Chinesische Unternehmen, die nach Polen, Estland oder in die nordischen Länder eintreten."
no: "Kinesiske organisasjoner som etablerer seg i Polen, Estland eller Norden."
sv: "Kinesiska organisationer som etablerar sig i Polen, Estland eller Norden."
fi: "Kiinalaiset organisaatiot, jotka tulevat Puolaan, Viroon tai Pohjoismaihin."
da: "Kinesiske organisationer, der etablerer sig i Polen, Estland eller Norden."
et: "Hiina organisatsioonid, kes sisenevad Poola, Eesti või Põhjamaade turule."
```

**Card 2 — For Chinese professionals:**
```
en: "Living in Northern Europe? We help you navigate integration, career, and community."
zh: "在北欧生活和工作？我们帮助您融入当地、发展事业、连接社区。"
pl: "Chińscy specjaliści mieszkający w Polsce i Europie Północnej."
de: "Chinesische Fachkräfte in Polen und Nordeuropa."
no: "Kinesiske fagfolk bosatt i Polen og Nord-Europa."
sv: "Kinesiska yrkesverksamma i Polen och Nordeuropa."
fi: "Kiinalaiset ammattilaiset Puolassa ja Pohjois-Euroopassa."
da: "Kinesiske fagfolk bosat i Polen og Nordeuropa."
et: "Hiina spetsialistid, kes elavad Poolas ja Põhja-Euroopas."
```

**Card 3 — For European firms:**
```
en: "Looking toward China? We provide cultural intelligence, matchmaking, and delegation support."
zh: "面向中国市场？我们提供文化智能、商业配对和代表团支持服务。"
pl: "Szukasz dostępu do rynku chińskiego? Zapewniamy doradztwo kulturowe, kojarzenie partnerów i wsparcie delegacji."
de: "Sie suchen Zugang zum chinesischen Markt? Wir bieten Kulturberatung, Partnervermittlung und Delegationsunterstützung."
no: "Ser du mot Kina? Vi tilbyr kulturell rådgivning, partnertilknytning og delegasjonsstøtte."
sv: "Ser du mot Kina? Vi erbjuder kulturell rådgivning, partnerkoppling och delegationsstöd."
fi: "Katsotko kohti Kiinaa? Tarjoamme kulttuurineuvontaa, kumppanien yhdistämistä ja delegaatiotukea."
da: "Ser du mod Kina? Vi tilbyder kulturel rådgivning, partnertilknytning og delegationsstøtte."
et: "Vaatate Hiina suunas? Pakume kultuurinõustamist, partnerite leidmist ja delegatsioonide tuge."
```

### Stats bar (same numbers, translated labels)
```
en: "$44.95bn bilateral trade (2024)" | "3,000+ Chinese companies in Poland" | "6 corridor markets" | "38 sister-city partnerships"

zh: "449.5亿美元双边贸易（2024）" | "3,000+在波兰注册的中国企业" | "6个走廊市场" | "38对友好城市"

pl: "44,95 mld USD handlu bilateralnego (2024)" | "3 000+ chińskich firm w Polsce" | "6 rynków korytarza" | "38 partnerstw miast"

de: "44,95 Mrd. USD bilateraler Handel (2024)" | "3.000+ chinesische Unternehmen in Polen" | "6 Korridormärkte" | "38 Städtepartnerschaften"

no: "44,95 mrd. USD bilateral handel (2024)" | "3 000+ kinesiske selskaper i Polen" | "6 korridormarkeder" | "38 vennskapsbyavtaler"

sv: "44,95 mdr USD bilateral handel (2024)" | "3 000+ kinesiska företag i Polen" | "6 korridormarknader" | "38 vänortsavtal"

fi: "44,95 mrd. USD kahdenvälinen kauppa (2024)" | "3 000+ kiinalaista yritystä Puolassa" | "6 käytävämarkkinaa" | "38 ystävyyskaupunkiparia"

da: "44,95 mia. USD bilateral handel (2024)" | "3.000+ kinesiske virksomheder i Polen" | "6 korridormarkeder" | "38 venskabsbyaftaler"

et: "44,95 mlrd USD kahepoolne kaubandus (2024)" | "3 000+ Hiina ettevõtet Poolas" | "6 koridoriturgu" | "38 sõpruslinna partnerlust"
```

### "How we work" section
```
en heading: "Coordination, not just consulting"
zh heading: "协调，而不仅仅是咨询"
pl heading: "Koordynacja, nie tylko konsulting"
de heading: "Koordination, nicht nur Beratung"
no heading: "Koordinering, ikke bare rådgivning"
sv heading: "Koordinering, inte bara rådgivning"
fi heading: "Koordinointia, ei pelkkää konsultointia"
da heading: "Koordinering, ikke bare rådgivning"
et heading: "Koordineerimine, mitte ainult nõustamine"
```

```
en body: "We own the client relationship and orchestrate vetted local specialists — lawyers, tax advisors, immigration experts, recruiters — so nothing gets lost in translation. Literally or culturally."

zh body: "我们负责客户关系管理，协调经过审核的本地专业人士——律师、税务顾问、移民专家、招聘顾问——确保在语言和文化上都不会出现任何偏差。"

pl body: "Zarządzamy relacją z klientem i koordynujemy zweryfikowanych lokalnych specjalistów — prawników, doradców podatkowych, ekspertów imigracyjnych — aby nic nie zginęło w tłumaczeniu. Dosłownie i w przenośni."

de body: "Wir führen die Kundenbeziehung und koordinieren geprüfte lokale Spezialisten — Anwälte, Steuerberater, Einwanderungsexperten, Personalvermittler — damit nichts in der Übersetzung verloren geht. Wörtlich und kulturell."

no body: "Vi eier kunderelasjonen og koordinerer kvalitetssikrede lokale spesialister — advokater, skatterådgivere, immigrasjonseksperter, rekrutterere — slik at ingenting går tapt i oversettelsen. Bokstavelig eller kulturelt."

sv body: "Vi äger kundrelationen och orkestrerar granskade lokala specialister — advokater, skatterådgivare, immigrationsexperter, rekryterare — så att inget går förlorat i översättningen. Bokstavligen eller kulturellt."

fi body: "Hallinnoimme asiakassuhdetta ja koordinoimme tarkistettuja paikallisia asiantuntijoita — lakimiehiä, veroneuvojia, maahanmuuttoasiantuntijoita, rekrytoijia — jotta mikään ei katoa käännöksessä. Kirjaimellisesti tai kulttuurisesti."

da body: "Vi ejer kunderelationen og orkestrerer kvalitetssikrede lokale specialister — advokater, skatterådgivere, immigrationseksperter, rekrutterere — så intet går tabt i oversættelsen. Bogstaveligt eller kulturelt."

et body: "Meie haldame kliendisuhet ja koordineerime kontrollitud kohalikke spetsialiste — advokaate, maksunõustajaid, immigratsioonieksperte, värbajaid — et midagi ei läheks tõlkes kaduma. Otseses ega kultuurilises mõttes."
```

### Final CTA
```
en: "Ready to navigate the corridor?" → "Book a consultation"
zh: "准备好了吗？" → "预约咨询"
pl: "Gotowy na współpracę?" → "Umów konsultację"
de: "Bereit für den Korridor?" → "Beratung buchen"
no: "Klar for korridoren?" → "Bestill en konsultasjon"
sv: "Redo för korridoren?" → "Boka en konsultation"
fi: "Valmis käytävälle?" → "Varaa konsultaatio"
da: "Klar til korridoren?" → "Book en konsultation"
et: "Valmis koridoriks?" → "Broneeri konsultatsioon"
```

---

## "FOR EUROPEAN FIRMS" PAGE — ALL EUROPEAN LANGUAGES

This is the key page for NO, SV, FI, DA, DE, ET audiences.

### Headline
```
en: "China access, locally grounded"
pl: "Dostęp do Chin, lokalnie zakorzeniony"
de: "China-Zugang, lokal verankert"
no: "Tilgang til Kina, lokalt forankret"
sv: "Tillgång till Kina, lokalt förankrat"
fi: "Pääsy Kiinaan, paikallisesti juurtuneena"
da: "Adgang til Kina, lokalt forankret"
et: "Ligipääs Hiinale, kohalikult juurdunud"
```

### Subhead
```
en: "We help Polish, Estonian, and Nordic companies access Chinese markets, partners, and talent through cultural intelligence and trusted coordination."

pl: "Pomagamy polskim, estońskim i nordyckim firmom uzyskać dostęp do chińskich rynków, partnerów i talentów poprzez inteligencję kulturową i zaufaną koordynację."

de: "Wir helfen polnischen, estnischen und nordischen Unternehmen beim Zugang zu chinesischen Märkten, Partnern und Talenten durch kulturelle Intelligenz und vertrauenswürdige Koordination."

no: "Vi hjelper polske, estiske og nordiske selskaper med tilgang til kinesiske markeder, partnere og talenter gjennom kulturell etterretning og pålitelig koordinering."

sv: "Vi hjälper polska, estniska och nordiska företag att nå kinesiska marknader, partners och talanger genom kulturell intelligens och pålitlig koordinering."

fi: "Autamme puolalaisia, virolaisia ja pohjoismaisia yrityksiä pääsemään Kiinan markkinoille, löytämään kumppaneita ja osaajia kulttuuriosaamisen ja luotettavan koordinoinnin kautta."

da: "Vi hjælper polske, estiske og nordiske virksomheder med adgang til kinesiske markeder, partnere og talenter gennem kulturel efterretning og pålidelig koordinering."

et: "Aitame Poola, Eesti ja Põhjamaade ettevõtetel pääseda Hiina turgudele, leida partnereid ja talente kultuuriteadlikkuse ja usaldusväärse koordineerimise kaudu."
```

### Services (translated headings)
```
                    en                          de                              no                              sv                              fi                              da                              et
Service 1:  "China market advisory"     "China-Marktberatung"           "Kina-markedsrådgivning"        "Kina-marknadsrådgivning"       "Kiina-markkinaneuvonta"        "Kina-markedsrådgivning"        "Hiina turunõustamine"
Service 2:  "Cultural intelligence"     "Kulturelle Intelligenz"        "Kulturell etterretning"        "Kulturell intelligens"         "Kulttuuriosaaminen"            "Kulturel efterretning"         "Kultuuriteadlikkus"
Service 3:  "Partner identification"    "Partneridentifikation"         "Partneridentifikasjon"         "Partneridentifikation"         "Kumppanien tunnistaminen"      "Partneridentifikation"         "Partnerite leidmine"
Service 4:  "Delegation programs"       "Delegationsprogramme"          "Delegasjonsprogrammer"         "Delegationsprogram"            "Delegaatio-ohjelmat"           "Delegationsprogrammer"         "Delegatsiooniprogrammid"
Service 5:  "Export support"            "Exportunterstützung"           "Eksportstøtte"                 "Exportstöd"                    "Vientituki"                    "Eksportstøtte"                 "Eksporditoetus"
Service 6:  "Talent sourcing"           "Talentsuche"                   "Talentsourcing"                "Talentrekrytering"             "Osaajien hankinta"             "Talentsourcing"                "Talentide leidmine"
```

---

## ABOUT PAGE — ALL LANGUAGES

### Headline
```
en: "Built from both sides of the corridor"
zh: "从走廊的两端建立"
pl: "Zbudowane z obu stron korytarza"
de: "Von beiden Seiten des Korridors aufgebaut"
no: "Bygget fra begge sider av korridoren"
sv: "Byggt från båda sidor av korridoren"
fi: "Rakennettu käytävän molemmilta puolilta"
da: "Bygget fra begge sider af korridoren"
et: "Ehitatud koridori mõlemalt poolt"
```

### Mission
```
en: "We believe cross-border business works best when both sides truly understand each other — not just the words, but the systems, cultures, and unspoken expectations."

zh: "我们相信，跨境商务在双方真正理解彼此时才能发挥最佳效果——不仅是语言，还有制度、文化和那些没有说出口的期望。"

pl: "Wierzymy, że biznes transgraniczny działa najlepiej, gdy obie strony naprawdę się rozumieją — nie tylko słowa, ale systemy, kultury i niewypowiedziane oczekiwania."

de: "Wir glauben, dass grenzüberschreitendes Geschäft am besten funktioniert, wenn beide Seiten einander wirklich verstehen — nicht nur die Worte, sondern die Systeme, Kulturen und unausgesprochenen Erwartungen."

no: "Vi tror grenseoverskridende forretning fungerer best når begge sider virkelig forstår hverandre — ikke bare ordene, men systemene, kulturene og de usagte forventningene."

sv: "Vi tror att gränsöverskridande affärer fungerar bäst när båda sidor verkligen förstår varandra — inte bara orden, utan systemen, kulturerna och de outtalade förväntningarna."

fi: "Uskomme, että rajat ylittävä liiketoiminta toimii parhaiten, kun molemmat osapuolet todella ymmärtävät toisiaan — eivät vain sanoja, vaan järjestelmiä, kulttuureja ja lausumattomia odotuksia."

da: "Vi tror, at grænseoverskridende forretning fungerer bedst, når begge sider virkelig forstår hinanden — ikke bare ordene, men systemerne, kulturerne og de usagte forventninger."

et: "Usume, et piiriülene äritegevus toimib kõige paremini, kui mõlemad pooled teineteist tõeliselt mõistavad — mitte ainult sõnu, vaid süsteeme, kultuure ja väljaütlemata ootusi."
```

---

## CONTACT PAGE — ALL LANGUAGES

### Headline
```
en: "Start the conversation"
zh: "开始对话"
pl: "Rozpocznij rozmowę"
de: "Starten Sie das Gespräch"
no: "Start samtalen"
sv: "Starta samtalet"
fi: "Aloita keskustelu"
da: "Start samtalen"
et: "Alustage vestlust"
```

### Form labels
```
              en              zh          pl              de              no              sv              fi              da              et
Name:         "Name"          "姓名"      "Imię"          "Name"          "Navn"          "Namn"          "Nimi"          "Navn"          "Nimi"
Email:        "Email"         "电子邮箱"   "E-mail"        "E-Mail"        "E-post"        "E-post"        "Sähköposti"    "E-mail"        "E-post"
Company:      "Company"       "公司"       "Firma"         "Unternehmen"   "Selskap"       "Företag"       "Yritys"        "Virksomhed"    "Ettevõte"
I am a...:    "I am a..."     "我是..."    "Jestem..."     "Ich bin..."    "Jeg er..."     "Jag är..."     "Olen..."       "Jeg er..."     "Ma olen..."
Message:      "Message"       "留言"       "Wiadomość"     "Nachricht"     "Melding"       "Meddelande"    "Viesti"        "Besked"        "Sõnum"
Submit:       "Send"          "发送"       "Wyślij"        "Senden"        "Send"          "Skicka"        "Lähetä"        "Send"          "Saada"
```

### "I am a..." dropdown options
```
en: "Chinese organization" | "Chinese professional" | "European firm" | "Other"
zh: "中国企业" | "中国专业人士" | "欧洲企业" | "其他"
pl: "Chińska organizacja" | "Chiński specjalista" | "Firma europejska" | "Inne"
de: "Chinesisches Unternehmen" | "Chinesische Fachkraft" | "Europäisches Unternehmen" | "Sonstiges"
no: "Kinesisk organisasjon" | "Kinesisk fagperson" | "Europeisk firma" | "Annet"
sv: "Kinesisk organisation" | "Kinesisk yrkesverksam" | "Europeiskt företag" | "Övrigt"
fi: "Kiinalainen organisaatio" | "Kiinalainen ammattilainen" | "Eurooppalainen yritys" | "Muu"
da: "Kinesisk organisation" | "Kinesisk fagperson" | "Europæisk virksomhed" | "Andet"
et: "Hiina organisatsioon" | "Hiina spetsialist" | "Euroopa ettevõte" | "Muu"
```

---

## SECTOR PAGE HEADINGS — ALL LANGUAGES

### Logistics & rail
```
en: "Logistics, rail & freight"
zh: "物流、铁路与货运"
pl: "Logistyka, kolej i fracht"
de: "Logistik, Schiene & Fracht"
no: "Logistikk, jernbane og frakt"
sv: "Logistik, järnväg & frakt"
fi: "Logistiikka, rautatie ja rahti"
da: "Logistik, jernbane & fragt"
et: "Logistika, raudtee ja kaubavedu"
```

### EV, batteries & green industry
```
en: "EV, batteries & green industry"
zh: "电动汽车、电池与绿色产业"
pl: "Elektromobilność, baterie i zielony przemysł"
de: "E-Mobilität, Batterien & grüne Industrie"
no: "Elbil, batterier og grønn industri"
sv: "Elbil, batterier & grön industri"
fi: "Sähköautot, akut ja vihreä teollisuus"
da: "Elbil, batterier & grøn industri"
et: "Elektriautod, akud ja roheline tööstus"
```

### Agri-food & market access
```
en: "Agri-food & market access"
zh: "农食产品与市场准入"
pl: "Żywność i dostęp do rynku"
de: "Agrar & Lebensmittel — Marktzugang"
no: "Landbruk, mat og markedstilgang"
sv: "Jordbruk, livsmedel & marknadstillträde"
fi: "Maatalousruoka ja markkinoille pääsy"
da: "Landbrug, fødevarer & markedsadgang"
et: "Põllumajandus, toit ja turule pääs"
```

### Tourism, culture & delegations
```
en: "Tourism, culture & delegations"
zh: "旅游、文化与代表团"
pl: "Turystyka, kultura i delegacje"
de: "Tourismus, Kultur & Delegationen"
no: "Turisme, kultur og delegasjoner"
sv: "Turism, kultur & delegationer"
fi: "Matkailu, kulttuuri ja delegaatiot"
da: "Turisme, kultur & delegationer"
et: "Turism, kultuur ja delegatsioonid"
```

### Education & training
```
en: "Education & training"
zh: "教育与培训"
pl: "Edukacja i szkolenia"
de: "Bildung & Weiterbildung"
no: "Utdanning og opplæring"
sv: "Utbildning & fortbildning"
fi: "Koulutus"
da: "Uddannelse & træning"
et: "Haridus ja koolitus"
```

### Banking & institutional
```
en: "Banking & institutional"
zh: "银行与机构服务"
pl: "Bankowość i usługi instytucjonalne"
de: "Banken & institutionelle Dienstleistungen"
no: "Bank og institusjonelle tjenester"
sv: "Bank & institutionella tjänster"
fi: "Pankki- ja institutionaaliset palvelut"
da: "Bank & institutionelle tjenester"
et: "Pangandus ja institutsionaalsed teenused"
```

---

## FOOTER — ALL LANGUAGES

### Footer tagline
```
en: "Trusted coordination for the China–Northern Europe corridor."
zh: "中国与北欧商业走廊的可信协调伙伴。"
pl: "Zaufana koordynacja na korytarzu Chiny–Europa Północna."
de: "Vertrauenswürdige Koordination für den Korridor China–Nordeuropa."
no: "Pålitelig koordinering for korridoren Kina–Nord-Europa."
sv: "Pålitlig koordinering för korridoren Kina–Nordeuropa."
fi: "Luotettavaa koordinointia Kiina–Pohjois-Eurooppa-käytävälle."
da: "Pålidelig koordinering for korridoren Kina–Nordeuropa."
et: "Usaldusväärne koordineerimine Hiina–Põhja-Euroopa koridoris."
```

### Footer nav labels
```
              en              zh          pl              de              no              sv              fi              da              et
Services:     "Services"      "服务"      "Usługi"        "Leistungen"    "Tjenester"     "Tjänster"      "Palvelut"      "Tjenester"     "Teenused"
Sectors:      "Sectors"       "行业"      "Sektory"       "Branchen"      "Sektorer"      "Sektorer"      "Toimialat"     "Sektorer"      "Sektorid"
About:        "About"         "关于我们"   "O nas"         "Über uns"      "Om oss"        "Om oss"        "Tietoa meistä" "Om os"         "Meist"
Insights:     "Insights"      "洞察"      "Aktualności"   "Einblicke"     "Innsikt"       "Insikter"      "Näkemyksiä"    "Indsigt"       "Ülevaated"
Community:    "Community"     "社区"      "Społeczność"   "Community"     "Fellesskap"    "Community"     "Yhteisö"       "Fællesskab"    "Kogukond"
Contact:      "Contact"       "联系我们"   "Kontakt"       "Kontakt"       "Kontakt"       "Kontakt"       "Yhteystiedot"  "Kontakt"       "Kontakt"
Privacy:      "Privacy"       "隐私政策"   "Prywatność"    "Datenschutz"   "Personvern"    "Integritet"    "Tietosuoja"    "Privatliv"     "Privaatsus"
Impressum:    "Legal notice"  "法律声明"   "Impressum"     "Impressum"     "Juridisk info" "Juridisk info" "Oikeudellinen" "Juridisk info" "Õiguslik teave"
```

---

## COOKIE CONSENT — ALL LANGUAGES

```
en: "We use cookies to improve your experience. By continuing, you agree to our privacy policy."
zh: "我们使用Cookie来改善您的体验。继续使用即表示您同意我们的隐私政策。"
pl: "Używamy plików cookie, aby poprawić Twoje doświadczenia. Kontynuując, zgadzasz się z naszą polityką prywatności."
de: "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Durch die weitere Nutzung stimmen Sie unserer Datenschutzerklärung zu."
no: "Vi bruker informasjonskapsler for å forbedre opplevelsen din. Ved å fortsette godtar du vår personvernerklæring."
sv: "Vi använder cookies för att förbättra din upplevelse. Genom att fortsätta godkänner du vår integritetspolicy."
fi: "Käytämme evästeitä parantaaksemme kokemustasi. Jatkamalla hyväksyt tietosuojakäytäntömme."
da: "Vi bruger cookies for at forbedre din oplevelse. Ved at fortsætte accepterer du vores privatlivspolitik."
et: "Kasutame küpsiseid teie kogemuse parandamiseks. Jätkates nõustute meie privaatsuspoliitikaga."
```

**Buttons:**
```
              en          zh      pl              de              no          sv          fi          da          et
Accept:       "Accept"    "接受"  "Akceptuję"     "Akzeptieren"   "Aksepter"  "Acceptera" "Hyväksy"   "Accepter"  "Nõustun"
Decline:      "Decline"   "拒绝"  "Odrzuć"        "Ablehnen"      "Avslå"     "Avvisa"    "Hylkää"    "Afvis"     "Keeldun"
```

---

## IMPLEMENTATION NOTES FOR CLAUDE CODE

1. **Start with EN + ZH + PL** — get these three fully working first
2. **Add DE next** — largest European market in the corridor
3. **Add NO, SV, FI, DA, ET** — these can be batch-added since they share the same page structure
4. **Sector page body text** — for now, only EN, ZH, PL need full body paragraphs. Nordic/German/Estonian sector pages can launch with translated headings + service lists, with body text marked as "Full content coming soon" in their language
5. **Blog posts** — EN and ZH only at launch. Other languages get the listing page with a note: "Currently available in English and Chinese"
6. **The language switcher** should be compact: when there are 9 options, consider a dropdown instead of inline links once viewport gets narrow
7. **hreflang tags** — critical for SEO. Every page needs proper hreflang pointing to all 9 versions
8. **Font loading** — Chinese (Noto Serif SC) is the heaviest font. Load it only on zh-prefixed routes or when Chinese text is detected. Latin fonts cover all European languages.
