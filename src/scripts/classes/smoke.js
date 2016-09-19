class Smoke {
  constructor(x1,x2,y1,y2,noiseScale = 0.02, octaves = 8, noiseOffset = 0.5){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.t = 0;
    this.timeStep = 0.01
    this.noiseScale = noiseScale;
    this.octaves = octaves;
    this.noiseOffset = noiseOffset;
    noiseDetail(this.octaves, this.noiseOffset);
  }

  setPixel() {
    for(var i = this.y1; i < this.y2; i++){
      for(var n = this.x1; n < this.x2; n++) {
        stroke(map(noise(n * this.noiseScale, i * this.noiseScale, this.t),0,1,0,150));
        point(n,i);
      }
    }
    this.t += this.timeStep
  }
};
