import { CSSProperties, FC, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";


interface Props {
    searchWord: string
    textColor: string
}

const TextBox: FC<Props> = (props) => {

    const [ text, setText ] = useState("")
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const getText = async () => {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.searchWord}`)
            const textList = await response.json()
            console.log(textList);
            
            setText(textList[0].meanings[0].definitions[0].definition)
            setInterval(() => {
                setIsLoading(false)
            }, 2000)
        }

        getText()        
    }, [])

    return (
        <div style={textContainer}>
            {
                isLoading ? (
                    <PropagateLoader color="white" size={15} />
                ) : (
                    <h2 style={{...textStyle, color: props.textColor}}>{text}</h2>
                )
            }
        </div>
    )
}

const textContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center"
}

const textStyle: CSSProperties = {
    fontFamily: "monospace",
    textAlign: "center",
    fontSize: "25px",
    paddingLeft: "10vw", 
    paddingRight: "10vw"
}

export default TextBox