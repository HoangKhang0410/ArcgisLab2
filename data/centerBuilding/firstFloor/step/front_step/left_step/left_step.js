export const left_step = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
    const parentPath = "ngomon/"

    const leftStep1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step1.geojson.json"
    });

    const leftStep2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step2.geojson.json"
    });

    const leftStep3 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step3.geojson.json"
    });

    const leftStep4 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step4.geojson.json"
    });

    const leftStep5 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step5.geojson.json"
    });




    leftStep1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.24,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    leftStep2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.24,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    leftStep3.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.24,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    leftStep4.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.24,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    leftStep5.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.24,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };


    return [
        leftStep1,
        leftStep2,
        leftStep3,
        leftStep4,
        leftStep5
    ]
}

// ngomon/data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step3.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step1.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step5.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step2.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/left_step/floor1.left.step4.geojson.json