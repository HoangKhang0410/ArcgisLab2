export const right_step_wall = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
  const parentPath = "ngomon/"

  const leftWall = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/firstFloor/walls/right_step_wall/right.step.left.wall.geojson.json",
  });

  const rightWall = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/firstFloor/walls/right_step_wall/right.step.right.wall.geojson.json",
  });

  leftWall.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.2,
          material: {
            color: "#3b3d3e",
          },
        },
      ],
    },
  };

  rightWall.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.2,
          material: {
            color: "#3b3d3e",
          },
        },
      ],
    },
  };

  return [leftWall, rightWall];
};


// ngomon/data/rightBuilding/firstFloor/walls/right_step_wall/right.step.left.wall.geojson.json
// ngomon/data/rightBuilding/firstFloor/walls/right_step_wall/right.step.right.wall.geojson.json