export const left_step = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
    const parentPath = "ngomon/"

    const rightStep1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/leftBuilding/firstFloor/step/left_step/floor1.left.step1.geojson.json"
    });

    const rightStep2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/leftBuilding/firstFloor/step/left_step/floor1.left.step2.geojson.json"
    });

    const rightStep3 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/leftBuilding/firstFloor/step/left_step/floor1.left.step3.geojson.json"
    });

    const rightStep4 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/leftBuilding/firstFloor/step/left_step/floor1.left.step4.geojson.json"
    });

    const rightStep5 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/leftBuilding/firstFloor/step/left_step/floor1.left.step5.geojson.json"
    });

    const rightStep6 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/leftBuilding/firstFloor/step/left_step/floor1.left.step6.geojson.json"
    });




    rightStep1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    rightStep2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    rightStep3.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    rightStep4.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    rightStep5.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    rightStep6.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };


    return [
        rightStep1,
        rightStep2,
        rightStep3,
        rightStep4,
        rightStep5,
        rightStep6
    ]
}

// ngomon/data/leftBuilding/firstFloor/step/left_step/floor1.left.step1.geojson.json
// ngomon/data/leftBuilding/firstFloor/step/left_step/floor1.left.step3.geojson.json
// ngomon/data/leftBuilding/firstFloor/step/left_step/floor1.left.step2.geojson.json
// ngomon/data/leftBuilding/firstFloor/step/left_step/floor1.left.step4.geojson.json
// ngomon/data/leftBuilding/firstFloor/step/left_step/floor1.left.step6.geojson.json
// ngomon/data/leftBuilding/firstFloor/step/left_step/floor1.left.step5.geojson.json