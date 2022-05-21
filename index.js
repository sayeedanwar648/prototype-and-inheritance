let fourwheeler ={
    wheels:4,
    stearing:1,
    engine:1,
    music:"yes",
    Ev:"Yes"
}

let myfour = Object.create(fourwheeler);
console.log(myfour)

// from constructor function
function Fourwheel(w,s,e,m,a){
    this.wheels = w;
    this.stearing = s;
    this.engine = e;
    this.music = m;
    this.Ev = a
}

let myfour2 = new Fourwheel(4,1,1,"yes","yes");
console.log(myfour2)