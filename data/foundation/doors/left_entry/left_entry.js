export const left_entry = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
  const parentPath = "ngomon/"

  const leftWallEntryGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/foundation/doors/left_entry/left_wall.geojson.json"
  });

  const rightWallLeftEntryGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/foundation/doors/left_entry/right_wall.geojson.json"
  });

  const topWallLeftEntryGeojsonLayer = new GeoJSONLayer({
    url: baseURL + parentPath + "data/foundation/doors/left_entry/top_wall.geojson.json"
  });

  leftWallEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.94,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };

  rightWallLeftEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.94,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };

  topWallLeftEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.5,
          material: {
            color: "#6e6f74"
          },
        }
      ]
    }
  };
  return [
    leftWallEntryGeojsonLayer,
    rightWallLeftEntryGeojsonLayer,
    topWallLeftEntryGeojsonLayer
  ]
}

// ngomon/data/foundation/doors/left_entry/left_wall.geojson.json
// ngomon/data/foundation/doors/left_entry/top_wall.geojson.json
// ngomon/data/foundation/doors/left_entry/right_wall.geojson.json