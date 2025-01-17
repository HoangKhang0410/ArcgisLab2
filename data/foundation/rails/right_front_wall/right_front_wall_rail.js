export const right_front_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
    const parentPath = "ngomon/"

    const floorRightFrontWallRailRoot = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/right_front_wall/floor.right.front.wall.rail.root.geojson.json"
    });

    const floorRightFrontWallRailColumn1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/right_front_wall/floor.right.front.wall.rail.column1.geojson.json"
    });

    const floorRightFrontWallRailWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/right_front_wall/floor.right.front.wall.rail.wall.geojson.json"
    });

    floorRightFrontWallRailRoot.renderer = {
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


    floorRightFrontWallRailColumn1.renderer = {
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

    floorRightFrontWallRailWall.renderer = {
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
        floorRightFrontWallRailRoot,
        floorRightFrontWallRailColumn1,
        floorRightFrontWallRailWall
    ]
}

// ngomon/data/foundation/rails/right_front_wall/floor.right.front.wall.rail.column1.geojson.json
// ngomon/data/foundation/rails/right_front_wall/floor.right.front.wall.rail.root.geojson.json
// ngomon/data/foundation/rails/right_front_wall/floor.right.front.wall.rail.wall.geojson.json