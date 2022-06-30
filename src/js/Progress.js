class Progress {
    constructor() {
        this.mapId = "Kitchen";
        this.startingHeroX = 0;
        this.startingHeroY = 0;
        this.startingHeroDirection = "down";
        this.saveFileKey = "FoodWars_SaveFile1";
        //this.saveFileKey = "8llmdllsjQuHQYjCEBGr";
    }

    save() {
        window.localStorage.setItem(
            this.saveFileKey,
            JSON.stringify({
                mapId: this.mapId,
                startingHeroX: this.startingHeroX,
                startingHeroY: this.startingHeroY,
                startingHeroDirection: this.startingHeroDirection,
                playerState: {
                    pizzas: playerState.pizzas,
                    lineup: playerState.lineup,
                    items: playerState.items,
                    storyFlags: playerState.storyFlags,
                },
            })
        );
        window.location.reload();
    }

    getSaveFile() {
        try {
            const file = window.localStorage.getItem(this.saveFileKey);
            return file ? JSON.parse(file) : null;
        } catch {
            return null;
        }
    }

    load() {
        const file = this.getSaveFile();
        if (file) {
            console.log(file);
            this.mapId = file.mapId;
            this.startingHeroX = file.startingHeroX;
            this.startingHeroY = file.startingHeroY;
            this.startingHeroDirection = file.startingHeroDirection;
            Object.keys(file.playerState).forEach((key) => {
                playerState[key] = file.playerState[key];
            });
        }
    }
}
