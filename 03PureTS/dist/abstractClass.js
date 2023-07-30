"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some calculations
        return 8;
    }
}
//const user = new TakePhoto("test", "test") this will result in an error, since abstract classes are not reachable
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const user = new Instagram("test", "test", 3);
