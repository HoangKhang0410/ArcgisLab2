export const left_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
    const parentPath = "ngomon/"

    const leftWallPart1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/left_wall/floor.left.wall.part1.geojson.json"
    });

    const leftWallPart2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/left_wall/floor.left.wall.part2.geojson.json"
    });





    leftWallPart1.renderer = {
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

    leftWallPart2.renderer = {
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
        leftWallPart1,
        leftWallPart2,
    ]
}

// ngomon/data/foundation/walls/left_wall/floor.left.wall.part2.geojson.json
// ngomon/data/foundation/walls/left_wall/floor.left.wall.part1.geojson.json