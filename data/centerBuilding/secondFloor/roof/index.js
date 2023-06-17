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
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/roof/CB.SF.roof.geojson.json",
  });
  const decoRoof1GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/roof/CB.SF.decoRoof1.geojson.json",
  });
  const decoRoof2GeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/secondFloor/roof/CB.SF.decoRoof2.geojson.json",
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
            color: "#ab864a",
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
          size: 0.1,
          material: {
            color: "#815434",
          },
        },
      ],
    },
  };

  return [roofGeojsonLayer, decoRoof1GeojsonLayer, decoRoof2GeojsonLayer];
};


  // ngomon/data/centerBuilding/secondFloor/roof/CB.SF.roof.geojson.json
// ngomon/data/centerBuilding/secondFloor/roof/CB.SF.decoRoof1.geojson.json
// ngomon/data/centerBuilding/secondFloor/roof/CB.SF.decoRoof2.geojson.json