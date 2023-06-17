export const back_step = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
    const parentPath = "ngomon/"

    const backStep1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/back_step/floor1.back.step1.geojson.json"
    });

    const backStep2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/back_step/floor1.back.step2.geojson.json"
    });

    const backStep3 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/back_step/floor1.back.step3.geojson.json"
    });

    const backStep4 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/back_step/floor1.back.step4.geojson.json"
    });

    const backStep5 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/back_step/floor1.back.step5.geojson.json"
    });




    backStep1.renderer = {
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

    backStep2.renderer = {
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

    backStep3.renderer = {
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

    backStep4.renderer = {
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

    backStep5.renderer = {
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
        backStep1,
        backStep2,
        backStep3,
        backStep4,
        backStep5
    ]
}

// ngomon/data/centerBuilding/firstFloor/step/back_step/floor1.back.step1.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/back_step/floor1.back.step2.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/back_step/floor1.back.step4.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/back_step/floor1.back.step3.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/back_step/floor1.back.step5.geojson.json