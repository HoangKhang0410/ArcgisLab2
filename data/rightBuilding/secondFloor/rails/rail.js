export const wall_rail = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {

  const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
  const parentPath = "ngomon/"

  const frontWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/front.wall.rail.geojson.json",
  });
  const rightWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/right.wall.rail.geojson.json",
  });
  const rightWallRail2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/right.wall.rail2.geojson.json",
  });
  const rightWallRail3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/right.wall.rail3.geojson.json",
  });
  const backWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/back.wall.rail.geojson.json",
  });
  const backWallRail2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/back.wall.rail2.geojson.json",
  });
  const leftWallRail1 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/left.wall.rail1.geojson.json",
  });
  const leftWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/left.wall.rail.geojson.json",
  });
  const leftWallRail2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/rightBuilding/secondFloor/rails/left.wall.rail2.geojson.json",
  });
  rightWallRail.renderer = {
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
  rightWallRail2.renderer = {
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
  rightWallRail3.renderer = {
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
  frontWallRail.renderer = {
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
  backWallRail.renderer = {
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
  backWallRail2.renderer = {
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
  leftWallRail.renderer = {
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
  leftWallRail1.renderer = {
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
  leftWallRail2.renderer = {
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
  return [
    frontWallRail,
    rightWallRail,
    rightWallRail2,
    rightWallRail3,
    backWallRail,
    backWallRail2,
    leftWallRail,
    leftWallRail1,
    leftWallRail2,
  ];
};


// ngomon/data/rightBuilding/secondFloor/rails/right.wall.rail.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/left.wall.rail1.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/left.wall.rail.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/back.wall.rail.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/left.wall.rail2.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/front.wall.rail.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/back.wall.rail2.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/right.wall.rail2.geojson.json
// ngomon/data/rightBuilding/secondFloor/rails/right.wall.rail3.geojson.json