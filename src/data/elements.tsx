import FireImage from '/src/assets/fire.jpg'
import WaterImage from '/src/assets/water.jpg'
import AirImage from '/src/assets/air.jpg'
import EarthImage from '/src/assets/earth.jpg'


export interface Element {
    id: number,
    name: string
    image: string
}

export const elements: Element[] = [
    {
        id: 1,
        name: "Fire",
        image: FireImage
    }, {
        id: 2,
        name: "Water",
        image: WaterImage
    }, {
        id: 3,
        name: "Air",
        image: AirImage
    }, {
        id: 4,
        name: "Earth",
        image: EarthImage
    },
]

