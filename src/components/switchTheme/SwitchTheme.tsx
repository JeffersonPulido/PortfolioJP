import { FC, ReactElement } from 'react';
import './switchTheme.css';

export const SwitchTheme: FC = (): ReactElement => {
    const handleTheme = (): void => {
        const switchTheme = document.getElementById('Switch') as HTMLInputElement;
        if (switchTheme && switchTheme.checked) {
            //CLARO
            document.getElementById('containerBg')!.className = 'bgBodyLight';
        } else {
            //OSCURO
            document.getElementById('containerBg')!.className = 'bgBodyDark';
        }
    };

    return (
        <>
            <label className="switch">
                <input type="checkbox" id="Switch" onClick={handleTheme} />
                <span className="slider"></span>
            </label>
        </>
    );
};
