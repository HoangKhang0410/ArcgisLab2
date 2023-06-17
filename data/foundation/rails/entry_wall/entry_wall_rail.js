export const entry_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "https://gis-historical-relic-management.vercel.app/api/prism/path?path="
    const parentPath = "ngomon/"

    const floorEntryWallRailRoot = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/entry_wall/floor.entry.wall.rail.root.geojson.json"
    });

    const floorEntryWallRailColumn1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/entry_wall/floor.entry.wall.rail.column1.geojson.json"
    });

    const floorEntryWallRailColumn2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/entry_wall/floor.entry.wall.rail.column2.geojson.json"
    });

    const floorEntryWallRailWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/rails/entry_wall/floor.entry.wall.rail.wall.geojson.json"
    });

    floorEntryWallRailRoot.renderer = {
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

    floorEntryWallRailColumn1.renderer = {
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

    floorEntryWallRailColumn2.renderer = {
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


    floorEntryWallRailWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.8,
                    material: {
                        color: "#52565e"
                    },
                }
            ]
        }
    };

    return [
        floorEntryWallRailRoot,
        floorEntryWallRailColumn1,
        floorEntryWallRailColumn2,
        floorEntryWallRailWall
    ]
}


// ngomon/data/foundation/rails/entry_wall/floor.entry.wall.rail.column1.geojson.json
// ngomon/data/foundation/rails/entry_wall/floor.entry.wall.rail.column2.geojson.json
// ngomon/data/foundation/rails/entry_wall/floor.entry.wall.rail.root.geojson.json
// ngomon/data/foundation/rails/entry_wall/floor.entry.wall.rail.wall.geojson.json