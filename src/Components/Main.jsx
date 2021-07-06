function Main(props) {

    const {result} = props
    console.log(props.result)

    function myFunction(imgs) {
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

    return(

        <div className="house">
            <div  className="house__container">
            {

                result.map((n, i) => (
                    <div className="house__box" key={i}>
                    <img  src={n.images[0]} alt={n.name} className="house__image" />
                    <p className="house__address">{n.name}</p> 
                    </div>
                ))

             }
             
            </div>
            

            
        </div>
     
    )

}

export default Main