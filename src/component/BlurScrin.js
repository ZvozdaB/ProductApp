export default function BlurScrin(props){
    return (
        <div className="fixed inset-0 bg-[rgba(100,100,100,.7)] z-0" onClick={props.onClick}></div>
    )
}