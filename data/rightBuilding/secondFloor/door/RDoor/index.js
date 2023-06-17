export const doorR_R = (
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
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/base.geojson.json",
  });
  const door1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door1.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door2.geojson.json",
  });
  const door3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door3.geojson.json",
  });
  const door4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door4.geojson.json",
  });
  const door5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door5.geojson.json",
  });
  const door6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door6.geojson.json",
  });
  const door7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door7.geojson.json",
  });
  const door8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door8.geojson.json",
  });
  const door9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door9.geojson.json",
  });
  const door10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door10.geojson.json",
  });
  const door11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door11.geojson.json",
  });
  const door12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door12.geojson.json",
  });
  const decoHoriDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor1.geojson.json",
  });
  const decoHoriDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor2.geojson.json",
  });
  const decoHoriDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor3.geojson.json",
  });
  const decoHoriDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor4.geojson.json",
  });
  const decoHoriDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor5.geojson.json",
  });
  const decoHoriDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor6.geojson.json",
  });
  const decoHoriDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor7.geojson.json",
  });
  const decoHoriDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor8.geojson.json",
  });
  const decoHoriDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor9.geojson.json",
  });
  const decoHoriDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor10.geojson.json",
  });
  const decoHoriDoor11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor11.geojson.json",
  });

  const decoHoriDoor12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor12.geojson.json",
  });
  const decoHoriDoor13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor13.geojson.json",
  });
  const decoHoriDoor14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor14.geojson.json",
  });
  const decoHoriDoor15GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor15.geojson.json",
  });
  const decoHoriDoor16GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor16.geojson.json",
  });
  const decoHoriDoor17GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor17.geojson.json",
  });
  const decoHoriDoor18GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor18.geojson.json",
  });

  const decoVertDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor1.geojson.json",
  });
  const decoVertDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor2.geojson.json",
  });
  const decoVertDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor3.geojson.json",
  });
  const decoVertDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor4.geojson.json",
  });
  const decoVertDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor5.geojson.json",
  });
  const decoVertDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor6.geojson.json",
  });
  const decoVertDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor7.geojson.json",
  });
  const decoVertDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor8.geojson.json",
  });
  const decoVertDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor9.geojson.json",
  });
  const decoVertDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor10.geojson.json",
  });
  const decoVertDoor11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor11.geojson.json",
  });
  const decoVertDoor12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor12.geojson.json",
  });
  const decoVertDoor13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor13.geojson.json",
  });
  const decoVertDoor14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor14.geojson.json",
  });
  const decoVertDoor15GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor15.geojson.json",
  });
  const decoVertDoor16GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor16.geojson.json",
  });
  const decoVertDoor17GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor17.geojson.json",
  });
  const decoVertDoor18GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor18.geojson.json",
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
          size: 1.3,
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
  door11GeojsonLayer.renderer = {
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
  door12GeojsonLayer.renderer = {
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
  decoHoriDoor15GeojsonLayer.renderer = {
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
  decoHoriDoor16GeojsonLayer.renderer = {
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
  decoHoriDoor17GeojsonLayer.renderer = {
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
  decoHoriDoor18GeojsonLayer.renderer = {
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
          size: 1.4,
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
          size: 1.4,
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
          size: 1.4,
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
    door11GeojsonLayer,
    door12GeojsonLayer,
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
    decoHoriDoor15GeojsonLayer,
    decoHoriDoor16GeojsonLayer,
    decoHoriDoor17GeojsonLayer,
    decoHoriDoor18GeojsonLayer,

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
  ];
};


// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor10.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor12.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor1.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor11.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor14.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor18.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/base.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor15.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor13.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor17.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor16.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor2.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor3.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor4.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor8.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor5.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor6.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor1.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor7.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor10.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor11.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor14.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor16.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor18.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoHoriDoor9.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor15.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor17.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor12.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor5.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor4.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor7.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor8.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor9.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor2.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor6.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door1.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor13.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door10.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door11.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.decoVertDoor3.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door12.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door5.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door2.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door4.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door3.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door6.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door7.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door9.geojson.json
// ngomon/data/rightBuilding/secondFloor/door/RDoor/RB.RDoor.door8.geojson.json