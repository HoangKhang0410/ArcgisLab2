export const doorF_R = (
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

  const door1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door1.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door2.geojson.json",
  });
  const door3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door3.geojson.json",
  });
  const door4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door4.geojson.json",
  });
  const decoHoriDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor1.geojson.json",
  });
  const decoHoriDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor3.geojson.json",
  });
  const decoHoriDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor4.geojson.json",
  });
  const decoHoriDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor2.geojson.json",
  });
  const decoVertDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor1.geojson.json",
  });
  const decoVertDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor2.geojson.json",
  });
  const decoVertDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor3.geojson.json",
  });
  const decoVertDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor4.geojson.json",
  });
  const decoVertDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor5.geojson.json",
  });
  const decoVertDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor6.geojson.json",
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
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };
  door3GeojsonLayer.renderer = {
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
  door4GeojsonLayer.renderer = {
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
  decoHoriDoor3GeojsonLayer.renderer = {
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
  decoHoriDoor4GeojsonLayer.renderer = {
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
  decoVertDoor4GeojsonLayer.renderer = {
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
  decoVertDoor5GeojsonLayer.renderer = {
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
  decoVertDoor6GeojsonLayer.renderer = {
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
    door3GeojsonLayer,
    door4GeojsonLayer,
    decoHoriDoor1GeojsonLayer,
    decoHoriDoor2GeojsonLayer,
    decoHoriDoor3GeojsonLayer,
    decoHoriDoor4GeojsonLayer,
    decoVertDoor1GeojsonLayer,
    decoVertDoor2GeojsonLayer,
    decoVertDoor3GeojsonLayer,
    decoVertDoor4GeojsonLayer,
    decoVertDoor5GeojsonLayer,
    decoVertDoor6GeojsonLayer,
  ];
};


// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor3.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor4.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor1.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor5.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor6.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoHoriDoor2.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor4.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor3.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door1.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor2.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door2.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.decoVertDoor1.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door3.geojson.json
// ngomon/data/leftBuilding/secondFloor/doors/FDoor/CB.FDoor.door4.geojson.json