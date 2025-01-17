export const left_front_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
    const parentPath = "ngomon/"

    const floorLeftFrontWallRailRoot = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/left_front_wall/floor.left.front.wall.rail.root.geojson.json"
    });

    const floorLeftFrontWallRailColumn1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/left_front_wall/floor.left.front.wall.rail.column1.geojson.json"
    });

    const floorLeftFrontWallRailWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/left_front_wall/floor.left.front.wall.rail.wall.geojson.json"
    });

    floorLeftFrontWallRailRoot.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    floorLeftFrontWallRailColumn1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1,
                    material: {
                        color: "#7a443a"
                    },
                }
            ]
        }
    };

    floorLeftFrontWallRailWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.8,
                    material: {
                        color: "#ab5c2f"
                    },
                }
            ]
        }
    };




    return [
        floorLeftFrontWallRailRoot,
        floorLeftFrontWallRailColumn1,
        floorLeftFrontWallRailWall
    ]
}


// ngomon/data/foundation/rails/left_front_wall/floor.left.front.wall.rail.column1.geojson.json
// ngomon/data/foundation/rails/left_front_wall/floor.left.front.wall.rail.wall.geojson.json
// ngomon/data/foundation/rails/left_front_wall/floor.left.front.wall.rail.root.geojson.json