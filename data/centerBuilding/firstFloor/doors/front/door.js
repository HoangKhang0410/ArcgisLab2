export const door_FF = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
  const parentPath = "ngomon/"

  const door1 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.1.geojson.json"
  });

  const door1decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.1.geojson.json"
  });

  const door1decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.1.geojson.json"
  });

  const door2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.2.geojson.json"
  });

  const door2decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.2.geojson.json"
  });

  const door2decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.2.geojson.json"
  });

  const door3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.3.geojson.json"
  });

  const door3decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.3.geojson.json"
  });

  const door3decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.3.geojson.json"
  });

  const door4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.4.geojson.json"
  });

  const door4decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.4.geojson.json"
  });

  const door4decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.4.geojson.json"
  });

  const door5 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.5.geojson.json"
  });

  const door5decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.5.geojson.json"
  });

  const door5decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.5.geojson.json"
  });

  const door6 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.6.geojson.json"
  });

  const door6decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.6.geojson.json"
  });

  const door6decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.6.geojson.json"
  });

  const door7 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.7.geojson.json"
  });

  const door7decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.7.geojson.json"
  });

  const door7decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.7.geojson.json"
  });

  const door8 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.8.geojson.json"
  });

  const door8decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.8.geojson.json"
  });

  const door8decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.8.geojson.json"
  });

  const door9 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.9.geojson.json"
  });

  const door9decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.9.geojson.json"
  });

  const door9decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.9.geojson.json"
  });

  const door10 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.10.geojson.json"
  });

  const door10decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.10.geojson.json"
  });

  const door10decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.10.geojson.json"
  });

  const door11 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.11.geojson.json"
  });

  const door11decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.11.geojson.json"
  });

  const door11decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.11.geojson.json"
  });

  const door12 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.12.geojson.json"
  });

  const door12decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.12.geojson.json"
  });

  const door12decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.12.geojson.json"
  });

  const door13 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.13.geojson.json"
  });

  const door13decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.13.geojson.json"
  });

  const door13decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.13.geojson.json"
  });

  const door14 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.14.geojson.json"
  });

  const door14decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.14.geojson.json"
  });

  const door14decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.14.geojson.json"
  });

  const door15 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.15.geojson.json"
  });

  const door15decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.15.geojson.json"
  });

  const door15decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.15.geojson.json"
  });

  const door16 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.16.geojson.json"
  });

  const door16decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.16.geojson.json"
  });

  const door16decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.16.geojson.json"
  });

  const door17 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.17.geojson.json"
  });

  const door17decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.17.geojson.json"
  });

  const door17decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.17.geojson.json"
  });

  const door18 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.18.geojson.json"
  });

  const door18decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.18.geojson.json"
  });

  const door18decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.18.geojson.json"
  });

  const door19 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.19.geojson.json"
  });

  const door19decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.19.geojson.json"
  });

  const door19decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.19.geojson.json"
  });

  const door20 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.20.geojson.json"
  });

  const door20decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.20.geojson.json"
  });

  const door20decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.20.geojson.json"
  });

  const door21 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.21.geojson.json"
  });

  const door21decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.21.geojson.json"
  });

  const door21decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.21.geojson.json"
  });

  const door22 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.22.geojson.json"
  });

  const door22decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.22.geojson.json"
  });

  const door22decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.22.geojson.json"
  });

  const door23 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.23.geojson.json"
  });

  const door23decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.23.geojson.json"
  });

  const door23decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.23.geojson.json"
  });

  const door24 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.24.geojson.json"
  });

  const door24decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.24.geojson.json"
  });

  const door24decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.24.geojson.json"
  });

  const door25 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.door.25.geojson.json"
  });

  const door25decovert = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.25.geojson.json"
  });

  const door25decohori = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.25.geojson.json"
  });

  door1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door1decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door1decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door2decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door2decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

  door3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door3decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door3decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

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

  door5decohori.renderer = {
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

  door6decohori.renderer = {
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

  door7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door7decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door7decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door8decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door8decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

  door9.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door9decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door9decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

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

  door10decohori.renderer = {
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

  door11.renderer = {
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

  door11decovert.renderer = {
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

  door11decohori.renderer = {
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

  door12.renderer = {
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

  door12decovert.renderer = {
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

  door12decohori.renderer = {
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

  door13.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door13decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door13decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door14.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door14decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door14decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

  door15.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door15decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door15decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

  door16.renderer = {
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

  door16decovert.renderer = {
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

  door16decohori.renderer = {
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

  door17.renderer = {
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

  door17decovert.renderer = {
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

  door17decohori.renderer = {
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

  door18.renderer = {
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

  door18decovert.renderer = {
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

  door18decohori.renderer = {
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

  door19.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door19decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door19decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door20.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door20decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door20decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

  door21.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door21decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door21decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  }

  door22.renderer = {
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

  door22decovert.renderer = {
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

  door22decohori.renderer = {
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

  door23.renderer = {
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

  door23decovert.renderer = {
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

  door23decohori.renderer = {
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

  door24.renderer = {
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

  door24decovert.renderer = {
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

  door24decohori.renderer = {
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

  door25.renderer = {
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

  door25decovert.renderer = {
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

  door25decohori.renderer = {
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


  return [
    door1,
    door1decovert,
    door1decohori,
    door2,
    door2decovert,
    door2decohori,
    door3,
    door3decohori,
    door3decovert,
    door4,
    door4decovert,
    door4decohori,
    door5,
    door5decovert,
    door5decohori,
    door6,
    door6decovert,
    door6decohori,
    door7,
    door7decovert,
    door7decohori,
    door8,
    door8decovert,
    door8decohori,
    door9,
    door9decovert,
    door9decohori,
    door10,
    door10decovert,
    door10decohori,
    door11,
    door11decovert,
    door11decohori,
    door12,
    door12decovert,
    door12decohori,
    door13,
    door13decovert,
    door13decohori,
    door14,
    door14decovert,
    door14decohori,
    door15,
    door15decovert,
    door15decohori,
    door16,
    door16decovert,
    door16decohori,
    door17,
    door17decovert,
    door17decohori,
    door18,
    door18decovert,
    door18decohori,
    door19,
    door19decovert,
    door19decohori,
    door20,
    door20decovert,
    door20decohori,
    door21,
    door21decovert,
    door21decohori,
    door22,
    door22decovert,
    door22decohori,
    door23,
    door23decovert,
    door23decohori,
    door24,
    door24decovert,
    door24decohori,
    door25,
    door25decovert,
    door25decohori
  ]
}

// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.13.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.10.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.12.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.15.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.17.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.11.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.14.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.16.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.1.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.19.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.20.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.18.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.2.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.21.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.22.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.23.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.24.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.3.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.25.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.4.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.7.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.8.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.9.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.6.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.12.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.1.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.door.5.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.10.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.11.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.13.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.15.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.14.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.17.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.16.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.18.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.2.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.19.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.20.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.21.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.22.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.23.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.25.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.24.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.3.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.4.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.5.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.8.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.7.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.6.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecohori.9.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.1.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.10.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.12.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.14.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.11.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.16.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.13.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.15.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.17.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.18.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.19.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.2.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.20.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.21.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.22.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.24.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.3.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.23.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.8.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.4.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.25.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.5.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.6.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.9.geojson.json
// ngomon/data/centerBuilding/firstFloor/doors/front/center.building.doordecovert.7.geojson.json