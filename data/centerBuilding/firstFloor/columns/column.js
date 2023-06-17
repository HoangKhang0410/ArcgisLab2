export const center_building_cols_FF = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const baseURL = "https://gis-historical-relic.onrender.com/api/cylinder/path?path="
  const parentPath = "ngomon/"

  const col1 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column1.geojson.json",
  });

  const col2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column2.geojson.json",
  });

  const col3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column3.geojson.json",
  });

  const col4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column4.geojson.json",
  });

  const col5 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column5.geojson.json",
  });

  const col6 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column6.geojson.json",
  });

  const col7 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column7.geojson.json",
  });

  const col8 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column8.geojson.json",
  });

  const col9 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column9.geojson.json",
  });

  const col10 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column10.geojson.json",
  });

  const col11 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column11.geojson.json",
  });

  const col12 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column12.geojson.json",
  });

  const col13 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column13.geojson.json",
  });

  const col14 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column14.geojson.json",
  });

  const col15 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column15.geojson.json",
  });

  const col16 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column16.geojson.json",
  });

  const col17 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column17.geojson.json",
  });

  const col18 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column18.geojson.json",
  });

  const col19 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column19.geojson.json",
  });

  const col20 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column20.geojson.json",
  });

  const col21 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column21.geojson.json",
  });

  const col22 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column22.geojson.json",
  });

  const col23 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column23.geojson.json",
  });

  const col24 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column24.geojson.json",
  });

  const col25 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column25.geojson.json",
  });

  const col26 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column26.geojson.json",
  });

  const col27 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column27.geojson.json",
  });

  const col28 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column28.geojson.json",
  });

  const col29 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column29.geojson.json",
  });

  const col30 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/columns/center.building.column30.geojson.json",
  });

  // Tọa độ tâm cột 1 [107.57911311595728,16.467646250012113,4.94]
  // Tọa độ tâm cột 2 [107.57910349621433, 16.467658889743966, 6.24]
  //   tọa độ cột 3: [107.57908425672599, 16.46768416920723, 6.24]
  // tọa độ cột 4: [107.57907463698122, 16.467696808939085, 4.94]
  // tọa độ cột 5: [107.57906639938317, 16.46770763261754, 4.94]
  // tọa độ cột 6: [107.57904577772632,16.467734728122913,4.94]
  // Tọa độ tâm cột 7 [107.57903754012715,16.467745551801684,4.94]
  //   tọa độ cột 8: [107.57912629635022, 16.467655475151776, 4.94]
  // tọa độ cột 9: [107.57914326421343, 16.467667351193484, 4.94]
  // tọa độ cột 10: [107.5791640195476, 16.467681878137178, 4.94]
  // tọa đoộ cột 11: [107.57918856235369, 16.467699055982788, 4.94]
  // tọa độ cột 12: [107.57920931769134, 16.467713582926486, 4.94]
  // tọa độ cột 13: [107.57922628555963, 16.467725458968197, 4.94]
  // tọa độ cột 14: [107.57923946595797, 16.467734684107864, 4.94]

  // 22: [107.5792586310879,16.467767470587813,6.24]
  // 23: [107.57923939161981,16.46779275005108,6.24]
  col1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };
  col4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };
  col5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };
  col6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };
  col7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col9.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col10.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col11.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col12.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col13.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col14.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col15.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col16.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col17.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col18.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col19.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col20.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col21.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.4,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col22.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col23.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col24.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.5,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col25.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.4,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col26.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.4,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col27.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col28.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col29.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col30.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  return [
    col1,
    col2,
    col3,
    col4,
    col5,
    col6,
    col7,
    col8,
    col9,
    col10,
    col11,
    col12,
    col13,
    col14,
    col15,
    col16,
    col17,
    col18,
    col19,
    col20,
    col21,
    col22,
    col23,
    col24,
    col25,
    col26,
    col27,
    col28,
    col29,
    col30,
  ];
};


// ngomon/data/centerBuilding/firstFloor/columns/center.building.column10.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column11.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column1.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column12.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column14.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column15.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column17.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column16.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column13.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column18.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column19.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column21.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column20.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column22.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column2.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column27.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column24.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column23.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column26.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column25.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column28.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column29.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column3.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column30.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column4.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column5.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column9.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column6.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column7.geojson.json
// ngomon/data/centerBuilding/firstFloor/columns/center.building.column8.geojson.json