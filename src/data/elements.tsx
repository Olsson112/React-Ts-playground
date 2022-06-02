import FireImage from '/src/assets/fire.jpg'
import WaterImage from '/src/assets/water.jpg'
import AirImage from '/src/assets/air.jpg'
import EarthImage from '/src/assets/earth.jpg'


export interface WorldElement {
    id: number
    name: string
    image: string
    textColor: string
}

export const elements: WorldElement[] = [
    {
        id: 1,
        name: "Fire",
        image: FireImage,
        textColor: "white"
    }, {
        id: 2,
        name: "Water",
        image: WaterImage,
        textColor: "black"
    }, {
        id: 3,
        name: "Air",
        image: AirImage,
        textColor: "black"
    }, {
        id: 4,
        name: "Earth",
        image: EarthImage,
        textColor: "white"
    }
]

