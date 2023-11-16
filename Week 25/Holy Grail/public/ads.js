function Ads(props){
    return (<>
        <ads> 
            <PlusMinus section="ads" handle={props.handle}/>
            <div className="ads">Ads:{props.data.ads}</div>
            <Data data={props.data}/> 
        </ads> 
    </>);
}