export const roof_back_FF = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
  const parentPath = "ngomon/"

  const roof1 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/roof/center.building.roof.1.geojson.json"
  });

  const roof2 = new GeoJSONLayer({
    url: baseURL + parentPath + "data/centerBuilding/firstFloor/roof/center.building.roof.2.geojson.json"
  });


  roof1.renderer = {
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

  roof2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.07,
          material: {
            color: "#ab864a",
          },
        },
      ],
    },
  };



  return [
    roof1,
    roof2
  ]
}


// ngomon/data/centerBuilding/firstFloor/roof/center.building.roof.2.geojson.json
// ngomon/data/centerBuilding/firstFloor/roof/center.building.roof.1.geojson.json