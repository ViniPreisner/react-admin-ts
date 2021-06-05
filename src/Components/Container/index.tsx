import React from 'react'
import './styles.css'
type Props = {
    children: React.ReactNode
}

const Container = (props: Props) => {
    return(
        <div className="mainContainer">{props.children}</div>
    )
}

export default Container