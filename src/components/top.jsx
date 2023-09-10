import Trending from "./Trending";
function Top(){
    const names=["1","2","3","4","5","7","9","09"];

    return(
        <>
        <div className="overflow-x-scroll w-full flex flex-row space-x-24 whitespace-nowrap h-1/4">
            {
            names.map(name=>{
                return <Trending text={name}/>;
            })
            }
        </div>
        
        </>
    )

}
export default Top;