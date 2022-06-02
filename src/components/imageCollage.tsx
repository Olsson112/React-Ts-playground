import { CSSProperties, FC, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";


interface Props {
    searchWord: string
}

const ImageCollage: FC<Props> = (props) => {

    const [imageList, setImageList] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getImages = async () => {
            const response = await fetch(`https://pixabay.com/api/?key=8006651-446f5f5aa069386b7cd8b07b5&q=${props.searchWord}&per_page=50`)
            const collectedImageList = await response.json()
            console.log(collectedImageList)
            setImageList(collectedImageList.hits)

            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        }

        getImages()
    }, [])

    return (
        <div style={imageContainer}>
            {     
                imageList.map((imageObject) => {
                    console.log(imageObject)
                    if(isLoading) {
                        return (
                            <div style={imageStyle}>
                                <PropagateLoader color="white" size={7} />
                            </div>
                        )
                    }

                    return <img style={imageStyle} key={imageObject.id} src={imageObject.largeImageURL} alt="" />
                })
            }
        </div>
    )
}

const imageContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "3em",
    paddingTop: "3em",
    paddingBottom: "3em"
}

const imageStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",

    width: "200px",
    height: "300px",
    objectFit: "cover",
    border: "white 1px solid",
    borderRadius: "10px",
    boxShadow: "10px 10px 20px black"
}

export default ImageCollage