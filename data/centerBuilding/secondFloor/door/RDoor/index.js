export const doorR_SF = (
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

  const baseGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/base.geojson.json",
  });
  const door1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door1.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door2.geojson.json",
  });
  const door3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door3.geojson.json",
  });
  const door4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door4.geojson.json",
  });
  const door5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door5.geojson.json",
  });
  const door6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door6.geojson.json",
  });
  const door7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door7.geojson.json",
  });
  const door8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door8.geojson.json",
  });
  const door9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door9.geojson.json",
  });
  const door10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door10.geojson.json",
  });
  const decoHoriDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor1.geojson.json",
  });
  const decoHoriDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor2.geojson.json",
  });
  const decoHoriDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor3.geojson.json",
  });
  const decoHoriDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor4.geojson.json",
  });
  const decoHoriDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor5.geojson.json",
  });
  const decoHoriDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor6.geojson.json",
  });
  const decoHoriDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor7.geojson.json",
  });
  const decoHoriDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor8.geojson.json",
  });
  const decoHoriDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor9.geojson.json",
  });
  const decoHoriDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor10.geojson.json",
  });
  const decoVertDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor1.geojson.json",
  });
  const decoVertDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor2.geojson.json",
  });
  const decoVertDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor3.geojson.json",
  });
  const decoVertDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor4.geojson.json",
  });
  const decoVertDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor5.geojson.json",
  });
  const decoVertDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor6.geojson.json",
  });
  const decoVertDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor7.geojson.json",
  });
  const decoVertDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor8.geojson.json",
  });
  const decoVertDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor9.geojson.json",
  });
  const decoVertDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor10.geojson.json",
  });

  baseGeojsonLayer.renderer = {
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
          size: 1.4,
          material: {
            color: "#bb853a",
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
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };
  door5GeojsonLayer.renderer = {
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
  door6GeojsonLayer.renderer = {
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
  door7GeojsonLayer.renderer = {
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
  door8GeojsonLayer.renderer = {
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
  door9GeojsonLayer.renderer = {
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
  door10GeojsonLayer.renderer = {
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
  decoHoriDoor5GeojsonLayer.renderer = {
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
  decoHoriDoor6GeojsonLayer.renderer = {
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
  decoHoriDoor7GeojsonLayer.renderer = {
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
  decoHoriDoor8GeojsonLayer.renderer = {
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
  decoHoriDoor9GeojsonLayer.renderer = {
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
  decoHoriDoor10GeojsonLayer.renderer = {
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
  decoVertDoor7GeojsonLayer.renderer = {
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
  decoVertDoor8GeojsonLayer.renderer = {
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
  decoVertDoor9GeojsonLayer.renderer = {
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
  decoVertDoor10GeojsonLayer.renderer = {
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
    baseGeojsonLayer,
    door1GeojsonLayer,
    door2GeojsonLayer,
    door3GeojsonLayer,
    door4GeojsonLayer,
    door5GeojsonLayer,
    door6GeojsonLayer,
    door7GeojsonLayer,
    door8GeojsonLayer,
    door9GeojsonLayer,
    door10GeojsonLayer,
    decoHoriDoor1GeojsonLayer,
    decoHoriDoor2GeojsonLayer,
    decoHoriDoor3GeojsonLayer,
    decoHoriDoor4GeojsonLayer,
    decoHoriDoor5GeojsonLayer,
    decoHoriDoor6GeojsonLayer,
    decoHoriDoor7GeojsonLayer,
    decoHoriDoor8GeojsonLayer,
    decoHoriDoor9GeojsonLayer,
    decoHoriDoor10GeojsonLayer,
    decoVertDoor1GeojsonLayer,
    decoVertDoor2GeojsonLayer,
    decoVertDoor3GeojsonLayer,
    decoVertDoor4GeojsonLayer,
    decoVertDoor5GeojsonLayer,
    decoVertDoor6GeojsonLayer,
    decoVertDoor7GeojsonLayer,
    decoVertDoor8GeojsonLayer,
    decoVertDoor9GeojsonLayer,
    decoVertDoor10GeojsonLayer
  ];
};


// ngomon/data/centerBuilding/secondFloor/door/RDoor/base.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor10.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor1.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor2.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor3.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor4.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor6.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor5.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor7.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor8.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoHoriDoor9.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor10.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor1.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor2.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor4.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor5.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor3.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor6.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor7.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor8.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.decoVertDoor9.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door1.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door10.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door2.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door3.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door5.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door6.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door4.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door7.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door9.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/RDoor/CB.RDoor.door8.geojson.json
