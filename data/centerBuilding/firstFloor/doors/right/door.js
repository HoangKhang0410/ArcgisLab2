export const door_right_FF = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
  const parentPath = "ngomon/"

  const door1 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.1.geojson.json"
  });

  const door1decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.1.geojson.json"
  });

  const door1decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.1.geojson.json"
  });

  const door2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.2.geojson.json"
  });

  const door2decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.2.geojson.json"
  });

  const door2decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.2.geojson.json"
  });

  const door3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.3.geojson.json"
  });

  const door3decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.3.geojson.json"
  });

  const door3decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.3.geojson.json"
  });

  const door4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.4.geojson.json"
  });

  const door4decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.4.geojson.json"
  });

  const door4decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.4.geojson.json"
  });

  const door5 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.5.geojson.json"
  });

  const door5decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.5.geojson.json"
  });

  const door5decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.5.geojson.json"
  });

  const door6 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.6.geojson.json"
  });

  const door6decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.6.geojson.json"
  });

  const door6decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.6.geojson.json"
  });

  const door7 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.7.geojson.json"
  });

  const door7decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.7.geojson.json"
  });

  const door7decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.7.geojson.json"
  });

  const door8 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.8.geojson.json"
  });

  const door8decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.8.geojson.json"
  });

  const door8decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.8.geojson.json"
  });

  const door9 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.9.geojson.json"
  });

  const door9decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.9.geojson.json"
  });

  const door9decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.9.geojson.json"
  });

  const door10 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.door.10.geojson.json"
  });

  const door10decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.10.geojson.json"
  });

  const door10decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.10.geojson.json"
  });



  door1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door1decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door1decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door2decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door2decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door3decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door3decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.05,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door4decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door4decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.05,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door5decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door5decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door6decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door6decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door7decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door7decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door8decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door8decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door9.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door9decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door9decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door10.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "#6b1f1f"
        },
      }]
    }
  };

  door10decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 0.1,
        material: {
          color: "brown"
        },
      }]
    }
  };

  door10decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [{
        type: "extrude",
        size: 3.54,
        material: {
          color: "brown"
        },
      }]
    }
  };



  return [
    door1,
    door1decohori,
    door1decovert,
    door2,
    door2decohori,
    door2decovert,
    door3,
    door3decohori,
    door3decovert,
    door4,
    door4decohori,
    door4decovert,
    door5,
    door5decohori,
    door5decovert,
    door6,
    door6decohori,
    door6decovert,
    door7,
    door7decohori,
    door7decovert,
    door8,
    door8decohori,
    door8decovert,
    door9,
    door9decohori,
    door9decovert,
    door10,
    door10decohori,
    door10decovert
  ]
}

// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.6.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.10.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.2.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.1.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.7.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.5.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.8.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.4.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.9.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.1.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.door.3.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.10.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.3.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.4.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.6.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.5.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.2.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.1.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.8.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.7.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecohori.9.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.10.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.2.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.4.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.7.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.6.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.5.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.9.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.8.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/right/center.building.doordecovert.3.geojson.json