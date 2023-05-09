import useThemeState from "@/stores/theme-store";

export default function ComponentA(){
    const mode = useThemeState(state=>state.mode);

    const darkStyles = {
        width:200,
        height:200,
        backgroundColor:'black',
        color:'white'
    }

    const lightStyles = {
        width:200,
        height:200,
        backgroundColor:'lightgray',
    }

    return(
        <div style={mode === 'dark' ? darkStyles : lightStyles}>
            <div>{mode} Mode</div>
        </div>
    )
}