export const categories = [

  {
  id: "cat-A",
  name: "Land Preparation & Seeding",
  code: "SECTION A",
  image:"/img/ch/1.svg",
  problem_statements: [

    {
      ps_id: "A1",
      title: "High Cost and Scarcity of Farm Labour for Mechanisation",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Seasonal and open-field crops face acute labour shortages during high-demand operations like land preparation (ploughing, puddling), transplanting, and precision seeding. This shortage, coupled with the rising cost of available labour, leads to delayed sowing, suboptimal field operations, and a significant increase in the overall cost of production. Traditional labour-intensive methods are economically unsustainable."
        }
      ],
      crop_focus: [
        {
          kind: "paragraph",
          text: "Rice, vegetables, banana, ginger, turmeric, tuber crops"
        }
      ],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Customised and Small-Scale Mechanisation: Development of cost-effective, multi-functional, and terrain-specific machinery (e.g., mini-tillers, compact transplanters) suitable for small landholdings and undulating terrain.",
            "Digital Labour Aggregation Platforms (Uberisation): Creation of platforms to connect skilled agricultural labour and machinery operators with farmers on-demand, integrated with geo-tagging and quality rating systems.",
            "Integrated Labour Banks & Mechanisation Services: Models that combine the deployment of trained labour teams with the provision of subsidised/rented farm machinery.",
            "Skill Development and Training Platforms: Virtual reality or gamified mobile-based training modules for machinery operation and maintenance, linked to certification and employment opportunities."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A rice farmer needs a puddling and transplanting crew on a specific day. The solution should enable booking a certified operator with a suitable transplanter via a mobile app, track the service delivery, and facilitate digital payment."
        }
      ]
    },

    {
      ps_id: "A2",
      title: "Inconsistent Quality and Untimely Availability of Planting Materials",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Farmers face unpredictable access to certified, high-yielding, and disease-free planting materials (seeds, saplings, tissue culture plants). The current supply chain is fragmented, lacking robust quality control, traceability, and accurate demand forecasting. This results in the use of sub-standard inputs, leading to poor crop stand, increased disease susceptibility, and low yields."
        }
      ],
      crop_focus: [
        {
          kind: "paragraph",
          text:
            "Vegetables, coconut, rice, spices, banana, tuber crops"
        }
      ],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Quality Certification and Traceability Platforms (Seed-to-Farm): Digital systems using blockchain or secure databases to trace the provenance and quality of planting material from the breeder/nursery to the farmer's field.",
            "Nursery Demand Forecasting and Production Planning Tools: AI/data-driven tools that aggregate farmer demand (based on past trends, projected weather, and market prices) to inform nurseries on optimal production quantities.",
            "Digital Procurement and Integrated Logistics Coordination: E-commerce-like platforms for certified planting materials, integrated with temperature-controlled logistics for timely, on-farm delivery."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A vegetable farmer is buying chili seedlings. The solution provides a QR code linked to the seedling batch, showing the parent plant's disease resistance, germination rate, and nursery accreditation."
        }
      ]
    },

    {
      ps_id: "A3",
      title: "Inadequate and Delayed Soil Testing and Nutrient Management",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Conventional soil testing services are often delayed (weeks to months), generic (providing macro-nutrient data only), and lack actionable, crop-specific recommendations. This prevents timely and precise nutrient management decisions, leading to the overuse of generic fertilisers, soil degradation, high input costs, and environmental pollution."
        }
      ],
      crop_focus: [
        { kind: "paragraph", text: "All crops" }
      ],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Portable, Rapid Soil and Leaf Tissue Diagnostics: Development of handheld or drone-based sensors/devices for real-time (on-field) analysis of macro- and micro-nutrients, soil organic carbon, and pH.",
            "Cropping-System-Based Precision Nutrient Recommendation Engines: AI models that ingest real-time soil data, crop-specific needs, growth stage, and local weather to generate dynamic, variable-rate fertiliser and amendment recommendations.",
            "Digital Soil Health Platforms: Centralised, geo-referenced platforms to map and monitor soil health across districts, providing individualised soil health cards and linking to tailored input purchases."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A farmer uses a portable device to test soil in multiple plots. The associated mobile app instantly recommends the type and exact quantity of NPK and micronutrients required for the current stage of the maize crop."
        }
      ]
    },

    {
      ps_id: "A4",
      title: "Poor Maintenance and Lack of Farm Machinery Support",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Post-sale support for farm machinery, particularly high-value equipment, is fragmented and reactive. Machinery downtime due to lack of real-time diagnostics, remote monitoring, and timely repair services results in significant productivity losses during critical, time-sensitive operations (e.g., harvesting)."
        }
      ],
      crop_focus: [
        {
          kind: "paragraph",
          text: "Spices, tuber crops, all mechanised crops"
        }
      ],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "IoT-based Machinery Telematics and Predictive Diagnostics: Installation of IoT sensors on farm equipment to monitor usage, fuel consumption, and component health, enabling predictive failure alerts.",
            "Real-Time Service Booking and Tracking Platforms: Mobile-first platforms for farmers or custom-hiring centres to instantly book certified local technicians, with service tracking and digital history of repairs.",
            "Local Technician Enablement Platforms: Digital platforms to train, certify, and equip local mechanics with spare parts inventory and diagnostic tools for specific brands of farm machinery."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A harvester develops a fault during the rice harvest window. The IoT system detects an impending hydraulic issue, automatically alerts the custom-hiring centre and dispatches the nearest certified technician with the necessary spare part, minimising downtime."
        }
      ]
    },

    {
      ps_id: "A5",
      title: "Exposure to Climate Risks and Insufficient Responsive Insurance",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Increasing climate variability (unpredictable rainfall, floods, droughts, extreme heat) exposes farmers to severe crop losses. Existing crop insurance and disaster relief mechanisms are often slow, generic, and not responsive to hyperlocal climate events, resulting in low claim-to-premium ratios and insufficient financial safety nets."
        }
      ],
      crop_focus: [
        { kind: "paragraph", text: "All seasonal crops" }
      ],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Hyperlocal Climate Risk Prediction and Advisory Systems: Advanced AI/ML models combining global weather data with local micro-climate sensor data to provide highly accurate, plot-level forecasts for farmers (e.g., hail alerts, precise rainfall windows).",
            "Remote Sensing-Based Automated Crop Loss Assessment: Utilising high-resolution satellite imagery, drones, and AI for automated, objective, and timely assessment of crop damage post-climate event for faster claim processing.",
            "Simplified, Data-Driven Parametric Insurance Products: Development of weather-index or satellite-index based insurance products where payouts are triggered automatically upon crossing a predefined threshold (e.g., rainfall deviation, temperature extremes), eliminating the need for manual loss assessment."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A chili farmer enrolls in a parametric insurance scheme. If the local rainfall recorded by a geo-tagged weather station falls below a threshold for 10 consecutive days during the flowering stage, the farmer automatically receives a pre-agreed payout."
        }
      ]
    }

  ]
},
{
  id: "cat-B",
  name: "Cultivation & Crop Management",
  code: "SECTION B",
  image:"/img/ch/2.svg",
  problem_statements: [

    {
      ps_id: "B1",
      title: "The Constant War Against Pests, Diseases, and Weeds (Reactive Management)",
      problem_statement: [{
        kind: "paragraph",
        text:
          "Current pest and disease management is predominantly reactive—applying chemicals only after visible infestation. This leads to substantial yield loss, promotes pest resistance due to blanket spraying, increases chemical residues in produce, and raises input costs significantly. A shift to a preventative and precision approach is critical."
      }],
      crop_focus: [{ kind: "paragraph", text: "All crops" }],
      gravity: [{ kind: "paragraph", text: "High" }],
      innovation_opportunities: [{
        kind: "list",
        items: [
          "AI- and Sensor-based Early Detection and Diagnosis Systems: Deploying autonomous field scouts, drone-based hyperspectral imaging, or IoT-enabled pheromone traps integrated with AI image recognition for real-time, hyperlocal detection of stress.",
          "On-field Serological and Molecular Probes: Developing simple, rapid, and affordable point-of-care diagnostic kits (similar to COVID-19 rapid tests) for farmers to identify specific viral, bacterial, or fungal pathogens in the field.",
          "Forecasting and Precision Control Technologies: Predictive models that combine weather data, historical disease incidence, and in-field sensor data to forecast outbreaks, enabling variable-rate, site-specific application of biologicals or minimal chemicals."
        ]
      }],
      use_case_example: [{
        kind: "paragraph",
        text:
          "A coconut farmer uses a mobile app linked to a small field camera. The AI detects early signs of Mahali disease on a few leaves, forecasts its spread based on humidity, and recommends the exact location and minimal dosage for biological control."
      }]
    },

    {
      ps_id: "B2",
      title: "Broken and Inefficient Water Systems (Irrigation & Water Use Efficiency)",
      problem_statement: [{
        kind: "paragraph",
        text:
          "Irrigation is a high-cost component of farming. Inefficient water application (flood irrigation) leads to excessive water consumption, ground-water depletion, and reduced farm sustainability. Traditional canal systems often suffer from poor distribution equity and management."
      }],
      crop_focus: [{ kind: "paragraph", text: "All crops" }],
      gravity: [{ kind: "paragraph", text: "High" }],
      innovation_opportunities: [{
        kind: "list",
        items: [
          "Water Budgeting and Smart Irrigation Systems: Low-cost, IoT-enabled soil moisture and micro-climate sensors coupled with AI-driven models to calculate the exact water requirement of the crop (precision irrigation scheduling).",
          "Digital Water User Association (WUA) Platforms: Community-focused digital platforms for equitable distribution of canal water, real-time tracking of water availability, and management of WUA finances and resources.",
          "Canal and Water-Body Networking Tools: Satellite- or drone-based monitoring of irrigation infrastructure (canals, check dams) for leakage detection, siltation assessment, and planning of maintenance activities."
        ]
      }],
      use_case_example: [{
        kind: "paragraph",
        text:
          "A farmer uses a smart irrigation controller that pulls data from soil sensors and weather forecasts. Instead of irrigating for a fixed time, the system delivers only the deficit water volume required for that day, saving 30% water."
      }]
    },

    {
      ps_id: "B3",
      title: "Unpredictable and Destructive Weather (Adaptation and Resilience)",
      problem_statement: [{
        kind: "paragraph",
        text:
          "Increasing frequency of extreme weather events (heat waves, unseasonal rain, high winds) critically disrupts crop cycles, leads to total crop failure, and causes significant volatility in farmer incomes. Farmers lack adequate tools to proactively mitigate these weather-related stresses."
      }],
      crop_focus: [{ kind: "paragraph", text: "All crops" }],
      gravity: [{ kind: "paragraph", text: "High" }],
      innovation_opportunities: [{
        kind: "list",
        items: [
          "Climate-Resilient Crop Management Technologies: Development of automated micro-shelters, intelligent fogging/misting systems, or low-cost passive cooling technologies for high-value crops to manage heat stress.",
          "Stress-Mitigation Bio-inputs (Biostimulants): Research and commercialisation of affordable, highly effective biological inputs (e.g., microbial consortia, plant extracts) that enhance the crop's tolerance to drought, salinity, and heat.",
          "Integrated Weather-Linked Advisory Systems: Systems that combine hyperlocal weather alerts with specific, actionable, and timely field operation recommendations (e.g., 'Postpone spraying,' 'Harden seedlings,' 'Install windbreaks')."
        ]
      }],
      use_case_example: [{
        kind: "paragraph",
        text:
          "Following an alert for a sudden heatwave, a banana farmer receives a recommendation via the app to apply a specific biostimulant solution and initiate scheduled overhead sprinklers to mitigate thermal stress."
      }]
    },

    {
      ps_id: "B4",
      title: "Critical Input Shortages (Fertilizers and Bio-Inputs)",
      problem_statement: [{
        kind: "paragraph",
        text:
          "Unreliable and non-transparent access to quality inputs (fertilizers, chemicals, bio-inputs) due to stockouts, black markets, and high costs results in farmers using suboptimal or spurious products, leading to compromised yields and soil health."
      }],
      crop_focus: [{ kind: "paragraph", text: "All crops" }],
      gravity: [{ kind: "paragraph", text: "Moderate" }],
      innovation_opportunities: [{
        kind: "list",
        items: [
          "IoT-enabled Input Inventory and Supply Chain Systems: Digital platforms that provide real-time visibility into the stock levels of certified inputs at the retailer and distributor level, preventing stockouts.",
          "Digital Input Marketplaces and Databases with Quality Assurance: E-commerce platforms that link farmers directly to certified manufacturers and distributors, coupled with a robust quality rating and traceability system for every input batch."
        ]
      }],
      use_case_example: [{
        kind: "paragraph",
        text:
          "A farmer needs a specific type of organic manure. The platform shows the stock and price at the three nearest certified dealers, allows pre-booking, and guarantees the quality via a digitally verifiable certificate."
      }]
    },

    {
      ps_id: "B5",
      title: "Lack of Simple Tools and Financial Safety Nets (Focus: Rice)",
      problem_statement: [{
        kind: "paragraph",
        text:
          "While basic smartphone adoption is high, rice farmers, in particular, lack easy-to-use, vernacular-based technology tools for critical farm management decisions. Furthermore, financial protection mechanisms (credit, insurance) are often complex, non-integrated, and poorly accessible."
      }],
      crop_focus: [{ kind: "paragraph", text: "Rice" }],
      gravity: [{ kind: "paragraph", text: "Moderate" }],
      innovation_opportunities: [{
        kind: "list",
        items: [
          "Mobile-First, Vernacular Farm Management Tools: Development of simple, icon-driven mobile applications specifically for rice crop management (e.g., calculating fertilizer for specific plot size, water depth monitoring, pest identification).",
          "AEU-based Machinery Access Platforms: Geo-location services to connect farmers to the nearest available machinery rental services associated with Agricultural Extension Units (AEUs).",
          "Integrated Credit and Insurance Platforms: Solutions that digitise a farmer's operational history (e.g., area cultivated, yield data) to provide instant pre-approved credit and automatically link it with a simplified insurance product."
        ]
      }],
      use_case_example: [{
        kind: "paragraph",
        text:
          "A rice farmer in a remote area uses a mobile tool to track their expenditures for the season. This digital record is then automatically used by a financial partner to pre-approve a low-interest loan for the next cultivation cycle."
      }]
    }

  ]
},
{
  id: "cat-C",
  name: "Machinery & Equipment (Custom Hiring & Access)",
  code: "SECTION C",
  image:"/img/ch/3.svg",
  problem_statements: [

    {
      ps_id: "C1",
      title: "Maintenance, Repair, and Service Gaps in Custom Hiring Centres (CHCs)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Custom Hiring Centres (CHCs) and private machinery owners struggle with fragmented service ecosystems. Lack of predictive maintenance and immediate repair support results in prolonged machinery downtime, especially during peak seasons, compromising service delivery to farmers."
        }
      ],
      crop_focus: [
        { kind: "paragraph", text: "All crops" }
      ],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "IoT-based Predictive Maintenance Systems for CHCs: Telematics solutions to monitor equipment health (engine hours, load, temperature) of machinery rented out by CHCs, enabling proactive service scheduling.",
            "Equipment Pooling and Certified Service Platforms: Digital networks that allow CHCs to pool and share machinery, alongside a certified technician network for standardised, fast-response repairs across a region."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "The fleet management system of a CHC alerts the manager that the oil pressure in a rented tractor is dropping. The manager contacts the operator for an immediate check-up, preventing a major engine failure."
        }
      ]
    },

    {
      ps_id: "C2",
      title: "Availability and Timeliness of Machinery (The Last Mile Problem)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Farmers often lack access to the right machinery at the exact critical window (e.g., planting or harvesting), leading to delays and lower quality output. The process of discovering, booking, and receiving reliable machinery is often manual and non-transparent."
        }
      ],
      crop_focus: [
        { kind: "paragraph", text: "All crops" }
      ],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Shared Equipment Platforms with Smart Scheduling: Mobile platforms that display the real-time availability and location of privately-owned and government-subsidised machinery, allowing farmers to book slots with transparent pricing.",
            "Geo-fencing and Discovery Tools: Use of GPS/geo-fencing to match a farmer's field location and required operation (e.g., harvesting 5 acres of groundnut) with the nearest suitable and available equipment."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A farmer needs a specific type of rotavator urgently. They open a discovery app, see three available rotavators within 5 km, compare their rental rates and user ratings, and book the service for the next morning."
        }
      ]
    },

    {
      ps_id: "C3",
      title: "High Cost and Limited Financial Support for Machinery",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "The high capital investment required for purchasing modern, specialised machinery limits its adoption by individual small and marginal farmers, despite subsidies. Existing financial support mechanisms can be slow and complex."
        }
      ],
      crop_focus: [
        { kind: "paragraph", text: "All crops" }
      ],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Pay-Per-Use and SHG-focused Ownership Models: Development of technology systems (e.g., smart locks, usage tracking) that enable ownership models like fractional ownership or rental services for Self-Help Groups (SHGs) and Farmer Producer Organisations (FPOs).",
            "Integrated Scheme Delivery Platforms: Digital solutions that streamline the application, verification, and disbursement process for government subsidies related to farm machinery purchases, linked to certified vendors."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "An FPO uses a pay-per-use model for a combine harvester, where the usage is tracked via an IoT device, and the FPO is billed automatically based on the hours of operation."
        }
      ]
    },

    {
      ps_id: "C4",
      title: "Training and Labour Gaps for Mechanisation",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "The lack of adequately trained operators for advanced farm machinery reduces the effectiveness of mechanisation investment, leads to frequent breakdowns, and limits the adoption of precision agriculture practices."
        }
      ],
      crop_focus: [
        { kind: "paragraph", text: "All crops" }
      ],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Skill Certification and Workforce Linkage Platforms: Digital platforms to register, train (using AR/VR simulators), certify, and link skilled machinery operators with farmers or CHCs seeking their services.",
            "Karmasena Integration Tools (Skilled Labour Force): Solutions specifically designed to onboard, manage, and track the deployment of a government-supported skilled farm labour force (Karmasena or similar initiatives) to ensure quality service delivery."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A recently trained youth receives a digital certification for operating a drone sprayer. The platform then matches them with farms in the area needing drone spraying services, facilitating a contract."
        }
      ]
    },

    {
      ps_id: "C5",
      title: "Limited Scope of Mechanisation (Unmet Needs)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Many crop and terrain-specific farming operations, particularly for niche or high-value crops (e.g., ginger, nutmeg, hillside farming), remain unmechanised due to the lack of cost-effective, user-friendly, and adaptable equipment tailored to local needs."
        }
      ],
      crop_focus: [
        {
          kind: "paragraph",
          text: "All crops, especially Spices, Hill Crops"
        }
      ],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Cost-Effective, User-Friendly Equipment Design (Localised R&D): Solutions to crowdsource or facilitate the design and small-scale manufacturing of simple, affordable tools for difficult operations (e.g., ginger harvesting, banana desuckering).",
            "Modular and Adaptable Mechanisation Systems: Development of core machinery chassis with easily interchangeable modules for various operations (tillage, seeding, spraying, inter-cultivation) suitable for small plots."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A startup develops a low-power, lightweight inter-cultivator module that attaches to an existing tiller, specifically designed for weeding in closely spaced turmeric rows on a slightly sloped field."
        }
      ]
    }

  ]
},
{
  id: "cat-D",
  name: "Harvesting & Post-harvest Handling",
  code: "SECTION D",
  image:"/img/ch/4.svg",
  problem_statements: [

    {
      ps_id: "D1",
      title: "Labour and Skill Shortages in Harvesting/Primary Processing",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Harvesting and initial on-farm processing (e.g., cleaning, sorting) are highly labour-intensive. Acute labour shortages and the lack of skills for handling modern equipment during this critical, time-sensitive phase lead to significant delays and quality degradation."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Small-Scale Mechanised Harvesting Solutions: Development of affordable, portable, and crop-specific harvesting/stripping tools (e.g., for pepper, turmeric, fruits) suitable for small farm sizes.",
            "Mobile/On-Farm Primary Processing Units: Creation of compact, trailer-mounted units for preliminary cleaning, grading, and moisture reduction that can be brought to the field, reducing transport and post-harvest loss.",
            "Decentralised Custom Facilitation Centres (CFCs): Technology solutions to manage and coordinate the deployment of community-owned or FPO-managed primary processing machinery and trained operators."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A collective of pepper farmers books a mobile pepper thresher/cleaner through an FPO platform, which arrives at the farm, processes the freshly harvested pepper berries, and provides a digitally signed quality report."
        }
      ]
    },

    {
      ps_id: "D2",
      title: "Lack of Storage and Cold Chain Infrastructure at the Local Level",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Insufficient access to pre-cooling, cold storage, and modern ambient storage facilities at the village/local body level results in rapid perishability, distress sales immediately after harvest, and significant post-harvest losses, especially for high-value produce."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Modular and Energy-Efficient Cold Storage: Design and deployment of low-cost, off-grid, solar-powered modular cold storage units (e.g., 2-5 MT capacity) suitable for cluster-level installation.",
            "IoT-enabled Ambient Storage and Warehousing Solutions: Smart monitoring systems for non-refrigerated storage (e.g., for spices, grains) to track temperature, humidity, and pest infestation remotely.",
            "Local Body-Level Cold Chain Network Coordination: Digital platforms to manage booking, tracking, and utilisation of available cold storage and pre-cooling facilities by multiple farmers in a local area."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A vegetable farmer uses a mobile app to book a 50 kg slot in the nearest community solar cold storage facility for their harvested tomatoes, extending the shelf life by 10 days until a better market price is available."
        }
      ]
    },

    {
      ps_id: "D3",
      title: "Post-Harvest Loss Mitigation Gaps (Handling and Quality)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Post-harvest losses are high (often 10-40% for perishables) due to rough handling, improper packaging, lack of standardised grading, and poor monitoring during transit."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Smart Packaging and Loss Reduction Technology: Development of bio-degradable, active packaging solutions that extend shelf life, and low-cost sensors for monitoring shock, temperature, and gas composition during transport.",
            "AI-Based Automated Grading and Sorting: Implementation of computer vision systems for automated, fast, and accurate grading/sorting of fruits and vegetables based on size, colour, and defects, ensuring consistent quality.",
            "Real-Time Digital Quality Control Checkpoints: Platforms that enable mandatory digital recording and verification of produce quality (e.g., moisture content, size grade) at every point from farm gate to warehouse."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "At the collection centre, newly harvested mangoes are passed through an AI grader that sorts them into export, premium, and local grades, and records the percentage distribution in the farmer's digital logbook."
        }
      ]
    },

    {
      ps_id: "D4",
      title: "Absence of Common Collection & Processing Facilities (Aggregation)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "The lack of centralised, high-throughput common facilities for collection, cleaning, standardised processing (e.g., milling, drying, oil extraction), and value addition forces farmers to rely on informal, often inefficient, and expensive local processors."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Aggregation and Processing Centre Management Software: ERP or cloud-based systems for FPOs/private operators to efficiently manage operations within common processing centres (scheduling, inventory, resource allocation).",
            "Small-Scale, Modular Value Addition Units: Design and deployment of compact, energy-efficient units for primary processing like spice grinding, oil extraction, or simple fruit pulping suitable for community ownership."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "An FPO manages its Turmeric Processing Centre using a digital platform. Farmers book drying and grinding slots, track the processing status, and the platform calculates the yield and payment automatically."
        }
      ]
    },

    {
      ps_id: "D5",
      title: "Quality Control, Branding, and Awareness Gaps for Local Produce",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Local produce often lacks standardised branding, verifiable quality marks, and effective consumer awareness campaigns, limiting the ability of farmers/FPOs to command premium prices in domestic and export markets."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "District-Level Accredited Lab Integration: Digital systems to link common service centres/FPOs directly with NABL-accredited labs for affordable, fast residue and quality testing.",
            "Digital Branding and Storytelling Tools: Platforms and templates that enable FPOs to easily create verifiable digital narratives (traceability, quality reports, farmer profile) to market their branded produce to consumers.",
            "Consumer-Facing Transparency Platforms: Solutions that allow consumers to scan a QR code on a product to view its traceability, quality certifications, and the farmer/FPO responsible for production."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A consumer scans the QR code on a pack of cardamom. The app shows the residue-test report from a certified lab, the FPO that processed it, and the specific farm cluster where it was grown."
        }
      ]
    }

  ]
},
{
  id: "cat-E",
  name: "Logistics, Marketing & Distribution",
  code: "SECTION E",
  image:"/img/ch/5.svg",
  problem_statements: [

    {
      ps_id: "E1",
      title: "Low Prices and High Intermediary Costs (Market Efficiency)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "The long and inefficient supply chain, dominated by multiple intermediaries, results in a significant price gap between the consumer's payment and the farmer's realisation, leading to low farmer incomes."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "High" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Digital Marketplaces for Direct FPO-to-B2B/B2C Sales: Creation of platforms that facilitate direct transactions between FPOs/large farmers and bulk buyers (retail chains, processors, exporters) or end consumers, cutting out unnecessary layers.",
            "Auction-based and Dynamic Pricing Platforms: Technology solutions for transparent, live e-auctions of aggregated produce at local centres to ensure competitive, real-time pricing."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "An FPO lists 5 tons of potatoes on a B2B digital platform. Multiple institutional buyers bid on the quantity, resulting in the FPO securing a price 15% higher than the local mandi rate."
        }
      ]
    },

    {
      ps_id: "E2",
      title: "Distribution and Transparency Gaps (Traceability in Supply Chain)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Lack of real-time visibility and traceability throughout the distribution chain makes it difficult to pinpoint quality issues, ensure fair pricing, and meet the rising demand for product origin information."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Cold Chain and Condition Monitoring Systems: IoT-based systems for real-time tracking of temperature, humidity, and location of produce inside refrigerated and ambient vehicles during long-haul transit.",
            "Blockchain-enabled Traceability Systems: Secure, tamper-proof ledgers to record every transaction and handling step, ensuring end-to-end transparency from farm gate to retail shelf."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A shipment of exotic vegetables is flagged for a temperature deviation during transit, which is automatically recorded in the blockchain. The buyer can review this anomaly before accepting the shipment."
        }
      ]
    },

    {
      ps_id: "E3",
      title: "High Logistics Costs (Optimisation)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "The high cost and inefficiency of transporting produce due to suboptimal route planning, underutilized vehicle capacity, and lack of organised back-haul opportunities contribute significantly to the final consumer price."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Optimised Logistics and Route Planning Platforms: AI/ML-driven platforms that consolidate loads from multiple farmers/FPOs and generate the most efficient routes, reducing fuel costs and time.",
            "Back-haul/Reverse Logistics Matching Tools: Digital solutions to match agricultural transport vehicles with return loads (e.g., inputs, packaging) to eliminate empty runs."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A logistics startup uses an algorithm to schedule a single temperature-controlled truck to collect produce from four different FPOs along a national highway route, consolidating the load efficiently for the metropolitan market."
        }
      ]
    },

    {
      ps_id: "E4",
      title: "Lack of Digital Market Access (Bidding & Selling)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Many farmers and FPOs still lack the knowledge and technical access to effectively participate in digital national markets (like e-NAM) or utilise modern e-auction and digital marketing channels."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Simplified eNAM Integration Tools: Mobile-first, vernacular interfaces that simplify the process for FPOs to list, grade, and transact their produce on national electronic marketplaces.",
            "Digital Marketing and Catalogue Tools for FPOs: Solutions that allow FPOs to easily create professional digital product catalogues and conduct targeted digital marketing campaigns to potential buyers."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A spice FPO uses a simplified mobile dashboard to upload the quality report and photograph of their latest stock of cloves and list it simultaneously on the state's e-auction platform and a B2B marketplace."
        }
      ]
    },

    {
      ps_id: "E5",
      title: "Branding and Value Addition Limitations (Market Linkage)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Farmers and FPOs lack the capacity, skills, and technological tools to perform high-level value addition (secondary processing) and create successful, distinct market brands for their products."
        }
      ],
      crop_focus: [],
      gravity: [
        { kind: "paragraph", text: "Moderate" }
      ],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Capacity Building and Digital Learning Platforms: Virtual reality or mobile video-based training modules on advanced post-harvest techniques, food safety standards, and value addition processes (e.g., minimal processing).",
            "Value-Add Technology Access Platforms: Solutions to facilitate the sharing, leasing, or subsidised access to specialised value-addition machinery (e.g., advanced packaging, IQF freezing)."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "A group of women entrepreneurs in a village accesses an online module for setting up a small-scale fruit dehydration unit, including SOPs and equipment sourcing links."
        }
      ]
    }

  ]
},
{
  id: "cat-F",
  name: "Preparation For Next Cycle (Foresight & Sustainability)",
  code: "SECTION F",
  image:"/img/ch/6.svg",
  problem_statements: [

    {
      ps_id: "F1",
      title: "Market Intelligence and Forecasting Gaps",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Farmers often make planting decisions based on last season's prices, leading to price crashes (glut) or shortages (scarcity). They lack access to accurate, actionable market intelligence, demand forecasting, and future price predictions."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "AI-driven Crop-Area and Demand Forecasting: Solutions that use satellite imagery, historical data, and consumption patterns to predict next-cycle supply and potential future prices for major crops.",
            "Actionable Price Advisory Services: Tools that provide farmers with customised advice on what to grow, when to harvest, and where to sell based on real-time and predicted market data."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "paragraph",
          text:
            "Before sowing, a farmer checks an advisory tool. The tool suggests reducing the area under tomato and shifting to beans due to an anticipated oversupply of tomatoes in the harvesting window."
        }
      ]
    },

    {
      ps_id: "F2",
      title: "Price Volatility and Absence of Risk Hedging Mechanisms",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Extreme price volatility and lack of accessible price risk management tools (e.g., futures/forwards contracts) leave farmers financially vulnerable to sudden market shifts post-harvest."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Micro-Futures and Forward Contract Platforms: Simplified digital platforms to enable small and marginal farmers or FPOs to lock in prices for a portion of their expected harvest, hedging against future price drops.",
            "Digital Warehousing Receipt Integration: Solutions to digitise warehouse receipts and integrate them with local banks for easy access to post-harvest credit, allowing farmers to store produce and sell when prices improve."
          ]
        }
      ],
      use_case_example: []
    },

    {
      ps_id: "F3",
      title: "Export Quality and Infrastructure Gaps (Spices & High Value Crops)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "High-value crops, especially spices, struggle to meet stringent international residue standards and lack the necessary pre-shipment infrastructure (sorting, grading, fumigation) required for reliable export."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Export Protocol Compliance and Traceability: Digital systems that enforce and document compliance with key export standards (MRLs, GAP) at the farm and processing level.",
            "Cold-Chain Container Logistics Optimisation: Solutions for efficiently managing and booking temperature/humidity-controlled containers for export, integrated with port logistics."
          ]
        }
      ],
      use_case_example: []
    },

    {
      ps_id: "F4",
      title: "Crop Rejuvenation and Biological Threats",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Ageing perennial crops (e.g., coconut, pepper, cashew) require systematic rejuvenation. Farmers also struggle with managing newly emerging biological threats and climate-change-induced pests."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Geo-tagged Asset Inventory and Rejuvenation Planning: Satellite-based tools to map crop age and health, automatically recommending rejuvenation schedules and replanting with certified saplings.",
            "Biosecurity Alert and Response Systems: Rapid diagnostic and communication platforms for newly detected pathogens or pests, linking farmers to immediate control measures."
          ]
        }
      ],
      use_case_example: []
    },

    {
      ps_id: "F5",
      title: "Limited Adoption of Mixed Farming Systems",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Mono-cropping increases climate and market risks. Farmers lack reliable models, technical guidance, and market linkages to transition effectively to diversified, integrated/mixed farming systems (e.g., integrating livestock, apiculture, or horticulture)."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Integrated Farm Planning and Modeling Tools: Software that helps farmers design optimal, profitable mixed-farming models based on land size, resources, and local climate.",
            "Market Linkages for Diverse Outputs: Dedicated digital channels for selling niche products (e.g., honey, fodder, milk) resulting from diversified farming."
          ]
        }
      ],
      use_case_example: []
    }

  ]
},
{
  id: "cat-G",
  name: "Record Keeping, Compliance & Policy Interface",
  code: "SECTION G",
  image:"/img/ch/7.svg",
  problem_statements: [

    {
      ps_id: "G1",
      title: "Poor Record Keeping and Financial Analysis",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Most farmers rely on manual records or memory, making it impossible to calculate the true cost of cultivation, analyse profitability, or access formal credit requiring digital farm ledgers."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Mobile-first, Voice/Image-enabled Farm Ledger Apps: Simple applications allowing farmers to record all inputs, labour, and yields using voice commands or image recognition, automatically calculating Cost of Cultivation.",
            "Automated Financial Health Dashboards: Tools that link farm transaction data (purchases, sales) to a dashboard for quick financial analysis and tax/scheme compliance readiness."
          ]
        }
      ],
      use_case_example: []
    },

    {
      ps_id: "G2",
      title: "Burdensome Legal Compliance and Documentation",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Navigating complex regulations related to land records, subsidies, loans, and environmental compliance is time-consuming and requires significant human interaction."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Digital Land Record Verification & Linking: Solutions that interface with government land records to enable instant, digital verification of ownership/cultivation rights for loan applications or scheme eligibility.",
            "Automated Compliance Checklists: Mobile-based guidance systems that simplify legal requirements (e.g., pesticide use limits, export documentation) into easy-to-follow steps."
          ]
        }
      ],
      use_case_example: []
    },

    {
      ps_id: "G3",
      title: "Limited Incentives and Policy Integration",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "The delivery of government schemes, subsidies, and incentives is often fragmented, delayed, and lacks transparency in targeting and disbursement."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Unified Policy and Scheme Eligibility Platform: A centralised digital interface where farmers can check their eligibility for all central and state schemes and apply using a single application process (e.g., linked to Aadhaar/Land ID).",
            "Targeted Scheme Delivery based on Geo-data: Solutions using satellite imagery and GIS data to verify actual cultivation and target specific scheme benefits (e.g., irrigation subsidies) to the neediest areas."
          ]
        }
      ],
      use_case_example: []
    }

  ]
}
,




{
  id: "cat-H",
  name: "Climate Resilience & Precision Farming",
  code: "THEME 1",
  image:"/img/ch/8.svg",
  problem_statements: [
    {
      ps_id: "H1",
      title: "Climate Resilience & Precision Farming",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Farmers are suffering from unpredictable financial losses due to rapid climate variability, such as sudden excessive rainfall or irregular dry spells. Current reliance on general weather forecasts is insufficient, as they lack localized accuracy, leading to poor planning for sowing, harvesting, and crop selection."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Develop hyper-localized, data-driven climate intelligence systems. There is a need for tools that provide micro-weather predictions and early warnings specifically tailored for village or panchayat levels, enabling proactive rather than reactive decision-making."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "point",
          label: "Concept",
          text: "A \"Micro-Climate Advisory App.\""
        },
        {
          kind: "point",
          label: "Scenario",
          text:
            "A farmer receives a notification 48 hours before an unseasonal storm, specifically predicted for their GPS location. The app suggests delaying the application of fertilizer to prevent washout and recommends a drainage protocol for the specific crop variety they are growing."
        }
      ]
    }
  ]
}
,
{
  id: "cat-I",
  name: "Human-Wildlife Conflict Mitigation",
  code: "THEME 2",
  image:"/img/ch/9.svg",
  problem_statements: [
    {
      ps_id: "I1",
      title: "Human-Wildlife Conflict Mitigation",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Agricultural communities near forest fringes face severe crop destruction from wild boars, elephants, and monkeys. Traditional methods like electric fencing and manual guarding are becoming ineffective as animals adapt, and lethal population control is restricted by law. This leads to massive economic insecurity and physical danger for farmers."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Create smart, non-lethal, and autonomous deterrent systems. Solutions should focus on bio-acoustics, AI-based detection, or safe chemical repellents that scare animals away without causing harm or requiring constant human vigilance."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "point",
          label: "Concept",
          text: "An \"AI-Sentinel Deterrent System.\""
        },
        {
          kind: "point",
          label: "Scenario",
          text:
          "Sensors placed around a banana plantation detect the specific movement pattern of a wild boar at night. The system automatically triggers an ultrasonic sound wave or a specific light frequency known to repel boars, while simultaneously alerting the farmer via smartphone."
        }
      ]
    }
  ]
}
,
{
  id: "cat-J",
  name: "Post-Harvest Storage & Supply Chain",
  code: "THEME 3",
  image:"/img/ch/10.svg",
  problem_statements: [
    {
      ps_id: "J1",
      title: "Post-Harvest Storage & Supply Chain",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Smallholder farmers are forced into \"distress selling\" at low prices immediately after harvest because they lack access to affordable storage facilities. The absence of cold storage and scientific warehousing leads to spoilage from pests, moisture, and temperature fluctuations, particularly for perishable goods."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Develop decentralized, low-cost micro-storage and preservation technologies. Innovations should allow farmers to store produce for 6–12 months to wait for better market prices, or offer dehydration/processing solutions to convert perishables into shelf-stable products."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "point",
          label: "Concept",
          text: "\"Village-Level Micro-Cold Rooms.\""
        },
        {
          kind: "point",
          label: "Scenario",
          text:
            "A cooperative of small farmers utilizes a solar-powered, modular cold storage unit installed at a local Panchayat center. They store their vegetable surplus there for three weeks until market prices stabilize, rather than dumping the produce at a loss."
        }
      ]
    }
  ]
}
,
{
  id: "cat-K",
  name: "Labour Shortage & Automation (Rubber & General)",
  code: "THEME 4",
  image:"/img/ch/11.svg",
  problem_statements: [
    {
      ps_id: "K1",
      title: "Labour Shortage & Automation (Rubber & General)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
          "The agricultural sector, particularly Rubber cultivation, is facing an acute shortage of skilled labour. Tapping rubber trees requires precision skill to avoid damaging the tree; however, the younger workforce is moving away from farming, and relying on migrant labour is often inconsistent and costly."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Create 'de-skilling' tools and affordable robotics. The goal is to mechanize complex tasks (like rubber tapping) so they can be performed by unskilled workers or autonomous machines, ensuring consistency and reducing dependency on a shrinking workforce."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "point",
          label: "Concept",
          text: "Auto-Tapping Device or 'Smart Tapping Knife'"
        },
        {
          kind: "point",
          label: "Scenario",
          text:
          "A rubber plantation owner installs a battery-operated device on trees that automatically taps latex at a pre-set time (e.g., early morning) with perfect depth control, eliminating the need for a skilled tapper to physically visit every tree daily."
        }
      ]
    }
  ]
}
,
{
  id: "cat-L",
  name: "Pest & Disease Diagnostics",
  code: "THEME 5",
  image:"/img/ch/12.svg",
  problem_statements: [
    {
      ps_id: "L1",
      title: "Pest & Disease Diagnostics",
      problem_statement: [
        {
          kind: "paragraph",
          text:
          "Farmers often identify pest and disease outbreaks only after visible damage has occurred, leading to delayed intervention and significant crop loss. The lack of simple, rapid, and affordable diagnostic tools at the field level prevents early detection and precise treatment."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Develop AI-powered diagnostic tools and accessible soil testing kits. Solutions should enable farmers to take a photo of a leaf or soil sample and receive an instant, accurate diagnosis along with a recommended (preferably biological/IPM) treatment plan."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "point",
          label: "Concept",
          text: "Doctor-in-Pocket Crop App."
        },
        {
          kind: "point",
          label: "Scenario",
          text:
          " A cocoa farmer notices yellowing leaves. Using their phone, they scan the leaf. The app analyzes the image, identifies a specific fungal infection, and advises a targeted organic spray dosage rather than a generic chemical pesticide."
        }
      ]
    }
  ]
}
,
{
  id: "cat-M",
  name: "Exotic Fruit Protection (Bats & Squirrels)",
  code: "THEME 6",
  image:"/img/ch/13.svg",
  problem_statements: [
    {
      ps_id: "M1",
      title: "Exotic Fruit Protection (Bats & Squirrels)",
      problem_statement: [
        {
          kind: "paragraph",
          text:
          "Farmers cultivating exotic and high-value fruits face significant losses due to damage caused by bats and squirrels. Conventional protection methods such as netting and fencing are either ineffective, expensive, or labour-intensive, leading to reduced marketable yield and income loss."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Innovate 'smart-shielding' or selective deterrents. Solutions need to protect fruits from aerial attacks without blocking sunlight or requiring expensive manual labor to wrap individual fruits."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "point",
          label: "Concept",
          text: "Solar-Powered Ultrasonic Shield."
        },
        {
          kind: "point",
          label: "Scenario",
          text:
          " A device installed in a Rambutan orchard emits irregular ultrasonic frequencies that are irritating to bats and squirrels but inaudible to humans and pets, creating a 'virtual fence' around the canopy during fruiting season."
        }
      ]
    }
  ]
}
,
{
  id: "cat-N",
  name: "Market Linkage & Value Realization",
  code: "THEME 7",
  image:"/img/ch/14.svg",
  problem_statements: [
    {
      ps_id: "N1",
      title: "Market Linkage & Value Realization",
      problem_statement: [
        {
          kind: "paragraph",
          text:
            "Farmers lack bargaining power and market visibility. They rely on intermediaries who dictate prices, often leading to minimal profit margins. There is no unified platform to showcase inventory availability to bulk buyers or consumers before the harvest, preventing efficient supply chain planning."
        }
      ],
      crop_focus: [],
      gravity: [],
      innovation_opportunities: [
        {
          kind: "list",
          items: [
            "Build integrated digital marketplaces and inventory forecasting platforms. Tools should allow farmers to list \"upcoming harvests,\" connect directly with retailers/exporters, and aggregate produce from multiple small farms to meet bulk orders."
          ]
        }
      ],
      use_case_example: [
        {
          kind: "point",
          label: "Concept",
          text: "\"Farm-to-Fork Aggregation Platform.\""
        },
        {
          kind: "point",
          label: "Scenario",
          text:
            "A group of mushroom farmers uses an app to list their expected yield for next week. A city-based supermarket chain sees the aggregated quantity available and places a pre-order at a fixed fair price, bypassing the middleman agent."
        }
      ]
    }
  ]
}








];
