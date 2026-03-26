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
          'High-carbon silico manganese is an alloy that contains 2.25–2.5% carbon. It\'s produced by smelting manganese ore with coke and a quartz flux, or by smelting slag from high-carbon ferro manganese. It\'s used as a deoxidizer and alloying element in steel and as a hardening agent in aluminum production.',
        detailedDescription:
          'Dust-free, folded silicomanganese in lumps is not a health hazard when properly handled and stored. Inhalation of manganese vapor oxide fumes can result in acute chemical pneumonia (manganese fever). Prolonged exposure can lead to chronic manganese poisoning with damage to the central nervous system.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 60–68%, Si 14–21%, C 1.5–2%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '60–68%' },
          { parameter: 'Silicon (Si)', value: '14–21%' },
          { parameter: 'Carbon (C)', value: '1.5–2%' },
        ],
        variants: ['Grade: Mn 40-45% / 50-55% / 60-65% / 65-70% / 70-74%'],
        productionMethod:
          'Produced by smelting manganese ore with coke and a quartz flux, or by smelting slag from high-carbon ferro manganese.',
        applications: [
          'Deoxidizer and alloying element in steel production',
          'Increases the strength of steel',
          'Used in the manufacture of stainless steel',
          'Hardening agent in aluminium production',
        ],
        keyPoints: [
          'Mn 60–68%, Si 14–21%, C 1.5–2%',
          'Deoxidizer and alloying element',
          'Multiple grades available based on Mn %',
          'Used to increase steel strength',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/high-carbon-silico-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.2 High Carbon Ferro Manganese ─── */
      {
        name: 'High Carbon Ferro Manganese',
        slug: 'high-carbon-ferro-manganese',
        shortDescription:
          'The largest tonnage ferro alloy — a deoxidizing agent and alloying element in steelmaking.',
        overview:
          'High-carbon ferromanganese, generally with 70–80% Mn and 6–7% C, is the by far the largest tonnage ferro alloy used. It serves as a deoxidizing agent in steelmaking and is an important alloying element. It also has the property of controlling the harmful effect of sulfur.',
        detailedDescription:
          'Manganese combines with sulfur and forms manganese sulfide, which tends to float out of the liquid steel. Manganese has the effect of stabilizing the austenite phase; steels with 12–14% Mn are fully austenitic, used for wear and abrasion-resisting characteristics.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 65–80%, C 6–8%, Si 1.5% max',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '65–80%' },
          { parameter: 'Carbon (C)', value: '6–8%' },
          { parameter: 'Silicon (Si)', value: '1.5% max' },
          { parameter: 'Phosphorus (P)', value: '0.3% max' },
          { parameter: 'Sulfur (S)', value: '0.02-0.05%' },
        ],
        productionMethod:
          'Carbothermic reduction of manganese ores containing both iron and manganese oxides in submerged arc electric furnaces.',
        applications: [
          'Stainless Steel Mills',
          'Automobile Industry',
          'Casting',
          'Steelmaking as deoxidizing agent',
          'Alloying element for steel production',
          'Wear and abrasion-resistant steel production (12-14% Mn steels)',
          'Sulfur control in liquid steel',
        ],
        keyPoints: [
          'Largest tonnage ferro alloy used globally',
          'Mn 65–80%, C 6–8%',
          'Combines with sulfur to form MnS that floats out of melt',
          'Stabilizes austenite phase in high-Mn steels',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/high-carbon-ferro-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.3 High Carbon Ferro Chrome ─── */
      {
        name: 'High Carbon Ferro Chrome',
        slug: 'high-carbon-ferro-chrome',
        shortDescription:
          'One of the most common ferroalloys, used almost exclusively in stainless steel and high chromium steels.',
        overview:
          'High carbon ferrochrome is one of the most common ferroalloys produced and is almost exclusively used in the production of stainless steel and high chromium steels.',
        detailedDescription:
          'Production processes have become more energy and metallurgically efficient through prereduction, preheating, agglomeration of ore, and CO gas utilization.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Cr 57–63%, C 8–9.5% Max, Si 2–4% Max',
        specTable: [
          { parameter: 'Chromium (Cr)', value: '57%–63% (Typical: 58%–60% Min)' },
          { parameter: 'Carbon (C)', value: '8%–9.5% Max' },
          { parameter: 'Silicon (Si)', value: '2%–4% Max' },
          { parameter: 'Phosphorus (P)', value: '0.015%–0.05% Max' },
          { parameter: 'Sulfur (S)', value: '0.05%–0.06% Max' },
        ],
        variants: ['Multiple grades from Cr 58% to 60% Min'],
        productionMethod:
          'Submerged arc smelting in AC furnaces, open arc smelting in DC furnaces, and advanced prereduction routes.',
        applications: [
          'Stainless Steel Mills',
          'Automobile Industry',
          'Casting',
        ],
        keyPoints: [
          'One of the most common ferroalloys produced',
          'Almost exclusively used for stainless and high-Cr steels',
          'Cr typically 58-60% Min',
          'Produced via submerged arc smelting (AC) or open arc smelting (DC)',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/high-carbon-ferro-chrome/',
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
          'LC FeCr is resistant to wear and tear, improves anti-oxidation and corrosion resistance of steel, is resistant to rust and oxidation, and is stable at high temperatures.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Cr 60–65%, C 0.15–0.25% Max',
        specTable: [
          { parameter: 'Chromium (Cr)', value: '60–65% Min' },
          { parameter: 'Carbon (C)', value: '0.15–0.25% Max' },
          { parameter: 'Silicon (Si)', value: '1.5% Max' },
          { parameter: 'Phosphorus (P)', value: '0.05% Max' },
          { parameter: 'Sulfur (S)', value: '0.05% Max' },
        ],
        productionMethod:
          'Produced by fusing chromium ore and lime in a furnace, then adding intermediate-grade ferrochrome silicon to the ladle.',
        applications: [
          'Stainless Steel Mills',
          'Automobile Industry',
          'Casting',
          'Production of stainless steel',
          'Production of acid-resistant steel',
          'Production of heat-resistant steel',
          'Making chrome metal',
          'Making ferrochrome',
        ],
        keyPoints: [
          'Resistant to wear, tear, rust, and oxidation',
          'Improves anti-oxidation and corrosion resistance',
          'Stable at high temperatures',
          'Cr 60-65% Min, C 0.15-0.25% Max',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/low-carbon-ferrochrome/',
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
          'The smelting reaction is characterized by the formation of silicon carbide and SiO gas as intermediary products.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Si 65–75% Min, C 0.05–0.2% Max',
        specTable: [
          { parameter: 'Silicon (Si)', value: '65–75% Min (depending on grade)' },
          { parameter: 'Carbon (C)', value: '0.05–0.2% Max' },
          { parameter: 'Aluminum (Al)', value: '0.5–2.5% Max' },
          { parameter: 'Phosphorus (P)', value: '0.05% Max' },
          { parameter: 'Sulfur (S)', value: '0.05% Max' },
        ],
        variants: ['Option 1 (65-70% Si, 10-150mm)', 'Option 2 (75% Min Si, 10-60mm)', 'LC Option (75% Min Si, LC 0.05% Max)'],
        productionMethod:
          'Carbothermic reduction in submerged arc furnace. Iron ore/scrap provides Fe; quartz/quartzite provides Si.',
        applications: [
          'Stainless Steel Mills',
          'Automobile Industry',
          'Casting Industry',
          'Manufacture of silicon',
          'Corrosion-resistant ferrous silicon alloys',
          'High-temperature-resistant ferrous silicon alloys',
          'Silicon steel for electromotors and transformer cores',
        ],
        keyPoints: [
          'Two standard grades: FeSi50 and FeSi75',
          'Low Carbon variant available (0.05% Max C)',
          'Used in silicon steel for electrical applications',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-silicon/',
        image: '/capabilities_worker.jpg',
      },

      /* ─── 1.6 Low Carbon Silico Manganese ─── */
      {
        name: 'Low Carbon Silico Manganese',
        slug: 'low-carbon-silico-manganese',
        shortDescription:
          'Low-carbon Mn-Si alloy that improves decarburization in stainless and special steel.',
        overview:
          'Low Carbon Silico Manganese (LCSiMn) is a ferrous alloy that contains carbon, silica, and manganese. It is used in the production of steel. LCSiMn has a lower ratio of carbon to silicon and manganese than other varieties.',
        detailedDescription:
          'LCSiMn can contain between 0.1% and 0.5% carbon and more silicon than a high-carbon variety. The lower carbon content improves the decarburization process when reducing slag. LCSiMn and ultra low carbon silico manganese can improve productivity in the manufacture of stainless steel and special steel by eliminating decarburization in the final step.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 53–60%, Si 22–30%, C 0.1–0.5%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '53–60%' },
          { parameter: 'Silicon (Si)', value: '22–30%' },
          { parameter: 'Carbon (C)', value: '0.1–0.5%' },
        ],
        productionMethod:
          'Production in submerged arc furnaces with controlled reduction to maintain low carbon while achieving target Mn and Si.',
        applications: [
          'Stainless Steel Mills',
          'Automobile Industry',
          'Casting',
          'Steel Production',
          'Manufacture of Stainless Steel',
          'Manufacture of Special Steel',
        ],
        keyPoints: [
          'Carbon: 0.1–0.5%',
          'More silicon than high-carbon variety',
          'Improves decarburization process when reducing slag',
          'Eliminates final-step decarburization in stainless production',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/low-carbon-silico-manganese/',
        image: '/capabilities_worker.jpg',
      },

      /* ─── 1.7 Medium Carbon Silico Manganese ─── */
      {
        name: 'Medium Carbon Silico Manganese',
        slug: 'medium-carbon-silico-manganese',
        shortDescription:
          'Medium-carbon Mn-Si alloy used in steel foundries and electrode coating work.',
        overview:
          'Medium carbon silico manganese is a ferrous alloy that contains a high amount of carbon and silicon. It is used in steel foundries, electrode coating work, and other industrial applications.',
        detailedDescription:
          'High-carbon ferro alloys can increase the strength of steel, but too much carbon can make steel more brittle. Medium carbon strikes a balance between adding strength and avoiding excess brittleness.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 53–60%, Si 22–30%, C max 0.5%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '53–60%' },
          { parameter: 'Silicon (Si)', value: '22–30%' },
          { parameter: 'Carbon (C)', value: 'Max 0.5%' },
        ],
        productionMethod:
          'Smelting of manganese ore with silicon-rich inputs in electric arc furnaces with controlled carbon reduction.',
        applications: [
          'Steel foundries',
          'Electrode coating work',
          'Stainless steel',
          'Increases the strength of steel',
          'Hardening agent in aluminium production',
        ],
        keyPoints: [
          'Carbon max 0.5%',
          'Less brittle than high-carbon variants',
          'Used in steel foundries and electrode coatings',
          'Balances strength gain with reduced brittleness risk',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/medium-carbon-silico-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.8 Medium Carbon Ferro Manganese ─── */
      {
        name: 'Medium Carbon Ferro Manganese',
        slug: 'medium-carbon-ferro-manganese',
        shortDescription:
          'Key manganese ferroalloy for steel and casting industries, also used in welding electrodes.',
        overview:
          'Medium carbon ferro manganese is a ferroalloy that contains a high amount of manganese. It\'s a key component in the production of steel and iron.',
        detailedDescription:
          'Used in steel and casting industries to remove sulfur and improve durability, machinability, and malleability. Also used for deoxidizing molten metal, producing E6013 electrodes, and in the welding industry. Ferro manganese powders are useful in the welding industry. Made by the aluminothermic process or by the MOR Process.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 74–85%, C 0.01–3.0%, Si max 3%',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '74–85%' },
          { parameter: 'Carbon (C)', value: '0.01–3.0%' },
          { parameter: 'Silicon (Si)', value: 'Max 3.0%' },
          { parameter: 'Process', value: 'Aluminothermic or MOR Process' },
        ],
        variants: ['FeMn 80', 'FeMn 76', 'FeMn 83 Grades 1-5'],
        productionMethod:
          'Made by the aluminothermic process or by the MOR Process.',
        applications: [
          'Steel and casting industries',
          'Deoxidizing molten metal',
          'E6013 electrodes production',
          'Welding industry',
        ],
        keyPoints: [
          'Mn 74–85%, C 0.01–3.0%',
          'Removes sulfur and improves steel properties',
          'Deoxidizes molten metal',
          'Mainly used to produce E6013 electrodes',
          'Made by aluminothermic or MOR process',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/medium-carbon-ferro-manganese/',
        image: '/products_stack.jpg',
      },

      /* ─── 1.9 Low Carbon Ferro Manganese ─── */
      {
        name: 'Low Carbon Ferro Manganese',
        slug: 'low-carbon-ferro-manganese',
        shortDescription:
          'Low-carbon manganese additive for tool steel, austenitic SS, and welding electrodes.',
        overview:
          'Low carbon ferro manganese is a ferro manganese grade produced by the alumino thermic process. It is used in the steel industry for various applications.',
        detailedDescription:
          'Steel industry uses this grade in the production of tool steel, 18-8 Austenitic non-magnetic SS, and structural steel. MS welding electrodes (E6013) and other electrodes are also produced using it. It is mainly packaged in jumbo bags and steel drums for convenient handling and transport.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Mn 70–80% Min, C 1.0-1.5% Max, Si 1.2% Max',
        specTable: [
          { parameter: 'Manganese (Mn)', value: '70–80% Min' },
          { parameter: 'Carbon (C)', value: '1.0-1.5% Max' },
          { parameter: 'Silicon (Si)', value: '1.2% Max' },
          { parameter: 'Phosphorus (P)', value: '0.20% Max' },
          { parameter: 'Sulfur (S)', value: '0.03% Max' },
        ],
        physicalSpecs: ['Jumbo bags', 'Steel drums'],
        productionMethod:
          'Produced by the aluminothermic process.',
        applications: [
          'Tool Steel',
          '18-8 Austenitic Non-Magnetic Stainless Steel',
          'Structural Steel',
          'MS Welding Electrodes (E6013)',
          'Other Electrodes',
        ],
        keyPoints: [
          'Produced by aluminothermic process',
          'Used in tool steel, structural steel',
          'Used for 18-8 Austenitic non-magnetic SS',
          'Packaged in jumbo bags and steel drums',
          'Also used for E6013 electrode production',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/low-carbon-ferro-manganese/',
        image: '/quality_lab.jpg',
      },

      /* ─── 1.10 Silico Chrome ─── */
      {
        name: 'Silico Chrome',
        slug: 'silico-chrome',
        shortDescription:
          'Iron-chromium-silicon alloy used in abrasives, as deoxidizer, and as intermediate alloy.',
        overview:
          'Silico chrome is an alloy of iron, chromium, and silicon that contains at least 30% chromium and 35% silicon. It\'s used in the production of abrasives and as an intermediate alloy to produce medium, low, and micro-carbon ferro chrome alloys.',
        detailedDescription:
          'Silico chrome serves as a deoxidizer and chromium additive in steelmaking. It is an extremely hard, heat-resistant material used for sanding, polishing, cutting, and grinding processes via its abrasive properties.',
        productType: 'Bulk Ferro Alloy',
        commonSpecs: 'Cr min 30%, Si min 44%, C max 0.10%',
        specTable: [
          { parameter: 'Chromium (Cr)', value: '30% Min' },
          { parameter: 'Silicon (Si)', value: '44% Min' },
          { parameter: 'Carbon (C)', value: '0.10% Max' },
          { parameter: 'Phosphorus (P)', value: '0.05% Max' },
          { parameter: 'Sulfur (S)', value: '0.05% Max' },
        ],
        productionMethod:
          'Produced in electric arc furnaces using chromite ore and silica-rich reductants.',
        applications: [
          'Abrasives Production',
          'Ferro Chrome Production',
          'Steelmaking as deoxidizer and chromium additive',
        ],
        keyPoints: [
          'Contains at least 30% Cr and 44% Si',
          'Used in abrasives — hard, heat-resistant materials',
          'Intermediate alloy for producing LC/MC/micro-C ferro chrome',
          'Dual-action: deoxidizer + chromium additive',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/silico-chrome/',
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
          'Ferro molybdenum is made by reducing technical grade molybdic oxide and ferrosilicon through aluminothermic reduction. After solidification, it is milled and sieved to the right particle size for adding to steel and cast iron.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Mo 60–70%, particle size 10–100 mm, melting point 1900°C',
        specTable: [
          { parameter: 'Molybdenum (Mo)', value: '60–70%' },
          { parameter: 'Carbon (C)', value: '0.05% max' },
          { parameter: 'Sulphur (S)', value: '0.1% max' },
          { parameter: 'Phosphorus (P)', value: '0.05% max' },
          { parameter: 'Silicon (Si)', value: '1.5% max' },
          { parameter: 'Copper (Cu)', value: '0.5% max' },
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
          'Mo 60–70%',
          'Particle size: 10–100 mm',
          'Melting point: 1900°C',
          'Produced via aluminothermic reduction',
          'Milled and sieved to correct particle size',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-molybdenum/',
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
          { parameter: 'Vanadium (V)', value: '50-80%' },
          { parameter: 'Carbon (C)', value: '0.2% max' },
          { parameter: 'Silicon (Si)', value: '2.0% max' },
          { parameter: 'Aluminum (Al)', value: '1.5% max' },
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
          'Vanadium content: 50–80% typically',
          'Grayish silver crystalline solid',
          'Hardener, strengthener, and anti-corrosive additive',
          'Enhances yield strength and toughness',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-vanadium/',
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
          'Titanium is highly reactive with sulfur, carbon, oxygen, and nitrogen, forming insoluble compounds and sequestering them in slag — used for deoxidizing, desulfurization, and denitrogenation. The addition of titanium yields metal with finer grain structure.',
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
          'Forms insoluble compounds with reactive elements',
          'Deoxidizer and desulfurizer',
          'Yields finer grain structure in steel',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-titanium/',
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
          'Produced as small ingots or water-granulated beans convenient for alloy-making furnaces. Can substitute for nickel pellets or nickel cathodes with potential cost savings. Low-carbon ferronickel can be used directly in stainless steel manufacture.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Ni ~35%, Fe ~65%',
        specTable: [
          { parameter: 'Nickel (Ni)', value: '20-40%' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
          { parameter: 'Carbon (C)', value: '0.02-0.05% max' },
          { parameter: 'Silicon (Si)', value: '0.5-3.0% max' },
          { parameter: 'Form', value: 'Small ingots or water-granulated beans' },
        ],
        variants: ['Low-carbon Ferro Nickel', 'High-carbon Ferro Nickel'],
        productionMethod:
          'RKEF (rotary kiln-electric furnace) smelting from lateritic nickel ores. Also from carbothermic reduction of serpentine, limonite, or garnierite.',
        physicalSpecs: ['Small ingots', 'Water-granulated beans'],
        applications: [
          'Stainless steel manufacturing',
          'Special corrosion-resistant alloys',
          'Substitute for nickel pellets or cathodes',
          'Alloy-making furnace additions',
        ],
        keyPoints: [
          'Ni 20-40%, Fe Balance',
          'Shiny metallic solid material',
          'Available as small ingots or water-granulated beans',
          'Produced by RKEF process from lateritic nickel ores',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-nickel/',
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
          'Ferroniobium makes steel stronger and lighter than pure steel while increasing corrosion resistance. Manufactured in an electric furnace using the aluminothermy method. Niobium is primarily found in oxide minerals of the pyrochlore group in carbonatites.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Nb 60–70%',
        specTable: [
          { parameter: 'Niobium (Nb)', value: '60–70%' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
          { parameter: 'Aluminum (Al)', value: '2.0% max' },
          { parameter: 'Silicon (Si)', value: '2.5% max' },
          { parameter: 'Carbon (C)', value: '0.2% max' },
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
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-niobium/',
        image: '/contact_yard.jpg',
      },

      /* ─── 2.6 Ferro Boron ─── */
      {
        name: 'Ferro Boron',
        slug: 'ferro-boron',
        shortDescription:
          'Alloy of iron and boron highly critical for increasing hardenability of low-alloy steels.',
        overview:
          'Ferro Boron is a binary alloy of iron and boron, with boron content typically ranging from 15% to 20%. It is primarily used to increase the hardenability of low-alloy and carbon steels.',
        detailedDescription:
          'Added to steel in very small amounts, Boron significantly improves hardenability, strength, and wear resistance without adversely affecting ductility or formability. Also used in the production of magnetic materials like NdFeB magnets.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'B 15–20%',
        specTable: [
          { parameter: 'Boron (B)', value: '15–20%' },
          { parameter: 'Silicon (Si)', value: '2.0% max' },
          { parameter: 'Aluminum (Al)', value: '0.5% max' },
          { parameter: 'Carbon (C)', value: '0.5% max' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
        ],
        productionMethod:
          'Produced through carbothermic reduction of boric acid and iron oxide in an electric arc furnace.',
        applications: [
          'Increasing hardenability of C and low-alloy steels',
          'Manufacturing NdFeB magnets',
          'Amorphous metals',
          'Welding materials',
        ],
        keyPoints: [
          'B 15–20%',
          'Improves hardenability significantly with small additions',
          'Key component in NdFeB magnetic materials',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-boron/',
        image: '/products_stack.jpg',
      },

      /* ─── 2.7 Ferro Aluminum ─── */
      {
        name: 'Ferro Aluminum',
        slug: 'ferro-aluminum',
        shortDescription:
          'Deoxidizing agent composed of iron and aluminum utilized to remove excess oxygen during steel production.',
        overview:
          'Ferro Aluminum is an alloy containing varying amounts of aluminum and iron, most typically used as a strong deoxidizing agent in steelmaking to remove oxygen and refine the grain size of the steel.',
        detailedDescription:
          'The addition of Ferro Aluminum effectively mitigates porosity and ensures sound casting. It is preferred over pure aluminum because its higher density allows it to penetrate the slag and enter the molten steel more effectively, resulting in better aluminum recovery.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'Al 30–75%',
        specTable: [
          { parameter: 'Aluminum (Al)', value: '30–75%' },
          { parameter: 'Carbon (C)', value: 'Small quantities' },
          { parameter: 'Silicon (Si)', value: 'Small quantities' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
        ],
        productionMethod:
          'Manufactured by melting aluminum and iron scrap together in an induction furnace.',
        applications: [
          'Steelmaking as a strong deoxidizer',
          'Grain refinement in steels',
          'Casting and foundry operations',
          'Aluminothermic reactions',
        ],
        keyPoints: [
          'Al 30–75%',
          'Higher density than pure aluminum ensures better recovery',
          'Prevents porosity in cast steel',
          'Controls grain size in killed steels',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-aluminum/',
        image: '/capabilities_worker.jpg',
      },

      /* ─── 2.8 Ferro Tungsten ─── */
      {
        name: 'Ferro Tungsten',
        slug: 'ferro-tungsten',
        shortDescription:
          'Heavy and hard alloy primarily used to manufacture high-speed steels and tool steels for superior cutting performance.',
        overview:
          'Ferro Tungsten (FeW) is an exceptionally dense and hard ferroalloy containing primarily iron and tungsten. It is a fundamental ingredient for imparting hardness and heat resistance at high temperatures in steels.',
        detailedDescription:
          'W is one of the heaviest alloying elements. Adding Ferro Tungsten significantly increases the melting point, red hardness, and wear resistance of steel. The primary application is in the production of high-speed steel (HSS) and other tool steels where the metal tool must not soften even when operated at red-hot temperatures.',
        productType: 'Noble Ferro Alloy',
        commonSpecs: 'W 70–80%',
        specTable: [
          { parameter: 'Tungsten (W)', value: '70–80%' },
          { parameter: 'Carbon (C)', value: '0.4% max' },
          { parameter: 'Silicon (Si)', value: '0.8% max' },
          { parameter: 'Manganese (Mn)', value: '0.5% max' },
          { parameter: 'Copper (Cu)', value: '0.15% max' },
          { parameter: 'Phosphorus (P)', value: '0.05% max' },
          { parameter: 'Sulfur (S)', value: '0.05% max' },
          { parameter: 'Iron (Fe)', value: 'Balance' },
        ],
        productionMethod:
          'Generally produced in electric arc furnaces using carbothermic reduction of tungsten concentrates or aluminothermy.',
        applications: [
          'High-speed steels (HSS)',
          'Tool steels',
          'Die steels',
          'Superalloys',
          'Hardfacing materials',
        ],
        keyPoints: [
          'W 70–80%',
          'Imparts red hardness to tool steels',
          'Tremendously increases wear resistance and density',
          'Essential for high-temperature cutting applications',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/ferro-tungsten/',
        image: '/quality_lab.jpg',
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
        productType: 'Ore',
        commonSpecs: 'Fe 52–62%+ (Lumps / Fines)',
        specTable: [
          { parameter: 'Iron (Fe) Grade', value: '52%–62%+' },
          { parameter: 'Type', value: 'Ore' },
          { parameter: 'Size', value: 'Lumps / Fines' },
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
          'Fe grade: 52%–62%+',
          'Fundamental to blast furnace operations',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/iron-ore/',
        image: '/contact_yard.jpg',
      },

      /* ─── 3.2 Sponge Iron ─── */
      {
        name: 'Sponge Iron',
        slug: 'sponge-iron',
        shortDescription:
          'Crucial intermediate in steel production — high purity, uniform composition, eco-friendly.',
        overview:
          'Sponge iron, a crucial intermediate in steel production, is produced by reducing iron ore in a direct reduction process. It exhibits high purity and uniform composition, contributing to superior steel quality.',
        detailedDescription:
          'Widely used in electric arc furnaces, sponge iron enhances efficiency, reduces greenhouse gas emissions, and ensures cost-effective steel manufacturing. Its adaptability and eco-friendly attributes make sponge iron a pivotal component in modern metallurgy.',
        productType: 'Direct Reduced Iron (DRI)',
        commonSpecs: 'Fe 80–88%, Lump +3mm, Fines 0–3mm',
        specTable: [
          { parameter: 'Iron (Fe) Grade', value: '80%–88%' },
          { parameter: 'Type', value: 'Direct Reduced Iron (DRI)' },
          { parameter: 'Size (Lump)', value: '+3mm' },
          { parameter: 'Size (Fines)', value: '0–3mm' },
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
          'Produced by direct reduction (DRI)',
          'High purity and uniform composition',
          'Fe Grade: 80%–88%',
          'Physical sizes: Lump +3mm, Fines 0–3mm',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/sponge-iron/',
        image: '/hero_foundry.jpg',
      },

      /* ─── 3.3 Pig Iron ─── */
      {
        name: 'Pig Iron',
        slug: 'pig-iron',
        shortDescription:
          'Fundamental in iron and steel production — obtained by smelting iron ore in a blast furnace.',
        overview:
          'Pig iron, a fundamental stage in iron and steel production, is obtained by smelting iron ore in a blast furnace. Characterized by high carbon content, pig iron serves as the primary raw material for various steelmaking processes.',
        detailedDescription:
          'Its versatility lies in its ability to be refined into diverse steel grades, making it a cornerstone in the metallurgical industry. Pig iron plays a pivotal role in meeting the growing global demand for steel products.',
        productType: 'Blast Furnace Iron',
        commonSpecs: 'C 3.5–4.5%, Si 1.0–3.0%, Ingots',
        specTable: [
          { parameter: 'Carbon (C) Grade', value: '3.5%–4.5%' },
          { parameter: 'Silicon (Si) Grade', value: '1.0%–3.0%' },
          { parameter: 'Type', value: 'Blast Furnace Iron' },
          { parameter: 'Size / Form', value: 'Ingots' },
        ],
        physicalSpecs: ['Ingots'],
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
          'Supplied as ingots',
          'Cornerstone in the metallurgical industry',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/pig-iron/',
        image: '/hero_foundry.jpg',
      },

      /* ─── 3.4 Manganese Ore ─── */
      {
        name: 'Manganese Ore',
        slug: 'manganese-ore',
        shortDescription:
          'Key industrial raw material — in ferro and silicomanganese, the most essential ingredients in steel.',
        overview:
          'Mn ore consumption is among the key indicators of industrial development. In the form of ferro and silicomanganese alloys, it provides the most essential ingredients in the production of steel, both crude and stainless.',
        detailedDescription:
          'Mn ores containing iron oxides are reduced in blast furnaces or electric furnaces with carbon to yield ferromanganese, used in steelmaking. Manganese has greater affinity for sulfur than iron, converting low-melting iron sulfide to high-melting manganese sulfide.',
        productType: 'Ore',
        commonSpecs: 'Mn 30–48% (Lumps / Fines)',
        specTable: [
          { parameter: 'Manganese (Mn) Grade', value: '30%–48%' },
          { parameter: 'Type', value: 'Ore' },
          { parameter: 'Size', value: 'Lumps / Fines' },
          { parameter: 'Mn in finished steel', value: 'Generally less than 1%' },
        ],
        physicalSpecs: ['Lumps', 'Fines'],
        productionMethod:
          'Mined from manganese-bearing deposits. Reduced in blast/electric furnaces with carbon to yield ferromanganese.',
        applications: [
          'Ferro manganese production',
          'Silico manganese production',
          'Steel chemistry balancing',
          'Sulfur control in steelmaking',
        ],
        keyPoints: [
          'Mn Grade: 30%–48%',
          'Supplied in lumps and fines',
          'Essential for crude and stainless steel production',
          'Mn has greater affinity for sulfur than iron',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/manganese-ore/',
        image: '/contact_yard.jpg',
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
          'Steel billets and blooms are semi-finished products used as feed for rolling mills and forging. They are fundamental in producing a wide range of downstream steel products.',
        detailedDescription:
          'Billets are primarily used for rolling into bar and wire rod, while larger cross-section blooms are rolled into heavy structural sections. Supplied in carbon, alloy, and special steel grades to meet various industrial requirements.',
        productType: 'Semi-finished Steel',
        commonSpecs: 'Billets up to 160x160mm, Blooms up to 200x250mm',
        specTable: [
          { parameter: 'Billet Sizes', value: '100x100mm; 125x125mm; 150x150mm; 160x160mm' },
          { parameter: 'Bloom Sizes', value: '160x200mm; 160x250mm; 200x200mm; 200x250mm' },
          { parameter: 'Grades', value: 'Carbon; Alloy; Special Steel Grades' },
        ],
        applications: [
          'Rolling into Bar & Wire Rod (Billets)',
          'Rolling into Heavy Structural Sections (Blooms)',
          'Forging feed',
        ],
        keyPoints: [
          'Billets: 100x100mm to 160x160mm',
          'Blooms: 160x200mm to 200x250mm',
          'Carbon, Alloy, and Special Steel Grades',
          'Primary feed for rolling mills and forging',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/steel-products/',
        image: '/products_stack.jpg',
      },

      /* ─── 4.2 Carbon, Alloy & Spring Steel Bars ─── */
      {
        name: 'Carbon & Alloy Steel Bars',
        slug: 'carbon-alloy-steel-bars',
        shortDescription:
          'Comprehensive range of MS Rounds, Alloy Rounds, and Bright Bars for construction and machining.',
        overview:
          'Carbon, low alloy, and spring steel products supplied across a wide range of cross-sections and grades, primarily available as MS rounds, alloy steel rounds, and bright bars.',
        detailedDescription:
          'Comprehensive range spanning Mild Steel grades for construction, high-tensile alloy grades for automotive, and bright bars for precision machining.',
        productType: 'Finished Steel Product',
        commonSpecs: 'Rounds from 5mm to 100mm+',
        specTable: [
          { parameter: 'Mild Steel (MS) Rounds', value: '10mm to 100mm+' },
          { parameter: 'MS Grades', value: 'IS 2062 Grade A/B; EN8; ASTM A36' },
          { parameter: 'Alloy Steel Rounds', value: '16mm to 100mm+' },
          { parameter: 'Alloy Grades', value: 'EN19; EN24; 4140; 4340; 8620' },
          { parameter: 'Bright Bars', value: '5mm to 65mm' },
          { parameter: 'Bright Bar Grades', value: 'EN8D; EN1A; EN31' },
        ],
        applications: [
          'Construction (MS Rounds)',
          'Machining & Fasteners (MS Rounds)',
          'Automotive Components (Alloy Rounds)',
          'Gears & Shafts (Alloy Rounds)',
          'Precision Machining (Bright Bars)',
          'Pump Shafts (Bright Bars)',
        ],
        keyPoints: [
          'MS Rounds: 10–100mm+',
          'Alloy Steel Rounds: 16–100mm+',
          'Bright Bars: 5–65mm',
          'Covers construction, automotive, and precision machining',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/steel-products/',
        image: '/capabilities_worker.jpg',
      },

      /* ─── 4.3 Structural Steel ─── */
      {
        name: 'Structural Steel',
        slug: 'structural-steel',
        shortDescription:
          'Comprehensive structural steel range — angles, channels, joists/beams, and MS flats for construction.',
        overview:
          'Full structural steel range consisting of sections and flat products critical for construction, infrastructure, and heavy fabrication.',
        detailedDescription:
          'Product range includes Equal Angles, Channels, Joists/Beams (IPE/NPB), and MS Flats. Manufactured to precise standards (IS 2062, ASTM A992) targeting PEB, industrial sheds, and transmission towers.',
        productType: 'Finished Steel Product',
        commonSpecs: 'Angles, Channels, Beams, and MS Flats',
        specTable: [
          { parameter: 'Angles (Equal)', value: '20x20x3mm to 130x130x12mm (IS 2062 E250/E350)' },
          { parameter: 'Channels', value: '75x40mm to 300x90mm (IS 2062 E250/E350)' },
          { parameter: 'Joists / Beams', value: '100x50mm to 600x210mm (IS 2062, ASTM A992)' },
          { parameter: 'MS Flats Width', value: '12mm-100mm' },
          { parameter: 'MS Flats Thick', value: '3mm-25mm (IS 2062)' },
        ],
        physicalSpecs: [
          'Angles (Equal)', 'Channels', 'Joists / Beams (IPE/NPB)', 'MS Flats',
        ],
        applications: [
          'Transmission Towers (Angles)',
          'Sheds & Fabrication (Angles)',
          'Industrial Sheds (Channels)',
          'Chassis Frames (Channels)',
          'Pre-Engineered Buildings / PEB (Beams)',
          'Bridges (Beams)',
          'Grating & Components (MS Flats)',
        ],
        keyPoints: [
          'Manufactured to IS 2062 E250/E350 and ASTM standards',
          'Angles: up to 130x130x12mm',
          'Channels: up to 300x90mm',
          'Joists/Beams: up to 600x210mm',
          'Crucial for pre-engineered buildings and transmission networks',
        ],
        sourceUrl: 'https://shreebhagwatigroup.co.in/steel-products/',
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
