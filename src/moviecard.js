import React from "react";
import image1 from './image1.jpg';
import "./moviecard.css";



class MovieCard extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"the Avengers",
            plot:"Supernatural powers shown in the movies",
            price:199,
            rating:8.9,
            stars:0,
            fav: false,
            addToCart: false,
        }
    }
    addStars(){
        // form1

        // this.setState({
        //     stars:this.state.stars + 0.5
        // });

        //form2
        if(this.state.stars>=5){
            return;
        }
        this.setState((prevState)=>{
            return{
                stars: prevState.stars+0.5
            }

        });

        // this.state.stars+=0.5;
        // console.log(this.state.stars);
    }


    decrStars=()=>{
        if(this.state.stars<=0){
            return;
        }
        this.setState((prevState)=>{
        return{
            stars:prevState.stars-0.5
        } 
        })
    }

    handleFav =()=>{
        this.setState({fav:!this.state.fav
            })
    }
    handlecart=()=>{
        this.setState({addToCart:!this.state.addToCart})
    }



    render(){
        // destructuring of state
        const {title,plot,price,rating,stars,fav,addToCart} =this.state;
        

        // state is the single source of truth
        return  (
            <div className="main">
                <div className="movie-card" >
                    <div className="left">
                        <img src={image1} alt="Description of Image" className="imgavenger" />

                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                
                                    <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" alt="decrease" onClick={this.decrStars}/>

                                    <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/> 
                                    <img className="str-btn" onClick={this.addStars.bind(this)} src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png" alt="plus"/>
                                    <span>{stars}</span>

                                
                            </div>
                            {/* {!fav?<button className="favorite-btn" onClick={this.handleFav}>Favorite</button>:<button className="unfavorite-btn"  onClick={this.handleFav}>Un-favorite</button>} */}

                            <button className={fav? "unfavorite-btn":"favorite-btn"} onClick={this.handleFav}>{fav? "Un-favorite":"Favorite"}</button>


                            <button className={addToCart?"cart-btn":"uncart"} onClick={this.handlecart}>{addToCart?"Add to card":"Remove cart"}</button>
                        </div>


                    </div>
                </div>

            </div>
        )
        
    }
}


export default MovieCard ;

