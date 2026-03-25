export type SpecRow = {
  parameter: string;
  value: string;
};

export type ProductItem = {
  name: string;
  slug: string;
  shortDescription: string;
  overview: string;
  detailedDescription: string;
  productType: string;
  commonSpecs: string;
  specTable: SpecRow[];
  physicalSpecs?: string[];
  variants?: string[];
  productionMethod?: string;
  applications: string[];
  keyPoints: string[];
  sourceUrl: string;
  image: string;
};

export type ProductCategory = {
  name: string;
  slug: string;
  description: string;
  image: string;
  products: ProductItem[];
};

export const productCatalog: ProductCategory[] = [
  /* ═══════════════════════════════════════════════════════ */
  /*  1. BULK FERRO ALLOYS                                   */
  /* ═══════════════════════════════════════════════════════ */
  {
    name: 'Bulk Ferro Alloys',
    slug: 'bulk-ferro-alloys',
    description:
      'Primary high-volume ferro additives used in industrial steelmaking as deoxidizers and alloying elements for chemistry and strength control.',
    image: '/hero_foundry.jpg',
    products: [
      /* ─── 1.1 High-Carbon Silico Manganese ─── */
      {
        name: 'High-Carbon Silico Manganese',
        slug: 'high-carbon-silico-manganese',
        shortDescription:
          'High-carbon silico manganese alloy used as a deoxidizer and alloying element in steel.',
        overview:
          'High-carbon silico manganese is an alloy that contains 2.25–2.5% carbon. It is produced by smelting manganese ore with coke and a quartz flux, or by smelting slag from high-carbon ferro manganese. It is used as a deoxidizer and alloying element in steel, and also as a hardening agent in aluminum production.',
        detailedDescription:
          'Silico manganese is an alloy of iron, silicon, and manganese with a higher silicon content than ferro manganese. It is produced in large quantities and demand has been on the rise in recent years. Dust-free folded silicomanganese in lumps is not a health hazard when properly handled and stored. Inhalation of manganese vapor oxide fumes can result in acute chemical pneumonia. Prolonged exposure can lead to chronic manganese poisoning with damage to the central nervous system.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 60–68%, Si 14–21%, C 1.5–2.5%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '60–68%' },
          { parameter: 'Silicon (Si)', value: '14–21%' },
          { parameter: 'Carbon (C)', value: '1.5–2%' },
        ],
        variants: ['H.C. Silico Manganese', 'H.C. Silico Manganese (Low Phos)'],
        productionMethod:
          'Produced by smelting manganese ore with coke and a quartz flux, or by smelting slag from high-carbon ferro manganese.',
        applications: [
          'Deoxidizer in steelmaking',
          'Alloying element in steel',
          'Hardening agent in aluminum production',
        ],
        keyPoints: [
          'Composition: 60–68% Mn, 14–21% Si, 1.5–2% C',
          'Produced in large quantities globally',
          'Demand has been rising in recent years',
          'Higher silicon content than ferro manganese',
          'Low-phosphorus variant available',
        ],
        sourceUrl: 'https://rsfametalik.in/high-carbon-silico-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.2 High Carbon Ferro Manganese ─── */
      {
        name: 'High Carbon Ferro Manganese',
        slug: 'high-carbon-ferro-manganese',
        shortDescription:
          'The largest tonnage ferro alloy — a deoxidizing agent and alloying element in steelmaking.',
        overview:
          'High-carbon ferromanganese, generally with 70–80% Mn and 6–7% C, is by far the largest tonnage ferro alloy used. It is a deoxidizing agent in steelmaking and an important alloying element with the property of controlling the harmful effect of sulfur.',
        detailedDescription:
          'Manganese combines with sulfur and forms manganese sulfide, which tends to float out of the liquid steel. Manganese has the effect of stabilizing the austenite phase; steels with 12–14% Mn are fully austenitic, used for wear and abrasion-resisting characteristics. Manganese ferroalloys are manufactured by carbothermic reduction of manganese ores containing both iron and manganese oxides in submerged arc electric furnaces. The slags produced contain significant amounts of manganese oxide (MnO) and can be reprocessed to ferrosilicomanganese, then to refined or low carbon ferromanganese or manganese metal.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 70–80%, C 6–7%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '70–80%' },
          { parameter: 'Carbon (C)', value: '6–7%' },
        ],
        productionMethod:
          'Carbothermic reduction of manganese ores containing iron and manganese oxides in submerged arc electric furnaces.',
        applications: [
          'Deoxidizing agent in steelmaking',
          'Sulfur control in liquid steel',
          'Austenitic wear-resistant steel (12–14% Mn)',
          'Structural and engineering steels',
        ],
        keyPoints: [
          'Largest tonnage ferro alloy used globally',
          'Mn 70–80%, C 6–7%',
          'Combines with sulfur to form MnS that floats out of melt',
          'Stabilizes austenite phase in high-Mn steels',
          'Slag can be reprocessed to silicomanganese and LC FeMn',
        ],
        sourceUrl: 'https://rsfametalik.in/high-carbon-ferro-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.3 High Carbon Ferro Chrome ─── */
      {
        name: 'High Carbon Ferro Chrome',
        slug: 'high-carbon-ferro-chrome',
        shortDescription:
          'One of the most common ferroalloys, used almost exclusively in stainless steel and high chromium steels.',
        overview:
          'High carbon ferrochrome is one of the most common ferroalloys produced and is almost exclusively used in the production of stainless steel and high chromium steels. Production takes place primarily in countries with substantial chromite ore supply.',
        detailedDescription:
          'The most common production technology is submerged arc smelting in AC furnaces, although DC furnace open arc smelting is increasingly common. A more advanced technology route includes a prereduction step. Production processes have become more energy and metallurgically efficient through prereduction, preheating, agglomeration of ore, and CO gas utilization. Recently installed plants display manageable risks in terms of environmental pollution and occupational health. Size is as per buyer requirement.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Cr 60–70%, C 6–8%',
        specTable: [
          { parameter: 'Chromium (Cr)', value: '60–70%' },
          { parameter: 'Carbon (C)', value: '6–8%' },
          { parameter: 'Size', value: 'As per buyer requirement' },
        ],
        variants: ['High Carbon Ferro Chrome', 'Low Phos High Carbon Ferro Chrome (LP HC FeCr)'],
        productionMethod:
          'Submerged arc smelting in AC furnaces. Advanced processes include prereduction, preheating, agglomeration of ore, and CO gas utilization.',
        applications: [
          'Stainless steel production',
          'High chromium steel production',
          'Corrosion-resistant alloys',
          'Wear-resistant components',
        ],
        keyPoints: [
          'One of the most common ferroalloys produced',
          'Almost exclusively used for stainless and high-Cr steels',
          'Low Phos variant (LP HC FeCr) available',
          'Produced via submerged arc smelting in AC furnaces',
          'Size supplied as per buyer requirement',
        ],
        sourceUrl: 'https://rsfametalik.in/high-carbon-ferro-chrome/',
        image: '/quality_lab.jpg',
      },

      /* ─── 1.4 Low Carbon Ferro Chrome ─── */
      {
        name: 'Low Carbon Ferro Chrome',
        slug: 'low-carbon-ferro-chrome',
        shortDescription:
          'Ferroalloy additive used in producing stainless, acid-resistant, and heat-resistant steels.',
        overview:
          'Low carbon ferrochrome (LC FeCr) is a ferroalloy additive used in the production of stainless steel, acid-resistant steel, and heat-resistant steel. It can also be used to make chrome metal and ferrochrome.',
        detailedDescription:
          'LC FeCr is made from silicon-chromium alloys, chromite, lime, and other metallurgical materials. It is produced by fusing chromium ore and lime in a furnace, then adding intermediate-grade ferrochrome silicon to the ladle. LC FeCr is resistant to wear and tear, improves anti-oxidation and corrosion resistance of steel, is resistant to rust and oxidation, and is stable at high temperatures.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Cr 60–70%, C max 0.10%',
        specTable: [
          { parameter: 'Chromium (Cr)', value: '60–70%' },
          { parameter: 'Carbon (C)', value: 'Max 0.10%' },
          { parameter: 'Raw Materials', value: 'Silicon-chromium alloys, chromite, lime' },
        ],
        productionMethod:
          'Produced by fusing chromium ore and lime in a furnace, then adding intermediate-grade ferrochrome silicon to the ladle.',
        applications: [
          'Stainless steel',
          'Acid-resistant steel',
          'Heat-resistant steel',
          'Chrome metal manufacturing',
          'Ferrochrome production',
        ],
        keyPoints: [
          'Resistant to wear, tear, rust, and oxidation',
          'Improves anti-oxidation and corrosion resistance',
          'Stable at high temperatures',
          'Can also be used to make chrome metal',
          'Made from silicon-chromium alloys, chromite, and lime',
        ],
        sourceUrl: 'https://rsfametalik.in/low-carbon-ferro-chrome/',
        image: '/quality_lab.jpg',
      },

      /* ─── 1.5 Ferro Silicon ─── */
      {
        name: 'Ferro Silicon',
        slug: 'ferro-silicon',
        shortDescription:
          'Silicon-bearing alloy produced by carbothermic reduction, used for deoxidation and alloying.',
        overview:
          'The 50% and 75% ferrosilicon (FeSi50 and FeSi75) alloys are produced by carbothermic reduction in a submerged arc furnace. The source of iron is iron ores or scrap, and silicon source is quartz or quartzite.',
        detailedDescription:
          'The smelting reaction is characterized by the formation of silicon carbide and SiO gas as intermediary products. Iron lowers the activity of silicon, reducing SiO gas generation — silicon recovery is higher in 75% and 50% FeSi than in metallurgical grade silicon metal. Ferrosilicon is used for manufacture of silicon, corrosion-resistant and high-temperature-resistant ferrous silicon alloys, and silicon steel for electromotors and transformer cores.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'FeSi75: Si 70–75% | FeSi50: Si 48–50%',
        specTable: [
          { parameter: 'Silicon (Si) — FeSi75', value: '70–75%' },
          { parameter: 'Silicon (Si) — FeSi50', value: '48–50%' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
          { parameter: 'Source of Si', value: 'Quartz or quartzite' },
          { parameter: 'Source of Fe', value: 'Iron ores or scrap' },
        ],
        variants: ['FeSi50 (50% grade)', 'FeSi75 (75% grade)'],
        productionMethod:
          'Carbothermic reduction in submerged arc furnace. Iron ore/scrap provides Fe; quartz/quartzite provides Si.',
        applications: [
          'Steel deoxidation',
          'Silicon steel for electromotors and transformer cores',
          'Corrosion-resistant ferrous silicon alloys',
          'High-temperature-resistant alloys',
          'Foundry inoculants',
        ],
        keyPoints: [
          'Two standard grades: FeSi50 and FeSi75',
          'Higher Si recovery than metallurgical grade Si metal',
          'Used in silicon steel for electrical applications',
          'SiC and SiO gas form as intermediary products during smelting',
          'Iron lowers Si activity, reducing SiO gas loss',
        ],
        sourceUrl: 'https://rsfametalik.in/ferro-silicon/',
        image: '/capabilities_worker.jpg',
      },

      /* ─── 1.6 Low Carbon Silico Manganese ─── */
      {
        name: 'Low Carbon Silico Manganese',
        slug: 'low-carbon-silico-manganese',
        shortDescription:
          'Low-carbon Mn-Si alloy that improves decarburization in stainless and special steel.',
        overview:
          'Low Carbon Silico Manganese (LCSiMn) is a ferrous alloy containing carbon, silica, and manganese. It has a lower ratio of carbon to silicon and manganese than other varieties.',
        detailedDescription:
          'LCSiMn can contain between 0.1% and 0.2% carbon and more silicon than a high-carbon variety. The lower carbon content improves the decarburization process when reducing slag. LCSiMn and ultra low carbon silico manganese can improve productivity in the manufacture of stainless steel and special steel by eliminating decarburization in the final step.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 55–65%, Si 15–20%, C 0.1–0.2%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '55–65%' },
          { parameter: 'Silicon (Si)', value: '15–20%' },
          { parameter: 'Carbon (C)', value: '0.1–0.2%' },
        ],
        productionMethod:
          'Production in submerged arc furnaces with controlled reduction to maintain low carbon while achieving target Mn and Si.',
        applications: [
          'Stainless steel manufacture',
          'Special steel production',
          'Elimination of decarburization in final step',
          'Quality-sensitive steel products',
        ],
        keyPoints: [
          'Carbon: 0.1–0.2% (much lower than HC variant)',
          'More silicon than high-carbon variety',
          'Improves decarburization process when reducing slag',
          'Eliminates final-step decarburization in stainless production',
          'Ultra low carbon variant also available',
        ],
        sourceUrl: 'https://rsfametalik.in/low-carbon-silico-manganese/',
        image: '/capabilities_worker.jpg',
      },

      /* ─── 1.7 Medium Carbon Silico Manganese ─── */
      {
        name: 'Medium Carbon Silico Manganese',
        slug: 'medium-carbon-silico-manganese',
        shortDescription:
          'Medium-carbon Mn-Si alloy used in steel foundries and electrode coating work.',
        overview:
          'Medium carbon silico manganese is a ferrous alloy that contains a high amount of carbon and silicon. It is used in steel foundries, electrode coating work, and other areas.',
        detailedDescription:
          'Medium carbon silico manganese contains up to 0.5% carbon, while high carbon silico manganese contains 2.25% to 2.5% carbon. High-carbon ferro alloys can increase the strength of steel, but too much carbon can make steel more brittle. Medium carbon strikes a balance between adding strength and avoiding excess brittleness.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 60–65%, Si 14–18%, C up to 0.5%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '60–65%' },
          { parameter: 'Silicon (Si)', value: '14–18%' },
          { parameter: 'Carbon (C)', value: 'Up to 0.5%' },
        ],
        productionMethod:
          'Smelting of manganese ore with silicon-rich inputs in electric arc furnaces with controlled carbon reduction.',
        applications: [
          'Steel foundries',
          'Electrode coating work',
          'Construction steel',
          'General alloy steel',
        ],
        keyPoints: [
          'Carbon up to 0.5% — between HC (2.25–2.5%) and LC (0.1–0.2%)',
          'Less brittle than high-carbon variants',
          'Used in steel foundries and electrode coatings',
          'Balances strength gain with reduced brittleness risk',
        ],
        sourceUrl: 'https://rsfametalik.in/medium-carbon-silico-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.8 Medium Carbon Ferro Manganese ─── */
      {
        name: 'Medium Carbon Ferro Manganese',
        slug: 'medium-carbon-ferro-manganese',
        shortDescription:
          'Key manganese ferroalloy for steel and casting industries, also used in welding electrodes.',
        overview:
          'Medium carbon ferro manganese is a ferroalloy that contains a high amount of manganese. It is a key component in the production of steel and iron.',
        detailedDescription:
          'Used in steel and casting industries to remove sulfur and improve durability, machinability, and malleability. Also used for deoxidizing molten metal, producing E6013 electrodes, and in the welding industry. Ferro manganese powders are useful in the welding industry. Made by the aluminothermic process or by the MOR Process.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 75–80%, C 1.0–2.0%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '75–80%' },
          { parameter: 'Carbon (C)', value: '1.0–2.0%' },
          { parameter: 'Process', value: 'Aluminothermic or MOR Process' },
        ],
        productionMethod:
          'Made by the aluminothermic process or by the MOR Process.',
        applications: [
          'Sulfur removal from steel',
          'Improving durability, machinability, malleability',
          'Deoxidizing molten metal',
          'E6013 electrode production',
          'Welding industry (ferro manganese powders)',
        ],
        keyPoints: [
          'Mn 75–80%, C 1.0–2.0%',
          'Removes sulfur and improves steel properties',
          'Deoxidizes molten metal',
          'Mainly used to produce E6013 electrodes',
          'Made by aluminothermic or MOR process',
        ],
        sourceUrl: 'https://rsfametalik.in/medium-carbon-ferro-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.9 Low Carbon Ferro Manganese ─── */
      {
        name: 'Low Carbon Ferro Manganese',
        slug: 'low-carbon-ferro-manganese',
        shortDescription:
          'Low-carbon manganese additive for tool steel, austenitic SS, and welding electrodes.',
        overview:
          'Low carbon ferro manganese is one of the ferro manganese grades produced by the aluminothermic process. Steel industry uses this grade in the production of tool steel (up to 0.4% Mn), 18-8 Austenitic non-magnetic SS, and structural steel (up to 0.6% Mn).',
        detailedDescription:
          'MS welding electrodes (E6013) and other electrodes are also produced using it. It is mainly packaged in jumbo bags and steel drums for convenient handling and transport.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 78–82%, C max 0.10%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '78–82%' },
          { parameter: 'Carbon (C)', value: 'Max 0.10%' },
          { parameter: 'Mn usage — Tool Steel', value: 'Up to 0.4%' },
          { parameter: 'Mn usage — Structural Steel', value: 'Up to 0.6%' },
          { parameter: 'Packaging', value: 'Jumbo bags, steel drums' },
        ],
        physicalSpecs: ['Jumbo bags', 'Steel drums'],
        productionMethod:
          'Produced by the aluminothermic process.',
        applications: [
          'Tool steel (up to 0.4% Mn)',
          '18-8 Austenitic non-magnetic stainless steel',
          'Structural steel (up to 0.6% Mn)',
          'MS welding electrodes (E6013)',
        ],
        keyPoints: [
          'Produced by aluminothermic process',
          'Used in tool steel (0.4% Mn), structural steel (0.6% Mn)',
          'Used for 18-8 Austenitic non-magnetic SS',
          'Packaged in jumbo bags and steel drums',
          'Also used for E6013 electrode production',
        ],
        sourceUrl: 'https://rsfametalik.in/low-carbon-ferro-manganese/',
        image: '/quality_lab.jpg',
      },

      /* ─── 1.10 Silico Chrome ─── */
      {
        name: 'Silico Chrome',
        slug: 'silico-chrome',
        shortDescription:
          'Iron-chromium-silicon alloy used in abrasives, as deoxidizer, and as intermediate alloy.',
        overview:
          'Silico chrome is an alloy of iron, chromium, and silicon that contains at least 30% chromium and 35% silicon. It is used in the production of abrasives — hard, heat-resistant materials used for sanding, polishing, cutting, and grinding.',
        detailedDescription:
          'Silico chrome is also used as an intermediate alloy to produce medium, low, and micro-carbon ferro chrome alloys. It serves as a deoxidizer and chromium additive in steelmaking.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Cr min 30%, Si min 35%',
        specTable: [
          { parameter: 'Chromium (Cr)', value: 'Min 30%' },
          { parameter: 'Silicon (Si)', value: 'Min 35%' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
        ],
        productionMethod:
          'Produced in electric arc furnaces using chromite ore and silica-rich reductants.',
        applications: [
          'Abrasive production (sanding, polishing, cutting, grinding)',
          'Intermediate alloy for medium/low/micro-carbon ferro chrome',
          'Deoxidizer in steelmaking',
          'Chromium additive in steelmaking',
        ],
        keyPoints: [
          'Contains at least 30% Cr and 35% Si',
          'Used in abrasives — hard, heat-resistant materials',
          'Intermediate alloy for producing LC/MC/micro-C ferro chrome',
          'Dual-action: deoxidizer + chromium additive',
        ],
        sourceUrl: 'https://rsfametalik.in/silico-chrome/',
        image: '/quality_lab.jpg',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════ */
  /*  2. NOBLE FERRO ALLOYS                                  */
  /* ═══════════════════════════════════════════════════════ */
  {
    name: 'Noble Ferro Alloys',
    slug: 'noble-ferro-alloys',
    description:
      'Special alloys for advanced steel chemistry and premium grades, used for micro-alloying and precision property control.',
    image: '/quality_lab.jpg',
    products: [
      /* ─── 2.1 Ferro Molybdenum ─── */
      {
        name: 'Ferro Molybdenum',
        slug: 'ferro-molybdenum',
        shortDescription:
          'Versatile iron-molybdenum alloy — a hardening agent for heat-treatable alloy steels and superalloys.',
        overview:
          'Ferro molybdenum (FeMo) is a versatile alloy made from iron and molybdenum. It is a hardening agent used in many heat-treatable alloy steels, high-strength low alloys, stainless steels, cast irons, high-speed tool steels, and superalloy applications.',
        detailedDescription:
          'Ferro molybdenum is made by reducing technical grade molybdic oxide and ferrosilicon through aluminothermic reduction. After solidification, it is milled and sieved to the right particle size for adding to steel and cast iron. Available in two major grades with Mo content of 60–75%. Particle size: 10–100 mm. Melting point: 1900°C.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Mo 60–75%, particle size 10–100 mm, melting point 1900°C',
        specTable: [
          { parameter: 'Molybdenum (Mo)', value: '60–75%' },
          { parameter: 'Carbon (C)', value: '0.10% max' },
          { parameter: 'Sulphur (S)', value: '0.08% max' },
          { parameter: 'Phosphorus (P)', value: '0.06% max' },
          { parameter: 'Silicon (Si)', value: '1.50% max' },
          { parameter: 'Aluminium (Al)', value: '0.50% max' },
          { parameter: 'Particle Size', value: '10–100 mm' },
          { parameter: 'Melting Point', value: '1900°C' },
        ],
        productionMethod:
          'Aluminothermic reduction of technical grade molybdic oxide and ferrosilicon. Milled and sieved after solidification.',
        applications: [
          'Heat-treatable alloy steels',
          'High-strength low-alloy (HSLA) steels',
          'Stainless steels',
          'Cast irons',
          'High-speed tool steels',
          'Superalloy applications',
        ],
        keyPoints: [
          'Mo 60–75% in two major grades',
          'Particle size: 10–100 mm',
          'Melting point: 1900°C',
          'Produced via aluminothermic reduction',
          'Milled and sieved to correct particle size after solidification',
        ],
        sourceUrl: 'https://rsfametalik.in/ferro-molybdenum/',
        image: '/quality_lab.jpg',
      },

      /* ─── 2.2 Ferro Vanadium ─── */
      {
        name: 'Ferro Vanadium',
        slug: 'ferro-vanadium',
        shortDescription:
          'Grayish silver crystalline solid — hardener, strengthener, and anti-corrosive additive for steels.',
        overview:
          'Ferrovanadium (FeV) is a grayish silver crystalline solid alloy made from iron and vanadium. The alloy contains 35–85% vanadium. It is used as a hardener, strengthener, and anti-corrosive additive for steels and other ferrous-based products.',
        detailedDescription:
          'Ferro vanadium supports high-strength low-alloy (HSLA) steel development and improves wear and fatigue performance in engineering steels. It enables grain refinement in micro-alloyed products, enhancing yield strength and toughness simultaneously.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'V 35–85%',
        specTable: [
          { parameter: 'Vanadium (V)', value: '35–85%' },
          { parameter: 'Form', value: 'Grayish silver crystalline solid' },
        ],
        productionMethod:
          'Produced by reduction of vanadium pentoxide with iron and reducing agents in electric furnaces.',
        applications: [
          'HSLA steels',
          'Tool steels',
          'Automotive structural grades',
          'Grain refinement in micro-alloyed products',
          'Anti-corrosive steel formulations',
        ],
        keyPoints: [
          'Vanadium content: 35–85%',
          'Grayish silver crystalline solid',
          'Hardener, strengthener, and anti-corrosive additive',
          'Enhances yield strength and toughness',
          'Supports grain refinement in micro-alloyed products',
        ],
        sourceUrl: 'https://rsfametalik.in/ferro-vanadium/',
        image: '/hero_foundry.jpg',
      },

      /* ─── 2.3 Ferro Titanium ─── */
      {
        name: 'Ferro Titanium',
        slug: 'ferro-titanium',
        shortDescription:
          'Iron-titanium alloy used as a cleansing agent for deoxidation, desulfurization, and denitrogenation.',
        overview:
          'Ferrotitanium is a ferroalloy of iron and titanium with 10–20% iron and 45–75% titanium, sometimes with a small amount of carbon. Used in steelmaking as a cleansing agent for iron and steel.',
        detailedDescription:
          'Titanium is highly reactive with sulfur, carbon, oxygen, and nitrogen, forming insoluble compounds and sequestering them in slag — used for deoxidizing, desulfurization, and denitrogenation. The addition of titanium yields metal with finer grain structure. Manufactured by mixing titanium sponge and scrap with iron and melting in an induction furnace. Ferrotitanium powder can also be used as a fuel in some pyrotechnic compositions.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Ti 45–75%, Fe 10–20%',
        specTable: [
          { parameter: 'Titanium (Ti)', value: '45–75%' },
          { parameter: 'Iron (Fe)', value: '10–20%' },
          { parameter: 'Carbon (C)', value: 'Small amount' },
          { parameter: 'Reactivity', value: 'Highly reactive with S, C, O, N' },
        ],
        productionMethod:
          'Manufactured by mixing titanium sponge and scrap with iron and melting together in an induction furnace.',
        applications: [
          'Deoxidizing in steelmaking',
          'Desulfurization',
          'Denitrogenation',
          'Finer grain structure in steel',
          'Stainless steel stabilization',
          'Weld metal chemistry control',
        ],
        keyPoints: [
          'Ti 45–75%, Fe 10–20%',
          'Highly reactive with S, C, O, N — forms insoluble compounds',
          'Used for deoxidizing, desulfurization, and denitrogenation',
          'Yields finer grain structure in steel',
          'Made from titanium sponge + scrap + iron in induction furnace',
        ],
        sourceUrl: 'https://rsfametalik.in/ferro-titanium-2/',
        image: '/hero_foundry.jpg',
      },

      /* ─── 2.4 Ferro Nickel ─── */
      {
        name: 'Ferro Nickel',
        slug: 'ferro-nickel',
        shortDescription:
          'Shiny metallic ferroalloy containing ~35% nickel, used in stainless steel and corrosion-resistant alloys.',
        overview:
          'Ferronickel is a ferroalloy that contains about 35% nickel and 65% iron. It is a shiny, metallic solid material produced by the rotary kiln-electric furnace (RKEF) smelting process from lateritic nickel ores.',
        detailedDescription:
          'Also produced from the carbothermic reduction of serpentinic minerals (serpentine, limonite, garnierite). Produced as small ingots or water-granulated "beans" convenient for alloy-making furnaces. Can substitute for nickel pellets or nickel cathodes with potential cost savings. Low-carbon ferronickel can be used directly in stainless steel manufacture. High-carbon ferronickel can have silicon content as high as 3%.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Ni ~35%, Fe ~65%',
        specTable: [
          { parameter: 'Nickel (Ni)', value: '~35%' },
          { parameter: 'Iron (Fe)', value: '~65%' },
          { parameter: 'Silicon (Si) — high-C grade', value: 'Up to 3%' },
          { parameter: 'Form', value: 'Small ingots or water-granulated beans' },
        ],
        variants: ['Low-carbon Ferro Nickel', 'High-carbon Ferro Nickel'],
        productionMethod:
          'RKEF (rotary kiln-electric furnace) smelting from lateritic nickel ores. Also from carbothermic reduction of serpentine, limonite, or garnierite.',
        physicalSpecs: ['Small ingots', 'Water-granulated beans'],
        applications: [
          'Stainless steel manufacturing (low-carbon variant)',
          'Special corrosion-resistant alloys',
          'Substitute for nickel pellets or cathodes',
          'Alloy-making furnace additions',
        ],
        keyPoints: [
          'Ni ~35%, Fe ~65%',
          'Shiny metallic solid material',
          'Available as small ingots or water-granulated beans',
          'Low-carbon variant usable directly in stainless steel',
          'Produced by RKEF process from lateritic nickel ores',
        ],
        sourceUrl: 'https://rsfametalik.in/ferro-nickel/',
        image: '/contact_yard.jpg',
      },

      /* ─── 2.5 Ferro Niobium ─── */
      {
        name: 'Ferro Niobium',
        slug: 'ferro-niobium',
        shortDescription:
          'Primary source of niobium alloying for HSLA steel — makes steel stronger, lighter, and corrosion-resistant.',
        overview:
          'Ferroniobium (FeNb) is an alloy of iron and niobium containing 60–70% niobium. It is the primary source of niobium alloying for high-strength low-alloy (HSLA) steel.',
        detailedDescription:
          'Ferroniobium makes steel stronger and lighter than pure steel while increasing corrosion resistance. Manufactured in an electric furnace using the aluminothermy method. Also used in smelting of heat-resistant alloys. Niobium is primarily found in oxide minerals of the pyrochlore group in carbonatites and alkaline granite-syenite complexes.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Nb 60–70%',
        specTable: [
          { parameter: 'Niobium (Nb)', value: '60–70%' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
          { parameter: 'Process', value: 'Aluminothermy in electric furnace' },
          { parameter: 'Primary Ore', value: 'Pyrochlore group minerals' },
        ],
        productionMethod:
          'Manufactured in an electric furnace using the aluminothermy method.',
        applications: [
          'High-strength low-alloy (HSLA) steel',
          'Pipeline steels',
          'Automotive advanced steels',
          'Heat-resistant alloys',
        ],
        keyPoints: [
          'Nb 60–70%',
          'Primary niobium alloying source for HSLA steel',
          'Makes steel stronger, lighter, and more corrosion-resistant',
          'Made by aluminothermy in electric furnace',
          'Niobium sourced from pyrochlore minerals in carbonatites',
        ],
        sourceUrl: 'https://rsfametalik.in/ferro-niobium/',
        image: '/contact_yard.jpg',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════ */
  /*  3. ORE & METALS                                        */
  /* ═══════════════════════════════════════════════════════ */
  {
    name: 'ORE & Metals',
    slug: 'ore-and-metals',
    description:
      'Raw and semi-processed metal inputs supporting steel value chain — from ore to metal.',
    image: '/contact_yard.jpg',
    products: [
      /* ─── 3.1 Iron Ore ─── */
      {
        name: 'Iron Ore',
        slug: 'iron-ore',
        shortDescription:
          'Vital raw material in steel production — high iron content fuels manufacturing of steel products.',
        overview:
          'Iron ore, a vital raw material in steel production, is a key player in global industrial processes. Mined from abundant reserves worldwide, its high iron content fuels the manufacturing of essential steel products.',
        detailedDescription:
          'As steel demand continues to rise, iron ore significance in sustaining various industries remains indispensable. Iron ore is fundamental to blast furnace operations, sinter plant feed, and pellet production across the globe.',
        productType: 'Ore & Metal',
        commonSpecs: 'Fe content varies by grade (52–62%+)',
        specTable: [
          { parameter: 'Iron (Fe) content', value: 'Grade-dependent (52–62%+)' },
          { parameter: 'Physical Forms', value: 'Lumps, Fines' },
          { parameter: 'Application', value: 'Blast furnaces, sinter plants, pellet plants' },
        ],
        physicalSpecs: ['Lumps', 'Fines'],
        applications: [
          'Blast furnace feed',
          'Sinter plants',
          'Pellet production',
          'Steel manufacturing',
        ],
        keyPoints: [
          'Vital raw material in global steel production',
          'Supplied in lumps and fines',
          'Fe content varies by grade (52–62%+)',
          'Mined from abundant reserves worldwide',
          'Indispensable as steel demand continues to rise',
        ],
        sourceUrl: 'https://rsfametalik.in/iron-ore/',
        image: '/contact_yard.jpg',
      },

      /* ─── 3.2 Manganese Ore ─── */
      {
        name: 'Manganese Ore',
        slug: 'manganese-ore',
        shortDescription:
          'Key industrial raw material — in ferro and silicomanganese, the most essential ingredients in steel.',
        overview:
          'Mn ore consumption is among the key indicators of industrial development. In the form of ferro and silicomanganese alloys, it provides the most essential ingredients in the production of steel, both crude and stainless.',
        detailedDescription:
          'Mn ores containing iron oxides are reduced in blast furnaces or electric furnaces with carbon to yield ferromanganese, used in steelmaking. Manganese has greater affinity for sulfur than iron, converting low-melting iron sulfide to high-melting manganese sulfide. Without manganese, steel breaks up when hot-rolled or forged. Steels generally contain less than 1% Mn. Available in all kinds: carbonated ore, sinter, etc.',
        productType: 'Ore & Metal',
        commonSpecs: 'Mn 30–48% (grade dependent)',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '30–48% (grade dependent)' },
          { parameter: 'Types available', value: 'Carbonated ore, sinter, others' },
          { parameter: 'Mn in finished steel', value: 'Generally less than 1%' },
          { parameter: 'Reduction', value: 'Blast furnace or electric furnace with carbon' },
        ],
        physicalSpecs: ['Carbonated ore', 'Sinter'],
        productionMethod:
          'Mined from manganese-bearing deposits. Reduced in blast/electric furnaces with carbon to yield ferromanganese.',
        applications: [
          'Ferro manganese production',
          'Silico manganese production',
          'Steel chemistry balancing',
          'Sulfur control in steelmaking',
        ],
        keyPoints: [
          'Key indicator of industrial development',
          'Essential for both crude and stainless steel production',
          'Mn has greater affinity for sulfur than iron',
          'Without Mn, steel breaks up when hot-rolled or forged',
          'Available as carbonated ore, sinter, and other forms',
        ],
        sourceUrl: 'https://rsfametalik.in/manganese-ore/',
        image: '/contact_yard.jpg',
      },

      /* ─── 3.3 Sponge Iron ─── */
      {
        name: 'Sponge Iron',
        slug: 'sponge-iron',
        shortDescription:
          'Crucial intermediate in steel production — high purity, uniform composition, eco-friendly.',
        overview:
          'Sponge iron, a crucial intermediate in steel production, is produced by reducing iron ore in a direct reduction process. It exhibits high purity and uniform composition, contributing to superior steel quality.',
        detailedDescription:
          'Widely used in electric arc furnaces, sponge iron enhances efficiency, reduces greenhouse gas emissions, and ensures cost-effective steel manufacturing. Its adaptability and eco-friendly attributes make sponge iron a pivotal component in modern metallurgy.',
        productType: 'Ore & Metal',
        commonSpecs: 'Fe (metallic) 80–88%, Lump +3mm, Fines 0–3mm',
        specTable: [
          { parameter: 'Iron (Fe) metallic', value: '80–88%' },
          { parameter: 'Lump size', value: '+3 mm' },
          { parameter: 'Fines size', value: '0–3 mm' },
        ],
        physicalSpecs: ['Lump +3 mm', 'Fines 0–3 mm'],
        productionMethod:
          'Produced by reducing iron ore in a direct reduction process (DRI). Oxygen is removed without melting.',
        applications: [
          'Electric arc furnaces (EAF)',
          'Induction furnaces',
          'Mini steel plants',
          'Blended metallic charge',
        ],
        keyPoints: [
          'Produced by direct reduction — high purity, uniform composition',
          'Physical sizes: Lump +3mm, Fines 0–3mm',
          'Enhances furnace efficiency',
          'Reduces greenhouse gas emissions',
          'Cost-effective and eco-friendly',
        ],
        sourceUrl: 'https://rsfametalik.in/sponge-iron/',
        image: '/hero_foundry.jpg',
      },

      /* ─── 3.4 Pig Iron ─── */
      {
        name: 'Pig Iron',
        slug: 'pig-iron',
        shortDescription:
          'Fundamental in iron and steel production — obtained by smelting iron ore in a blast furnace.',
        overview:
          'Pig iron, a fundamental stage in iron and steel production, is obtained by smelting iron ore in a blast furnace. Characterized by high carbon content, pig iron serves as the primary raw material for various steelmaking processes.',
        detailedDescription:
          'Its versatility lies in its ability to be refined into diverse steel grades, making it a cornerstone in the metallurgical industry. Pig iron plays a pivotal role in meeting the growing global demand for steel products.',
        productType: 'Ore & Metal',
        commonSpecs: 'C 3.5–4.5%, Si 1.0–3.0%',
        specTable: [
          { parameter: 'Carbon (C)', value: '3.5–4.5%' },
          { parameter: 'Silicon (Si)', value: '1.0–3.0%' },
          { parameter: 'Production', value: 'Blast furnace smelting of iron ore' },
        ],
        productionMethod:
          'Obtained by smelting iron ore in a blast furnace. Then refined into diverse steel grades.',
        applications: [
          'Foundry castings',
          'Steelmaking hot metal mix',
          'Cast iron production',
          'Machinery cast components',
        ],
        keyPoints: [
          'C 3.5–4.5%, Si 1.0–3.0%',
          'Obtained from blast furnace smelting of iron ore',
          'Fundamental stage in iron and steel production',
          'Can be refined into diverse steel grades',
          'Cornerstone in the metallurgical industry',
        ],
        sourceUrl: 'https://rsfametalik.in/pig-iron/',
        image: '/hero_foundry.jpg',
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════ */
  /*  4. STEEL PRODUCTS                                      */
  /* ═══════════════════════════════════════════════════════ */
  {
    name: 'Steel Products',
    slug: 'steel-products',
    description:
      'Finished and semi-finished steel products supplied across structural, fabrication, and industrial sectors.',
    image: '/products_stack.jpg',
    products: [
      /* ─── 4.1 Billets & Blooms ─── */
      {
        name: 'Billets & Blooms',
        slug: 'billets-and-blooms',
        shortDescription:
          'Semi-finished steel billets and blooms in multiple standard cross-sections.',
        overview:
          'Steel billets and blooms are semi-finished products used as feed for rolling mills and forging. Available in standard cross-sections from 100x100mm to 160x250mm.',
        detailedDescription:
          'Used for rolling into bars, rods, sections, and other downstream steel products. Supplied in carbon, alloy, and special steel grades to meet different industrial requirements.',
        productType: 'Semi-finished Steel',
        commonSpecs: '100x100, 125x125, 160x160, 160x200, 160x250 (mm)',
        specTable: [
          { parameter: '100x100 sq.mm', value: 'Billet' },
          { parameter: '125x125 sq.mm', value: 'Billet' },
          { parameter: '160x160 sq.mm', value: 'Bloom' },
          { parameter: '160x200 mm', value: 'Bloom' },
          { parameter: '160x250 mm', value: 'Bloom' },
        ],
        applications: [
          'Bar and rod rolling',
          'Section rolling',
          'Structural product rolling',
          'Forging feed',
        ],
        keyPoints: [
          'Five standard cross-sections available',
          'Billets: 100x100, 125x125 mm',
          'Blooms: 160x160, 160x200, 160x250 mm',
          'Feed for rolling mills and forging operations',
        ],
        sourceUrl: 'https://rsfametalik.in/steel-products/',
        image: '/products_stack.jpg',
      },

      /* ─── 4.2 Carbon, Alloy & Spring Steel Bars ─── */
      {
        name: 'Carbon & Alloy Steel Bars',
        slug: 'carbon-alloy-steel-bars',
        shortDescription:
          'Full range of carbon, low alloy, and spring steel bars in rounds, RCS, and flats.',
        overview:
          'Carbon, low alloy, and spring steel products supplied across a wide range of cross-sections and grades. Available as rounds, RCS (round corner squares), and flat bars.',
        detailedDescription:
          'Comprehensive range of steel grades covering low carbon, plain carbon, carbon manganese, free cutting, Ni-Cr-Mo, chrome manganese, chrome moly, ball bearing, chrome vanadium, and spring steel grades.',
        productType: 'Finished Steel Product',
        commonSpecs: 'Round: 20–125mm | RCS: 40–125mm | Flat: 70x8 – 360x20mm',
        specTable: [
          { parameter: 'Round Bar Range', value: '20 mm to 125 mm' },
          { parameter: 'RCS (Round Corner Square)', value: '40 mm to 125 mm' },
          { parameter: 'Flat Bar Range', value: '70x8 mm to 360x20 mm' },
          { parameter: 'Low Carbon Steel', value: 'SAE 1008, C20, CLII, AI05' },
          { parameter: 'Plain Carbon Steel', value: 'EN8D, EN42, C30, C40, C45, C50' },
          { parameter: 'Carbon Manganese Steel', value: 'EN 15, 37C15, SAE 1541' },
          { parameter: 'Free Cutting Steel', value: 'EN 1A, SAE 1118, SAE 1140' },
          { parameter: 'Ni, Cr, Mo Grades', value: 'SAE8620, SAE8622, EN353, EN24, 637H 17' },
          { parameter: 'Chrome Manganese Steel', value: '16MnCr5, 20MnCr5, EN 18' },
          { parameter: 'Chrome Moly Steel', value: 'EN 19, SAE 4140, SCM 415' },
          { parameter: 'Ball Bearing Steel', value: 'SAE 52100' },
          { parameter: 'Chrome Vanadium Steel', value: '31 CrV3' },
          { parameter: 'Spring Steel', value: 'EN 45A, 65Si7, SUP 11A, SUP 9, 55Si7, EN47, EN48' },
        ],
        applications: [
          'Shaft manufacturing',
          'General engineering components',
          'Spring manufacturing',
          'Gear and bearing components',
          'Automotive components',
        ],
        keyPoints: [
          'Rounds: 20–125mm, RCS: 40–125mm, Flats: 70x8 to 360x20mm',
          'Over 30 steel grade designations',
          'Includes SAE, EN, and special designation grades',
          'Covers low carbon to high-alloy and spring grades',
        ],
        sourceUrl: 'https://rsfametalik.in/steel-products/',
        image: '/capabilities_worker.jpg',
      },

      /* ─── 4.3 Structural Steel ─── */
      {
        name: 'Structural Steel',
        slug: 'structural-steel',
        shortDescription:
          'Comprehensive structural steel range — angles, channels, beams, pipes, coils, TMT bars, and more.',
        overview:
          'Full range of structural steel products including angles, channels, beams, pipes, wire, sheets, coils, and TMT bars for construction, infrastructure, and fabrication.',
        detailedDescription:
          'Product range includes: MS Angle, MS Channel, Beams/Flat/Round/Square, GI Pipes/GI Wire/MS Pipes/HB Wire, Crane Rails, Tees/Chequered Plates, Bright Bars, Binding wire/Barbed wire, Ingot, MS Sheet/HR Sheet/CR Sheet, MS Coil/HR Coil/CR Coil, GI & GP Coils, Aluminum Coils, TMT Bars.',
        productType: 'Finished Steel Product',
        commonSpecs: 'Full structural range — sections, flat products, wire, coils',
        specTable: [
          { parameter: 'Sections', value: 'MS Angle, MS Channel, Beams, Tees' },
          { parameter: 'Bars & Shapes', value: 'Flat, Round, Square, Bright Bars' },
          { parameter: 'Pipes & Wire', value: 'GI Pipes, GI Wire, MS Pipes, HB Wire' },
          { parameter: 'Rails', value: 'Crane Rails' },
          { parameter: 'Plates', value: 'Chequered Plates' },
          { parameter: 'Wire Products', value: 'Binding wire, Barbed wire' },
          { parameter: 'Sheets', value: 'MS Sheet, HR Sheet, CR Sheet' },
          { parameter: 'Coils', value: 'MS, HR, CR Coils; GI & GP Coils; Aluminum Coils' },
          { parameter: 'Reinforcement', value: 'TMT Bars' },
          { parameter: 'Other', value: 'Ingot' },
        ],
        physicalSpecs: [
          'MS Angle', 'MS Channel', 'Beams', 'GI Pipes', 'MS Pipes',
          'TMT Bars', 'HR/CR Coils', 'GI/GP Coils', 'Aluminum Coils',
        ],
        applications: [
          'Construction and infrastructure',
          'Bridge and structural fabrication',
          'Material handling (crane rails)',
          'Building construction (TMT bars)',
          'Industrial piping systems',
          'Automotive body panels (coils)',
        ],
        keyPoints: [
          'Comprehensive structural steel range',
          'Includes TMT bars for RCC construction',
          'HR, CR, GI, GP coil variants available',
          'Crane rails for material handling',
          'Aluminum coils also available',
        ],
        sourceUrl: 'https://rsfametalik.in/steel-products/',
        image: '/products_stack.jpg',
      },
    ],
  },
];

/* ─── Lookup helpers ─── */

export function getCategoryBySlug(slug: string) {
  return productCatalog.find((category) => category.slug === slug);
}

export function getProductBySlugs(categorySlug: string, productSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const product = category.products.find((item) => item.slug === productSlug);
  if (!product) return null;

  return { category, product };
}
