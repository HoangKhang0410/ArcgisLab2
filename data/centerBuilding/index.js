import { center_building_cols_FF } from "./firstFloor/columns/column.js";
import { floor_SF } from "./secondFloor/floor/index.js";
import { column_SF } from "./secondFloor/column/index.js";
import { doorF_SF } from "./secondFloor/door/FDoor/index.js";
import { doorR_SF } from "./secondFloor/door/RDoor/index.js";
import { doorL_SF } from "./secondFloor/door/LDoor/index.js";
import { doorB_SF } from "./secondFloor/door/BDoor/index.js";
import { door_FF } from "./firstFloor/doors/front/door.js";
import { roof_SF } from "./secondFloor/roof/index.js";
import { rails_SF } from "./secondFloor/rails/index.js";
import { door_left_FF } from "./firstFloor/doors/left/door.js";
import { floor_center } from "./firstFloor/floor/floor.js";
import { door_back_FF } from "./firstFloor/doors/back/door.js";
import { door_right_FF } from "./firstFloor/doors/right/door.js";
import { roof_back_FF } from "./firstFloor/roof/roof.js";
import { floor1_steps } from "./firstFloor/step/step.js";

export const centerBuilding = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const centerBuildingColsFF = center_building_cols_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorFF = door_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorLeftFF = door_left_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorBackFF = door_back_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorRightFF = door_right_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const roofBackFF = roof_back_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const floorSF = floor_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const columnSF = column_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorFSF = doorF_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorRSF = doorR_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorLSF = doorL_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorBSF = doorB_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const roofSF = roof_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const railsSF = rails_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const floorCenter = floor_center(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const floor1Steps = floor1_steps(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  return [
    ...floor1Steps,
    ...floorSF,
    ...columnSF,
    ...doorFSF,
    ...doorRSF,
    ...doorLSF,
    ...doorBSF,
    ...centerBuildingColsFF,
    ...doorFF,
    ...doorLeftFF,
    ...roofSF,
    ...railsSF,
    ...floorCenter,
    ...doorBackFF,
    ...doorRightFF,
    ...roofBackFF,
  ];
};
