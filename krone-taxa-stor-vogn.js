class RealClock {
    now() {
        return new Date();
    }
}

class FakeClock {
    constructor() {
        this.time = new Date();
    }
    now() {
        return this.time;
    }
    forward(minutter) {
        this.time.setMinutes(this.time.getMinutes() + minutter);
    }
}

class storKronePrisStrategy {
    calculatePrice(afstand, tidGaaet) {
        return (12 * (afstand)) + (6.67 * tidGaaet + 69);

    }
}

var clock = new RealClock();
start(new Taxameter(clock, new storKronePrisStrategy()));