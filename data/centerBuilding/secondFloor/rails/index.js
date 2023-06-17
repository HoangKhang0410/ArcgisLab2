export const rails_SF = (
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  ) => {

    const baseURL = "https://gis-historical-relic.onrender.com/api/bodyComplex/path?path="
    const parentPath = "ngomon/"

    const railsGeojsonLayer = new GeoJSONLayer({
      url: baseURL + parentPath + "data/centerBuilding/secondFloor/rails/CB.SF.rails.geojson.json",
    });
  
    railsGeojsonLayer.renderer = {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [
          {
            type: "extrude",
            size: 0.6,
            material: {
              color: "#8a5724",
            },
          },
        ],
      },
    };
  
    return [railsGeojsonLayer];
  };
  