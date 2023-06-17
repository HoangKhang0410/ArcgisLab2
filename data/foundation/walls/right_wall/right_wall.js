export const right_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
    const parentPath = "ngomon/"

    const rightWallPart1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/right_wall/floor.right.wall.part1.geojson.json"
    });

    const rightWallPart2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/right_wall/floor.right.wall.part2.geojson.json"
    });





    rightWallPart1.renderer = {
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

    rightWallPart2.renderer = {
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
        rightWallPart1,
        rightWallPart2,
    ]
}

// ngomon/data/foundation/walls/right_wall/floor.right.wall.part1.geojson.json
// ngomon/data/foundation/walls/right_wall/floor.right.wall.part2.geojson.json