export const gate_back_left_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/bodyComplex/path?path="
    const parentPath = "ngomon/"

    const GateLefWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/doors/gate_back_left/gate_back_left.json"
    });

    const GateLeftDoor = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/doors/gate_back_left/gate_back_left_door.json"
    });

    const GateLeftTopDoor = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/doors/gate_back_left/gate_back_left_door_top.json"
    });


    GateLefWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 1.55,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    GateLeftDoor.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 2.29,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    GateLeftTopDoor.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.5,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    return [
        GateLefWall,
        GateLeftDoor,
        GateLeftTopDoor
    ]
}

// ngomon/data/foundation/doors/gate_back_left/gate_back_left_door_top.json
// ngomon/data/foundation/doors/gate_back_left/gate_back_left_door.json
// ngomon/data/foundation/doors/gate_back_left/gate_back_left.json