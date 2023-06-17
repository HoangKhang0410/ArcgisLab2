export const floor_sf = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
  const parentPath = "ngomon/"

  const floorGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/floor/floor.geojson.json",
  });

  const floorGeojsonLayer2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/floor/floor.part2.geojson.json",
  });

  const floorGeojsonLayer3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/floor/floor.part3.geojson.json",
  });

  const floorGeojsonLayer4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/floor/floor.part4.geojson.json",
  });

  const floorGeojsonLayer5 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/floor/floor.part5.geojson.json",
  });

  floorGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  floorGeojsonLayer2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  floorGeojsonLayer3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  floorGeojsonLayer4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  floorGeojsonLayer5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  return [
    floorGeojsonLayer,
    floorGeojsonLayer2,
    floorGeojsonLayer3,
    floorGeojsonLayer4,
    floorGeojsonLayer5,
  ];
};


// ngomon/data/leftBuilding/secondFloor/floor/floor.part3.geojson.json
// ngomon/data/leftBuilding/secondFloor/floor/floor.geojson.json
// ngomon/data/leftBuilding/secondFloor/floor/floor.part2.geojson.json
// ngomon/data/leftBuilding/secondFloor/floor/floor.part4.geojson.json
// ngomon/data/leftBuilding/secondFloor/floor/floor.part5.geojson.json