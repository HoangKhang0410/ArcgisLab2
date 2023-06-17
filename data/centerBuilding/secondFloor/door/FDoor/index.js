export const doorF_SF = (
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
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door1.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door2.geojson.json",
  });
  const door3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door3.geojson.json",
  });
  const door4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door4.geojson.json",
  });
  const door5GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door5.geojson.json",
  });
  const door6GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door6.geojson.json",
  });
  const door7GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door7.geojson.json",
  });
  const door8GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door8.geojson.json",
  });
  const door9GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door9.geojson.json",
  });
  const door10GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door10.geojson.json",
  });
  const door11GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door11.geojson.json",
  });
  const door12GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door12.geojson.json",
  });
  const door13GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door13.geojson.json",
  });
  const door14GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door14.geojson.json",
  });
  const door15GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door15.geojson.json",
  });
  const door16GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door16.geojson.json",
  });
  const door17GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door17.geojson.json",
  });
  const door18GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door18.geojson.json",
  });
  const door19GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door19.geojson.json",
  });
  const door20GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door20.geojson.json",
  });
  const door1decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door1decohori.geojson.json",
  });
  const door2decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door2decohori.geojson.json",
  });
  const door3decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door3decohori.geojson.json",
  });
  const door4decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door4decohori.geojson.json",
  });
  const door5decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door5decohori.geojson.json",
  });
  const door6decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door6decohori.geojson.json",
  });
  const door7decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door7decohori.geojson.json",
  });
  const door8decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door8decohori.geojson.json",
  });
  const door9decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door9decohori.geojson.json",
  });
  const door10decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door10decohori.geojson.json",
  });
  const door11decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door11decohori.geojson.json",
  });
  const door12decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door12decohori.geojson.json",
  });
  const door13decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door13decohori.geojson.json",
  });
  const door14decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door14decohori.geojson.json",
  });
  const door15decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door15decohori.geojson.json",
  });
  const door16decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door16decohori.geojson.json",
  });
  const door17decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door17decohori.geojson.json",
  });
  const door18decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door18decohori.geojson.json",
  });
  const door19decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door19decohori.geojson.json",
  });
  const door20decohoriGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door20decohori.geojson.json",
  });
  const door1decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door1decovert.geojson.json",
  });
  const door2decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door2decovert.geojson.json",
  });
  const door3decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door3decovert.geojson.json",
  });
  const door4decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door4decovert.geojson.json",
  });
  const door5decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door5decovert.geojson.json",
  });
  const door6decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door6decovert.geojson.json",
  });
  const door7decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door7decovert.geojson.json",
  });
  const door8decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door8decovert.geojson.json",
  });
  const door9decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door9decovert.geojson.json",
  });
  const door10decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door10decovert.geojson.json",
  });
  const door11decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door11decovert.geojson.json",
  });
  const door12decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door12decovert.geojson.json",
  });
  const door13decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door13decovert.geojson.json",
  });
  const door14decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door14decovert.geojson.json",
  });
  const door15decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door15decovert.geojson.json",
  });
  const door16decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door16decovert.geojson.json",
  });
  const door17decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door17decovert.geojson.json",
  });
  const door18decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door18decovert.geojson.json",
  });
  const door19decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door19decovert.geojson.json",
  });
  const door20decovertGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/door/FDoor/door20decovert.geojson.json",
  });

  door1GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
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
          size: 2,
          material: {
            color: "#6b1f1f",
          },
        },
      ],
    },
  };

  door1decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door2decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door3decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door4decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door5decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door6decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door7decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door8decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door9decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door10decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door11decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door12decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door13decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door14decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door15decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door16decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door17decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door18decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door19decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door20decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door1decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door2decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door3decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door4decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door5decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door6decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door7decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door8decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door9decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door10decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door11decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door12decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door13decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door14decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door15decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door16decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door17decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door18decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door19decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door20decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };

  return [
    door1GeojsonLayer,
    door1decohoriGeojsonLayer,
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
    door1decohoriGeojsonLayer,
    door2decohoriGeojsonLayer,
    door3decohoriGeojsonLayer,
    door4decohoriGeojsonLayer,
    door5decohoriGeojsonLayer,
    door6decohoriGeojsonLayer,
    door7decohoriGeojsonLayer,
    door8decohoriGeojsonLayer,
    door9decohoriGeojsonLayer,
    door10decohoriGeojsonLayer,
    door11decohoriGeojsonLayer,
    door12decohoriGeojsonLayer,
    door13decohoriGeojsonLayer,
    door14decohoriGeojsonLayer,
    door15decohoriGeojsonLayer,
    door16decohoriGeojsonLayer,
    door17decohoriGeojsonLayer,
    door18decohoriGeojsonLayer,
    door19decohoriGeojsonLayer,
    door20decohoriGeojsonLayer,
    door1decovertGeojsonLayer,
    door2decovertGeojsonLayer,
    door3decovertGeojsonLayer,
    door4decovertGeojsonLayer,
    door5decovertGeojsonLayer,
    door6decovertGeojsonLayer,
    door7decovertGeojsonLayer,
    door8decovertGeojsonLayer,
    door9decovertGeojsonLayer,
    door10decovertGeojsonLayer,
    door11decovertGeojsonLayer,
    door12decovertGeojsonLayer,
    door13decovertGeojsonLayer,
    door14decovertGeojsonLayer,
    door15decovertGeojsonLayer,
    door16decovertGeojsonLayer,
    door17decovertGeojsonLayer,
    door18decovertGeojsonLayer,
    door19decovertGeojsonLayer,
    door20decovertGeojsonLayer,
  ];
};


// ngomon/data/centerBuilding/secondFloor/door/FDoor/door10.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door1.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door11decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door10decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door10decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door12.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door11.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door13.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door11decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door12decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door13decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door12decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door13decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door14.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door14decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door14decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door15decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door15.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door16.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door15decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door16decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door17decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door16decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door17decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door17.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door18.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door18decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door18decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door19decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door19.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door19decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door1decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door1decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door20decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door2.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door20decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door2decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door20.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door3decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door3decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door2decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door4decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door4.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door5.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door4decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door5decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door6.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door5decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door6decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door6decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door7.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door7decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door3.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door7decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door8decohori.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door8decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door8.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door9decovert.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door9.geojson.json
// ngomon/data/centerBuilding/secondFloor/door/FDoor/door9decohori.geojson.json