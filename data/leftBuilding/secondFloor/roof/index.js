export const roof_SF = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const baseURL = "https://gis-historical-relic-management.vercel.app/api/bodyComplex/path?path="
  const parentPath = "ngomon/"

  const roofGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.roof.geojson.json",
  });
  const roof2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.roof2.geojson.json",
  });
  const roof3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.roof3.geojson.json",
  });
  const roof4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.roof4.geojson.json",
  });
  const decoRoof1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.decoRoof1.geojson.json",
  });
  const decoRoof2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.decoRoof2.geojson.json",
  });
  const decoRoof3GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.decoRoof3.geojson.json",
  });
  const decoRoof4GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/roof/LB.SF.decoRoof4.geojson.json",
  });

  roofGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roof2GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roof3GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roof4GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  decoRoof1GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.3,
          material: {
            color: "#815434",
          },
        },
      ],
    },
  };
  decoRoof2GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.3,
          material: {
            color: "#815434",
          },
        },
      ],
    },
  };
  decoRoof3GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.3,
          material: {
            color: "#815434",
          },
        },
      ],
    },
  };
  decoRoof4GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.3,
          material: {
            color: "#815434",
          },
        },
      ],
    },
  };

  return [
    roofGeojsonLayer,
    roof2GeojsonLayer,
    roof3GeojsonLayer,
    roof4GeojsonLayer,
    decoRoof1GeojsonLayer,
    decoRoof2GeojsonLayer,
    decoRoof3GeojsonLayer,
    decoRoof4GeojsonLayer,
  ];
};


// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.decoRoof1.geojson.json
// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.decoRoof2.geojson.json
// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.decoRoof4.geojson.json
// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.roof2.geojson.json
// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.roof4.geojson.json
// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.roof.geojson.json
// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.roof3.geojson.json
// ngomon/data/leftBuilding/secondFloor/roof/LB.SF.decoRoof3.geojson.json