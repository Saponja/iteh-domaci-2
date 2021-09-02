import { Collapse, IconButton } from "@material-ui/core"
import { CloseOutlined } from "@material-ui/icons"
import { useEffect } from "react"


export const CustomAlert = ({open, setOpen, text}) => {

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if(open) {
            setTimeout(() => setOpen(false), 2000);
        }

        return (() => {
        })
    }, [open, setOpen])

    return (
        <Collapse in={open}>
        {text}
        <IconButton onClick={handleClose}>
            <CloseOutlined />
        </IconButton>
        </Collapse>
    )

}
