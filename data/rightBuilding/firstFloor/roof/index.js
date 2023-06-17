export const roof_RB = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
  const parentPath = "ngomon/"

  const roofGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/firstFloor/roof/right.Building.roof.geojson.json",
  });

  roofGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#ab864a",
          },
        },
      ],
    },
  };
  const roofGeojsonLayer2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/firstFloor/roof/right.Building.roof2.geojson.json",
  });
  const roofGeojsonLayer3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/firstFloor/roof/right.Building.roof3.geojson.json",
  });
  const roofGeojsonLayer4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/firstFloor/roof/right.Building.roof4.geojson.json",
  });
  
  roofGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roofGeojsonLayer2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roofGeojsonLayer3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roofGeojsonLayer4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };

  return [
    roofGeojsonLayer,
    roofGeojsonLayer2,
    roofGeojsonLayer3,
    roofGeojsonLayer4,
  ];
};



// ngomon/data/rightBuilding/firstFloor/roof/right.Building.roof.geojson.json
// ngomon/data/rightBuilding/firstFloor/roof/right.Building.roof2.geojson.json
// ngomon/data/rightBuilding/firstFloor/roof/right.Building.roof4.geojson.json
// ngomon/data/rightBuilding/firstFloor/roof/right.Building.roof3.geojson.json