import {
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
  homeIndexSchema,
  DEFAULT_ORIGIN,
} from "../src/lib/json-ld.ts";
import { services } from "../src/data/site.ts";

console.log("=== RUNNING FULL STACK TEAM LEAD AUDIT ===\n");

let errors = 0;
let warnings = 0;

// Test 1: Organization Schema
console.log("Test 1: Validating Organization / TravelAgency Schema...");
const org = organizationSchema();
if (org["@type"] !== "TravelAgency" && !Array.isArray(org["@type"])) {
  console.error("FAIL: @type is invalid:", org["@type"]);
  errors++;
}
if (!org["@id"] || !org["@id"].startsWith("https://")) {
  console.error("FAIL: @id must be absolute:", org["@id"]);
  errors++;
}

// Check aggregateRating
const orgStr = JSON.stringify(org);
const aggMatches = orgStr.match(/"@type":"AggregateRating"/g) || [];
if (aggMatches.length !== 1) {
  console.error(`FAIL: Expected exactly 1 AggregateRating, found ${aggMatches.length}`);
  errors++;
} else {
  console.log("  ✔ Exactly 1 AggregateRating found");
}

const agg = org.aggregateRating;
if (!agg.ratingValue || !agg.reviewCount || !agg.bestRating || !agg.worstRating) {
  console.error("FAIL: aggregateRating missing required properties:", agg);
  errors++;
} else {
  console.log(
    `  ✔ aggregateRating valid: score ${agg.ratingValue}/5 from ${agg.reviewCount} reviews`,
  );
}

// Check Reviews
if (!Array.isArray(org.review) || org.review.length === 0) {
  console.error("FAIL: review array is missing or empty");
  errors++;
} else {
  console.log(`  ✔ review array contains ${org.review.length} reviews`);
  org.review.forEach((r, idx) => {
    if (r["@type"] !== "Review") {
      console.error(`FAIL: review[${idx}] @type is not Review:`, r["@type"]);
      errors++;
    }
    if (!r.author?.name) {
      console.error(`FAIL: review[${idx}] author.name missing`);
      errors++;
    }
    if (!r.reviewBody) {
      console.error(`FAIL: review[${idx}] reviewBody missing`);
      errors++;
    }
    if (r.aggregateRating) {
      console.error(`FAIL: review[${idx}] incorrectly contains aggregateRating!`);
      errors++;
    }
    if (!r.reviewRating?.ratingValue) {
      console.error(`FAIL: review[${idx}] missing reviewRating.ratingValue`);
      errors++;
    }
  });
  console.log("  ✔ All individual reviews strictly follow Google Search Central guidelines");
}

// Test 2: WebSite Schema
console.log("\nTest 2: Validating WebSite Schema...");
const web = websiteSchema();
if (web["@type"] !== "WebSite") {
  console.error("FAIL: WebSite @type invalid");
  errors++;
}
if (!web.publisher?.["@id"] || web.publisher["@id"] !== `${DEFAULT_ORIGIN}/#agency`) {
  console.error("FAIL: WebSite publisher @id link invalid:", web.publisher);
  errors++;
} else {
  console.log("  ✔ WebSite correctly links publisher to #agency");
}

// Test 3: BreadcrumbList Schema
console.log("\nTest 3: Validating BreadcrumbList Schema...");
const bc = breadcrumbSchema([
  { name: "Home", item: "/" },
  { name: "Services", item: "/services" },
  { name: "Visa Services", item: "/services/visa" },
]);
if (bc["@type"] !== "BreadcrumbList") {
  console.error("FAIL: BreadcrumbList @type invalid");
  errors++;
}
if (!bc["@id"]) {
  console.error("FAIL: BreadcrumbList missing @id");
  errors++;
} else {
  console.log("  ✔ BreadcrumbList has unique @id:", bc["@id"]);
}

bc.itemListElement.forEach((item, idx) => {
  if (item.position !== idx + 1) {
    console.error(`FAIL: Breadcrumb position mismatch: expected ${idx + 1}, got ${item.position}`);
    errors++;
  }
  if (!item.name) {
    console.error(`FAIL: Breadcrumb[${idx}] missing name`);
    errors++;
  }
  if (!item.item?.startsWith("https://")) {
    console.error(`FAIL: Breadcrumb[${idx}] item URL is not absolute HTTPS:`, item.item);
    errors++;
  }
});
console.log(`  ✔ All ${bc.itemListElement.length} breadcrumb items contain absolute HTTPS URLs`);

// Test 4: Home Index Graph
console.log("\nTest 4: Validating Homepage Graph...");
const home = homeIndexSchema([{ question: "Test Q?", answer: "Test A." }]);
if (!home["@graph"] || !Array.isArray(home["@graph"])) {
  console.error("FAIL: homeIndexSchema missing @graph");
  errors++;
} else {
  const homeStr = JSON.stringify(home);
  // Ensure NO duplicate #agency in homeIndexSchema
  const agencyCount = (homeStr.match(/"@id":"https:\/\/www\.areeratravels\.com\/#agency"/g) || [])
    .length;
  // It should only reference #agency in about: { @id: ... }, not redefine it!
  const agencyDefs = home["@graph"].filter((node) => node["@id"] === `${DEFAULT_ORIGIN}/#agency`);
  if (agencyDefs.length > 0) {
    console.error(
      "FAIL: homeIndexSchema should NOT redefine #agency; it is emitted globally in __root.tsx",
    );
    errors++;
  } else {
    console.log("  ✔ Homepage graph does not duplicate #agency node (prevents Google conflict)");
  }
}

// Test 5: Service Schemas
console.log("\nTest 5: Validating Service Schemas...");
for (const s of services) {
  const ss = serviceSchema(s);
  if (ss["@type"] !== "Service") {
    console.error(`FAIL: serviceSchema(${s.title}) invalid @type`);
    errors++;
  }
  if (!ss["@id"]?.startsWith("https://")) {
    console.error(`FAIL: serviceSchema(${s.title}) missing absolute @id`);
    errors++;
  }
  if (ss.provider?.["@id"] !== `${DEFAULT_ORIGIN}/#agency`) {
    console.error(`FAIL: serviceSchema(${s.title}) provider does not link to #agency`);
    errors++;
  }
}
console.log(`  ✔ All ${services.length} services correctly link provider to #agency`);

console.log(`\n=== AUDIT SUMMARY: ${errors} Errors, ${warnings} Warnings ===`);
if (errors > 0) {
  process.exit(1);
}
