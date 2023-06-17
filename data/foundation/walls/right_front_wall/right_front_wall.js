export const right_front_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
    const parentPath = "ngomon/"

    const rightFrontWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/right_front_wall/floor.right.front.wall.geojson.json"
    });


    rightFrontWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };


    return [
        rightFrontWall
    ]
}

// ngomon/data/foundation/walls/right_front_wall/floor.right.front.wall.geojson.json