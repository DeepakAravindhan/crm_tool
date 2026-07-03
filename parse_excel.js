const xlsx = require('xlsx');
const fs = require('fs');

try {
  const workbook = xlsx.readFile('data.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  
  // The first row is the main header (row 1), actual headers are row 2 (index 1)
  const data = xlsx.utils.sheet_to_json(sheet, { range: 1, defval: "" });
  
  const cleanData = data.map((row, index) => {
    // Map the excel keys to clean JSON keys based on what we saw
    const id = row["__EMPTY"] || `PRJ-${index + 1}`;
    const name = row["__EMPTY_1"] || "";
    const assigned = row["__EMPTY_2"] || "";
    const cvPending = row["__EMPTY_4"] || "";
    const tvPending = row["__EMPTY_6"] || "";
    const remarks = row["__EMPTY_22"] || "";
    
    // Convert Excel date
    let eventDate = row["__EMPTY_9"];
    if (typeof eventDate === 'number') {
      eventDate = new Date((eventDate - (25567 + 1)) * 86400 * 1000).toISOString().split('T')[0];
    }
    
    return {
      id,
      name,
      assigned,
      cvPending,
      tvPending,
      eventDate: eventDate || "",
      remarks
    };
  }).filter(row => row.name !== ""); // only keep rows with a name
  
  fs.writeFileSync('src/data/projects.json', JSON.stringify(cleanData, null, 2));
  console.log(`Saved ${cleanData.length} records to src/data/projects.json`);

  // Extract unique associates
  const uniqueAssociatesSet = new Set();
  cleanData.forEach(row => {
    if (row.assigned) {
      // Split by commas or and/& if multiple? For now just take the string
      const val = row.assigned.trim();
      if (val) {
        uniqueAssociatesSet.add(val);
      }
    }
  });

  const associates = Array.from(uniqueAssociatesSet).map((name, idx) => {
    return {
      id: `ASC-${String(idx + 1).padStart(3, '0')}`,
      name: name,
      type: "VENDOR", // Default type
      category: "Photography/Editing",
      email: `${name.split(' ')[0].toLowerCase()}@example.com`,
      phone: "+91 00000 00000",
      initials: name.substring(0, 2).toUpperCase()
    };
  });

  fs.writeFileSync('src/data/associates.json', JSON.stringify(associates, null, 2));
  console.log(`Saved ${associates.length} records to src/data/associates.json`);

} catch (e) {
  console.error(e);
}
