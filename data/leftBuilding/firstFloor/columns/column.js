// tọa độ điểm A [107.5791530007,16.46755900053,0]
// tọa độ điểm B [107.5790380049,16.46747699342,0]
// tâm tọa độ cột 1 tầng 1 [107.57913219957746,16.467563218954545,0]
// tâm tọa độ cột 2 tầng 1 [107.57911820949235,16.467581260357814,0]
// tâm tọa độ cột 3 tầng 1 [107.57910142138829,16.467602910041617,0]
// tâm tọa độ cột 4 tầng 1 [107.5790846332824,16.467624559725422,0]
// tâm tọa độ cột 5 tầng 1 [107.57907344121092,16.467638992848144,0]
// tâm tọa độ cột 6 tầng 1 [107.5790552540923,16.467662446671874,0]
// tâm tọa độ cột 7 tầng 1 [107.57904546102795,16.467675075654338,0]
// tâm tọa độ cột 8 tầng 1 [107.57903417315552,16.46766702592457,0]
// tâm tọa độ cột 9 tầng 1 [107.57904396621906,16.46765439693583,0]
// tâm tọa độ cột 10 tầng 1 [107.57906215334094,16.46763094311833,0]
// tâm tọa độ cột 11 tầng 1 [107.57907054739408,16.46762011827619,0]
// tâm tọa độ cột 12 tầng 1 [107.57908733549773,16.467598468591046,0]
// tâm tọa độ cột 13 tầng 1 [107.57910692162541,16.467573210628043,0]
// tâm tọa độ cột 14 tầng 1 [107.57912091171156,16.467555169224777,0]
// tâm tọa độ cột 15 tầng 1 [107.57908328549725,16.467528336789858,0]
// tâm tọa độ cột 16 tầng 1 [107.57906929540756,16.467546378193127,0]
// tâm tọa độ cột 17 tầng 1 [107.57904970928935,16.467571636157437,0]
// tâm tọa độ cột 18 tầng 1 [107.5790329211861,16.467593285841243,0]
// tâm tọa độ cột 19 tầng 1 [107.57900634000995,16.467627564500905,0]
// tâm tọa độ cột 20 tầng 1 [107.57899654691946,16.467640193489654,0]
// tâm tọa độ cột 21 tầng 1 [107.57898525904916,16.467632143759886,0]
// tâm tọa độ cột 22 tầng 1 [107.57899505214039,16.467619514771133,0]
// tâm tọa độ cột 23 tầng 1 [107.57901603726613,16.467592452668406,0]
// tâm tọa độ cột 24 tầng 1 [107.57904121943555,16.46755997814253,0]
// tâm tọa độ cột 25 tầng 1 [107.57905800754632,16.467538328458726,0]
// tâm tọa độ cột 26 tầng 1 [107.57907199763704,16.46752028705546,0]
export const left_building_cols_ff = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const baseURL = "https://gis-historical-relic-management.vercel.app/api/cylinder/path?path="
  const parentPath = "ngomon/"

  const col1 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column1.geojson.json",
  });

  const col2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column2.geojson.json",
  });

  const col3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column3.geojson.json",
  });

  const col4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column4.geojson.json",
  });
  const col5 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column5.geojson.json",
  });

  const col6 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column6.geojson.json",
  });

  const col7 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column7.geojson.json",
  });
  const col8 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column8.geojson.json",
  });
  const col9 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column9.geojson.json",
  });
  const col10 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column10.geojson.json",
  });
  const col11 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column11.geojson.json",
  });
  const col12 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column12.geojson.json",
  });
  const col13 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column13.geojson.json",
  });
  const col14 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column14.geojson.json",
  });
  const col15 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column15.geojson.json",
  });
  const col16 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column16.geojson.json",
  });
  const col17 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column17.geojson.json",
  });
  const col18 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column18.geojson.json",
  });
  const col19 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column19.geojson.json",
  });
  const col20 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column20.geojson.json",
  });
  const col21 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column21.geojson.json",
  });
  const col22 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column22.geojson.json",
  });
  const col23 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column23.geojson.json",
  });
  const col24 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column24.geojson.json",
  });
  const col25 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column25.geojson.json",
  });
  const col26 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/firstFloor/columns/left.building.column26.geojson.json",
  });

  col1.renderer = {
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
          size: 3.54,
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
  ];
};


// ngomon/data/leftBuilding/firstFloor/columns/left.building.column1.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column10.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column11.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column14.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column16.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column13.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column12.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column17.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column15.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column19.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column18.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column20.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column2.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column21.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column23.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column22.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column24.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column25.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column26.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column3.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column6.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column7.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column8.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column5.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column9.geojson.json
// ngomon/data/leftBuilding/firstFloor/columns/left.building.column4.geojson.json