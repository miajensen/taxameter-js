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

class cityBilPrisStrategy {
    calculatePrice(afstand, tidGaaet) {
        var price = (4.50 * (afstand)) + (7 * tidGaaet + 75);
        if (price < 75) {
            return 75;
        } else {
            return price;
        }

    }
}

var clock = new RealClock();
start(new Taxameter(clock, new cityBilPrisStrategy()));