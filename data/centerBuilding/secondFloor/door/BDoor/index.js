export const doorB_SF = (
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
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/base.geojson.json",
  });
  const door1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door1.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door2.geojson.json",
  });
  const door3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door3.geojson.json",
  });
  const door4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door4.geojson.json",
  });
  const door5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door5.geojson.json",
  });
  const door6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door6.geojson.json",
  });
  const door7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door7.geojson.json",
  });
  const door8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door8.geojson.json",
  });
  const door9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door9.geojson.json",
  });
  const door10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door10.geojson.json",
  });
  const door11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door11.geojson.json",
  });
  const door12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door12.geojson.json",
  });
  const door13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door13.geojson.json",
  });
  const door14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door14.geojson.json",
  });
  const door15GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door15.geojson.json",
  });
  const door16GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door16.geojson.json",
  });
  const door17GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door17.geojson.json",
  });
  const door18GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door18.geojson.json",
  });
  const door19GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door19.geojson.json",
  });
  const door20GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door20.geojson.json",
  });
  const door21GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door21.geojson.json",
  });
  const door22GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door22.geojson.json",
  });
  const decoHoriDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor1.geojson.json",
  });
  const decoHoriDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor2.geojson.json",
  });
  const decoHoriDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor3.geojson.json",
  });
  const decoHoriDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor4.geojson.json",
  });
  const decoHoriDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor5.geojson.json",
  });
  const decoHoriDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor6.geojson.json",
  });
  const decoHoriDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor7.geojson.json",
  });
  const decoHoriDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor8.geojson.json",
  });
  const decoHoriDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor9.geojson.json",
  });
  const decoHoriDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor10.geojson.json",
  });
  const decoHoriDoor11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor11.geojson.json",
  });
  const decoHoriDoor12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor12.geojson.json",
  });
  const decoHoriDoor13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor13.geojson.json",
  });
  const decoHoriDoor14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor14.geojson.json",
  });
  const decoHoriDoor15GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor15.geojson.json",
  });
  const decoHoriDoor16GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor16.geojson.json",
  });
  const decoHoriDoor17GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor17.geojson.json",
  });
  const decoHoriDoor18GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor18.geojson.json",
  });
  const decoHoriDoor19GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor19.geojson.json",
  });
  const decoHoriDoor20GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor20.geojson.json",
  });
  const decoHoriDoor21GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor21.geojson.json",
  });
  const decoHoriDoor22GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor22.geojson.json",
  });
  const decoVertDoor1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor1.geojson.json",
  });
  const decoVertDoor2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor2.geojson.json",
  });
  const decoVertDoor3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor3.geojson.json",
  });
  const decoVertDoor4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor4.geojson.json",
  });
  const decoVertDoor5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor5.geojson.json",
  });
  const decoVertDoor6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor6.geojson.json",
  });
  const decoVertDoor7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor7.geojson.json",
  });
  const decoVertDoor8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor8.geojson.json",
  });
  const decoVertDoor9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor9.geojson.json",
  });
  const decoVertDoor10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor10.geojson.json",
  });
  const decoVertDoor11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor11.geojson.json",
  });
  const decoVertDoor12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor12.geojson.json",
  });
  const decoVertDoor13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor13.geojson.json",
  });
  const decoVertDoor14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor14.geojson.json",
  });
  const decoVertDoor15GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor15.geojson.json",
  });
  const decoVertDoor16GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor16.geojson.json",
  });
  const decoVertDoor17GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor17.geojson.json",
  });
  const decoVertDoor18GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor18.geojson.json",
  });
  const decoVertDoor19GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor19.geojson.json",
  });
  const decoVertDoor20GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor20.geojson.json",
  });
  const decoVertDoor21GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor21.geojson.json",
  });
  const decoVertDoor22GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor22.geojson.json",
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
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };
  door13GeojsonLayer.renderer = {
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
  door14GeojsonLayer.renderer = {
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
  door15GeojsonLayer.renderer = {
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
  door16GeojsonLayer.renderer = {
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
  door17GeojsonLayer.renderer = {
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
  door18GeojsonLayer.renderer = {
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
  door19GeojsonLayer.renderer = {
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
  door20GeojsonLayer.renderer = {
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
  door21GeojsonLayer.renderer = {
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
  door22GeojsonLayer.renderer = {
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
  decoHoriDoor19GeojsonLayer.renderer = {
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
  decoHoriDoor20GeojsonLayer.renderer = {
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
  decoVertDoor19GeojsonLayer.renderer = {
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
  decoVertDoor20GeojsonLayer.renderer = {
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
  decoVertDoor21GeojsonLayer.renderer = {
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
  decoVertDoor22GeojsonLayer.renderer = {
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
    door13GeojsonLayer,
    door14GeojsonLayer,
    door15GeojsonLayer,
    door16GeojsonLayer,
    door17GeojsonLayer,
    door18GeojsonLayer,
    door19GeojsonLayer,
    door20GeojsonLayer,
    door21GeojsonLayer,
    door22GeojsonLayer,
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
    decoHoriDoor19GeojsonLayer,
    decoHoriDoor20GeojsonLayer,
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


// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor1.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor13.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor10.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor11.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor15.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/base.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor12.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor17.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor16.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor14.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor18.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor19.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor2.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor3.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor4.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor21.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor22.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor20.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor5.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor6.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor7.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor8.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor1.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoHoriDoor9.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor10.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor11.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor12.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor13.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor14.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor17.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor15.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor16.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor18.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor19.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor20.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor21.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor22.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor3.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor5.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor2.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor6.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor4.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor7.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor8.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.decoVertDoor9.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door1.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door10.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door13.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door11.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door12.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door14.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door15.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door16.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door18.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door19.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door2.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door21.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door22.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door20.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door3.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door7.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door4.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door5.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door6.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door9.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door8.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/BDoor/CB.BDoor.door17.geojson.json