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
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/front.wall.rail.geojson.json",
  });

  const frontEntryWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/front.entry.wall.rail.geojson.json",
  });

  const rightWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/right.wall.rail.geojson.json",
  });

  const rightWallRail2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/right.wall.rail.part2.geojson.json",
  });

  const leftWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/left.wall.rail.geojson.json",
  });

  const leftWallRail2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/left.wall.rail.part2.geojson.json",
  });

  const leftWallRail3 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/left.wall.rail.part3.geojson.json",
  });

  const backWallRail = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/back.wall.rail.geojson.json",
  });

  const backWallRail2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/leftBuilding/secondFloor/rails/back.wall.rail.part2.geojson.json",
  });

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

  frontEntryWallRail.renderer = {
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

  leftWallRail3.renderer = {
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

  return [
    frontWallRail,
    frontEntryWallRail,
    rightWallRail,
    rightWallRail2,
    leftWallRail,
    leftWallRail2,
    leftWallRail3,
    backWallRail,
    backWallRail2,
  ];
};


// ngomon/data/leftBuilding/secondFloor/rails/front.entry.wall.rail.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/left.wall.rail.part3.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/front.wall.rail.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/back.wall.rail.part2.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/right.wall.rail.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/left.wall.rail.part2.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/back.wall.rail.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/left.wall.rail.geojson.json
// ngomon/data/leftBuilding/secondFloor/rails/right.wall.rail.part2.geojson.json