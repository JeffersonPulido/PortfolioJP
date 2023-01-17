import React from 'react'
import './switchTheme.css'

export const SwitchTheme = () => {

    const handleTheme = () => {
        const switchTheme = document.getElementById("Switch");
        if (switchTheme.checked) { //CLARO
            document.getElementById('containerBg').className = "bgBodyLight"
        } else { //OSCURO
            document.getElementById('containerBg').className = "bgBodyDark"
        }
    }

    return (
        <>
            <label className="switch">
                <input type="checkbox" id="Switch" onClick={handleTheme} />
                <span className="slider"></span>
            </label>
        </>
    )
}
