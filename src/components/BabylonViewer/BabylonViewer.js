import React from 'react';
import SceneComponent from 'babylonjs-hook'
import '@babylonjs/loaders'
import { SceneLoader, FreeCamera, Vector3, HemisphericLight } from '@babylonjs/core'

let glbl_scene;
const onSceneReady = (scene)=>{
  console.log('scene ready:', scene);
  glbl_scene = scene
  const camera = new FreeCamera("cameraID", new Vector3(0,3,5), scene)
  const canvas = scene.getEngine().getRenderingCanvas()
  camera.setTarget(new Vector3())
  camera.attachControl(canvas, true)
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  SceneLoader.Append("http://localhost:8888/", "dance.glb", scene, function (scene) {
    // do something with the scene
    // http://83.251.240.178:3000/
  });
}
const onRender = ()=>{}

function BabylonsViewer( props ) {
  console.log(props.filename)
  if(glbl_scene && props.filename){
    glbl_scene.meshes.forEach(m=>m.dispose())
    SceneLoader.Append("http://localhost:8888/", props.filename, glbl_scene, function (scene) {
      // do something with the scene
      // http://83.251.240.178:3000/
    });
  }
  return (<React.Fragment>
    <SceneComponent antialias onSceneReady={ onSceneReady } onRender={ onRender } id="my-canvas" />
  </React.Fragment>);
}

export default BabylonsViewer;
