/**
 * ===================================================================
 * KADIRUR GRAMA PANCHAYAT - WEBGIS SPATIAL INFORMATION SYSTEM
 * Interactive Spatial Engine & Application Logic
 * ===================================================================
 */

// Data Store: Points of Interest in Kadirur Grama Panchayat
const kadirurGeoData = [
  {
    id: 'poi-1',
    name: 'Kadirur Grama Panchayat Office',
    malayalam: 'കതിരൂർ ഗ്രാമപഞ്ചായത്ത് ഓഫീസ്',
    category: 'admin',
    categoryName: 'Administrative HQ',
    coords: [11.7612, 75.5265],
    ward: 'Ward 11 (Kadirur Central)',
    desc: 'Main administrative headquarters of Kadirur Grama Panchayat providing civic administration, local planning, K-SMART, and LSGD welfare services.',
    icon: 'fa-landmark',
    color: '#3b82f6',
    contact: '0490 2306564'
  },
  {
    id: 'poi-2',
    name: 'Kadirur Village Office',
    malayalam: 'കതിരൂർ വില്ലേജ് ഓഫീസ്',
    category: 'admin',
    categoryName: 'Revenue & Land Records',
    coords: [11.7628, 75.5252],
    ward: 'Ward 10 (Town North)',
    desc: 'Government revenue department office handling land registration records, certificates, and survey taxations for Kadirur revenue village.',
    icon: 'fa-building-columns',
    color: '#3b82f6',
    contact: '0490 2307120'
  },
  {
    id: 'poi-3',
    name: 'Kathiroor Suryanarayana Temple',
    malayalam: 'കതിരൂർ സൂര്യനാരായണ ക്ഷേത്രം',
    category: 'heritage',
    categoryName: 'Ancient Heritage',
    coords: [11.7645, 75.5242],
    ward: 'Ward 12 (Temple Ward)',
    desc: 'One of the rarest ancient Sun temples in South India dating to the 13th century or earlier. Renowned for its intricate wood carvings, historic murals, and sacred temple pond.',
    icon: 'fa-sun',
    color: '#f59e0b',
    contact: 'Ancient Monument'
  },
  {
    id: 'poi-4',
    name: 'Ponnyam Ankakkalari Memorial',
    malayalam: 'പൊന്ന്യം അങ്കക്കളരി സ്മാരകം',
    category: 'heritage',
    categoryName: 'Martial Heritage',
    coords: [11.7525, 75.5185],
    ward: 'Ward 5 (Ponnyam East)',
    desc: 'Historic battleground immortalized in Vadakkan Pattukal (Northern Ballads), where legendary master Kathiroor Gurukkal and Thacholi Othenan fought in folklore lore.',
    icon: 'fa-shield-halved',
    color: '#f59e0b',
    contact: 'Cultural Landmark'
  },
  {
    id: 'poi-5',
    name: 'Kadirur Family Health Centre (FHC)',
    malayalam: 'കതിരൂർ കുടുംബാരോഗ്യ കേന്ദ്രം',
    category: 'health',
    categoryName: 'Public Healthcare',
    coords: [11.7592, 75.5288],
    ward: 'Ward 11 (Kadirur Central)',
    desc: 'Upgraded Aardram Family Health Centre offering comprehensive outpatient care, immunization, maternity clinics, lab diagnostics, and lifestyle disease management.',
    icon: 'fa-hospital',
    color: '#ef4444',
    contact: '0490 2306280'
  },
  {
    id: 'poi-6',
    name: 'Govt. Higher Secondary School Kadirur (GHSS)',
    malayalam: 'ഗവ. ഹയർ സെക്കൻഡറി സ്കൂൾ കതിരൂർ',
    category: 'health',
    categoryName: 'Public Education',
    coords: [11.7635, 75.5298],
    ward: 'Ward 10 (Town North)',
    desc: 'Premier government public secondary and higher secondary educational institution in the panchayat with modern smart classrooms and science labs.',
    icon: 'fa-graduation-cap',
    color: '#ef4444',
    contact: 'Est. 1957'
  },
  {
    id: 'poi-7',
    name: 'Kadirur Weavers Co-operative Society',
    malayalam: 'കതിരൂർ നെയ്ത്ത് വ്യവസായ സഹകരണ സംഘം',
    category: 'infra',
    categoryName: 'Traditional Handloom',
    coords: [11.7575, 75.5220],
    ward: 'Ward 8 (Mathaparamba)',
    desc: 'Traditional handloom weaving cluster renowned for GI-tagged Kannur handloom fabrics, cotton shirts, dhotis, and sustainable artisan empowerment.',
    icon: 'fa-industry',
    color: '#10b981',
    contact: 'Co-op Society'
  },
  {
    id: 'poi-8',
    name: 'Kadirur Service Co-operative Bank HQ',
    malayalam: 'കതിരൂർ സർവീസ് സഹകരണ ബാങ്ക്',
    category: 'infra',
    categoryName: 'Financial Hub',
    coords: [11.7608, 75.5272],
    ward: 'Ward 11 (Kadirur Central)',
    desc: 'Leading cooperative banking institution empowering local farmers, small entrepreneurs, self-help groups, and housing development.',
    icon: 'fa-piggy-bank',
    color: '#10b981',
    contact: '0490 2306350'
  },
  {
    id: 'poi-9',
    name: 'Pullyode Stream & Watershed Basin',
    malayalam: 'പുള്ളിയോട് തോട് നീർത്തടം',
    category: 'water',
    categoryName: 'Drainage & Ecology',
    coords: [11.7690, 75.5175],
    ward: 'Ward 2 (Pullyode Central)',
    desc: 'Vital natural freshwater drainage channel and tributary contributing to the Eranholi River basin, supporting paddy cultivation and groundwater recharge.',
    icon: 'fa-water',
    color: '#06b6d4',
    contact: 'Ecology Zone'
  },
  {
    id: 'poi-10',
    name: 'Akshaya e-Center Kadirur',
    malayalam: 'അക്ഷയ ഇ-കേന്ദ്രം കതിരൂർ',
    category: 'admin',
    categoryName: 'Digital Civic Delivery',
    coords: [11.7618, 75.5260],
    ward: 'Ward 11 (Kadirur Central)',
    desc: 'Direct civic interface for Aadhaar, e-District services, K-SMART certificates, utility bill payments, and social security pension biometrics.',
    icon: 'fa-laptop-code',
    color: '#3b82f6',
    contact: 'Digital Citizen Hub'
  },
  {
    id: 'poi-11',
    name: 'Theroor Sri Mahavishnu Temple',
    malayalam: 'തെരൂർ ശ്രീ മഹാവിഷ്ണു ക്ഷേത്രം',
    category: 'heritage',
    categoryName: 'Cultural Shrine',
    coords: [11.7505, 75.5340],
    ward: 'Ward 7 (Theroor)',
    desc: 'Revered historic Vaishnavite temple situated in southern Kadirur with traditional architectural layout and annual festival gatherings.',
    icon: 'fa-om',
    color: '#f59e0b',
    contact: 'Sacred Site'
  },
  {
    id: 'poi-12',
    name: 'Chundanga Agricultural Paddy Wetlands',
    malayalam: 'ചുണ്ടങ്ങ പാടശേഖരം',
    category: 'water',
    categoryName: 'Agricultural Agro-Ecosystem',
    coords: [11.7580, 75.5390],
    ward: 'Ward 13 (Chundanga East)',
    desc: 'Extensive fertile paddy fields under local Krishi Bhavan support, serving as natural flood buffer and vital agro-biodiversity zone.',
    icon: 'fa-seedling',
    color: '#06b6d4',
    contact: 'Krishi Bhavan Kadirur'
  },
  {
    id: 'poi-13',
    name: 'KSEB Electrical Section Office',
    malayalam: 'കെ.എസ്.ഇ.ബി ഇലക്ട്രിക്കൽ സെക്ഷൻ',
    category: 'infra',
    categoryName: 'Public Utility',
    coords: [11.7622, 75.5280],
    ward: 'Ward 10 (Town North)',
    desc: 'Kerala State Electricity Board distribution and maintenance division servicing households, agricultural pumpsets, and commercial loads.',
    icon: 'fa-bolt',
    color: '#10b981',
    contact: '0490 2306233'
  },
  {
    id: 'poi-14',
    name: 'Kadirur Post Office (PIN: 670642)',
    malayalam: 'കതിരൂർ പോസ്റ്റ് ഓഫീസ്',
    category: 'admin',
    categoryName: 'Postal & Speed Post',
    coords: [11.7615, 75.5255],
    ward: 'Ward 11 (Kadirur Central)',
    desc: 'Sub-post office providing India Post postal, parcel, savings bank, and postal life insurance services.',
    icon: 'fa-envelope-open-text',
    color: '#3b82f6',
    contact: 'PIN: 670642'
  }
];

// Kadirur 20 Wards Directory
const kadirurWards = [
  { no: 1, name: 'Pullyode North', mal: 'പുള്ളിയോട് നോർത്ത്', landmark: 'Pullyode LP School & North Stream', type: 'Residential & Agro' },
  { no: 2, name: 'Pullyode Central', mal: 'പുള്ളിയോട് സെൻട്രൽ', landmark: 'Pullyode Juma Masjid & Bridge', type: 'Residential' },
  { no: 3, name: 'Pullyode South', mal: 'പുള്ളിയോട് സൗത്ത്', landmark: 'Muthappan Madappura & Canals', type: 'Agro-Residential' },
  { no: 4, name: 'Ponnyam West', mal: 'പൊന്ന്യം വെസ്റ്റ്', landmark: 'Ponnyam West UP School & Sub-center', type: 'Mixed Urban' },
  { no: 5, name: 'Ponnyam East', mal: 'പൊന്ന്യം ഈസ്റ്റ്', landmark: 'Historic Ankakkalari Memorial Ground', type: 'Cultural Heritage' },
  { no: 6, name: 'Ponnyam Srambi', mal: 'പൊന്ന്യം സ്രാമ്പി', landmark: 'Srambi Civic Center & Handloom Unit', type: 'Artisan Hub' },
  { no: 7, name: 'Theroor', mal: 'തെരൂർ', landmark: 'Theroor Mahavishnu Temple & Tank', type: 'Residential' },
  { no: 8, name: 'Mathaparamba', mal: 'മഠപ്പറമ്പ്', landmark: 'Kadirur Weavers Co-operative Cluster', type: 'Industrial & Co-op' },
  { no: 9, name: 'Kaivallikkal', mal: 'കൈവള്ളിക്കൽ', landmark: 'Kaivallikkal Anganwadi & Health Kiosk', type: 'Residential' },
  { no: 10, name: 'Town North', mal: 'ടൗൺ നോർത്ത്', landmark: 'Govt HSS Kadirur & Village Office', type: 'Institutional' },
  { no: 11, name: 'Kadirur Central (HQ)', mal: 'കതിരൂർ സെൻട്രൽ', landmark: 'Grama Panchayat HQ & Bank', type: 'Administrative Core' },
  { no: 12, name: 'Suryanarayana Temple Ward', mal: 'സൂര്യനാരായണ ക്ഷേത്രം', landmark: 'Kathiroor Sun Temple & Oottupura', type: 'Heritage Core' },
  { no: 13, name: 'Chundanga East', mal: 'ചുണ്ടങ്ങ ഈസ്റ്റ്', landmark: 'Chundanga Paddy Wetlands & Krishi Field', type: 'Paddy & Wetlands' },
  { no: 14, name: 'Chundanga West', mal: 'ചുണ്ടങ്ങ വെസ്റ്റ്', landmark: 'Chundanga Community Hall', type: 'Agro-Residential' },
  { no: 15, name: 'Puliyanambram', mal: 'പുളിയനമ്പ്രം', landmark: 'Puliyanambram Shiva Temple', type: 'Residential' },
  { no: 16, name: 'Manikoth', mal: 'മണിക്കോത്ത്', landmark: 'Manikoth Kavu & Biodiversity Grove', type: 'Eco-Cultural' },
  { no: 17, name: 'Eranjoli Border Ward', mal: 'എരഞ്ഞോളി അതിർത്തി', landmark: 'River Tributary & Check Dam', type: 'River Corridor' },
  { no: 18, name: 'Kavu Ward', mal: 'കാവ് വാർഡ്', landmark: 'Sacred Groves & Community Well', type: 'Ecological' },
  { no: 19, name: 'Kizhakke Kadirur', mal: 'കിഴക്കേ കതിരൂർ', landmark: 'SH-30 Thalassery-Coorg Road junction', type: 'Commercial Corridor' },
  { no: 20, name: 'Paduvilayi Border Ward', mal: 'പടുവിലായി അതിർത്തി', landmark: 'Southern Irrigation Canal & Agro Lands', type: 'Agricultural' }
];

// Approximate Kadirur Panchayat Boundary Polygon Coordinates
const kadirurBoundaryCoords = [
  [11.7745, 75.5180],
  [11.7720, 75.5290],
  [11.7680, 75.5385],
  [11.7610, 75.5450],
  [11.7520, 75.5410],
  [11.7460, 75.5340],
  [11.7450, 75.5220],
  [11.7485, 75.5120],
  [11.7560, 75.5090],
  [11.7650, 75.5110],
  [11.7745, 75.5180]
];

// App State
let mapInstance = null;
let currentLayerGroup = null;
let activeFilter = 'all';
let markersMap = {};
let boundaryPolygon = null;

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initWebGISMap();
  populateWardsGrid();
  setupEventListeners();
  setupScrollSpy();
});

/**
 * Initialize Embedded Leaflet WebGIS Map
 */
function initWebGISMap() {
  const mapCenter = [11.7610, 75.5265]; // Central Kadirur
  const mapZoom = 14;

  // Define Base Tile Layers
  const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | LSGD Kerala'
  });

  const cartoPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; CartoDB &copy; OpenStreetMap | Kadirur WebGIS'
  });

  const esriSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Kadirur High-Resolution Satellite'
  });

  // Create Map Object
  mapInstance = L.map('kadirur-webgis-map', {
    center: mapCenter,
    zoom: mapZoom,
    layers: [osmLayer],
    zoomControl: true
  });

  // Add Layer Switcher Control
  const baseMaps = {
    "OpenStreetMap Standard": osmLayer,
    "Carto Light (Clean Canvas)": cartoPositron,
    "Esri World Satellite": esriSatellite
  };
  L.control.layers(baseMaps, null, { position: 'topright' }).addTo(mapInstance);

  // Add Scale Control
  L.control.scale({ imperial: false, metric: true, position: 'bottomright' }).addTo(mapInstance);

  // Draw Kadirur Grama Panchayat Boundary Polygon
  boundaryPolygon = L.polygon(kadirurBoundaryCoords, {
    color: '#0a6b35',
    weight: 3,
    dashArray: '6, 6',
    fillColor: '#108344',
    fillOpacity: 0.12
  }).addTo(mapInstance);

  boundaryPolygon.bindTooltip("<strong>Kadirur Grama Panchayat</strong><br>Administrative Boundary (~12.30 sq.km)", {
    sticky: true
  });

  // Layer Group for POIs
  currentLayerGroup = L.layerGroup().addTo(mapInstance);

  // Render Markers
  renderMarkers(activeFilter);

  // Coordinate Tracker on Mouse Move
  mapInstance.on('mousemove', (e) => {
    const latSpan = document.getElementById('cursor-lat');
    const lngSpan = document.getElementById('cursor-lng');
    if (latSpan && lngSpan) {
      latSpan.innerText = e.latlng.lat.toFixed(4) + '° N';
      lngSpan.innerText = e.latlng.lng.toFixed(4) + '° E';
    }
  });
}

/**
 * Render Spatial Markers Based on Filter Category
 */
function renderMarkers(filterCategory) {
  if (!currentLayerGroup) return;
  currentLayerGroup.clearLayers();
  markersMap = {};

  const filteredData = filterCategory === 'all' 
    ? kadirurGeoData 
    : kadirurGeoData.filter(item => item.category === filterCategory);

  filteredData.forEach(item => {
    // Custom HTML Marker Icon
    const customIcon = L.divIcon({
      className: 'custom-leaflet-icon',
      html: `
        <div style="
          background-color: ${item.color};
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          box-shadow: 0 3px 8px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 13px;
        ">
          <i class="fa-solid ${item.icon}"></i>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    const marker = L.marker(item.coords, { icon: customIcon });

    // Popup Card Content
    const popupHtml = `
      <div class="custom-popup-card">
        <div class="popup-card-header" style="background: linear-gradient(135deg, ${item.color} 0%, #032b14 100%);">
          <span class="popup-tag">${item.categoryName}</span>
          <h5>${item.name}</h5>
          <div style="font-size: 0.72rem; color: #ffd875; font-family: 'Manjari', sans-serif;">${item.malayalam}</div>
        </div>
        <div class="popup-card-body">
          <p>${item.desc}</p>
          <div class="popup-meta-item">
            <i class="fa-solid fa-map-pin"></i> <span>${item.ward}</span>
          </div>
          <div class="popup-meta-item">
            <i class="fa-solid fa-circle-info"></i> <span>Contact: ${item.contact}</span>
          </div>
          <div class="popup-meta-item">
            <i class="fa-solid fa-compass"></i> <span>${item.coords[0].toFixed(4)}° N, ${item.coords[1].toFixed(4)}° E</span>
          </div>
        </div>
        <div class="popup-card-footer">
          <a href="https://www.google.com/maps/dir/?api=1&destination=${item.coords[0]},${item.coords[1]}" target="_blank" class="popup-link-btn">
            <i class="fa-solid fa-diamond-turn-right"></i> Navigate
          </a>
          <button onclick="showPoiMetadataModal('${item.id}')" class="popup-link-btn" style="border:none; cursor:pointer;">
            <i class="fa-solid fa-circle-info"></i> GIS Specs
          </button>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml);
    marker.addTo(currentLayerGroup);
    markersMap[item.id] = marker;
  });
}

/**
 * Populate 20 Wards Directory Grid
 */
function populateWardsGrid(searchTerm = '') {
  const container = document.getElementById('wards-grid-container');
  if (!container) return;

  container.innerHTML = '';

  const filteredWards = kadirurWards.filter(w => {
    const term = searchTerm.toLowerCase();
    return (
      w.name.toLowerCase().includes(term) ||
      w.mal.toLowerCase().includes(term) ||
      w.landmark.toLowerCase().includes(term) ||
      w.no.toString() === term
    );
  });

  const countBadge = document.getElementById('wards-filter-count');
  if (countBadge) {
    countBadge.innerText = `${filteredWards.length} of 20 Wards`;
  }

  filteredWards.forEach(ward => {
    const card = document.createElement('div');
    card.className = 'ward-card';
    card.innerHTML = `
      <div>
        <div class="ward-card-header">
          <span class="ward-number-badge">Ward ${ward.no}</span>
          <span class="ward-type-tag">${ward.type}</span>
        </div>
        <h4 class="ward-title">${ward.name}</h4>
        <div class="ward-title-malayalam">${ward.mal}</div>
        <div class="ward-landmarks">
          <strong>Key Hub:</strong> ${ward.landmark}
        </div>
      </div>
      <div style="display:flex; gap:8px; margin-top:12px;">
        <button class="ward-action-btn" onclick="zoomToWard(${ward.no})" style="flex:1;">
          <i class="fa-solid fa-location-crosshairs"></i> Locate
        </button>
        <a href="https://ashithgeo.github.io/WebGIS-KADIRUR2/" target="_blank" class="ward-action-btn" style="flex:1; text-align:center; text-decoration:none; justify-content:center;" title="Open in QGIS2Web Interactive Map">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> QGIS Map
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Switch GIS Workbench View (QGIS2Web live iframe vs Local Leaflet Asset Map)
 */
window.switchGisView = function(viewMode) {
  const tabQgis = document.getElementById('tab-live-qgis');
  const tabLeaflet = document.getElementById('tab-wards-leaflet');
  const viewQgis = document.getElementById('view-qgis-iframe');
  const viewLeaflet = document.getElementById('view-leaflet-map');
  const leafletFilters = document.getElementById('leaflet-filter-controls');

  if (viewMode === 'qgis') {
    if (tabQgis) tabQgis.classList.add('active');
    if (tabLeaflet) tabLeaflet.classList.remove('active');
    if (viewQgis) viewQgis.classList.add('active');
    if (viewLeaflet) viewLeaflet.classList.remove('active');
    if (leafletFilters) leafletFilters.style.display = 'none';
  } else {
    if (tabQgis) tabQgis.classList.remove('active');
    if (tabLeaflet) tabLeaflet.classList.add('active');
    if (viewQgis) viewQgis.classList.remove('active');
    if (viewLeaflet) viewLeaflet.classList.add('active');
    if (leafletFilters) leafletFilters.style.display = 'flex';
    if (mapInstance) {
      setTimeout(() => mapInstance.invalidateSize(), 200);
    }
  }
};

/**
 * Zoom to Specific Ward on WebGIS Map
 */
window.zoomToWard = function(wardNumber) {
  // Ensure the Leaflet view is active
  window.switchGisView('leaflet');

  // Smooth scroll to WebGIS Map Section
  const mapElement = document.getElementById('webgis');
  if (mapElement) {
    mapElement.scrollIntoView({ behavior: 'smooth' });
  }

  // Find nearest POI for that ward or center proportionally
  const matchingPoi = kadirurGeoData.find(p => p.ward.includes(`Ward ${wardNumber}`));
  if (matchingPoi && mapInstance) {
    setTimeout(() => {
      mapInstance.flyTo(matchingPoi.coords, 16, { duration: 1.5 });
      const marker = markersMap[matchingPoi.id];
      if (marker) {
        marker.openPopup();
      }
    }, 400);
  } else {
    // Calculate relative spread within Kadirur polygon
    const deltaLat = ((wardNumber % 5) - 2) * 0.003;
    const deltaLng = ((Math.floor(wardNumber / 5)) - 2) * 0.003;
    const targetCoords = [11.7610 + deltaLat, 75.5265 + deltaLng];
    setTimeout(() => {
      mapInstance.flyTo(targetCoords, 15, { duration: 1.2 });
    }, 400);
  }
};

/**
 * Show POI Metadata Modal
 */
window.showPoiMetadataModal = function(poiId) {
  const item = kadirurGeoData.find(p => p.id === poiId);
  if (!item) return;

  const modal = document.getElementById('gis-metadata-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body-content');

  if (modal && title && body) {
    title.innerText = `${item.name} — Spatial Specs`;
    body.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span class="badge" style="background:#eaf6ee; color:#0a6b35; padding:4px 10px; border-radius:4px; font-weight:700;">${item.categoryName}</span>
        <h4 style="margin-top:8px; font-size:1.15rem; color:#074722;">${item.name} (${item.malayalam})</h4>
      </div>
      <table style="width:100%; border-collapse:collapse; font-size:0.875rem; margin-bottom:16px;">
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b;"><strong>Administrative Ward:</strong></td>
          <td style="padding:8px 0; color:#0f172a;">${item.ward}</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b;"><strong>Geographic Coordinates:</strong></td>
          <td style="padding:8px 0; color:#0f172a;">${item.coords[0].toFixed(5)}° N, ${item.coords[1].toFixed(5)}° E</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b;"><strong>Taluk / District:</strong></td>
          <td style="padding:8px 0; color:#0f172a;">Thalassery Taluk, Kannur District</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b;"><strong>Postal PIN:</strong></td>
          <td style="padding:8px 0; color:#0f172a;">670642 (Kadirur P.O.)</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px 0; color:#64748b;"><strong>Contact Reference:</strong></td>
          <td style="padding:8px 0; color:#0f172a;">${item.contact}</td>
        </tr>
      </table>
      <p style="color:#334155; line-height:1.6;">${item.desc}</p>
      <div style="margin-top:20px; display:flex; gap:10px;">
        <a href="https://www.google.com/maps/dir/?api=1&destination=${item.coords[0]},${item.coords[1]}" target="_blank" class="btn btn-primary" style="padding:8px 18px; font-size:0.85rem;">
          <i class="fa-solid fa-location-arrow"></i> Open Directions
        </a>
      </div>
    `;
    modal.classList.add('active');
  }
};

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  // GIS Layer Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      renderMarkers(activeFilter);
    });
  });

  // Map Location Search
  const searchInput = document.getElementById('gis-map-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) return;
      const match = kadirurGeoData.find(p => 
        p.name.toLowerCase().includes(term) ||
        p.malayalam.toLowerCase().includes(term) ||
        p.categoryName.toLowerCase().includes(term) ||
        p.ward.toLowerCase().includes(term)
      );
      if (match && mapInstance) {
        mapInstance.flyTo(match.coords, 16);
        const marker = markersMap[match.id];
        if (marker) marker.openPopup();
      }
    });
  }

  // Wards Search Input
  const wardsSearch = document.getElementById('wards-search-input');
  if (wardsSearch) {
    wardsSearch.addEventListener('input', (e) => {
      populateWardsGrid(e.target.value.trim());
    });
  }

  // Reset Map View Button
  const resetBtn = document.getElementById('btn-reset-map');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (mapInstance && boundaryPolygon) {
        mapInstance.fitBounds(boundaryPolygon.getBounds(), { padding: [30, 30] });
      }
    });
  }

  // Fullscreen Map Button
  const fullBtn = document.getElementById('btn-fullscreen-map');
  if (fullBtn) {
    fullBtn.addEventListener('click', () => {
      const mapContainer = document.getElementById('kadirur-webgis-map');
      if (!document.fullscreenElement) {
        if (mapContainer.requestFullscreen) {
          mapContainer.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  // Modal Close Buttons
  const modalClose = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('gis-metadata-modal');
  if (modalClose && modalBackdrop) {
    modalClose.addEventListener('click', () => modalBackdrop.classList.remove('active'));
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('active');
    });
  }

  // Mobile Hamburger Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('show');
    });
  });

  // Suggestion / Query Form Handler
  const feedbackForm = document.getElementById('kadirur-feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for submitting your suggestion/query to Kadirur Grama Panchayat WebGIS desk! Your ticket reference #KDR-GIS-' + Math.floor(1000 + Math.random() * 9000) + ' has been logged.');
      feedbackForm.reset();
    });
  }
}

/**
 * Setup Active State on Nav Links while Scrolling
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
