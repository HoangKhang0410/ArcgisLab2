export const doorL_R = (
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

  const door1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.door1.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.door2.geojson.json",
  });
  const decoHoriDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoHoriDoor1.geojson.json",
  });
  const decoHoriDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoHoriDoor2.geojson.json",
  });
  const decoVertDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoVertDoor1.geojson.json",
  });
  const decoVertDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoVertDoor2.geojson.json",
  });
  const decoVertDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoVertDoor3.geojson.json",
  });

  door1GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };
  door2GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#a92f32",
          },
        },
      ],
    },
  };
  decoHoriDoor1GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };
  decoHoriDoor2GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };
  decoVertDoor1GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };
  decoVertDoor2GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };
  decoVertDoor3GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  return [
    door1GeojsonLayer,
    door2GeojsonLayer,
    decoHoriDoor1GeojsonLayer,
    decoHoriDoor2GeojsonLayer,
    decoVertDoor1GeojsonLayer,
    decoVertDoor2GeojsonLayer,
    decoVertDoor3GeojsonLayer,
  ];
};


// ngomon/data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoHoriDoor2.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.door1.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoVertDoor2.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoHoriDoor1.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoVertDoor1.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.decoVertDoor3.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/LDoor/CB.LDoor.door2.geojson.json