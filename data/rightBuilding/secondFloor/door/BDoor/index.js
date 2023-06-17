export const doorB_R = (
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

  const baseGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/base.geojson.json",
  });
  const door1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door1.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door2.geojson.json",
  });
  const door3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door3.geojson.json",
  });
  const door4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door4.geojson.json",
  });
  const door5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door5.geojson.json",
  });
  const door6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door6.geojson.json",
  });
  const door7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door7.geojson.json",
  });
  const door8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door8.geojson.json",
  });

  const decoHoriDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor1.geojson.json",
  });
  const decoHoriDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor2.geojson.json",
  });
  const decoHoriDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor3.geojson.json",
  });
  const decoHoriDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor4.geojson.json",
  });
  const decoHoriDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor5.geojson.json",
  });
  const decoHoriDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor6.geojson.json",
  });
  const decoHoriDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor7.geojson.json",
  });
  const decoHoriDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor8.geojson.json",
  });
  const decoHoriDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor9.geojson.json",
  });
  const decoHoriDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor10.geojson.json",
  });
  const decoHoriDoor11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor11.geojson.json",
  });
  const decoHoriDoor12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor12.geojson.json",
  });
  const decoHoriDoor13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor13.geojson.json",
  });
  const decoHoriDoor14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor14.geojson.json",
  });
  const decoHoriDoor21GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor21.geojson.json",
  });
  const decoHoriDoor22GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor22.geojson.json",
  });
  const decoVertDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor1.geojson.json",
  });
  const decoVertDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor2.geojson.json",
  });
  const decoVertDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor3.geojson.json",
  });
  const decoVertDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor4.geojson.json",
  });
  const decoVertDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor5.geojson.json",
  });
  const decoVertDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor6.geojson.json",
  });
  const decoVertDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor7.geojson.json",
  });
  const decoVertDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor8.geojson.json",
  });
  const decoVertDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor9.geojson.json",
  });
  const decoVertDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor10.geojson.json",
  });
  const decoVertDoor11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor11.geojson.json",
  });
  const decoVertDoor12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor12.geojson.json",
  });
  const decoVertDoor13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor13.geojson.json",
  });
  const decoVertDoor14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor14.geojson.json",
  });
  const decoVertDoor15GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor15.geojson.json",
  });
  const decoVertDoor16GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor16.geojson.json",
  });
  const decoVertDoor17GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor17.geojson.json",
  });
  const decoVertDoor18GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor18.geojson.json",
  });
  const decoVertDoor19GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor19.geojson.json",
  });
  const decoVertDoor20GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor20.geojson.json",
  });
  const decoVertDoor21GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor21.geojson.json",
  });
  const decoVertDoor22GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor22.geojson.json",
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
          size: 1.3,
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
  decoHoriDoor11GeojsonLayer.renderer = {
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
  decoHoriDoor12GeojsonLayer.renderer = {
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
  decoHoriDoor13GeojsonLayer.renderer = {
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
  decoHoriDoor14GeojsonLayer.renderer = {
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
  decoHoriDoor21GeojsonLayer.renderer = {
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
  decoHoriDoor22GeojsonLayer.renderer = {
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
          size: 1.3,
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
          size: 1.3,
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
  decoVertDoor11GeojsonLayer.renderer = {
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
  decoVertDoor12GeojsonLayer.renderer = {
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
  decoVertDoor13GeojsonLayer.renderer = {
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
  decoVertDoor14GeojsonLayer.renderer = {
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
  decoVertDoor15GeojsonLayer.renderer = {
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
  decoVertDoor16GeojsonLayer.renderer = {
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
  decoVertDoor17GeojsonLayer.renderer = {
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
  decoVertDoor18GeojsonLayer.renderer = {
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
  decoVertDoor19GeojsonLayer.renderer = {
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
  decoVertDoor20GeojsonLayer.renderer = {
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
  decoVertDoor21GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.3,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };
  decoVertDoor22GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.3,
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
    decoHoriDoor11GeojsonLayer,
    decoHoriDoor12GeojsonLayer,
    decoHoriDoor13GeojsonLayer,
    decoHoriDoor14GeojsonLayer,

    decoHoriDoor21GeojsonLayer,
    decoHoriDoor22GeojsonLayer,
    decoVertDoor1GeojsonLayer,
    decoVertDoor2GeojsonLayer,
    decoVertDoor3GeojsonLayer,
    decoVertDoor4GeojsonLayer,
    decoVertDoor5GeojsonLayer,
    decoVertDoor6GeojsonLayer,
    decoVertDoor7GeojsonLayer,
    decoVertDoor8GeojsonLayer,
    decoVertDoor9GeojsonLayer,
    decoVertDoor10GeojsonLayer,
    decoVertDoor11GeojsonLayer,
    decoVertDoor12GeojsonLayer,
    decoVertDoor13GeojsonLayer,
    decoVertDoor14GeojsonLayer,
    decoVertDoor15GeojsonLayer,
    decoVertDoor16GeojsonLayer,
    decoVertDoor17GeojsonLayer,
    decoVertDoor18GeojsonLayer,
    decoVertDoor19GeojsonLayer,
    decoVertDoor20GeojsonLayer,
    decoVertDoor21GeojsonLayer,
    decoVertDoor22GeojsonLayer,
  ];
};



// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor11.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/base.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor12.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor14.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor1.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor13.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor2.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor10.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor22.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor4.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor21.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor5.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor6.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor9.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor3.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor7.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoHoriDoor8.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor1.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor10.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor12.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor11.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor13.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor15.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor18.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor16.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor14.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor19.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor17.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor20.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor2.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor21.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor22.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor4.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor3.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor5.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor9.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door3.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door2.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door1.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door4.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor8.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor6.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door6.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door7.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door5.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.decoVertDoor7.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/BDoor/RB.BDoor.door8.geojson.json