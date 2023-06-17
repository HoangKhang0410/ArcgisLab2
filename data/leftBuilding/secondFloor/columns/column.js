// tọa độ điểm A [107.5791530007,16.46755900053,0]
// tọa độ điểm B [107.5790380049,16.46747699342,0]
// tâm tọa độ cột 1 tầng 2 [107.57910692162541,16.467573210628043,0]
// tâm tọa độ cột 2 tầng 2 [107.57908733549773,16.467598468591046,0]
// tâm tọa độ cột 3 tầng 2 [107.57906215334094,16.46763094311833,0]
// tâm tọa độ cột 4 tầng 2 [107.57906774937646,16.467623726556955,0]
// tâm tọa độ cột 5 tầng 2 [107.57904396621906,16.46765439693583,0]
// tâm tọa độ cột 6 tầng 2 [107.57900634000995,16.467627564500905,0]
// tâm tọa độ cột 7 tầng 2 [107.5790329211861,16.467593285841243,0]
// tâm tọa độ cột 8 tầng 2 [107.57904970928935,16.467571636157437,0]
// tâm tọa độ cột 9 tầng 2 [107.57906929540756,16.467546378193127,0]
// tâm tọa độ cột 10 tầng 2 [107.5790552540923,16.467662446671874,0]
// tâm tọa độ cột 11 tầng 2 [107.57907344121092,16.467638992848144,0]
// tâm tọa độ cột 12 tầng 2 [107.57909601695305,16.467655092305872,0]
// tâm tọa độ cột 13 tầng 2 [107.57907782983798,16.4676785461296,0]
// tâm tọa độ cột nhà phụ trái gian giữa tầng 2 [107.579096642961,16.467691962344542,0]
// tâm tọa độ cột nhà thấp gian giữa tầng 2, góc trái dưới [107.57911633512347,16.46766958181807,0]

export const left_building_cols_sf = (
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
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column1.geojson.json",
  });

  const col2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column2.geojson.json",
  });

  const col3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column3.geojson.json",
  });

  const col4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column4.geojson.json",
  });
  const col5 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column5.geojson.json",
  });

  const col6 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column6.geojson.json",
  });

  const col7 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column7.geojson.json",
  });
  const col8 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column8.geojson.json",
  });
  const col9 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column9.geojson.json",
  });
  const col10 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column10.geojson.json",
  });
  const col11 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column11.geojson.json",
  });
  const col12 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column12.geojson.json",
  });
  const col13 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/columns/left.building.column13.geojson.json",
  });

  col1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.1,
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
          size: 2.1,
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
          size: 2.1,
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
          size: 1.9,
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
          size: 2.1,
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
          size: 2.1,
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
          size: 1.9,
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
          size: 2.1,
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
          size: 2.1,
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
          size: 2.1,
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
          size: 2.1,
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
          size: 2.1,
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
          size: 2.1,
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
  ];
};


// ngomon/data/leftBuilding/secondFloor/columns/left.building.column1.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column12.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column11.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column10.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column5.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column2.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column4.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column13.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column3.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column6.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column7.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column8.geojson.json
// ngomon/data/leftBuilding/secondFloor/columns/left.building.column9.geojson.json