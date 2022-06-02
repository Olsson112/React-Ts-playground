import { CSSProperties, FC, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Modal from "./modal";


interface Props {
    searchWord: string
}

const ImageCollage: FC<Props> = (props) => {

    const [imageList, setImageList] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalImageUrl, setModalImageUrl] = useState<string>()

    useEffect(() => {

        /* Lägg in eran egna nyckel till API:et Pixabay */
        const apiKeyFor: string = ""

        const getImages = async () => {
            const response = await fetch(`https://pixabay.com/api/?key=${apiKeyFor}&q=${props.searchWord}&per_page=50`)
            const collectedImageList = await response.json()
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
                    if(isLoading) {
                        return (
                            <div key={imageObject.id} style={imageStyle}>
                                <PropagateLoader color="white" size={7} />
                            </div>
                        )
                    }

                    return <img onClick={() => { setModalImageUrl(imageObject.largeImageURL) }} style={imageStyle} key={imageObject.id} src={imageObject.largeImageURL} alt="" />
                })
            }
            {
                modalImageUrl ? (
                    <Modal setShowModal={setModalImageUrl}>
                        <img style={{...imageStyle, ...largeSize}} src={modalImageUrl} alt="" />
                    </Modal>
                ) : undefined
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

const largeSize: CSSProperties = {
    width: "80%",
    height: "80%",
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