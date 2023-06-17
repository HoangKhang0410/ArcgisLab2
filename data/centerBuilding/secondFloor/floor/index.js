export const floor_SF = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const prismBaseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
  const bodyCompBaseURL = "https://gis-historical-relic-management.vercel.app/api/bodyComplex/path?path="
  const parentPath = "ngomon/"

  const floorGeojsonLayer = new GeoJSONLayer({
    url: prismBaseURL + parentPath + "data/centerBuilding/secondFloor/floor/floor.geojson.json",
  });

  const floorPart2 = new GeoJSONLayer({
    url: bodyCompBaseURL + parentPath + "data/centerBuilding/secondFloor/floor/floor.part2.geojson.json",
  });

  floorGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  floorPart2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.01,
          material: {
            color: "#5d2423",
          },
        },
      ],
    },
  };

  return [floorGeojsonLayer, floorPart2];
};


// ngomon/data/centerBuilding/secondFloor/floor/floor.geojson.json
// ngomon/data/centerBuilding/secondFloor/floor/floor.part2.geojson.json