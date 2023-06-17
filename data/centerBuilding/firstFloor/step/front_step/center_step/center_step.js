export const center_step = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic.onrender.com/api/prism/path?path="
    const parentPath = "ngomon/"

    const centerStep1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step1.geojson.json"
    });

    const centerStep2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step2.geojson.json"
    });

    const centerStep3 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step3.geojson.json"
    });

    const centerStep4 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step4.geojson.json"
    });

    const centerStep5 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step5.geojson.json"
    });




    centerStep1.renderer = {
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

    centerStep2.renderer = {
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

    centerStep3.renderer = {
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

    centerStep4.renderer = {
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

    centerStep5.renderer = {
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
        centerStep1,
        centerStep2,
        centerStep3,
        centerStep4,
        centerStep5
    ]
}

// ngomon/data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step2.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step4.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step5.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step1.geojson.json
// ngomon/data/centerBuilding/firstFloor/step/front_step/center_step/floor1.center.step3.geojson.json