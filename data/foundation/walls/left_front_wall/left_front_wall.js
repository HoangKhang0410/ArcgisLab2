export const left_front_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
    const parentPath = "ngomon/"

    const leftFrontWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/left_front_wall/floor.left.front.wall.geojson.json"
    });


    leftFrontWall.renderer = {
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
        leftFrontWall
    ]
}

// ngomon/data/foundation/walls/left_front_wall/floor.left.front.wall.geojson.json