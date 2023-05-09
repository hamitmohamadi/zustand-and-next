"use client"
// project imports
import styles from './page.module.css'
import useThemeState from "@/stores/theme-store";
import ComponentA from "@/app/ComponentA";

export default function Home() {
    const changeMode = useThemeState(state => state.changeMode);
    return (
        <main className={styles.main}>
            <button onClick={changeMode}>Toggle Theme</button>
            <br/>
            <ComponentA/>
        </main>
    )
}
