export const right_building_cols2 = (
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
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column1.geojson.json",
  });
  const col2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column2.geojson.json",
  });
  const col3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column3.geojson.json",
  });
  const col4 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column4.geojson.json",
  });
  const col6 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column6.geojson.json",
  });
  const col7 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column7.geojson.json",
  });
  const col8 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column8.geojson.json",
  });
  const col9 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column9.geojson.json",
  });
  const col10 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column10.geojson.json",
  });
  const col11 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column11.geojson.json",
  });
  const col12 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column12.geojson.json",
  });
  const col13 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column13.geojson.json",
  });
  const col14 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/columns/right.building.column14.geojson.json",
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
  col6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
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
          size: 2.3,
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
          size: 2.3,
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
          size: 2.3,
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
          size: 2.3,
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
  col14.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
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
    col6,
    col7,
    col8,
    col9,
    col10,
    col11,
    col12,
    col13,
    col14,
  ];
};


// ngomon/data/rightBuilding/secondFloor/columns/right.building.column11.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column1.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column12.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column13.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column14.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column10.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column8.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column4.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column6.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column2.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column9.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column3.geojson.json
// ngomon/data/rightBuilding/secondFloor/columns/right.building.column7.geojson.json