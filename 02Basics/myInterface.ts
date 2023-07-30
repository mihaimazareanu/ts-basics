interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    gitHubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const mihai: Admin = {dbId: 22,email: "t@t.com", userId: 123, startTrial: () => {return "Trial started."}, getCoupon: (name: "mihai10", off: 10) => {return 10}, gitHubToken: "github", role: "admin"}