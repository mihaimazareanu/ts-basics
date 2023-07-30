abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter : string
    ){}

    abstract getSepia():void
    getReelTime(): number {
        //some calculations
        return 8
    }
}

//const user = new TakePhoto("test", "test") this will result in an error, since abstract classes are not reachable

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        burst: number
        ) {
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia")
        }
}

const user = new Instagram("test", "test", 3)