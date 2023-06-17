export const column_SF = (
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

  const columnCornerLBGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnCornerLB.geojson.json",
  });
  const columnCornerLTGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnCornerLT.geojson.json",
  });
  const columnCornerRBGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnCornerRB.geojson.json",
  });
  const columnCornerRTGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnCornerRT.geojson.json",
  });
  const columnTallLBGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnTallLB.geojson.json",
  });
  const columnTallLTGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnTallLT.geojson.json",
  });
  const columnTallRTGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnTallRT.geojson.json",
  });
  const columnTallRBGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnTallRB.geojson.json",
  });
  const columnExtraRGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnExtraR.geojson.json",
  });
  const columnExtraLGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/column/columnExtraL.geojson.json",
  });


  columnCornerLBGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnCornerLTGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnCornerRBGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnCornerRTGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnTallLBGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.595,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnTallLTGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.595,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnTallRTGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.595,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnTallRBGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.595,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnExtraRGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };
  columnExtraLGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.3,
          material: {
            color: "#3c0d0b",
          },
        },
      ],
    },
  };

  return [
    columnCornerLBGeojsonLayer,
    columnCornerLTGeojsonLayer,
    columnCornerRBGeojsonLayer,
    columnCornerRTGeojsonLayer,
    columnTallLBGeojsonLayer,
    columnTallLTGeojsonLayer,
    columnTallRTGeojsonLayer,
    columnTallRBGeojsonLayer,
    columnExtraRGeojsonLayer,
    columnExtraLGeojsonLayer
  ];
};


// ngomon/data/centerBuilding/secondFloor/column/columnCornerLT.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnCornerLB.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnCornerRB.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnTallLB.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnExtraL.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnCornerRT.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnTallRT.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnTallLT.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnExtraR.geojson.json
// ngomon/data/centerBuilding/secondFloor/column/columnTallRB.geojson.json