const MODES = {
    ACTIVE: "active",
    BREAK: "break",
    PAUSED: "paused"
};

export default class Timer {
    constructor ( sec, min, rounds, mode ) {
        this.sec = sec;
        this.min = min;
        this.rounds = rounds;
        this.mode = MODES.ACTIVE;
    }

    reset() {

    }

    start() {

    }

    pause() {

    }

    finish () {

    }

    change_mode (newMod) {
        if (!Object.values(MODES).includes(newMode)) {
            throw new Error("Invalid mode");
        }
        this.mode = newMode;
    }
}