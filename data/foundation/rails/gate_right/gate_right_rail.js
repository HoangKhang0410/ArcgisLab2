export const gate_right_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
    const parentPath = "ngomon/"

    const gateRightWallRailRoot = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/gate_right/floor.gate.right.rail.root.geojson.json"
    });

    const gateRightRailWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/gate_right/floor.gate.right.rail.wall.geojson.json"
    });

    gateRightWallRailRoot.renderer = {
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

    gateRightRailWall.renderer = {
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
        gateRightWallRailRoot,
        gateRightRailWall
    ]
}

// ngomon/data/foundation/rails/gate_right/floor.gate.right.rail.root.geojson.json
// ngomon/data/foundation/rails/gate_right/floor.gate.right.rail.wall.geojson.json