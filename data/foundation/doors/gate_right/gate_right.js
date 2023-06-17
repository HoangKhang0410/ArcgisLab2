export const gate_right_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/bodyComplex/path?path="
    const parentPath = "ngomon/"

    const GateRightWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/doors/gate_right/gate_right.json"
    });

    const GateRightDoor = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/doors/gate_right/gate_right_door.json"
    });

    const GateRightTopDoor = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/doors/gate_right/gate_right_door_top.json"
    });


    GateRightWall.renderer = {
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

    GateRightDoor.renderer = {
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

    GateRightTopDoor.renderer = {
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
        GateRightWall,
        GateRightDoor,
        GateRightTopDoor
    ]
}

// ngomon/data/foundation/doors/gate_right/gate_right_door.json
// ngomon/data/foundation/doors/gate_right/gate_right.json
// ngomon/data/foundation/doors/gate_right/gate_right_door_top.json