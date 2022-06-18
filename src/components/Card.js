import React from "react"

export default function Card(props) {


    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="text">
                <p className="card--title"> {props.title}</p>
                <p className="card--location">{props.location}</p>
                <p className="card--googleMapsUrl">{props.googleMapsUrl}</p>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>





        </div>
    )
}