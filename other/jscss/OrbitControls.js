THREE.OrbitControls=function(a,b){function c(){return 2*Math.PI/60/60*m.autoRotateSpeed}function d(){return Math.pow(.95,m.zoomSpeed)}function e(a){if(m.enabled!==!1){if(a.preventDefault(),0===a.button){if(m.noRotate===!0)return;F=E.ROTATE,o.set(a.clientX,a.clientY)}else if(1===a.button){if(m.noZoom===!0)return;F=E.DOLLY,w.set(a.clientX,a.clientY)}else if(2===a.button){if(m.noPan===!0)return;F=E.PAN,r.set(a.clientX,a.clientY)}m.domElement.addEventListener("mousemove",f,!1),m.domElement.addEventListener("mouseup",g,!1),m.dispatchEvent(J)}}function f(a){if(m.enabled!==!1){a.preventDefault();var b=m.domElement===document?m.domElement.body:m.domElement;if(F===E.ROTATE){if(m.noRotate===!0)return;p.set(a.clientX,a.clientY),q.subVectors(p,o),m.rotateLeft(2*Math.PI*q.x/b.clientWidth*m.rotateSpeed),m.rotateUp(2*Math.PI*q.y/b.clientHeight*m.rotateSpeed),o.copy(p)}else if(F===E.DOLLY){if(m.noZoom===!0)return;x.set(a.clientX,a.clientY),y.subVectors(x,w),y.y>0?m.dollyIn():m.dollyOut(),w.copy(x)}else if(F===E.PAN){if(m.noPan===!0)return;s.set(a.clientX,a.clientY),t.subVectors(s,r),m.pan(t.x,t.y),r.copy(s)}m.update()}}function g(){m.enabled!==!1&&(m.domElement.removeEventListener("mousemove",f,!1),m.domElement.removeEventListener("mouseup",g,!1),m.dispatchEvent(K),F=E.NONE)}function h(a){if(m.enabled!==!1&&m.noZoom!==!0){a.preventDefault(),a.stopPropagation();var b=0;void 0!==a.wheelDelta?b=a.wheelDelta:void 0!==a.detail&&(b=-a.detail),b>0?m.dollyOut():m.dollyIn(),m.update(),m.dispatchEvent(J),m.dispatchEvent(K)}}function i(a){if(m.enabled!==!1&&m.noKeys!==!0&&m.noPan!==!0)switch(a.keyCode){case m.keys.UP:m.pan(0,m.keyPanSpeed),m.update();break;case m.keys.BOTTOM:m.pan(0,-m.keyPanSpeed),m.update();break;case m.keys.LEFT:m.pan(m.keyPanSpeed,0),m.update();break;case m.keys.RIGHT:m.pan(-m.keyPanSpeed,0),m.update()}}function j(a){var b,c,d;if(m.enabled!==!1){switch(a.touches.length){case 1:if(m.noRotate===!0)return;F=E.TOUCH_ROTATE,o.set(a.touches[0].pageX,a.touches[0].pageY);break;case 2:if(m.noZoom===!0)return;F=E.TOUCH_DOLLY,b=a.touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY,d=Math.sqrt(b*b+c*c),w.set(0,d);break;case 3:if(m.noPan===!0)return;F=E.TOUCH_PAN,r.set(a.touches[0].pageX,a.touches[0].pageY);break;default:F=E.NONE}m.dispatchEvent(J)}}function k(a){var b,c,d,e;if(m.enabled!==!1)switch(a.preventDefault(),a.stopPropagation(),b=m.domElement===document?m.domElement.body:m.domElement,a.touches.length){case 1:if(m.noRotate===!0)return;if(F!==E.TOUCH_ROTATE)return;p.set(a.touches[0].pageX,a.touches[0].pageY),q.subVectors(p,o),m.rotateLeft(2*Math.PI*q.x/b.clientWidth*m.rotateSpeed),m.rotateUp(2*Math.PI*q.y/b.clientHeight*m.rotateSpeed),o.copy(p),m.update();break;case 2:if(m.noZoom===!0)return;if(F!==E.TOUCH_DOLLY)return;c=a.touches[0].pageX-a.touches[1].pageX,d=a.touches[0].pageY-a.touches[1].pageY,e=Math.sqrt(c*c+d*d),x.set(0,e),y.subVectors(x,w),y.y>0?m.dollyOut():m.dollyIn(),w.copy(x),m.update();break;case 3:if(m.noPan===!0)return;if(F!==E.TOUCH_PAN)return;s.set(a.touches[0].pageX,a.touches[0].pageY),t.subVectors(s,r),m.pan(t.x,t.y),r.copy(s),m.update();break;default:F=E.NONE}}function l(){m.enabled!==!1&&(m.dispatchEvent(K),F=E.NONE)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K;this.object=a,this.domElement=void 0!==b?b:document,this.enabled=!0,this.target=new THREE.Vector3,this.center=this.target,this.noZoom=!1,this.zoomSpeed=1,this.minDistance=0,this.maxDistance=1/0,this.noRotate=!1,this.rotateSpeed=1,this.noPan=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.noKeys=!1,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},m=this,n=1e-6,o=new THREE.Vector2,p=new THREE.Vector2,q=new THREE.Vector2,r=new THREE.Vector2,s=new THREE.Vector2,t=new THREE.Vector2,u=new THREE.Vector3,v=new THREE.Vector3,w=new THREE.Vector2,x=new THREE.Vector2,y=new THREE.Vector2,z=0,A=0,B=1,C=new THREE.Vector3,D=new THREE.Vector3,E={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},F=E.NONE,this.target0=this.target.clone(),this.position0=this.object.position.clone(),G=(new THREE.Quaternion).setFromUnitVectors(a.up,new THREE.Vector3(0,1,0)),H=G.clone().inverse(),I={type:"change"},J={type:"start"},K={type:"end"},this.rotateLeft=function(a){void 0===a&&(a=c()),A-=a},this.rotateUp=function(a){void 0===a&&(a=c()),z-=a},this.panLeft=function(a){var b=this.object.matrix.elements;u.set(b[0],b[1],b[2]),u.multiplyScalar(-a),C.add(u)},this.panUp=function(a){var b=this.object.matrix.elements;u.set(b[4],b[5],b[6]),u.multiplyScalar(a),C.add(u)},this.pan=function(a,b){var c,d,e,f=m.domElement===document?m.domElement.body:m.domElement;void 0!==m.object.fov?(c=m.object.position,d=c.clone().sub(m.target),e=d.length(),e*=Math.tan(m.object.fov/2*Math.PI/180),m.panLeft(2*a*e/f.clientHeight),m.panUp(2*b*e/f.clientHeight)):void 0!==m.object.top?(m.panLeft(a*(m.object.right-m.object.left)/f.clientWidth),m.panUp(b*(m.object.top-m.object.bottom)/f.clientHeight)):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")},this.dollyIn=function(a){void 0===a&&(a=d()),B/=a},this.dollyOut=function(a){void 0===a&&(a=d()),B*=a},this.update=function(){var a,b,d,e=this.object.position;v.copy(e).sub(this.target),v.applyQuaternion(G),a=Math.atan2(v.x,v.z),b=Math.atan2(Math.sqrt(v.x*v.x+v.z*v.z),v.y),this.autoRotate&&this.rotateLeft(c()),a+=A,b+=z,b=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,b)),b=Math.max(n,Math.min(Math.PI-n,b)),d=v.length()*B,d=Math.max(this.minDistance,Math.min(this.maxDistance,d)),this.target.add(C),v.x=d*Math.sin(b)*Math.sin(a),v.y=d*Math.cos(b),v.z=d*Math.sin(b)*Math.cos(a),v.applyQuaternion(H),e.copy(this.target).add(v),this.object.lookAt(this.target),A=0,z=0,B=1,C.set(0,0,0),D.distanceToSquared(this.object.position)>n&&(this.dispatchEvent(I),D.copy(this.object.position))},this.reset=function(){F=E.NONE,this.target.copy(this.target0),this.object.position.copy(this.position0),this.update()},this.domElement.addEventListener("contextmenu",function(a){a.preventDefault()},!1),this.domElement.addEventListener("mousedown",e,!1),this.domElement.addEventListener("mousewheel",h,!1),this.domElement.addEventListener("DOMMouseScroll",h,!1),this.domElement.addEventListener("touchstart",j,!1),this.domElement.addEventListener("touchend",l,!1),this.domElement.addEventListener("touchmove",k,!1),window.addEventListener("keydown",i,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype);THREE.OrbitControls=function(object,domElement){this.object=object;this.domElement=(domElement!==undefined)?domElement:document;this.enabled=true;this.target=new THREE.Vector3();this.center=this.target;this.noZoom=false;this.zoomSpeed=1;this.minDistance=0;this.maxDistance=Infinity;this.noRotate=false;this.rotateSpeed=1;this.noPan=false;this.keyPanSpeed=7;this.autoRotate=false;this.autoRotateSpeed=2;this.minPolarAngle=0;this.maxPolarAngle=Math.PI;this.noKeys=false;this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40};var scope=this;var EPS=0.000001;var rotateStart=new THREE.Vector2();var rotateEnd=new THREE.Vector2();var rotateDelta=new THREE.Vector2();var panStart=new THREE.Vector2();var panEnd=new THREE.Vector2();var panDelta=new THREE.Vector2();var panOffset=new THREE.Vector3();var offset=new THREE.Vector3();var dollyStart=new THREE.Vector2();var dollyEnd=new THREE.Vector2();var dollyDelta=new THREE.Vector2();var phiDelta=0;var thetaDelta=0;var scale=1;var pan=new THREE.Vector3();var lastPosition=new THREE.Vector3();var STATE={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5};var state=STATE.NONE;this.target0=this.target.clone();this.position0=this.object.position.clone();var quat=new THREE.Quaternion().setFromUnitVectors(object.up,new THREE.Vector3(0,1,0));var quatInverse=quat.clone().inverse();var changeEvent={type:"change"};var startEvent={type:"start"};var endEvent={type:"end"};this.rotateLeft=function(angle){if(angle===undefined){angle=getAutoRotationAngle()}thetaDelta-=angle};this.rotateUp=function(angle){if(angle===undefined){angle=getAutoRotationAngle()}phiDelta-=angle};this.panLeft=function(distance){var te=this.object.matrix.elements;panOffset.set(te[0],te[1],te[2]);panOffset.multiplyScalar(-distance);pan.add(panOffset)};this.panUp=function(distance){var te=this.object.matrix.elements;panOffset.set(te[4],te[5],te[6]);panOffset.multiplyScalar(distance);pan.add(panOffset)};this.pan=function(deltaX,deltaY){var element=scope.domElement===document?scope.domElement.body:scope.domElement;if(scope.object.fov!==undefined){var position=scope.object.position;var offset=position.clone().sub(scope.target);var targetDistance=offset.length();targetDistance*=Math.tan((scope.object.fov/2)*Math.PI/180);scope.panLeft(2*deltaX*targetDistance/element.clientHeight);scope.panUp(2*deltaY*targetDistance/element.clientHeight)}else{if(scope.object.top!==undefined){scope.panLeft(deltaX*(scope.object.right-scope.object.left)/element.clientWidth);scope.panUp(deltaY*(scope.object.top-scope.object.bottom)/element.clientHeight)}else{console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")}}};this.dollyIn=function(dollyScale){if(dollyScale===undefined){dollyScale=getZoomScale()}scale/=dollyScale};this.dollyOut=function(dollyScale){if(dollyScale===undefined){dollyScale=getZoomScale()}scale*=dollyScale};this.update=function(){var position=this.object.position;offset.copy(position).sub(this.target);offset.applyQuaternion(quat);var theta=Math.atan2(offset.x,offset.z);var phi=Math.atan2(Math.sqrt(offset.x*offset.x+offset.z*offset.z),offset.y);if(this.autoRotate){this.rotateLeft(getAutoRotationAngle())}theta+=thetaDelta;phi+=phiDelta;phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,phi));phi=Math.max(EPS,Math.min(Math.PI-EPS,phi));var radius=offset.length()*scale;radius=Math.max(this.minDistance,Math.min(this.maxDistance,radius));this.target.add(pan);offset.x=radius*Math.sin(phi)*Math.sin(theta);offset.y=radius*Math.cos(phi);offset.z=radius*Math.sin(phi)*Math.cos(theta);offset.applyQuaternion(quatInverse);position.copy(this.target).add(offset);this.object.lookAt(this.target);thetaDelta=0;phiDelta=0;scale=1;pan.set(0,0,0);if(lastPosition.distanceToSquared(this.object.position)>EPS){this.dispatchEvent(changeEvent);lastPosition.copy(this.object.position)}};this.reset=function(){state=STATE.NONE;this.target.copy(this.target0);this.object.position.copy(this.position0);this.update()};function getAutoRotationAngle(){return 2*Math.PI/60/60*scope.autoRotateSpeed}function getZoomScale(){return Math.pow(0.95,scope.zoomSpeed)}function onMouseDown(event){if(scope.enabled===false){return}event.preventDefault();if(event.button===0){if(scope.noRotate===true){return}state=STATE.ROTATE;rotateStart.set(event.clientX,event.clientY)}else{if(event.button===1){if(scope.noZoom===true){return}state=STATE.DOLLY;dollyStart.set(event.clientX,event.clientY)}else{if(event.button===2){if(scope.noPan===true){return}state=STATE.PAN;panStart.set(event.clientX,event.clientY)}}}scope.domElement.addEventListener("mousemove",onMouseMove,false);scope.domElement.addEventListener("mouseup",onMouseUp,false);scope.dispatchEvent(startEvent)}function onMouseMove(event){if(scope.enabled===false){return}event.preventDefault();var element=scope.domElement===document?scope.domElement.body:scope.domElement;if(state===STATE.ROTATE){if(scope.noRotate===true){return}rotateEnd.set(event.clientX,event.clientY);rotateDelta.subVectors(rotateEnd,rotateStart);scope.rotateLeft(2*Math.PI*rotateDelta.x/element.clientWidth*scope.rotateSpeed);scope.rotateUp(2*Math.PI*rotateDelta.y/element.clientHeight*scope.rotateSpeed);rotateStart.copy(rotateEnd)}else{if(state===STATE.DOLLY){if(scope.noZoom===true){return}dollyEnd.set(event.clientX,event.clientY);dollyDelta.subVectors(dollyEnd,dollyStart);if(dollyDelta.y>0){scope.dollyIn()}else{scope.dollyOut()}dollyStart.copy(dollyEnd)}else{if(state===STATE.PAN){if(scope.noPan===true){return}panEnd.set(event.clientX,event.clientY);panDelta.subVectors(panEnd,panStart);scope.pan(panDelta.x,panDelta.y);panStart.copy(panEnd)}}}scope.update()}function onMouseUp(){if(scope.enabled===false){return}scope.domElement.removeEventListener("mousemove",onMouseMove,false);scope.domElement.removeEventListener("mouseup",onMouseUp,false);scope.dispatchEvent(endEvent);state=STATE.NONE}function onMouseWheel(event){if(scope.enabled===false||scope.noZoom===true){return}event.preventDefault();event.stopPropagation();var delta=0;if(event.wheelDelta!==undefined){delta=event.wheelDelta}else{if(event.detail!==undefined){delta=-event.detail}}if(delta>0){scope.dollyOut()}else{scope.dollyIn()}scope.update();scope.dispatchEvent(startEvent);scope.dispatchEvent(endEvent)}function onKeyDown(event){if(scope.enabled===false||scope.noKeys===true||scope.noPan===true){return}switch(event.keyCode){case scope.keys.UP:scope.pan(0,scope.keyPanSpeed);scope.update();break;case scope.keys.BOTTOM:scope.pan(0,-scope.keyPanSpeed);scope.update();break;case scope.keys.LEFT:scope.pan(scope.keyPanSpeed,0);scope.update();break;case scope.keys.RIGHT:scope.pan(-scope.keyPanSpeed,0);scope.update();break}}function touchstart(event){if(scope.enabled===false){return}switch(event.touches.length){case 1:if(scope.noRotate===true){return}state=STATE.TOUCH_ROTATE;rotateStart.set(event.touches[0].pageX,event.touches[0].pageY);break;case 2:if(scope.noZoom===true){return}state=STATE.TOUCH_DOLLY;var dx=event.touches[0].pageX-event.touches[1].pageX;var dy=event.touches[0].pageY-event.touches[1].pageY;var distance=Math.sqrt(dx*dx+dy*dy);dollyStart.set(0,distance);break;case 3:if(scope.noPan===true){return}state=STATE.TOUCH_PAN;panStart.set(event.touches[0].pageX,event.touches[0].pageY);break;default:state=STATE.NONE}scope.dispatchEvent(startEvent)}function touchmove(event){if(scope.enabled===false){return}event.preventDefault();event.stopPropagation();var element=scope.domElement===document?scope.domElement.body:scope.domElement;switch(event.touches.length){case 1:if(scope.noRotate===true){return}if(state!==STATE.TOUCH_ROTATE){return}rotateEnd.set(event.touches[0].pageX,event.touches[0].pageY);rotateDelta.subVectors(rotateEnd,rotateStart);scope.rotateLeft(2*Math.PI*rotateDelta.x/element.clientWidth*scope.rotateSpeed);scope.rotateUp(2*Math.PI*rotateDelta.y/element.clientHeight*scope.rotateSpeed);rotateStart.copy(rotateEnd);scope.update();break;case 2:if(scope.noZoom===true){return}if(state!==STATE.TOUCH_DOLLY){return}var dx=event.touches[0].pageX-event.touches[1].pageX;var dy=event.touches[0].pageY-event.touches[1].pageY;var distance=Math.sqrt(dx*dx+dy*dy);dollyEnd.set(0,distance);dollyDelta.subVectors(dollyEnd,dollyStart);if(dollyDelta.y>0){scope.dollyOut()}else{scope.dollyIn()}dollyStart.copy(dollyEnd);scope.update();break;case 3:if(scope.noPan===true){return}if(state!==STATE.TOUCH_PAN){return}panEnd.set(event.touches[0].pageX,event.touches[0].pageY);panDelta.subVectors(panEnd,panStart);scope.pan(panDelta.x,panDelta.y);panStart.copy(panEnd);scope.update();break;default:state=STATE.NONE}}function touchend(){if(scope.enabled===false){return}scope.dispatchEvent(endEvent);state=STATE.NONE}this.domElement.addEventListener("contextmenu",function(event){event.preventDefault()},false);this.domElement.addEventListener("mousedown",onMouseDown,false);this.domElement.addEventListener("mousewheel",onMouseWheel,false);this.domElement.addEventListener("DOMMouseScroll",onMouseWheel,false);this.domElement.addEventListener("touchstart",touchstart,false);this.domElement.addEventListener("touchend",touchend,false);this.domElement.addEventListener("touchmove",touchmove,false);window.addEventListener("keydown",onKeyDown,false);this.update()};THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype);